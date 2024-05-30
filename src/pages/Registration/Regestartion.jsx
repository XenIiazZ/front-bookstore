import React from "react";
import style from "./style.module.scss";

const Registration = () => {
  return (
    <section className={style.signin}>
      <div className="container">
        <div className={style.signin__wrapper}>
          <h1>Регистрация</h1>

          <form>
            <input type="email" placeholder="E-mail" />
            <input type="text" placeholder="username" />
            <input type="password" placeholder="password" />
          </form>

          <button>Зарегистрироваться</button>
        </div>
      </div>
    </section>
  );
};

export default Registration;
