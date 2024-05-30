import React from "react";
import style from "./style.module.scss";

const Cart = () => {
  let cartItems = JSON.parse(window.localStorage.getItem("cartItems"));
  let totalPrice = 0;

  cartItems.forEach((item) => (totalPrice += item.price));

  const buy = () => {
    cartItems = [];
    window.localStorage.setItem("cartItems", JSON.stringify([]));
    alert("Заказ успешно создан!");
    window.location.reload();
  };
  

  return (
    <section className={style.cart}>
      <div className="container">
        <h1>Корзина</h1>
        <div className={style.cart__wrapper}>
          <aside className={style.cart__list}>
            <ul>
              {cartItems &&
                cartItems.length !== 0 &&
                cartItems.map(({ img, title, author, price, id }) => (
                  <li key={id}>
                    <img src={img} alt={title} />
                    <h2>{price}</h2>
                    <h3>{title}</h3>
                    <p>{author}</p>
                  </li>
                ))}
            </ul>
          </aside>
          <aside className={style.cart__info}>
            <h2>Общая стоимость: {totalPrice} р.</h2>
            <button onClick={buy}>Заказать</button>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Cart;
