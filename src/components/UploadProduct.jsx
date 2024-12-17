import React, { useState } from 'react'
import AXIOS_SERVICE from '../utils/AxiosService.jsx'
import ApiRouter from '../utils/ApiRouter'
import TopBar from './TopBar.jsx'

function UploadProduct() {
    const [title,setTitle] = useState("")
    const [description,setDescription] = useState("")
    const [images,setImages] = useState("")
    const [price,setPrice] = useState("")
    const [brand,setBrand] = useState("")
    const [phone,setPhone] = useState("")
    const [stock,setStock] = useState("")

    const productUpload = async (e) => {
        e.preventDefault();
        try {
            let response = await AXIOS_SERVICE.post(
                ApiRouter.UPLOAD_PRODUCT.auth,
                { title, description, images, price, brand, phone, stock }
            );
            console.log(response);
            alert(response.data.message);
        } catch (error) {
            console.log(error);
        }
    };

  return <>
  <TopBar/>
 <div className='container custom'>
 <form>
  <div className="row mb-4">
    <div className="col">
      <div className="form-outline">
        <input type="text" id="form6Example1" className="form-control"  value={title} onChange={(e)=>setTitle(e.target.value)} />
        <label className="form-label" htmlFor="form6Example1">Title</label>
      </div>
    </div>
    <div className="col">
      <div className="form-outline">
        <input type="text" id="form6Example2" className="form-control" value={description} onChange={(e)=>setDescription(e.target.value)} />
        <label className="form-label" htmlFor="form6Example2">Decription</label>
      </div>
    </div>
  </div>

  {/* <!-- Text input --> */}
  <div className="form-outline mb-4">
    <input type="text" id="form6Example3" className="form-control" value={images} onChange={(e)=>setImages(e.target.value)} />
    <label className="form-label" htmlFor="form6Example3">Images</label>
  </div>

  {/* <!-- Text input --> */}
  <div className="form-outline mb-4">
    <input type="price" id="form6Example4" className="form-control" value={price} onChange={(e)=>setPrice(e.target.value)}/>
    <label className="form-label" htmlFor="form6Example4">Price</label>
  </div>

  {/* <!-- Email input --> */}
  <div className="form-outline mb-4">
    <input type="text" id="form6Example5" className="form-control" value={brand} onChange={(e)=>setBrand(e.target.value)}/>
    <label className="form-label" htmlFor="form6Example5">Brand</label>
  </div>

  {/* <!-- Number input --> */}
  <div className="form-outline mb-4">
    <input type="text" id="form6Example6" className="form-control" value={phone} onChange={(e)=>setPhone(e.target.value)} />
    <label className="form-label" htmlFor="form6Example6">Phone</label>
  </div>

  {/* <!-- Message input --> */}
  <div className="form-outline mb-4">
    <input type='number' className="form-control" id="form6Example7" rows="4"value={stock} onChange={(e)=>setStock(e.target.value)}></input>
    <label className="form-label" htmlFor="form6Example7">Stock</label>
  </div>

 

  {/* <!-- Submit button --> */}
  <button type="submit" className="btn btn-primary btn-block mb-4" onClick={productUpload}>Upload Product</button>
</form>
 </div>
  </>
}

export default UploadProduct
