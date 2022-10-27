import React, { useState } from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

import { useStore } from '~/hooks/useStore';

const AddToCart = () => {
  const [productAmount, setProductAmount] = useState(0);
  const { state } = useStore();

  return (
    <div className="flex space-x-6 py-5">
      <div className="flex">
        <input
          type="number"
          name="product-quantity"
          value={productAmount}
          id="product-quantity"
          className="focus-visible:outline-none w-10 p-1 text-center border border-r-0 appearance-none"
          onChange={(e) => setProductAmount(Number(e.target.value))}
        />
        <div className="flex flex-col">
          <button
            className="bg-gray-200 hover:bg-gray-300 border border-b-0 hover:border-gray-300  p-1"
            onClick={() => setProductAmount(productAmount + 1)}
          >
            <IoIosArrowUp />
          </button>
          <button
            onClick={() => setProductAmount(productAmount - 1)}
            className="bg-gray-200 hover:bg-gray-300 border hover:border-gray-300 p-1"
          >
            <IoIosArrowDown />
          </button>
        </div>
      </div>
      <button
        disabled={state.isVariantActive ? false : true}
        className={`font-bold py-3 px-5
         ${
           state.isVariantActive
             ? 'bg-secondary hover:bg-primary text-white hover:text-secondary duration-200'
             : 'bg-gray-600 text-gray-300'
         }`}
      >
        {state.isVariantActive ? 'ADD TO CART' : 'UNAVAILABLE'}
      </button>
      <button className="border p-3 text-gray-400 border-gray-200 hover:text-secondary hover:border-secondary duration-200">
        <AiOutlineHeart />
      </button>
    </div>
  );
};

export default AddToCart;
