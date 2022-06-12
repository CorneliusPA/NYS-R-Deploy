const CreateProduct = (props) => {
    return ( 
    <>

<div className="inputContainer2">
<div className="inputContainer">
      <div className="inputTable">

         <label>Name:</label>
        <input
          type="text"
          placeholder="Name..."
          onChange={(event) => {
            props.setName(event.target.value);
          }}/>

        <label>Desc:</label>
         <input
          type="text"
          placeholder="Desc..."
          onChange={(event) => {
            props.setDesc(event.target.value);
          }}/>

<label>Image:</label>
          <input
          type="text"
          placeholder="Image..."
          onChange={(event) => {
            props.setImage(event.target.value);
          }}/>

<label>Price:</label>
        <input
          type="number"
          placeholder="Price..."
          onChange={(event) => {
            props.setPrice(event.target.value);
          }}/>

<label>Qty:</label>
        <input
          type="number"
          placeholder="Quantity..."
          onChange={(event) => {
            props.setQty(event.target.value);
          }}/>

<label>Dept:</label>
        <input
          type="number"
          placeholder="Department..."
          onChange={(event) => {
            props.setDept(event.target.value);
          }}/>

          
</div>

<button onClick={props.createProduct}>Create Product</button>

      </div>
      </div>
    
    </> );
}
 
export default CreateProduct;