import './styles.css';
import Profile from './components/Profile';
import Interests from './components/Interests';
import Learn from './components/Learn';
import Expectations from './components/Expectations';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Profile />
        <Interests />
        <Learn />
        <Expectations />
      </div>
    </div>
  );
}

export default App;
