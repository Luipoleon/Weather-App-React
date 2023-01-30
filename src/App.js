
import './App.css';
import "./index.css";
import Search from "./Search";
import Main from "./Main";
import Footer from "./Footer";

export default function App() {
  return (
    <div className='App'>
      <div className='bg'/>
        <Search />
        <Main />
        <Footer />
    </div>
  );
}

