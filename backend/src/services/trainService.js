const Database = require('../config/database');

/**
 * Train service for train search and information management
 */
class TrainService {
  constructor() {
    this.db = Database; // Use the singleton instance
  }

  /**
   * Ensure database connection is established
   * @returns {Promise<void>}
   */
  async ensureConnection() {
    if (!this.db.db) {
      await this.db.connect();
    }
  }

  /**
   * Search trains by criteria
   * @param {Object} searchParams - Search parameters
   * @returns {Promise<Object>} Search results with trains and pagination
   */
  async searchTrains(searchParams) {
    await this.ensureConnection();
    const { from, to, date, page = 1, pageSize = 10, trainType, sortBy = 'departureTime' } = searchParams;
    
    // Validate date is not too far in the past (allow current year and future)
    const searchDate = new Date(date);
    const currentYear = new Date().getFullYear();
    const searchYear = searchDate.getFullYear();
    
    if (searchYear < currentYear) {
      throw new Error('不能查询过去的日期');
    }

    // Build query conditions
    let whereConditions = ['is_active = 1'];
    let queryParams = [];

    if (from) {
      whereConditions.push('from_station = ?');
      queryParams.push(from);
    }

    if (to) {
      whereConditions.push('to_station = ?');
      queryParams.push(to);
    }

    if (date) {
      whereConditions.push('travel_date = ?');
      queryParams.push(date);
    }

    if (trainType) {
      whereConditions.push('train_number LIKE ?');
      queryParams.push(`${trainType}%`);
    }

    const whereClause = whereConditions.length > 0 ? `WHERE ${whereConditions.join(' AND ')}` : '';
    
    // Order by clause
    let orderBy = 'ORDER BY departure_time ASC';
    if (sortBy === 'departureTime') {
      orderBy = 'ORDER BY departure_time ASC';
    }

    // Get total count
    const countQuery = `SELECT COUNT(*) as total FROM trains ${whereClause}`;
    const countResult = await this.db.get(countQuery, queryParams);
    const total = countResult.total;

    // Get paginated results
    const offset = (page - 1) * pageSize;
    const query = `
      SELECT * FROM trains 
      ${whereClause} 
      ${orderBy} 
      LIMIT ? OFFSET ?
    `;
    
    const trains = await this.db.all(query, [...queryParams, pageSize, offset]);

    // Transform data to match expected format
    const transformedTrains = trains.map(train => {
      const seatInfo = JSON.parse(train.seat_info);
      const seats = Object.entries(seatInfo).map(([type, info]) => ({
        type: this.translateSeatType(type),
        price: info.price,
        available: info.available,
        total: info.total
      }));

      return {
        trainId: train.train_number,
        trainNumber: train.train_number,
        from: train.from_station,
        to: train.to_station,
        departureTime: train.departure_time,
        arrivalTime: train.arrival_time,
        duration: train.duration,
        seats
      };
    });

    return {
      trains: transformedTrains,
      pagination: {
        current: parseInt(page),
        pageSize: parseInt(pageSize),
        total,
        totalPages: Math.ceil(total / pageSize)
      }
    };
  }

  /**
   * Get detailed train information
   * @param {string} trainId - Train ID
   * @returns {Promise<Object>} Train details object
   */
  async getTrainDetails(trainId) {
    await this.ensureConnection();
    const query = 'SELECT * FROM trains WHERE (id = ? OR train_number = ?) AND is_active = 1';
    const train = await this.db.get(query, [trainId, trainId]);

    if (!train) {
      throw new Error('列车不存在');
    }

    const seatInfo = JSON.parse(train.seat_info);
    const seats = Object.entries(seatInfo).map(([type, info]) => ({
      type: this.translateSeatType(type),
      price: info.price,
      available: info.available,
      total: info.total
    }));

    // Generate station information based on train type
    const stations = this.generateStationInfo(train);

    return {
        trainId: trainId === train.train_number ? train.train_number : train.id,
        trainNumber: train.train_number,
        route: {
          from: train.from_station,
          to: train.to_station,
          stations
        },
        schedule: {
          departureTime: train.departure_time,
          arrivalTime: train.arrival_time,
          duration: train.duration
        },
        seats,
        services: this.getTrainServices(train.train_type)
      };
  }

  /**
   * Translate seat type to Chinese
   * @param {string} seatType - English seat type
   * @returns {string} Chinese seat type
   */
  translateSeatType(seatType) {
    const translations = {
      'business': '商务座',
      'first': '一等座',
      'second': '二等座',
      'hard_seat': '硬座',
      'soft_sleeper': '软卧',
      'hard_sleeper': '硬卧'
    };
    return translations[seatType] || seatType;
  }

  /**
   * Generate station information for a train
   * @param {Object} train - Train data
   * @returns {Array} Array of station objects
   */
  generateStationInfo(train) {
    // This is a simplified implementation
    // In a real system, this would come from a separate stations/routes table
    const stations = [];
    
    if (train.train_number === 'G1') {
      stations.push(
        { name: '北京南', arrivalTime: null, departureTime: '08:00', stopDuration: null },
        { name: '济南西', arrivalTime: '10:15', departureTime: '10:17', stopDuration: '2分钟' },
        { name: '南京南', arrivalTime: '11:45', departureTime: '11:47', stopDuration: '2分钟' },
        { name: '上海虹桥', arrivalTime: '12:28', departureTime: null, stopDuration: null }
      );
    } else if (train.train_number === 'D1') {
      stations.push(
        { name: '北京', arrivalTime: null, departureTime: '06:30', stopDuration: null },
        { name: '天津', arrivalTime: '07:45', departureTime: null, stopDuration: null }
      );
    } else if (train.train_number === 'K1') {
      stations.push(
        { name: '北京', arrivalTime: null, departureTime: '20:00', stopDuration: null },
        { name: '石家庄', arrivalTime: '23:30', departureTime: '23:35', stopDuration: '5分钟' },
        { name: '郑州', arrivalTime: '03:15', departureTime: '03:20', stopDuration: '5分钟' },
        { name: '武汉', arrivalTime: '08:45', departureTime: '08:50', stopDuration: '5分钟' },
        { name: '长沙', arrivalTime: '12:30', departureTime: '12:35', stopDuration: '5分钟' },
        { name: '广州', arrivalTime: '18:30', departureTime: null, stopDuration: null }
      );
    } else {
      // Default stations for other trains
      stations.push(
        { name: train.from_station, arrivalTime: null, departureTime: train.departure_time, stopDuration: null },
        { name: train.to_station, arrivalTime: train.arrival_time, departureTime: null, stopDuration: null }
      );
    }

    return stations;
  }

  /**
   * Get train services based on train type
   * @param {string} trainType - Train type
   * @returns {Array} Array of service strings
   */
  getTrainServices(trainType) {
    const services = {
      'high_speed': ['餐车', 'WiFi', '充电插座', '空调'],
      'bullet': ['WiFi', '充电插座', '空调'],
      'normal': ['餐车', '空调']
    };
    
    return services[trainType] || ['空调'];
  }
}

module.exports = new TrainService();