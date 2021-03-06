import React from 'react';
import Swal from 'sweetalert2';
import { useRef, useState } from 'react'
import { useForm } from 'react-hook-form'

  

const CheckOut = () => {
       const placeOrder =()=>{  
        Swal.fire({

            position: 'top-end',
     
            icon: 'success',
     
            title: 'Your Order Placed Successfully',
     
            showConfirmButton: false,
     
            timer: 1500
     
          })
        } 
  return (
    <div>
     <div className='py-3 bg-warning'>
         <div className='container'>
             <h6>Home/CheckOut</h6>
         </div>
     </div>

     <div className='py-4'>
         <div className='container'>
             <div className='row'>
                 
                 <div className='col-md-7'>
                     <div className='card'>
                         <div className='card-header'>
                             <h4>Basic Information</h4>
                         </div>
                         <div className='card-body'>

                             <div className='row'>
                                 <div className='col-md-6'>
                                     <div className='form-group mb-3'>
                                         <label>First Name</label>
                                         <input type="text" name="firstname" className="form-control"></input>
                                     </div>
                                 </div>
                             
                             
                                 <div className='col-md-6'>
                                     <div className='form-group mb-3'>
                                         <label>Last Name</label>
                                         <input type="text" name="lastname" className="form-control"></input>
                                     </div>
                                 </div>
                             
                             
                                 <div className='col-md-6'>
                                     <div className='form-group mb-3'>
                                         <label>Phone Number</label>
                                         <input type="text" name="phone" className="form-control"></input>
                                     </div>
                                 </div>
                             
                             
                                 <div className='col-md-6'>
                                     <div className='form-group mb-3'>
                                         <label>Email Address</label>
                                         <input type="text" name="email" className="form-control"></input>
                                     </div>
                                 </div>
                            
                             
                                 <div className='col-md-12'>
                                     <div className='form-group mb-3'>
                                         <label>Full Address</label>
                                         <textarea row="3" type="text"  className="form-control"></textarea>
                                     </div>
                                 </div>
                             
                             
                                 <div className='col-md-4'>
                                     <div className='form-group mb-3'>
                                         <label>City</label>
                                         <input type="text" name="city" className="form-control"></input>
                                     </div>
                                 </div>
                             
                             
                                 <div className='col-md-4'>
                                     <div className='form-group mb-3'>
                                         <label>State</label>
                                         <input type="text" name="state" className="form-control"></input>
                                     </div>
                                 </div>
                             
                             
                                 <div className='col-md-4'>
                                     <div className='form-group mb-3'>
                                         <label>Zip Code</label>
                                         <input type="text" name="zipcode" className="form-control"></input>
                                     </div>
                                 </div>
                             
                             
                                 <div className='col-md-12'>
                                     <div className='form-group text-end'>
                                         <button type="button" name="firstname" className="btn btn-primary" onClick={placeOrder}>Place Order</button>   
                                     </div>
                                 </div>
                             </div>

                         </div>
                     </div>
                 </div>
             </div>
         </div>
     </div>
    </div>
  );
}

export default CheckOut;
