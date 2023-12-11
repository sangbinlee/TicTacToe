


type product ={
  breadScrum:string,
  isFruit:boolean,
  id:number,
}

export default function Breadcrum(product) {
  
    return (
        <div className="black-nav"
            style={{
                color: product.isFruit ? 'magenta' : 'darkgreen'
            }}
        >
            <h4> {product.breadScrum}</h4>
        </div> 
    );
  }