import React from 'react';
import './index.css';


function Navbar(props) {


    return (
        <table className='table'>
    <tbody>
            <tr>
        <th onClick={props.getProducts}>Home</th>
        <th onClick={props.getChairs}>Chairs</th>
        <th onClick={props.getCouches}>Couches</th>
        <th onClick={props.getSofas}>Sofas</th>
        <th onClick={props.getOtherChairs}>More Chairs</th>
        <th>Contacts</th>
        </tr>
   </tbody>
   </table>
    )
}

export default Navbar
