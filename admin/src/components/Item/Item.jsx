import { useLocation, useNavigate } from 'react-router-dom';

import './Item.css'

const Item = ({ product, index, onDelete }) => {

    const location = useLocation();
    const navigate = useNavigate();

    const path = location.pathname;
    
    return (
        <div className="item" key={index}>
            <div>
                <img src={product.images[0]} alt="Same as the product name mentioned" />
            </div>
            <h3>{product.name}</h3>
            <span>
                <h4>Price</h4>
                <p>{product.price}</p>
            </span>
            <span>
                {(path.includes('/products') && !path.includes('/create') && !path.includes('/update') && !path.includes('/delete')) && (
                    <>
                        <button onClick={() => navigate(`/products/update/${product._id}`)}>Edit</button>
                        <button onClick={() => onDelete(product._id)}>Delete</button>
                    </>
                )}

                {path.includes('/products/update') && (
                    <button onClick={() => navigate(`/products/update/${product._id}`)}>Edit</button>
                )}

                {path.includes('/products/delete') && (
                    <button onClick={() => onDelete(product._id)}>Delete</button>
                )}
            </span>
        </div>
    )
}

export default Item