import tv from '../assets/image.jpg'
function CartScreen() {
    return (
        <div className='Cart text-white mx-10'>
            <h1 className='text-center text-5xl my-4'>Your Cart</h1>
            <div className="text-3xl my-2 mx-1 flex justify-between items-end">
                <h2>Shopping Cart</h2>
                <h4 className='text-base'>Price</h4>
            </div>
            <hr />
            <div className="flex flex-row justify-between items-start my-10 gap-2 py-2 px-2 ">
                <div className="flex my-10 gap-2 py-2 px-2 ">
                    <img src={tv} alt="A TV should come here" className='h-32' />
                    <div className="info text-white ">
                        <h4>Name</h4>
                        <h4>STARS</h4>
                        <h3>PRICE</h3>
                        <p>Save Exra with No Cost Emi</p>
                        <p>JETHA Verified</p>
                        <select name="quantity" id="quantity" className='bg-bgColor border-1 border-white'>
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
            <div className='flex flex-row-reverse'><button className='border-2 border-white py-2 px-4 rounded-2xl'>Buy</button></div>
        </div>
        )
}

export default CartScreen