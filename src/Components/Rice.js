import React from 'react';
// import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';  
import Product from './Product';




function Rice() {

  const pickleData=useSelector(state=>state.counter.Rice)

  return(
    <div className='container'>
      <h1 className='text-center text-success'>Varieties of Rice</h1>
    <div className='row my-3' > 

      {
        pickleData.map((ele,i)=>(

          <Product key={i} data={ele}/>

        ))
      }


    </div>

  </div>

  )




}

export default Rice;