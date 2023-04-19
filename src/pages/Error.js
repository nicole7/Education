import { Link } from 'react-router-dom';
import img from '../assets/images/not-found.svg';

const Error = () => {
  return (
      <div>
        <img src={img} alt='not found' />
        <h3>404 - Page Not Found</h3>
        <p>We can't seem to find the page you're looking for</p>
        <Link to='/'>go back</Link>
      </div>
  );
};
export default Error;
