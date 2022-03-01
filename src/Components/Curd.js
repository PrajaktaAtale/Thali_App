import React from 'react';
// import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';  
import Product from './Product';




function Curd() {

  const curdData=useSelector(state=>state.counter.Curd)

  return(
    <div className='container'>
      <h1 className='text-center text-success'>Varieties of Curd</h1>
    <div className='row my-3' > 

      {
        curdData.map((ele,i)=>(

          <Product key={i} data={ele}/>

        ))
      }


    </div>

  </div>

  )




}

export default Curd;