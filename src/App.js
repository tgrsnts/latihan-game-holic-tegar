import './App.css';
import Intro from './components/Intro';
import NavigationBar from './components/NavigationBar';
import TrendingGame from './components/TrendingGame';
import BestGame from './components/BestGame'
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <div className="myBG">
        <NavigationBar />
        <Intro />
      </div>
      <div className="trending">
        <TrendingGame />
      </div>
      <div className="best">
        <BestGame />
      </div>
      <div className="footer">
        <Footer/>
      </div>
    </div>
  )
}

export default App;
