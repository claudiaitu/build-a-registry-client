import React from 'react'
import { LoadingContext } from '../context/loading.context'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { get } from '../services/authService'



const Profile = () => {
  const {user, setUser} = useContext(LoadingContext)
  const deleteRegistry = (registryId) => {
    get(`/registry/delete-registry/${registryId}/${user._id}`).then((results) => {
      console.log(results.data);
      setUser(results.data)
    })
    .catch((err) => {
      console.log(err);
    })
  }

  return (
    <>
    <div className='registry-container-bg'> 
    <div className='prof'>My Gifts:</div>
    <div className="items-wrap">
      {user ? user.registries.map((registry) => {
        return (
          <>
          <div className='item-box'>
            <h2>Item: {registry.item}</h2>
            <p>Price: $ {registry.price}</p>
            <p>Description: {registry.description}</p>
            <img alt='img' src={registry.image}/>
            <div className="btns-wrap">
              <Link className="btn btn-edit" to={`/edit-registry/${registry._id}`}>Edit</Link>
              <button className="btn btn-delete" onClick={() => deleteRegistry(registry._id)}>Delete</button>
            </div>
          </div>
          </>
        )
      }):
      <p>No registries found</p>
      }
    </div>
    </div>
    </>
  )
}

export default Profile