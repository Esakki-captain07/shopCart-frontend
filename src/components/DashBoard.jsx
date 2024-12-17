import React, { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { fetchGetAllProducts } from '../redux/RequestApi'
import TopBar from './TopBar'

function DashBoard() {
  const dispatch = useDispatch();
  const { product, status, error } = useSelector((state) => state.product);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchGetAllProducts());
    }
  }, [status, dispatch]);

  console.log('Product state:', product); 

  if (status === 'loading') {
    return <p>Loading products...</p>;
  }

  if (status === 'failed') {
    return <p>Error: {error}</p>;
  }

  return <>   
  <TopBar/>
    <div className="container">
    <div className='card-wrapper'>
      {product.length > 0 ? (
        product.map((e) => (
          <div className="card card-style" key={e._id}>
            <div className="bg-image hover-overlay" data-mdb-ripple-init data-mdb-ripple-color="light">
              <img src={e.images} className="img-fluid" alt={e.title} />
              <a href="#!">
                <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
              </a>
            </div>
            <div className="card-body">
              <h5 className="card-title">{e.title}</h5>
              <p className="card-text">{e.description}</p>
              <p className="card-text">Price: ₹{e.price}</p>
              <a href="#!" className="btn btn-primary" data-mdb-ripple-init>
                Buy Now
              </a>
            </div>
          </div>
         
        ))
      ) : (
        <p>No products available</p>
      )}
       </div>
    </div>
  </>;
}

export default DashBoard;

