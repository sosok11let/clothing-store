import React, { useEffect } from 'react'
import Header from '../../components/header/Header'
import './home.css'
import { useSelector } from 'react-redux'
import { fetchProducts, selectProductData } from '../../redux/slices/productSlice'
import { useAppDispatch } from '../../redux/store'
import ProductBlock from '../../components/productBlock/ProductBlock'
import Skeleton from '../../components/skeleton/Skeleton'
import Footer from '../../components/footer/Footer'

const Home: React.FC = () => {

  const dispatch = useAppDispatch();
  const { products, status } = useSelector(selectProductData);

  useEffect(() => {
    dispatch(fetchProducts())
  }, [])
  
  const productsHats = products.filter((el) => {
    if (el.category === "hats") {
      return true
    }
    return false

  }).map((el) => (<ProductBlock key={el.id} {...el} />))

  const productsHoodies = products.filter((el) => {
    if (el.category === "hoodies") {
      return true
    }
    return false

  }).map((el) => (<ProductBlock key={el.id} {...el} />))

  const productsTrousers = products.filter((el) => {
    if (el.category === "trousers") {
      return true
    }
    return false

  }).map((el) => (<ProductBlock key={el.id} {...el} />))

  const productsShirt = products.filter((el) => {
    if (el.category === "shirt") {
      return true
    }
    return false

  }).map((el) => (<ProductBlock key={el.id} {...el} />))

  const productsJacket = products.filter((el) => {
    if (el.category === "jacket") {
      return true
    }
    return false

  }).map((el) => (<ProductBlock key={el.id} {...el} />))


  const skeletons = [...new Array(6)].map((_, index) => 
    <Skeleton key={index} />
  );

  return (
    <div>
      <div className='main-home'>
        <div className="categories-block-product">
          <div className="hats-block">
            <h1>Головные уборы</h1>
            <div className="render-hats">
              {
                status === "error"
                ? (<div>Произошла ошибка</div>)
                :(<>{status === "loading" ? skeletons : productsHats}</>)
              }
            </div>
          </div>
          <div className="hats-block">
            <h1>Худи</h1>
            <div className="render-hats">
              {
                status === "error"
                ? (<div>Произошла ошибка</div>)
                :(<>{status === "loading" ? skeletons : productsHoodies}</>)
              }
            </div>
          </div>
          <div className="hats-block">
            <h1>Брюки</h1>
            <div className="render-hats">
              {
                status === "error"
                ? (<div>Произошла ошибка</div>)
                :(<>{status === "loading" ? skeletons : productsTrousers}</>)
              }
            </div>
          </div>
          <div className="hats-block">
            <h1>Рубашки</h1>
            <div className="render-hats">
              {
                status === "error"
                ? (<div>Произошла ошибка</div>)
                :(<>{status === "loading" ? skeletons : productsShirt}</>)
              }
            </div>
          </div>
          <div className="hats-block">
            <h1>Куртки</h1>
            <div className="render-hats">
              {
                status === "error"
                ? (<div>Произошла ошибка</div>)
                :(<>{status === "loading" ? skeletons : productsJacket}</>)
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home