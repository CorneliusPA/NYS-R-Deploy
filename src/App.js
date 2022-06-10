import Navbar from "./Navbar";
import "./App.css";
import {BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Axios from "axios";

function App() {
const [name, setName] = useState("");
  const [listOfProducts, setListOfProducts] = useState([]);
  const [desc, setDesc] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState(0);
  const [qty, setQty] = useState(0);
  const [dept, setDept] = useState(0)
  
  
  useEffect(() => {
    Axios.get("https://nys-react.herokuapp.com/getProducts").then((response) => {
      setListOfProducts(response.data);
    });
  }, []);

  const getProducts = () => {
    Axios.get("https://nys-react.herokuapp.com/getProducts").then((response) => {
      setListOfProducts(response.data);
    });
  };

  const getChairs = () => {
    Axios.get("https://nys-react.herokuapp.com/getChairs").then((response) => {
      setListOfProducts(response.data);
    });
  };

  const getCouches = () => {
    Axios.get("https://nys-react.herokuapp.com/getCouches").then((response) => {
      setListOfProducts(response.data);
    });
  };

  const getSofas = () => {
    Axios.get("https://nys-react.herokuapp.com/getSofas").then((response) => {
      setListOfProducts(response.data);
    });
  };

  const getOtherChairs = () => {
    Axios.get("https://nys-react.herokuapp.com/getOtherChairs").then((response) => {
      setListOfProducts(response.data);
    });
  };



  const createProduct = () => {
    Axios.post("https://nys-react.herokuapp.com/createProduct", {
      name,
      desc,
      image,
      price,
      qty,
      dept
    }).then((response) => {
      setListOfProducts([
        ...listOfProducts,
        {
          name,
          desc,
          image,
          price,
          qty,
          dept

        }
      ]);
    });
  };

  

  return (
 <div className="App">

<h1 style={{fontFamily:"Georgia", textAlign:"center"}}>New York Sity
     <img style={{marginLeft:"10px"}} src="NYSLogo.png" alt="New York Sity" width="30px" height="30px"/>
     </h1>

  <table className='table'>
    <tbody>
            <tr>
        <th onClick={getProducts}>Home</th>
        <th onClick={getChairs}>Chairs</th>
        <th onClick={getCouches}>Couches</th>
        <th onClick={getSofas}>Sofas</th>
        <th onClick={getOtherChairs}>More Chairs</th>
        <th>Contacts</th>
        </tr>
   </tbody>

        </table>

   
    <div className="inputContainer2">
<div className="inputContainer">
      <div className="inputTable">

         <label>Name:</label>
        <input
          type="text"
          placeholder="Name..."
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <label>Desc:</label>
         <input
          type="text"
          placeholder="Desc..."
          onChange={(event) => {
            setDesc(event.target.value);
          }}
        />
<label>Image:</label>
          <input
          type="text"
          placeholder="Image..."
          onChange={(event) => {
            setImage(event.target.value);
          }}
        />



<label>Price:</label>
        <input
          type="number"
          placeholder="Price..."
          onChange={(event) => {
            setPrice(event.target.value);
          }}

        />
<label>Qty:</label>
        <input
          type="number"
          placeholder="Quantity..."
          onChange={(event) => {
            setQty(event.target.value);
          }}   

        />

        <label>Dept:</label>
        <input
          type="number"
          placeholder="Department..."
          onChange={(event) => {
            setDept(event.target.value);
          }}/>
</div>



        <button onClick={createProduct}> Create Product </button>

      </div></div>
<div className="productsDisplay2">
      <div className="productsDisplay">
        {listOfProducts.map((product) => {
          return (
            <div>
               
              <div className="feedContainer">
                <div className="feedTable">
             <img className="productImage" src= {product.image} alt="Product" ></img> 
             <div className="productText">
             <h3>Name: {product.name}</h3>
              <h5>Desc: {product.desc}</h5> 
              <h5>Price: ${product.price}</h5>
              <h5>Qty: {product.qty}</h5>
              <h5>Dept: {product.dept}</h5>
             
              </div>
              </div>
             </div>

            </div>
          );
        })}
      </div>
</div>



    </div>
  );
}

export default App;



