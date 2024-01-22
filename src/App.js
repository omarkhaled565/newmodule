import logo from './logo.svg';
import './App.css';
import Header from "./Components/HeaderComponent/Header"
import Home from './Components/HomeComponent/Home';
import Footer from './Components/FooterComponent/Footer';
import PostDetails from './Components/PostComponent/PostDetails';
import Createposts from './Components/PostComponent/Createposts';
function App() {
  return (
    <div className="App">
        <Header/>
        <main>
          <Home/> 
          

        </main>
        <Footer/>
        
    </div>
  );
}

export default App;
