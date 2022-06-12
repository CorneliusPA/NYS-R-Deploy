import Navbar from "./Navbar";
import "./index.css";
import { useState, useEffect } from "react";
import Axios from "axios";
import CreateProduct from "./CreateProduct";
import ProductFeedCard from "./ProductFeedCard";

function App() {
const [name, setName] = useState("");
  const [listOfProducts, setListOfProducts] = useState([]);
  const [desc, setDesc] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState(0);
  const [qty, setQty] = useState(0);
  const [dept, setDept] = useState(0);

  
  
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
 <div className="App" >


<h1 style={{fontFamily:"Georgia", textAlign:"center"}}>New York Sity
     <img style={{marginLeft:"10px"}} src={"NYSLogo.png"} alt="New York Sity" width="30px" height="30px"/>
     </h1>


    
 <Navbar 
 getProducts={getProducts}
 getChairs={getChairs}
 getCouches={getCouches}
 getSofas={getSofas}
 getOtherChairs={getOtherChairs}
 />

      <CreateProduct
      setName={setName}
      setDesc={setDesc}
      setImage={setImage}
      setPrice={setPrice}
      setQty={setQty}
      setDept={setDept}
      createProduct={createProduct}
      />

      <div className="productsDisplay">
        
        {listOfProducts.map(( product) => {
          return (
          
              <ProductFeedCard product={product} key={product.name}/>

            
          );
        })}
      </div>

      
    </div>
  );
}

export default App;



