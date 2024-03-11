import {Link} from 'react-router-dom'
import Header from '../Header'

import './index.css'

const Home = () => (
  <>
    <Header />
    <div className="home-container">
      <div className="home-content">
        
        <p className="text-xl">
            Trade in offer
          </p>
          <h1 className="text-2xl ">
            Super Value Deals
          </h1>
          <h4 className="text-xl ">
            On all products
          </h4>
          <p className="text-xl ">
            Save more today with Apna Fasion Store
          </p>
        <Link to="/products">
          <button type="button" className="shop-now-button">
            Shop Now
          </button>
        </Link>
      </div>
      
    </div>
  </>
)

export default Home
