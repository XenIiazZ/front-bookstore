import React, { useEffect, useState } from "react";
import style from "./style.module.scss";
import { useParams } from "react-router-dom";

const Book = ({ booksList }) => {
  const [book, setBook] = useState({});
  const { bookId } = useParams();

  useEffect(() => {
    const bookItem1 = booksList.popularity.find((item) => item.id === +bookId);
    const bookItem2 = booksList.bestsellers.find((item) => item.id === +bookId);

    if (bookItem1) {
      setBook(bookItem1);
    } else if (bookItem2) {
      setBook(bookItem2);
    }
  }, [bookId]);

  return (
    <section className={style.book}>
      <div className="container">
        {book && (
          <div className={style.book__wrapper}>
            <img src={book.img} alt={book.title} />

            <aside>
              <h1>{book.title}</h1>
              <h2>{book.price} р.</h2>
              <p>{book.author}</p>
            </aside>
          </div>
        )}
      </div>
    </section>
  );
};

export default Book;
