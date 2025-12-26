const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { 
  readUsers, writeUsers, 
  readProfile, writeProfile, 
  readPassengers, writePassengers, 
  readTrains, 
  readOrders, writeOrders 
} = require('./utils/schema');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

// Helper to simulate network delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// --- Auth Routes ---

// Store verification codes in memory (in production, use Redis)
const verificationCodes = new Map();

app.post('/api/auth/send-code', async (req, res) => {
  await delay(500);
  const { mobile } = req.body;
  
  if (!mobile) {
    return res.status(400).json({ code: 1, msg: 'Mobile number required' });
  }

  // Generate 6-digit code
  const code = Math.floor(100000 + Math.random() * 900000).toString();
  
  // Store code with expiration (5 minutes)
  verificationCodes.set(mobile, {
    code,
    expires: Date.now() + 5 * 60 * 1000
  });

  console.log(`Verification code for ${mobile}: ${code}`); // For debugging

  res.json({ 
    code: 0, 
    msg: 'Verification code sent',
    // In a real app, don't return the code. Here we return it for testing convenience if needed, 
    // or just rely on console.log
    debugCode: code 
  });
});

app.post('/api/auth/register', async (req, res) => {
  await delay(1000);
  const { userName, password, mobileNo, code, ...otherInfo } = req.body;

  // 1. Verify code
  const record = verificationCodes.get(mobileNo);
  if (!record || record.code !== code) {
    return res.status(400).json({ code: 1, msg: 'Verification code error' });
  }
  if (Date.now() > record.expires) {
    verificationCodes.delete(mobileNo);
    return res.status(400).json({ code: 1, msg: 'Verification code expired' });
  }

  try {
    const users = await readUsers();

    // 2. Check duplicates
    if (users.find(u => u.userName === userName)) {
      return res.status(409).json({ code: 1, msg: 'Username already exists' });
    }
    if (users.find(u => u.mobileNo === mobileNo)) {
      return res.status(409).json({ code: 1, msg: 'Mobile number already registered' });
    }

    // 3. Create user
    const newUser = {
      id: Date.now().toString(),
      userName,
      password, // In production, hash this!
      mobileNo,
      ...otherInfo,
      createdAt: new Date().toISOString()
    };

    users.push(newUser);
    await writeUsers(users);

    // Clear used code
    verificationCodes.delete(mobileNo);

    res.json({ code: 0, msg: 'Registration successful' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ code: 500, msg: 'Server Error' });
  }
});

app.post('/api/auth/login', async (req, res) => {
  await delay(500);
  const { username, password } = req.body;
  
  if (!username || !password) {
    return res.status(400).json({ code: 1, msg: 'Username and password required' });
  }

  try {
    const users = await readUsers();
    // Allow login with username, mobileNo, or email
    const user = users.find(u => 
      (u.userName === username || u.mobileNo === username || u.email === username) && 
      u.password === password
    );

    if (user) {
      res.json({
        code: 0,
        msg: 'Success',
        data: {
          token: 'mock-token-' + Date.now(),
          user: { username: user.userName, role: 'user', ...user }
        }
      });
    } else {
      // Fallback for demo: if not in users.json, allow "admin" or just fail
      // To keep existing behavior for "zhangsan" if he's not in users.json yet?
      // Let's stick to the new logic: strict check. 
      // BUT for continuity, if users.json is empty, maybe allow a default?
      // No, let's enforce registration for new flow.
      res.status(401).json({ code: 1, msg: 'Invalid username or password' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ code: 500, msg: 'Server Error' });
  }
});

app.post('/api/auth/logout', async (req, res) => {
  await delay(200);
  res.json({ code: 0, msg: 'Success' });
});

// --- Profile Routes ---

app.get('/api/user/profile', async (req, res) => {
  try {
    const { username } = req.query;
    
    // If username is provided, try to find in registered users
    if (username) {
      const users = await readUsers();
      const user = users.find(u => u.userName === username);
      
      if (user) {
        // Map user data to profile structure
        // Note: Masking logic should ideally be here or frontend. 
        // For simplicity, we'll do basic masking here.
        const maskId = (id) => id ? id.replace(/^(\d{6})\d+(\d{4})$/, '$1****$2') : '';
        const maskMobile = (m) => m ? m.replace(/^(\d{3})\d+(\d{4})$/, '$1****$2') : '';

        const profileData = {
          basic: {
            username: user.userName,
            country: 'cn', // default
            countryLabel: '中国', // default
            idType: user.cardType,
            idTypeLabel: user.cardType === '1' ? '中国居民身份证' : '其他证件',
            idNo: user.idNo,
            idMasked: maskId(user.idNo),
            verifyStatusLabel: '核验通过', // mock status
            name: user.name,
            sex: user.sex
          },
          contact: {
            mobile: user.mobileNo,
            mobileMasked: maskMobile(user.mobileNo),
            mobileVerifyTips: '已完成手机核验',
            email: user.email || '',
            emailVerifyTips: user.email ? '邮箱未验证' : '',
            address: ''
          },
          extra: {
            passengerType: user.passengerType
          },
          student: {
            visible: user.passengerType === 'STUDENT'
          }
        };
        return res.json({ code: 0, data: profileData });
      }
    }

    // Fallback to static profile.json if no username or user not found (for backward compatibility)
    const profile = await readProfile();
    res.json({ code: 0, data: profile });
  } catch (err) {
    console.error(err);
    res.status(500).json({ code: 500, msg: 'Server Error' });
  }
});

app.put('/api/user/profile', async (req, res) => {
  try {
    const updates = req.body;
    let profile = await readProfile();
    
    // Deep merge structure matching profileData.js
    const newProfile = {
      ...profile,
      basic: { ...profile.basic, ...(updates.basic || {}) },
      contact: { ...profile.contact, ...(updates.contact || {}) },
      extra: { ...profile.extra, ...(updates.extra || {}) }
    };

    await writeProfile(newProfile);
    res.json({ code: 0, msg: 'Updated successfully', data: newProfile });
  } catch (err) {
    console.error(err);
    res.status(500).json({ code: 500, msg: 'Server Error' });
  }
});

// --- Order Routes ---

app.get('/api/user/orders', async (req, res) => {
  try {
    const orders = await readOrders();
    res.json({ code: 0, data: orders });
  } catch (err) {
    console.error(err);
    res.status(500).json({ code: 500, msg: 'Server Error' });
  }
});

// --- Passenger Routes ---

app.get('/api/user/passengers', async (req, res) => {
  try {
    const passengers = await readPassengers();
    res.json({ code: 0, data: passengers });
  } catch (err) {
    console.error(err);
    res.status(500).json({ code: 500, msg: 'Server Error' });
  }
});

app.post('/api/user/passengers', async (req, res) => {
  try {
    const newPassenger = req.body;
    const passengers = await readPassengers();
    
    // Add generated fields
    newPassenger.allEncStr = 'enc-' + Date.now();
    newPassenger.total_times = "0";
    newPassenger.if_receive = newPassenger.if_receive || "N";
    newPassenger.is_active = "Y";
    newPassenger.delete_time = "";
    
    passengers.push(newPassenger);
    await writePassengers(passengers);
    
    res.json({ code: 0, msg: 'Added successfully', data: newPassenger });
  } catch (err) {
    console.error(err);
    res.status(500).json({ code: 500, msg: 'Server Error' });
  }
});

app.put('/api/user/passengers/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;
    const passengers = await readPassengers();
    
    const index = passengers.findIndex(p => p.allEncStr === id);
    if (index !== -1) {
      passengers[index] = { ...passengers[index], ...updates };
      await writePassengers(passengers);
      res.json({ code: 0, msg: 'Updated successfully', data: passengers[index] });
    } else {
      res.status(404).json({ code: 404, msg: 'Passenger not found' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ code: 500, msg: 'Server Error' });
  }
});

app.delete('/api/user/passengers/:id', async (req, res) => {
  try {
    const { id } = req.params;
    let passengers = await readPassengers();
    
    const newPassengers = passengers.filter(p => p.allEncStr !== id);
    if (newPassengers.length !== passengers.length) {
      await writePassengers(newPassengers);
      res.json({ code: 0, msg: 'Deleted successfully' });
    } else {
      res.status(404).json({ code: 404, msg: 'Passenger not found' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ code: 500, msg: 'Server Error' });
  }
});

app.get('/api/trains/query', async (req, res) => {
  const { from, to, date } = req.query;
  try {
    const allTrains = await readTrains();
    
    // Filter trains based on from/to
    // Note: In real world, we check station alias, date validity, etc.
    // Here we do simple exact match or partial match if needed.
    let filteredTrains = allTrains.filter(t => {
      // Basic from/to matching
      const fromMatch = !from || t.from.includes(from);
      const toMatch = !to || t.to.includes(to);
      
      // If train has a specific date (legacy support or specific schedule), match it.
      // Otherwise, assume daily train (match any date query).
      const dateMatch = !t.date || !date || t.date === date;
      
      return fromMatch && toMatch && dateMatch;
    });

    // Enhance train data with query date and calculated price
    filteredTrains = filteredTrains.map(t => {
      const trainCode = t.code || '';
      // Determine base price: G=553, D=300, else=150
      // If price already exists in DB, use it, otherwise calculate default
      const defaultPrice = trainCode.startsWith('G') ? 553 : (trainCode.startsWith('D') ? 300 : 150);
      
      return {
        ...t,
        date: t.date || date || new Date().toISOString().split('T')[0], // Use train date, query date or today
        price: t.price !== undefined ? t.price : defaultPrice
      };
    });

    // If no trains found in static DB, maybe return empty or mock some if it's "unknown" route?
    // Let's stick to returning what we found.
    
    // Sort by depart time
    filteredTrains.sort((a, b) => a.depart.localeCompare(b.depart));

    res.json({ code: 0, data: filteredTrains });
  } catch (err) {
    console.error(err);
    res.status(500).json({ code: 500, msg: 'Server Error' });
  }
});

app.post('/api/order/submit', async (req, res) => {
  try {
    const orderData = req.body; // { train, passengers, price }
    const orderId = 'E' + Date.now();
    
    // Read existing orders
    let orders = await readOrders();

    // Construct new order object
    // Assuming "nottrip" (Paid/Ready to travel) for now, or "unfinished" (Unpaid).
    
    // Determine base price logic matching frontend (G=553, D=300, else=150)
    const trainCode = orderData.train.code || '';
    const basePrice = trainCode.startsWith('G') ? 553 : (trainCode.startsWith('D') ? 300 : 150);

    const newOrder = {
      order_date: new Date().toISOString().split('T')[0],
      sequence_no: orderId,
      refund_serial: "",
      tickets: orderData.passengers.map((p, idx) => {
        const isChild = p.ticketType === '儿童';
        const price = isChild ? basePrice * 0.5 : basePrice;
        
        return {
          from: orderData.train.from,
          to: orderData.train.to,
          code: orderData.train.code,
          date: orderData.train.depart,
          passenger: p.passenger_name,
          idType: p.passenger_id_type_name || "中国居民身份证",
          seatType: p.seatType,
          coach: "0" + (Math.floor(Math.random() * 8) + 1),
          seat: (Math.floor(Math.random() * 15) + 1) + ['A','B','C','D','F'][Math.floor(Math.random()*5)],
          ticketType: p.ticketType + "票",
          price: price.toFixed(1),
          status: "待出行"
        };
      })
    };

    orders.nottrip.unshift(newOrder); // Add to top
    
    await writeOrders(orders);
    
    res.json({ 
      code: 0, 
      msg: 'Order submitted', 
      data: { 
        orderId,
        payMoney: orderData.price || 100 
      } 
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ code: 500, msg: 'Server Error' });
  }
});

app.post('/api/order/cancel', async (req, res) => {
  try {
    const { sequence_no } = req.body;
    let orders = await readOrders();

    // Find in nottrip
    const index = orders.nottrip.findIndex(o => o.sequence_no === sequence_no);
    if (index !== -1) {
      const order = orders.nottrip[index];
      // Move to history
      orders.nottrip.splice(index, 1);
      
      // Update status
      order.tickets.forEach(t => t.status = "已退票");
      order.refund_serial = "W" + Date.now(); // Generate mock refund serial
      
      orders.history.unshift(order);
      
      await writeOrders(orders);
      res.json({ code: 0, msg: 'Order cancelled successfully' });
    } else {
      res.status(404).json({ code: 404, msg: 'Order not found' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ code: 500, msg: 'Server Error' });
  }
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Backend server running on http://localhost:${PORT}`);
  });
}

module.exports = app;
