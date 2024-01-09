import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../Utils/cartSlice'; // Assuming addItem is imported from the correct location

const CartList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div>
      {items.map((item) => (
        <div key={item.id} className='p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between'>
          <div className='w-9/12'>
            <div className='py-2'>
              <span>{item.title}</span>
              <span>Price-{item.price}</span>
            </div>
            <p className='text-xs'>{item.description}</p> {/* Fix typo: description instead of descriptiom */}
          </div>
          <div className='absolute'>
            <button
              className='py-1 px-2 ml-96 rounded-lg bg-black text-white shadow-lg'
              onClick={() => handleAddItem(item)}
            >
              Add+
            </button>
          </div>
          <img className='rounded-md h-32 ml-8' src={item.image} />
        </div>
      ))}
    </div>
  );
};

export default CartList;
