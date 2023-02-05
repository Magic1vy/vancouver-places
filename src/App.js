import { useState } from 'react';
import React from 'react';
import { data } from './data';
import './App.css';
import Carousel from './Carousel';
import pin from './attachment/pin.png';


function App() {

  const [place, setPlace] = useState(data)

  const [showText, setShowText] =useState(false);

  const removePlace = (id) => {
    let newPlace = place.filter (place => place.id !==id);
    setPlace(newPlace)}

    const showTextClick = (item) =>{
      item.showText = !item.showText
      setShowText(!showText)
    }

  return (
    <div>

      <div className='container'>
        <h1>What to visit in Vancouver? Top {place.length} </h1>

      </div>
      {place.map((item =>{
        const {id, name, description, showText, address, picture} = item;

        return(

          <div key={id}>

            <div className='container'>
            <h2>{name}</h2>
          </div>
          
          <div className='container'>
          <Carousel picture={picture}/>
          </div>
          

            <div className='container par'>
            <p>{showText ? description : description.substring(0,60) + "..."}
            <button className='btn-more' onClick = { ()=> showTextClick (item)}> {showText ? "less" : "more" }</button></p>

          </div>

          <div className='container'>
            <p >
            <img src={pin} alt='pin' width="20px"/>
            <a className='map' href={address} target="_blank"  rel="noreferrer">Show on map</a></p>
          </div>

          <div className='container'>
            <button className='visited' onClick={ ()=> removePlace(id) }>Visited</button>
          </div>

          </div>
        )
      }))}
    <div className='container'>
            <button  className='visited' onClick={ ()=> setPlace([])}>VISITED ALL</button>
          </div>
    </div>
  );
}

export default App;
