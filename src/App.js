import "./App.css";
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';


function App() {
const handleClick = () => {
  console.log('Click')
}

  return (
    <div className="App">
      <div className="wrapper">
        <Header/>
        <Content/>
        <Footer handleClick={handleClick}/>
      </div>
    </div>
  );
}

export default App;
