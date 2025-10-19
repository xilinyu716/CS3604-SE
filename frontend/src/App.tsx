import { BrowserRouter as Router, Routes, Route, Link as RouterLink } from 'react-router-dom';
import { Box, Flex, Heading, Link } from '@chakra-ui/react';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import QueryForm from './components/QueryForm';
import PersonalCenter from './components/PersonalCenter';

function App() {
  return (
    <Router>
      <Box p={4}>
        <Flex justify="space-between" align="center" mb={4}>
          <Heading as="h1" size="lg">
            <Link as={RouterLink} to="/">12306</Link>
          </Heading>
          <nav>
            <Link as={RouterLink} to="/login" ml={4}>Login</Link>
            <Link as={RouterLink} to="/register" ml={4}>Register</Link>
            <Link as={RouterLink} to="/personal-center" ml={4}>Personal Center</Link>
          </nav>
        </Flex>

        <Routes>
          <Route path="/" element={<QueryForm />} />
          <Route path="/login" element={<LoginForm onLoginSuccess={() => {}} />} />
          <Route path="/register" element={<RegisterForm onRegisterSuccess={() => {}} />} />
          <Route path="/personal-center" element={<PersonalCenter />} />
        </Routes>
      </Box>
    </Router>
  );
}

export default App;