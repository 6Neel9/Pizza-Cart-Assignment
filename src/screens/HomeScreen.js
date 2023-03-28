import styled from 'styled-components';
import { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';
import Product from '../components/Product';


const HomeWrapper = styled.section`
  background-color: #f5f3f4;
  z-index: 1;
  padding: 0 2em 3em 2em;
  .header {
    display: flex;
    justify-content: space-between;
    padding: 1.5em 0;
    .heading {
      font-size: 2rem;
      font-weight: bold;
    }
    .sort-actions {
      .inner {
        font-size: 1.5rem;
        h3 {
          display: flex;
        }
      }
    }
  }
  .product-list {
    display: grid;
    grid-gap: 1.75rem;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
  #pizza-carousel {
    border-radius:10px;
    position: relative;
    background-color: #000;
    height: 600px;
    overflow: hidden;
  }
  div {
    z-index: 1;
  }
  .pizza-carousel-content {
    display: flex;
    align-items: center;
    text-align: center;
    height: 100%;
    width: 100%;
    transform: translateY(-60px);
    z-index: 5;
  
    h1 {
      color: #fff;
      font-size: 50px;
      font-weight: lighter;
      text-transform: none;
      width: 100%;
      margin-bottom: 0;
    }
  }
  .pizza-carousel-pizzas {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: translateY(-25px);
    transition: transform 0.5s linear;
  
    .pizza-container {
      position: absolute;
      left: 50%;
      bottom: -60px;
      transform: translateX(-50%);
      width: 600px;
      -webkit-transform: translate(-50%);
      transform: translate(-50%);
      -webkit-animation-name: pizzaCarousel;
      animation-name: pizzaCarousel;
      -webkit-animation-duration: 30s;
      animation-duration: 30s;
      -webkit-animation-delay: 0s;
      animation-delay: 0s;
      -webkit-animation-iteration-count: infinite;
      animation-iteration-count: infinite;
      -webkit-animation-timing-function: ease-in-out;
      animation-timing-function: ease-in-out;
  
      &:nth-of-type(1) {
        animation-delay: 0s;
        img {
          animation-delay: 0s;
        }
      }
      &:nth-of-type(2) {
        animation-delay: -6s;
        img {
          animation-delay: -6s;
        }
      }
      &:nth-of-type(3) {
        animation-delay: -12s;
        img {
          animation-delay: -12s;
        }
      }
      &:nth-of-type(4) {
        animation-delay: -18s;
        img {
          animation-delay: -18s;
        }
      }
      &:nth-of-type(5) {;
        animation-delay: -24s;
        img {
          animation-delay: -24s;
        }
      }
  
      img {
        display: block;
        width: 100%;
        -webkit-animation-name: pizzaCarouselImg;
        animation-name: pizzaCarouselImg;
        -webkit-animation-duration: 30s;
        animation-duration: 30s;
        -webkit-animation-delay: 0s;
        animation-delay: 0s;
        -webkit-animation-iteration-count: infinite;
        animation-iteration-count: infinite;
        -webkit-animation-timing-function: ease-in-out;
        animation-timing-function: ease-in-out;
      }
    }
  }
  
  
  @keyframes pizzaCarousel {
    0% { // Bottom
      z-index: 4;
      transform: translate(-50%, 0);
    }
    15% {
      z-index: 3;
      transform: translate(-50%, 0);
    }
    20% { // Left
      z-index: 2;
      transform: translate(-130%, -50%) scale(0.7);
    }
    35% {
      z-index: 1;
      transform: translate(-130%, -50%) scale(0.7);
    }
    40% { // Top Left
      z-index: 1;
      transform: translate(-80%, -100%) scale(0.5);
    }
    55% {
      z-index: 1;
      transform: translate(-80%, -100%) scale(0.5);
    }
    60% { // Top Right
      z-index: 1;
      transform: translate(-20%, -100%) scale(0.5);
    }
    75% {
      z-index: 2;
      transform: translate(-20%, -100%) scale(0.5);
    }
    80% { // Right
      z-index: 3;
      transform: translate(30%, -50%) scale(0.7);
    }
    95% {
      z-index: 4;
      transform: translate(30%, -50%) scale(0.7);
    }
  }
  
  @keyframes pizzaCarouselImg {
    0% {
      transform: translateX(0);
    }
    15% {
      transform: translateX(0);
    }
    17.5% { // In between Bottom and Left
      transform: translateX(-150px);
    }
    20% {
      transform: translateX(0);
    }
    35% {
      transform: translateX(0);
    }
    37.5% { // In between Left and Top Left
      transform: translateX(-100px);
    }
    40% {
      transform: translateX(0);
    }
    55% {
      transform: translateX(0);
    }
    57.5% { // In between Top Left and Top Right
      transform: translateX(0);
    }
    60% {
      transform: translateX(0);
    }
    75% {
      transform: translateX(0);
    }
    77.5% { // In between Top Right and Right
      transform: translateX(150px);
    }
    80% {
      transform: translateX(0);
    }
    95% {
      transform: translateX(0);
    }
    97.5% { // In between Right and Bottom
      transform: translateX(100px);
    }
  }
`;

const HomeScreen = ({ history }) => {
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;


  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

//   const sortRating = () => {
//     products.sort((a, b) => parseFloat(a.rating) - parseFloat(b.rating));
//     console.log(products);
//   };

//   const sortPrice = () => {
//     products.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
//     console.log(products);
//   };

  return (
    <HomeWrapper>
      {error ? <h3>{error}</h3> : null}
      {loading ? <h3>Loading ...</h3> : null}
      <div className="header">
        <div className="heading">
          <h2>🍕 Pizzas</h2>
        </div>
      </div>
      <div id="pizza-carousel" className="d-flex reset">
        <div className="pizza-carousel-content">
          <h1>Award-Winning Pizza</h1>
        </div>
        <div className="pizza-carousel-pizzas">
          <div className="pizza-container">
            <img src="https://cms.barrospizza.com/wp-content/uploads/2018/06/Homepage_Header_Barros-Special.png" alt="Barro's Special Pizza" className="pizza" />
          </div>
          <div className="pizza-container">
            <img src="https://cms.barrospizza.com/wp-content/uploads/2018/08/Homepage-Header_Hotwing-2.png" alt="" className="pizza" />
          </div>
          <div className="pizza-container">
            <img src="https://cms.barrospizza.com/wp-content/uploads/2018/08/Homepage-Header_MegaMeat-2.png" alt="" className="pizza" />
          </div>
          <div className="pizza-container">
            <img src="https://cms.barrospizza.com/wp-content/uploads/2018/08/Homepage-Header_Kona-2.png" alt="" className="pizza" />
          </div>
          <div className="pizza-container">
            <img src="https://cms.barrospizza.com/wp-content/uploads/2018/06/Homepage_Header_BBQ-Chicken.png" alt="Barro's BBQ Chicken Pizza" className="pizza" />
          </div>
        </div>
      </div><br/>
      <div className="product-list">
        {products.map((product) => (
          <Product
            key={product.id}
            id={product.id}
            name={product.name}
            description={product.description}
            imgUrl={product.img_url}
            price={product.price}
            rating={product.rating}
            isVeg={product.isVeg}
            size={product.size[0]}
            toppings={product.toppings[0]}
            historyMain={history}
          />
        ))}
      </div>
    </HomeWrapper>
  );
};

export default HomeScreen;
