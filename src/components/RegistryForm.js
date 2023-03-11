import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createGoal } from '../features/goals/goalSlice'

function RegistryForm() {
  const [formData, setFormData] = useState({
    item: '',
    text: '',
    price: '',
    image: '',
  })
  
  const { item, text, price, image } = formData

  const dispatch = useDispatch()

  function updateForm(value) {
    return setFormData((prev) => {
      return { ...prev, ...value };
    });
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const goalData = {
      item,
      text,
      image,
      price
    }
    console.log(goalData);
    dispatch(createGoal( goalData ))
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
          <label htmlFor='item'>Item:</label>
          <input
            type='text'
            name='item'
            id='item'
            value={item}
            onChange={(e) => updateForm({ item: e.target.value })}
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
            name='text'
            id='text'
            value={text}
            onChange={(e) => updateForm({ text: e.target.value })}
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

export default RegistryForm
