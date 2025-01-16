import { useContext, useState } from "react";
import { ProductContext } from "./ProductProvider";
import "./Sassfile.scss";

function Loginapi() {
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState({ id: "", name: "", image: "" });
  const [images, setImages] = useState([]);
  const { addProduct } = useContext(ProductContext);

  const handleAdd = () => {
    const newProduct = {
      id,
      title,
      price: Number(price), // Ensure price is a number
      description,
      images,
      category: {
        id: Number(category.id), // Ensure category ID is a number
        name: category.name,
        image: category.image,
      },
    };

    addProduct(newProduct); // Call the addProduct function from context
    resetForm(); // Reset the form fields after adding
  };

  const handleFileUpload = (e, type) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      if (type === "category") {
        setCategory((prev) => ({ ...prev, image: reader.result }));
      } else {
        setImages((prev) => [...prev, reader.result]);
      }
    };
    if (file) {
      reader.readAsDataURL(file); // Convert the file to Base64
    }
  };

  const resetForm = () => {
    setId("");
    setTitle("");
    setPrice("");
    setDescription("");
    setCategory({ id: "", name: "", image: "" });
    setImages([]);
  };

  return (
    <div
      style={{
        width: "800px",
        height: "650px",

        fontFamily: "Arial, sans-serif",
      }}
    >
      <h2 style={{ textAlign: "center", marginTop: "20px", color: "#333" }}>
        Add New Product
      </h2>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          padding: "20px",
          borderRadius: "8px",
        }}
      >
        <input
          className="input-text"
          type="number"
          style={{
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
          value={id}
          onChange={(e) => setId(e.target.value)}
          placeholder="Edit ID"
        />

        <input
          className="input-text"
          type="text"
          style={{
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter Title"
        />

        <input
          className="input-text"
          type="number"
          style={{
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Price"
        />

        <input
          className="input-text"
          type="text"
          style={{
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter Description"
        />

        <input
          className="input-text"
          type="number"
          style={{
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
          value={category.id}
          onChange={(e) =>
            setCategory((prev) => ({ ...prev, id: e.target.value }))
          }
          placeholder="Category ID"
        />

        <input
          className="input-text"
          type="text"
          style={{
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
          value={category.name}
          onChange={(e) =>
            setCategory((prev) => ({ ...prev, name: e.target.value }))
          }
          placeholder="Category Name"
        />

        <input
          className="input-text"
          type="file"
          accept="image/*"
          style={{
            padding: "5px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
          onChange={(e) => handleFileUpload(e, "category")}
          placeholder="Category Image"
        />

        {[...Array(3)].map((_, i) => (
          <input
            key={i}
            className="input-text"
            type="file"
            accept="image/*"
            style={{
              padding: "5px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
            onChange={(e) => handleFileUpload(e, "image")}
            placeholder={`Image ${i + 1}`}
          />
        ))}

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "15px",
            marginTop: "20px",
          }}
        >
          <button
            className="vvv"
            style={{
              padding: "10px 20px",
              backgroundColor: "#007BFF",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
            onClick={handleAdd}
          >
            Login
          </button>
          <button
            className="vvv"
            style={{
              padding: "10px 20px",
              backgroundColor: "#6c757d",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
            onClick={resetForm}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default Loginapi;
