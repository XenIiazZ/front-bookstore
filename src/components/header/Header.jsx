import React, { useState } from "react";
import style from "./style.module.scss";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import cartIcon from "../../assets/icons/cart.png";
import userIcon from "../../assets/icons/user.png";
import { Redirect } from "react-router-dom";

const Header = ({ booksList }) => {
  const cartItems = JSON.parse(window.localStorage.getItem("cartItems"));

  // const [searchQuery, setSearchQuery] = useState("");
  const [searchResult, setSearchResult] = useState(null);

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      const query = e.target.value.trim().toLowerCase();

      // Поиск совпадений во всех книгах
      for (const category in booksList) {
        const books = booksList[category];
        const foundBook = books.find((book) =>
          book.title.toLowerCase().includes(query)
        );
        if (foundBook) {
          setSearchResult(foundBook);
          break;
        }
      }

      // Переход на URL страницы найденной книги
      if (searchResult) {
        window.location.href = `/book/${searchResult.id}`;
      }
    }
  };

  return (
    <header>
      <div className="container">
        <div className={style.head__wrapper}>
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>

          <div className={style.head__right}>
            <div>
              <input
                type="text"
                placeholder="Найти вашу следующую книгу..."
                onKeyDown={handleSearch}
              />
            </div>

            <Link to="/cart">
              <img src={cartIcon} alt="cart" />
              <p>Корзина</p>
              <p>{cartItems ? cartItems.length : 0}</p>
            </Link>

            <Link to="/signin">
              <img src={userIcon} alt="user" />
              <p>Войти</p>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
