import React from "react";
import style from "./style.module.scss";
import { Link } from "react-router-dom";

const Signin = () => {
  
  return (
    <section className={style.signin}>
      <div className="container">
        <div className={style.signin__wrapper}>
          <h1>Войти</h1>

          <form>
            <input type="text" placeholder="username" />
            <input type="password" placeholder="password" />
          </form>

          <Link to="/registartion">Еще нету акканта? Зарегестрируйтесь!</Link>

          <button>Войти</button>
        </div>
      </div>
    </section>
    
  );
  
  
  

  
};
export default Signin;
