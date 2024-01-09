import React from 'react'
import { useDispatch } from 'react-redux';
import { addItem } from '../Utils/cartSlice';


const ItemCard = ({itemData}) => {
    
    const {id, title, price, description, image, rating, category}= itemData;

    const dispatch= useDispatch();

    const handleAddItem= (itemData)=>{
      dispatch(addItem(itemData));
    }
    
  return (
    <div className='m-4 bg-green-100 w-72 hover:bg-green-200 text-center px-4 rounded-xl'>
        <img className='h-40 w-[180px] rounded-lg mx-auto mt-3' alt='res-logo'
        src= {image}></img>
        <h3 className='font-bold py-3 text-lg'>{title}</h3>
        <h4>{category}</h4>
         <h4 className='font-semibold'>{description}</h4>
        <h4 className='mt-2'>Price- {price}</h4>
        <h4>Rating- {rating.rate}</h4>
        <button className='bg-red-700 text-white m-2 p-2 rounded-lg'
         onClick={()=>handleAddItem(itemData)}>Add to Cart</button>
        

    </div>
  )
}

export default ItemCard