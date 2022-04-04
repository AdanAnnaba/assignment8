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
            <button className='mt-10 text-3xl border-2 p-3 bg-slate-600'>Live Demo</button>
            </div>
            <div>
                <img src={Watch} alt="" />
                <small>IWC Schaffhausen{reviews.img}</small>
            </div>
            </div>
            <div>
                <h2>Customer Reviews ({data.length})</h2>
            </div>
            <div>
                {
                    data.map(data=><div>
                        <img src={data.img} alt="" /><p>Name: {data.name}</p>
                    </div>)
                }
            </div>

        </div>
    );
};

export default Home;