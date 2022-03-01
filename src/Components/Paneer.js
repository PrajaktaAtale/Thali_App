import React from 'react';
// import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';  
import Product from './Product';




function Paneer() {

  const paneerData=useSelector(state=>state.counter.Paneer)

  return(
    <div className='container'>
      <h1 className='text-center text-success'>Varieties of Paneer</h1>
    <div className='row my-3' > 

      {
        paneerData.map((ele,i)=>(

          <Product key={i} data={ele}/>

        ))
      }


    </div>

  </div>

  )




}

export default Paneer;