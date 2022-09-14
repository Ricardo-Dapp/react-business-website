import "./App.css";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Body from "./components/Body";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
