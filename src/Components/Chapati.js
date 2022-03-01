import React from 'react';
// import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';  
import Product from './Product';




function Chapati() {

  const chapatiData=useSelector(state=>state.counter.Chapati)

  return(
    <div className='container'>
      <h1 className='text-center text-success'>Varieties of Chapati</h1>
    <div className='row my-3' > 

      {
        chapatiData.map((ele,i)=>(

          <Product key={i} data={ele}/>

        ))
      }


    </div>

  </div>

  )




}

export default Chapati;