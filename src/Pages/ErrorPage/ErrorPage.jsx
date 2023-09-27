
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='min-h-screen flex justify-center items-center'>
            <div className='text-center align-middle '>
                <h1 className='text-6xl my-5'>Oops</h1>
                <Link to={'/'}>Go To Home</Link>
            </div>


        </div>
    );
};

export default ErrorPage;