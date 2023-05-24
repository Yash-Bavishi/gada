import React from 'react'
import tv from '../assets/image.jpg'
import { useState } from 'react'
function CartItem({dr}) {
    console.log(dr)
    const [quant, setQuant] = useState(dr.quant)
  return (
        <div className="flex flex-row justify-between items-start my-10 gap-2 py-2 px-2 ">
            <div className="flex my-10 gap-2 py-2 px-2 ">
                <img src={tv} alt="A TV should come here" className='h-32' />
                <div className="info text-white ">
                    <h4>{dr.name}</h4>
                    <h4>STARS</h4>
                    <h3>{dr.amount}</h3>
                    <h3>Quantity {dr.quantity}</h3>
                    <p>Save Exra with No Cost Emi</p>
                    <p>JETHA Verified</p>
                    <select name="quantity" id="quantity" className='bg-bgColor border-1 border-white'>
                        {dr ? <option defaultValue={quant} value={quant}>{quant}</option>: null}
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10+">+10</option>
                    </select> Quantity
                </div>
            </div>
            <p>$100</p>
        </div>
  )
}

export default CartItem