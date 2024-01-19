import React from 'react';
import useProductStore from "../../Store/ProductStore";

const ProductList = () => {
    const {ListProduct} = useProductStore();
    return (
        <>
            <div className="container mt-2">
 <div className="row">
 <div className="col-md-3 p-2">
 <div className="card vh-100 p-3 shadow-sm">
 <label className="form-label mt-3">Brands</label>
 <select className="form-control form-select">
 <option value="">Choose Brand</option>
 </select>
 <label className="form-label mt-3">Categories</label>
 <select className="form-control form-select">
 <option value="">Choose Category</option>
 </select>
 <label className="form-label mt-3">Maximum Price ${}</label>
 <input min={0} max={1000000} step={1000} type="range" className="form-range" />
 <label className="form-label mt-3">Minimum Price ${}</label>
 <input min={0} max={1000000} step={1000} type="range" className="form-range" />
 </div>
 </div>
 <div className="col-md-9 p-2">
 <div className="container">
 <div className="row"> {/* Product List Here*/} </div>
 </div>
 </div>
 </div>
 </div>
        </>
    );
};

export default ProductList;