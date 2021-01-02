import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import IntroCard from './components/IntroCard/IntroCard';
import Categories from './components/Categories/Categories';
import AboutMe from './components/AboutMe/AboutMe';

function App() {
  return (
    <div >
      <NavBar />
      <IntroCard />
      <Categories />
      <AboutMe />
    </div>
  );
}

export default App;
