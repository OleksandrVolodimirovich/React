import "./App.css";
import React from "react";

class Car extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      color: 'red',
      brend: 'toyota',
      model: 'rav4',
    };
  }

  handleClick(){
    this.setState ({model: 'BMW', color: 'black'})
  }

  render(){   
    console.log(this.state); 
    return (
      <div>
        <i>Виводимо через наслідування методу render класу Car :</i>
        {/* //*Зазвичай bind застосовується для фіксації цього методу об'єкта */}
        <h2 onClick = {this.handleClick.bind(this)}>
          Hello, I'm Car {this.props.car}, model: {this.state.model}, 
           color: {this.state.color}
          </h2>
      </div>
    )
  }
}

const App = () => {
  const name = "Ira";
  const value = `${name}`;
  const a = {
    a: 'aa',
    b: 'ba',
  };
  const b = {
    a: 'ab',
    c: 'cb',
  };
  const c = {
    b: 'ac',
    c: 'cc',
  };
  const d = {
    ...a, ...b, ...c
  };
  console.log(d);

  const element = (
    <div>
      <i>Виводимо через основну компонету App :</i>
      <h1>Hello my name is {value}</h1>
      <h3>Hello your name is</h3> 
    </div>
  );
  return(
    <>
      {element} 
      <Car car={'Mersedes'} value={name}/> 
      <Car car={'Mersedes'} value={name}/> 
      <Car car={'Mersedes'} value={name}/> 
      <Car car={'Mersedes'} value={name}/> 
    </>
  );
};

export default App;
