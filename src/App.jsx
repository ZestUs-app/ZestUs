import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomeFeed from './components/HomeFeed';
import ZestProfile from './components/ZestProfile/ZestProfile';
// Import other components as needed

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/zestprofile">ZestProfile</Link>
        {/* Add more links as needed */}
      </nav>
      <Routes>
        <Route path="/" element={<HomeFeed />} />
        <Route path="/zestprofile" element={<ZestProfile />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
