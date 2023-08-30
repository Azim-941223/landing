import "./App.scss";
import Direction from "./components/Direction/Direction";
import Employees from "./components/Employees/Employees";
import Experience from "./components/Experience/Experience";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";

function App() {
  return (
    <div className="App">
      <Header />
      <Direction />
      <Products />
      <Experience />
      <Employees />
      <Footer />
    </div>
  );
}

export default App;
