import { Link } from 'react-router-dom';
const Landing = () => {
  return (
      <div className='container page'>
        <div className='info'>
          <h1>
            education app
          </h1>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Quisque pretium libero eu tellus viverra ultricies. 
          Maecenas hendrerit fringilla mauris. In hac habitasse platea dictumst.
          </p>
          <Link to='/register' className='btn btn-hero'>
            Login/Register
          </Link>
        </div>
        <img src={''} alt='class search' className='img main-img' />
      </div>
  );
};

export default Landing;
