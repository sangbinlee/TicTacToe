// import age from './data'
import { age, name } from './data'


export default function CartItem(){
    return (
        <div>

                <div className="cart-item">
                    <p>상품명 {age} {name}</p>
                    <p>$40</p>
                    <p>1개</p>
                </div>
        </div>
    )
}