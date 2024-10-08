import React from 'react'
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./ProductForm.scss"
import Card from "../../card/Card"


const ProductForm = ({
    product,
    productImage,
    imagePreview,
    description,
    setDescription,
    handleInputChange,
    handleImageChange,
    saveProduct,
}) =>{
return (
<div className="add-product">

<Card cardClass={"card"}>
<form onSubmit={saveProduct}>
   
<Card cardClass={"group"}>
            <label>Event Poster</label>
            <code className="--color-dark">
              Supported Formats: jpg, jpeg, png
            </code>
            <input
              type="file"
              name="image"
              onChange={(e) => handleImageChange(e)}
            />

            {imagePreview != null ? (
              <div className="image-preview">
                <img src={imagePreview} alt="product" />
              </div>
            ) : (
              <p>No image set for this Event.</p>
            )}
          </Card>
          <label>Event Name:</label>
          <input
            type="text"
            placeholder="Event Name"
            name="name"
            value={product?.name}
            onChange={handleInputChange}
          />

          <label>Event  Category:</label>
          <input
            type="text"
            placeholder="Technical / Non-Technical"
            name="category"
            value={product?.category}
            onChange={handleInputChange}
          />

          <label>Entry Fees :</label>
          <input
            type="text"
            placeholder="Entry Fee"
            name="price"
            value={product?.price}
            onChange={handleInputChange}
          />

          <label>Event Seats:</label>
          <input
            type="text"
            placeholder="Total Entries"
            name="quantity"
            value={product?.quantity}
            onChange={handleInputChange}
          />

          <label>Event Description:</label>
          <ReactQuill
            theme="snow"
            value={description}
            onChange={setDescription}
            modules={ProductForm.modules}
            formats={ProductForm.formats}
          />
          <div className="--my">
            <button type="submit" className="--btn --btn-primary">
              Create Event
            </button>
          </div>
          </form>
</Card>

</div>
)

};

ProductForm.modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [{ align: [] }],
    [{ color: [] }, { background: [] }],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["clean"],
  ],
};
ProductForm.formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "color",
  "background",
  "list",
  "bullet",
  "indent",
  "link",
  "video",
  "image",
  "code-block",
  "align",
];

export default ProductForm;