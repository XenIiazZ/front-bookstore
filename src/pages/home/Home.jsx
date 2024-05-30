import React, { useEffect, useRef, useState } from "react";
import style from "./style.module.scss";
import { Link } from "react-router-dom";
import headMainImg from "../../assets/images/head-img.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import arrowRight from "../../assets/icons/right-arrow.svg";
import SwiperCore from "swiper/core";
import { Navigation } from "swiper/modules";

SwiperCore.use([Navigation]);

const Home = ({ booksList }) => {
  const [addToCartId, setAddToCartId] = useState(null);
  const handleNextSlide = () => {
    swiperRef.current.slideNext();
  };

  const swiperRef = useRef(null);

  const handleNextSlide2 = () => {
    swiperRef2.current.slideNext();
  };

  const swiperRef2 = useRef(null);

  useEffect(() => {
    const currentCartItems =
      JSON.parse(window.localStorage.getItem("cartItems")) || [];

    const popularityBook = booksList.popularity.find(
      (item) => item.id === addToCartId
    );

    const bestsellerBook = booksList.bestsellers.find(
      (item) => item.id === addToCartId
    );

    if (popularityBook) {
      const updatedCartItems = [...currentCartItems, popularityBook];
      window.localStorage.setItem(
        "cartItems",
        JSON.stringify(updatedCartItems)
      );
    } else if (bestsellerBook) {
      const updatedCartItems = [...currentCartItems, bestsellerBook];
      window.localStorage.setItem(
        "cartItems",
        JSON.stringify(updatedCartItems)
      );
    }
  }, [addToCartId]);

  return (
    <React.Fragment>
      <section className={style.head}>
        <div className="container">
          <div className={style.head__wrapper}>
            <aside className={style.head__left}>
              <h1>“There is no friend as loyal as a book.”</h1>

              <div>
                <p>― Ernest Hemingway</p>
              </div>

              <Link to="#catalog">Начать поиск</Link>
            </aside>

            <aside className={style.head__right}>
              <img src={headMainImg} alt="head main" />
            </aside>
          </div>
        </div>
      </section>

      <section className={style.categorys}>
        <div className="container">
          <ul>
            <li>
              <Link to="/">Классика</Link>
            </li>

            <li>
              <Link to="/">Современная проза</Link>
            </li>

            <li>
              <Link to="/">Детективы</Link>
            </li>

            <li>
              <Link to="/">Фантастика</Link>
            </li>

            <li>
              <Link to="/">Поэзия</Link>
            </li>

            <li>
              <Link to="/">Приключения</Link>
            </li>

            <li>
              <Link to="/">Романтика</Link>
            </li>

            <li>
              <Link to="/">Книги на иностранных языках</Link>
            </li>
          </ul>
        </div>
      </section>

      <section className={style.popularity}>
        <div className="container">
          <div className={style.popularity__wrapper}>
            <h2>Популярные сейчас</h2>

            <Swiper
              slidesPerView={5}
              className="popularity__slider"
              loop={true}
              navigation={{ nextEl: ".swiper-button-next-1" }}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              breakpoints={{
                1400: {
                  slidesPerView: 5,
                },

                1380: {
                  slidesPerView: 4,
                },

                1180: {
                  slidesPerView: 3,
                },

                700: {
                  slidesPerView: 3,
                },

                480: {
                  slidesPerView: 2,
                },

                180: {
                  slidesPerView: 1,
                },
              }}
            >
              {booksList.popularity.map(({ img, title, author, price, id }) => (
                <SwiperSlide key={id}>
                  <Link
                    to={`/book/${id}`}
                    className={style.popularity__item__main}
                  >
                    <img src={img} alt={title} />
                    <h2>{price} р.</h2>
                    <h3>{title}</h3>
                    <p>{author}</p>
                  </Link>
                  <button onClick={() => setAddToCartId(id)}>Купить</button>
                </SwiperSlide>
              ))}
            </Swiper>

            <button onClick={handleNextSlide} className="swiper-button-next-1">
              <img src={arrowRight} alt="Next" />
            </button>
          </div>
        </div>
      </section>

      <section className={style.popularity}>
        <div className="container">
          <div className={style.popularity__wrapper}>
            <h2>Бестселлеры</h2>

            <Swiper
              slidesPerView={5}
              className="bestseller__slider"
              loop={true}
              navigation={{ nextEl: ".swiper-button-next-2" }}
              onSwiper={(swiper) => (swiperRef2.current = swiper)}
              breakpoints={{
                1400: {
                  slidesPerView: 5,
                },

                1380: {
                  slidesPerView: 4,
                },

                1180: {
                  slidesPerView: 3,
                },

                700: {
                  slidesPerView: 3,
                },

                480: {
                  slidesPerView: 2,
                },

                180: {
                  slidesPerView: 1,
                },
              }}
            >
              {booksList.bestsellers.map(
                ({ img, title, author, price, id }) => (
                  <SwiperSlide key={id}>
                    <Link
                      to={`/book/${id}`}
                      className={style.popularity__item__main}
                    >
                      <img src={img} alt={title} />
                      <h2>{price} р.</h2>
                      <h3>{title}</h3>
                      <p>{author}</p>
                    </Link>
                    <button onClick={() => setAddToCartId(id)}>Купить</button>
                  </SwiperSlide>
                )
              )}
            </Swiper>

            <button onClick={handleNextSlide2} className="swiper-button-next-2">
              <img src={arrowRight} alt="Next" />
            </button>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Home;
