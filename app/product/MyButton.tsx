

import { useState } from "react";

type product ={
  title:string,
  isFruit:boolean,
  id:number,
}

export default function MyButton(product) {
    const [count, setCount] = useState(0);
  
    function handleClick() {
      setCount(count + 1);
    }
  
    return (
      <div>
        <button onClick={handleClick} key={product.id}
            style={{
                color: product.isFruit ? 'magenta' : 'darkgreen',
                listStyleType: 'none'
            }}
        >
          {/* {product.id} */}
          {product.title} Clicked {count} times
        </button>
      </div>
    );
  }