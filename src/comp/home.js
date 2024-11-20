import React, { useEffect, useState } from 'react'
import './home.css'
import { Link } from 'react-router-dom'
import Homeproduct from './home_product'
import { AiFillEye, AiFillHeart, AiOutlineShoppingCart} from "react-icons/ai";
const Home = ({addtocart}) => {
  // Product category
  const [newProduct, setNewProduct] =  useState([])
  const [featuredProduct, setFeaturdProduct] =  useState([])
  const [topProduct, setTopProduct] =  useState([])
  //Tranding Product
  const [trendingProduct, setTrendingProduct] = useState(Homeproduct)
  // Filter of tranding product
  const filtercate = (x) => 
  {
    const filterproduct = Homeproduct.filter((curElm) => 
    {
      return curElm.type === x
    })
    setTrendingProduct(filterproduct)
  }
  //All Trending Product
  const allTrendingProduct = () =>
  {
    setTrendingProduct(Homeproduct)
  }

  //Product Type
  useEffect(() => 
  {
    productcategory()
  })
  const productcategory = () => 
  {
    // New Product
    const newcategory = Homeproduct.filter((x) => 
    {
      return x.type === 'new'
    })
    setNewProduct(newcategory)

    // Featured Product
    const featuredcategory = Homeproduct.filter((x) => 
    {
      return x.type === 'featured'
    })
    setFeaturdProduct(featuredcategory)

    // Top Product
    const topcategory = Homeproduct.filter((x) => 
    {
      return x.type === 'top'
    })
    setTopProduct(topcategory)
  }
  return (
    <>
    <div className='home'>
        <div className='top_banner'>
            <div className='contant'>
                <h3>silver aluminum</h3>
                <h2>Apple Watch</h2>
                <p>30% off at your first odder</p>
                <Link to='/shop' className='link'>Shop Now</Link>
            </div>
        </div>
        <div className='trending'>
          <div className='container'>
            <div className='left_box'>
              <div className='header'>
                <div className='heading'>
                  <h2 onClick={() => allTrendingProduct ()}>trending product</h2>
                </div>
                <div className='cate'>
                  <h3 onClick={() => filtercate ('new')}>New</h3>
                  <h3 onClick={() => filtercate ('featured')}>Featured</h3>
                  <h3 onClick={() => filtercate ('top')}>top selling</h3>
                </div>
              </div>
              <div className='products'>
                <div className='container'>
                  {
                    trendingProduct.map((curElm) => 
                    {
                      return(
                        <>
                        <div className='box'>
                          <div className='img_box'>
                            <img src={curElm.image} alt=''></img>
                            <div className='icon'>
                              <div className='icon_box'>
                                <AiFillEye />
                              </div>    
                              <div className='icon_box'>
                                <AiFillHeart />
                              </div>                        
                            </div>
                          </div>
                          <div className='info'>
                            <h3>{curElm.Name}</h3>
                            <p>${curElm.price}</p>
                            <button className='btn' onClick={() => addtocart (curElm)}>Add to cart</button>
                          </div>
                        </div>
                        </>
                      )
                    })
                  }
                </div>
                <button>Show More</button>
              </div>
            </div>
            
          </div>
        </div>
        <div className='banners'>
          <div className='container'>
            <div className='left_box'>
              <div className='box'>
                <img src='image/Multi-Banner-1.avif' alt='banner' style={{ height: '400px', width: '350px' }}></img>
              </div>
              <div className='box'>
                <img src='image/Multi-Banner-2.avif' alt='banner' style={{ height: '250px', width: '350px' }}></img>
              </div>
            </div>
            <div className='right_box'>
              <div className='top'>
                <img src='image/Multi-Banner-3.webp' alt='' style={{ height: '200px', width: '600px' }}></img>
                <img src='image/Multi-Banner-4.avif' alt='' style={{ height: '200px', width: '600px' }}></img>
              </div>
              <div className='bottom'>
                <img src='image/Multi-Banner-5.webp' alt=''></img>
              </div>
            </div>
          </div>
        </div>
        
    </div>
    </>
  )
}

export default Home