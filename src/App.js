import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Main from "./pages/main/Main";
import Footer from "./components/footer/footer.jsx"

import "./App.css";
function App() {
  return (
    <>
      <div className="app-container">
        <Navbar />
        <div className="section-2">
          <Header />
          <Main />
        <Footer />
        </div>
        
      </div>
    </>
  );
}

export default App;
