import "./App.css";
import React from "react";

class Car extends React.Component{
  constructor(props){
    super(props);
    this.state = { // //? це initial state(початковий стан) - дані котрі будуть автоматично в компоненті або в 
      //  //? функції під час її ініціалізації.
      color: 'red',
      brend: 'toyota',
      model: 'rav4'
    };
  }
  render(){
    console.log(this.props.car);
    console.log(this.props); //* отримаємо об'єкт {car} котрий знаходиться в фрагменті
    
    const year = 12; //* можна створити змінну і вивести її в тому ж методі render
    return (
      <div>
        <i>Виводимо через наслідування методу render класу Car :</i>
        <h2>Hello, I'm Car old {year}, brend: {this.state.brend}, color: {this.state.color}</h2>  {/* //* застосування властивості з методу state */}
      </div>
    )
  }
}

const App = () => {
  const name = "Ira";
  const value = `${name}`;
  const element = (
    <div>
      <i>Виводимо через основну компонету App :</i>
      <h1>Hello my name is {value}</h1>
      <h3>Hello your name is</h3> 
    </div>
  );
  return( //* <></> - це фрагмент
    <>
      {element} 
      <Car car={'Mersedes'} value={name}/>  {/* //* об'єкт car котрий передається в render} */}
    </>
  )
};

export default App;
