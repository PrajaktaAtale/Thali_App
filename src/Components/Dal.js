import React from 'react';
// import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';  
import Product from './Product';




function Dal() {

  const dalData=useSelector(state=>state.counter.Dal)

  return(
    <div className='container'>
      <h1 className='text-center text-success'>Varieties of Dal</h1>
    <div className='row my-3' > 

      {
        dalData.map((ele,i)=>(

          <Product key={i} data={ele}/>

        ))
      }


    </div>

  </div>

  )




}

export default Dal;