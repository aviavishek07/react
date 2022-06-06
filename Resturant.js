import React, { useState } from 'react'
import './style.css'
import { Menu } from '../../menuApi'

const mystyle = {color:"red"}

export const Resturant = () => {
const [menuData, setMenuData] = useState(Menu);


  return (
    <>
    <div className='card-container'>
      <div className='card'>
        <div className='card-body'>
          <span className='card-number card-circle subtle'>1</span><br></br>
          <span className='card-number subtle' style={mystyle}>Brealfast</span>
          <h2 className='card-title'>maggie</h2>
          <span className='card-description subtle'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia aliquam dolores laudantium, in voluptatem cupiditate beatae, ad fugiat animi nostrum rem?</span>
          <div className='card-read'>read</div>
          <img src={Menu} alt='images' className='card-media'/>

          <span className='card-tag subtle'>Oredr now</span>
        </div>
      </div>
    </div>
    <div className='card-container'>
      <div className='card'>
        <div className='card-body'>
          <span className='card-number card-circle subtle'>1</span><br></br>
          <span className='card-number subtle' style={mystyle}>Brealfast</span>
          <h2 className='card-title'>maggie</h2>
          <span className='card-description subtle'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia aliquam dolores laudantium, in voluptatem cupiditate beatae, ad fugiat animi nostrum rem?</span>
          <div className='card-read'>read</div>
          <img src={Menu} alt='images' className='card-media'/>

          <span className='card-tag subtle'>Oredr now</span>
        </div>
      </div>
    </div>
    <div className='card-container'>
      <div className='card'>
        <div className='card-body'>
          <span className='card-number card-circle subtle'>1</span><br></br>
          <span className='card-number subtle' style={mystyle}>Brealfast</span>
          <h2 className='card-title'>maggie</h2>
          <span className='card-description subtle'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia aliquam dolores laudantium, in voluptatem cupiditate beatae, ad fugiat animi nostrum rem?</span>
          <div className='card-read'>read</div>
          <img src={Menu} alt='images' className='card-media'/>

          <span className='card-tag subtle'>Oredr now</span>
        </div>
      </div>
    </div>
    </>
  )
}

//export default Resturant