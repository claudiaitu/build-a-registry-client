import { useState, useContext } from 'react'
import { post } from '../services/authService'
import { LoadingContext } from '../context/loading.context'
import { useParams } from 'react-router-dom'



function EditRegistry() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    image: '',
  })
  const {user, setUser} = useContext(LoadingContext)
  const { title, description, price, image } = formData
  const {id} = useParams()

  function updateForm(value) {
    return setFormData((prev) => {
      return { ...prev, ...value };
    });
  }

  const onSubmit = (e) => {
    e.preventDefault()
    
    post(`/registry/edit-registry/${id}/${user._id}`, formData).then((results) => {
      console.log(results.data)
      setUser(results.data)
    })
    .catch((err) => {
      console.log(err);
    })
  }


  return (
    <section className='form form-box'>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label htmlFor='image'>Image:</label>
          <input 
            type='file' 
            name="image" 
            id="image"
            value={image}
            accept=".jpg, .jpeg, .png, .pdf" 
            className=""
            onChange={(e) => updateForm({ image: e.target.value })}
          
          />
                     
        </div>
        <div className='form-group'>
          <label htmlFor='title'>Title:</label>
          <input
            type='text'
            name='title'
            id='title'
            value={title}
            onChange={(e) => updateForm({ title: e.target.value })}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='price'>Price:</label>
          <input
            type='number'
            name='price'
            id='price'
            value={price}
            onChange={(e) => updateForm({ price: e.target.value })}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='text'>Description:</label>
          <textarea
            type='textarea'
            name='description'
            id='text'
            value={description}
            onChange={(e) => updateForm({ description: e.target.value })}
          />
        </div>
        <div className='form-group'>
          <button className='btn' type='submit'>
            Add Item to registry
          </button>
        </div>
      </form>
    </section>
  )
}

export default EditRegistry
