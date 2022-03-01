import React from 'react';
// import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';  
import Product from './Product';




function Pickle() {

  const pickleData=useSelector(state=>state.counter.Pickle)

  return(
    <div className='container'>
      <h1 className='text-center text-success'>Varieties of Pickle</h1>
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

export default Pickle;