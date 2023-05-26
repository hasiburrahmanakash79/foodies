import { Link } from 'react-router-dom';

const PageNotFound = () => {
    return (
        <div className='flex justify-center items-center'>
            <div className='text-center mt-20'>
                <img src="https://cdn.pixabay.com/photo/2014/03/25/16/33/cancel-297373__340.png" alt="" />
            <h1 className='text-8xl font-extrabold'>Oops!</h1>
            <p className='text-xl py-5'>404 - Page not found</p>
            <Link to='/' className='btn btn-outline'>Go to home page</Link>
            </div>
        </div>
    );
};

export default PageNotFound;