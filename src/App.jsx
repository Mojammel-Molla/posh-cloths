import './App.css';
import Banner from './components/Banner';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <h1 className="text-center text-3xl">This is home page</h1>
    </>
  );
}

export default App;
