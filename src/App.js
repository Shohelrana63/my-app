import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const friends =['arbert','adason','ada','berfik'];
 const productName=[
   {name:'photoshop', price:'$90.00'},
   {name:'illustrator', price:'$44.44'},
   {name:'PDF Reader', price:'$44.44'}
 ]
  return (
    <div className="App">
      <header className="App-header">
        <Users></Users>
      <Counter></Counter>
     <ul>
       {
         friends.map(friend => <li>{friend}</li>)
       }
       {
         productName.map(pd => <li>{pd.name}</li>)
       }

     </ul>
     {
       productName.map(pd =><Product product={pd}></Product>)
     }
      
       <Person name="Abbott" job="Facebook"></Person>
       <Person name="Aida" job="Google"></Person>
       <Counter></Counter>
      </header>
    </div>
  );
}
function Counter(){
  const [count, setCount] = useState(10);
 
const handleIncrease = () =>  setCount(count + 1);

  return(
 <div>
   <h1>Count: {count}</h1>
   <button onClick={ () =>  setCount(count - 1)}>Decrease</button>
   <button onClick={handleIncrease}>Increase</button>
 </div>
  );
}
function Users(){
  const [users, setUsers] = useState([]);
  useEffect(() =>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => setUsers(data));
  },[])
  return(
   <div>
     <h3>Dynamic users:{users.length}</h3>
     <ul>
       {
         users.map(user => <li>Name:{user.name}</li>)
        
       }
       
     </ul>
   </div>
  );
}
function Product(props){
const productStyle={
  border:'2px solid salmon', width: '200px', padding: '5px', margin:'5px', float: 'left'
}
const{name, price} = props.product
  return(
    <div style={productStyle}> 
     <h3>{name}</h3>
     <h1>{price}</h1>
     <button>buy now</button>
    </div>
  );
}
function Person(props) {
 const personStyle ={
  border :'2px solid red', width : '300px', margin:'10px',  boxShadow :'5px 5px 10px grey'
 }
  return (
    <div style={personStyle}>
        <h3>name:{props.name}</h3>
        <p>profession:{props.job}</p>
    </div>
  );
}
export default App;
