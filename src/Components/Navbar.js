import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'; 

const Navbar = () => {
    const thali=useSelector(state=>state.counter.thali)

    return (
        <div>
            <nav className="navbar navbar-expand-lg fixed navbar-dark bg-dark">
            <img src="https://webstockreview.net/images/dinner-clipart-dinner-buffet-16.png"
          alt="" className='logo'/>
                <div className="container-fluid">
                    <p style={{fontFamily:'cursive',fontSize:'25px'}} 
                    className="navbar-brand" >Khana<span style={{color:'rgb(26, 201, 157)',
                fontSize:'25px',
                fontFamily:'cursive'}}>Express</span></p>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    < ul className = "navbar-nav me-auto mb-2 mb-lg-0" >
                            <li className="nav-item">
                                <Link style={{fontFamily:'cursive',fontSize:'25px',}}
                                 className="nav-link" aria-current="page" to="/">Home</Link>
                            </li>
                            {/* <li style={{fontFamily:'cursive',fontSize:'25px',margin:'5px'}} 
                            className="nav-item">
                            <Link className="nav-link" to="/Menu">Menu</Link>
                            </li> */}
                            <li style={{fontFamily:'cursive',fontSize:'25px',margin:'5px'}} className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="/Menu" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Menu
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><Link className="dropdown-item" to="/Chapati">Chapati</Link></li>
                  <li><Link className="dropdown-item" to="/Pickle">Pickle</Link></li>
                  <li><Link className="dropdown-item" to="/Curd">Curd</Link></li>
                  <li><Link className="dropdown-item" to="/Sweet">Sweet</Link></li>
                  <li><Link className="dropdown-item" to="/Dal">Dal</Link></li>
                  <li><Link className="dropdown-item" to="/Paneer">Paneer</Link></li>
                  <li><Link className="dropdown-item" to="/Rice">Rice</Link></li>
                </ul>
              </li>
                            
              <li className="nav-item"><Link className="nav-link" to="/Cart">
                            <img src="https://i.pinimg.com/originals/4b/cf/e5/4bcfe5b30334fb2ed35a5d422bf9cbfe.png"
                             
                                 className='navbar-nav' style={{width:"50px",height:"50px",marginLeft:"750px"}} />
 
 
                                </Link></li> <h3 style={{color:'white'}}>{thali.length}</h3>
                            
            </ul >
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
    