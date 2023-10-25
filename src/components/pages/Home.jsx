import { useNavigate } from 'react-router-dom'


const Home = () => {
  const navigate = useNavigate()

  return (

    
    <div className='welcomeN'>
      <h3 className='w'> welcome to</h3>
      
      <h1  className='wel' >ALNOKHATHA !!!</h1>

      <section >
      
        <button onClick={() => navigate('/Register')} className="welcome-signin">
          Register
        </button>

        <button onClick={() => navigate('/SignIn')} className="welcome-signin">
          Sign In 
        </button>

        
      </section>
    </div>
  )
}

export default Home
