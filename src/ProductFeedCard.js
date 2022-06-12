const ProductFeedCard = (props) => {
    return ( 
    <>
   
   <div >
               
               <div className="feedContainer" >
           
                <div className="feedTable">
             <img className="productImage" src= {props.product.image} alt="Product" ></img> 
             <div className="productText">
             <h3>Name: {props.product.name}</h3>
              <h5>Desc: {props.product.desc}</h5> 
              <h5>Price: ${props.product.price}</h5>
              <h5>Qty: {props.product.qty}</h5>
              <h5>Dept: {props.product.dept}</h5>
             
              </div>
              </div>
           
              </div>

</div>


    </> );
}
 
export default ProductFeedCard;