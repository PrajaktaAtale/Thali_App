import React from 'react';
import { useSelector } from 'react-redux';  
import Product from './Product';




function Sweet() {

  const sweetData=useSelector(state=>state.counter.Sweet)

  return(
    <div className='container'>
      <h1 className='text-center text-success'>Varieties of Sweet</h1>
    <div className='row my-3' > 

      {
        sweetData.map((ele,i)=>(

          <Product key={i} data={ele}/>

        ))
      }


    </div>

  </div>

  )




}

export default Sweet;