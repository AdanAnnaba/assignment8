import { Link } from 'react-router-dom';
import Watch from '../../Image/watch.jpg'
import ReviewData from '../Hook/Hook';
import './Home.css';

const Home = () => {
    
    const [reviews,setReviews] = ReviewData([]);
    const data = reviews.slice(0,3);

    return (
        <div >
            <div className='home-page'>
            <div>
            <h1 className='text-6xl text-stone-900'>The World’s Best Luxury Watch Brands</h1>
            <button className='class="bg-cyan-500 shadow-lg shadow-cyan-300/50 bg-sky-300 p-2 mb-4 rounded-xl mt-10 text-4xl p-3 border-l-4'>Live Demo</button>
            </div>
            <div>
                <img src={Watch} alt="" />
                <small>Wrist Watch{reviews.img}</small>
            </div>
            </div>
            <div>
                <h2 className='text-3xl mb-8'>Customer Reviews ({data.length})</h2>
            </div>
            <div className='three-reviews'>
                {
                    data.map(data=><div className='three-reviews-card' >
                        <p>Name: {data.name}</p>
                        <img src={data.img} alt="" />
                        <p>Reviews: {data.reviews}</p>
                        <div>
                        <p>Ratings: {data.ratings}</p>
                        </div>
                    </div>)
                }
            </div>
            <div>
            <button className='class="bg-cyan-500 shadow-lg shadow-cyan-300/50 bg-sky-300 p-2 mb-4 rounded-xl'><Link to={'/Reviews'}>See All Reviews</Link></button>
            </div>

        </div>
    );
};

export default Home;