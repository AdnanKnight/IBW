import React from 'react'
import ProductHeader from '../../components/ProductHeader/ProductHeader'

import './ProductCreate.css'

const ProductCreate = () => {
    return (
        <section>
            <ProductHeader />
            <form className="product-form">
                <h2>Product Creation Form</h2>

                <div className="form-section">
                    <h3>📦 Basic Information</h3>
                    <input type="text" name="productName" placeholder="Product Name" required />
                    <input type="text" name="description" placeholder="Description" required />
                    <input type="text" name="tags" placeholder="Tags (comma-separated)" />
                    <select name="category">
                        <option value="">Select Category</option>
                        <option value="quran">Quran</option>
                        <option value="prayer-mat">Prayer mat</option>
                        <option value="ittar">Ittar</option>
                        <option value="Box-combo">Box combo</option>
                        <option value="other-religious-items">Other religious items</option>
                        <option value="combos">Combos</option>
                    </select>
                </div>

                <div className="form-section">
                    <h3>💰 Pricing & Stock</h3>
                    <input type="number" name="price" placeholder="Price" required />
                    <input type="number" name="discountPrice" placeholder="Discount Price" />
                    <input type="number" name="stockQuantity" placeholder="Stock Quantity" required />
                    <select name="isAvailable">
                        <option value="">Availability</option>
                        <option value="true">Available</option>
                        <option value="false">Out of Stock</option>
                    </select>
                </div>

                <div className="form-section">
                    <h3>🖼️ Media & Assets</h3> 
                    <input type="file" files name="imageUrl" required />
                    <input type="text" name="image-caption" placeholder="If image fails to load this is be displayed (Image-Caption)" />
                </div>

                <div className="form-section">
                    <h3>📚 Book-Specific Fields</h3>
                    <input type="text" name="author" placeholder="Author" />
                    <input type="text" name="publisher" placeholder="Publisher" />
                    <input type="text" name="language" placeholder="Language" />
                    <input type="text" name="isbn" placeholder="ISBN" />
                    <input type="number" name="pages" placeholder="Page Count" />
                </div>

                <div className="form-section">
                    <h3>🧘 Prayer Mat / Religious Item Fields</h3>
                    <input type="text" name="material" placeholder="Material (e.g. Velvet)" />
                    <input type="text" name="dimensions" placeholder="Dimensions (e.g. 120cm x 70cm)" />
                    <input type="text" name="origin" placeholder="Origin (e.g. Türkiye)" />
                    <input type="text" name="usageType" placeholder="Usage Type (e.g. Travel, Gift)" />
                </div>

                <div className="form-section">
                    <h3>🛠️ Admin & Meta</h3>
                    <input type="text" name="createdBy" placeholder="Created By" required />
                    <input type="text" name="productSlug" placeholder="Product Slug (URL-friendly)" required />
                </div>

                <button type="submit">Submit Product</button>
            </form>

        </section>
    )
}

export default ProductCreate