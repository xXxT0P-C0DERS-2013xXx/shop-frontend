import React from 'react';

import { Link } from 'react-router-dom';

import { path } from '../../utils/consts';

import s from './Home.module.scss';

export const Home = () => {
  return (
    <section className={s.home}>
      <div className={s.homeItem}>
        <h1 className={s.headingPrimary}>
          Home Shopping,
          <br /> Your Choice!
        </h1>
        <p className={s.paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.
        </p>
        <Link to={path.SHOP} className={s.button}>
          Go shopping!
        </Link>
      </div>
    </section>
  );
};
