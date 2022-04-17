import { useState } from 'react';
import { Link } from 'react-router-dom';
import Watch from '../../Image/watch.jpg'
import ReviewData from '../Hook/Hook';
import './Home.css';

const Home = () => {
    
    const [reviews,setReviews] = ReviewData([]);
    const [searchResult, setSearchResult] = useState([])
    const data = reviews.slice(0,3);

    const handleSearchChange = event =>{
        const searchText = event.target.value;
        const match = reviews.filter(v=>v.name.includes(searchText))
        setSearchResult(match);
    }

    return (
        <div>
            <div className='mt-5'>
                    <input onChange={handleSearchChange} className='p-2 border-2 rounded-lg' type="text"placeholder='Search' />
            </div>
            <div className='home-page'>
            <div>
            <h1 className='text-6xl text-stone-900'>The World’s Best Luxury Watch Brands</h1>
            <p className='mt-10'>A man’s got two shots for jewelry: a wedding ring and a watch. The watch is a lot easier to get on and off than a wedding ring.</p>
            <button className='class="bg-cyan-500 shadow-lg shadow-cyan-300/50 bg-sky-300 p-2 mb-4 rounded-xl mt-10 text-4xl p-3 border-l-4'>Live Demo</button>
            </div>
            <div>
                <img src={Watch} alt="watch" />
                <small>Wrist Watch{reviews.img}</small>
            </div>
            </div>
            <div>
                <h2 className='text-3xl mb-8'>Customer Reviews ({data.length})</h2>
            </div>
            <div className='three-reviews'>
                {
                    searchResult.map(data=><div className='three-reviews-card' >
                        <p>Name: {data.name}</p>
                        <img src={data.img} alt="" />
                        <p className='text-justify'>Reviews: {data.reviews}</p>
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