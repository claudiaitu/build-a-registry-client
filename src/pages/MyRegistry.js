import { useState, useContext } from "react";
import { post } from "../services/authService";
import { LoadingContext } from "../context/loading.context";
import { useNavigate } from "react-router-dom";

function MyRegistry() {
  const [formData, setFormData] = useState({
    item: "",
    description: "",
    price: "",
    image: "",
  });
  const [file, setFile] = useState("");
  const { user, setUser } = useContext(LoadingContext);
  const { item, description, price, image } = formData;
  const navigate = useNavigate();

  function updateForm(value) {
    return setFormData((prev) => {
      return { ...prev, ...value };
    });
  }

  const onSubmit = async (e) => {
    try {
      e.preventDefault();
      const url = await handleUpload();

      const results = await post(`/registry/add-registry/${user._id}`, {
        ...formData,
        image: url,
      });

      console.log(results.data);
      setUser(results.data);
      navigate(`/profile/${user._id}`);
    } catch (err) {
      console.log(err);
    }
  };

  async function handleUpload(e) {
    try {
      const uploadData = new FormData();
      uploadData.append("picture", file);
      const response = await post("/upload/upload-image", uploadData);
      return response.data.url;
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="add-registry-bg">
      <section className="form form-box">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="image">Image:</label>
            <input
              type="file"
              name="image"
              id="image"
              accept=".jpg, .jpeg, .png, .pdf"
              className=""
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>
          <div className="form-group">
            <label htmlFor="item">Item:</label>
            <input
              type="text"
              name="item"
              id="item"
              value={item}
              onChange={(e) => updateForm({ item: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label htmlFor="price">Price:</label>
            <input
              type="number"
              name="price"
              id="price"
              value={price}
              onChange={(e) => updateForm({ price: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label htmlFor="text">Description:</label>
            <textarea
              type="textarea"
              name="description"
              id="text"
              value={description}
              onChange={(e) => updateForm({ description: e.target.value })}
            />
          </div>
          <div className="form-group">
            <button className="btn" type="submit">
              Add Item to registry
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default MyRegistry;
