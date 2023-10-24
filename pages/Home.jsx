import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()

  return (
    <div className="home-container col">
<h1> welcome to ALNOKHATHA !!!</h1>

      <section className="welcome-signin">
      
        <button onClick={() => navigate('/Register')}>
          Register
        </button>

        <button onClick={() => navigate('/SignIn')}>
          Sign In 
        </button>

        
      </section>
    </div>
  )
}

export default Home
