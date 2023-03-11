import { FaRegHeart } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Home = () => {

    return (
        <>
      <div className='login-container-bg'>
        <div className='container'>
          <div className='login-box'>

            <section className='heading'>
              <FaRegHeart />
              <h1>
                Build-A-Registry
              </h1>
              <div className="box-flex">
                <div className="box">
                    <h2 className="title">Get Started</h2>
                    <p className="description">Start building your dream Registry!</p>
                    <Link className="btn" to={'/my-registry'}>Build a Registry</Link>
                </div>
                <div className="box">
                    <h2 className="title">Build a To-Do List</h2>
                    <p className="description">Make sure to have everything ready for the big day!</p>
                    <Link className="btn" to={'/to-do-list'}>Build a list</Link>
                </div>
              </div>
            </section>

          </div>
        </div>
      </div>
    </>
    )
}

export default Home