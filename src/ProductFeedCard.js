const ProductFeedCard = (props) => {
    return ( 
    <>
   
   <div >
               
               <div className="feedContainer" >
           
                <div className="feedTable">
             <img className="productImage" src= {props.product.image} alt="Product" ></img> 
             <div className="productText">
             <div className="feedCardName"><strong>{props.product.name}</strong></div>
              <div className="feedCardDesc">Desc: {props.product.desc}</div> 
              <div className="feedCardDesc">Price: ${props.product.price}</div>
              <div className="feedCardDesc">Qty: {props.product.qty}</div>
              <div className="feedCardDesc">Dept: {props.product.dept}</div>
             
              </div>
              </div>
           
              </div>

</div>


    </> );
}
 
export default ProductFeedCard;