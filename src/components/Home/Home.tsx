import React from 'react';

import s from './Home.module.scss';
import { HomeSvgSelector } from './HomeSvgSelector';

export const Home = () => {
  return (
    <>
      <header className={s.header}>
        <h3 className={s.heading}>Dealerz.</h3>
        <div className={s.contacts}>
          <div className={s.item}>
            <HomeSvgSelector id="phone" />
            <span className={s.text}>Call center</span>
          </div>

          <div className={s.item}>
            <HomeSvgSelector id="truck" />
            <span className={s.text}>Shipping & Returns</span>
          </div>
        </div>
      </header>

      <nav className={s.navbar}>
        <div className={s.categories}>
          <span>Shop</span>
          <span>Promo</span>
          <span>About</span>
          <span>Blog</span>
        </div>
        <div className={s.search}>
          <input className={s.input} placeholder="Search what you need" />
          <HomeSvgSelector id="search" />
        </div>
        <div className={s.buttons}>
          <button type="button">
            <HomeSvgSelector id="heart" />
          </button>
          <button type="button">
            <HomeSvgSelector id="cart" />
          </button>
          <button type="button">
            <HomeSvgSelector id="user" />
          </button>
          <button type="button">
            <HomeSvgSelector id="bell" />
          </button>
        </div>
      </nav>
    </>
  );
};
