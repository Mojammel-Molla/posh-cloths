import './App.css';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <h1 className="text-center text-3xl">This is home page</h1>
      <Footer />
    </>
  );
}

export default App;
