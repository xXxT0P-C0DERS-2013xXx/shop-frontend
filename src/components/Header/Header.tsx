import React from 'react';

import s from './Header.module.scss';
import { HeaderSvgSelector } from './HeaderSvgSelector';

export const Header = () => {
  return (
    <>
      <header className={s.header}>
        <h1 className={s.heading}>Eshop</h1>
        <div className={s.headerSecondary}>
          <div className={s.items}>
            <div className={s.item}>Футболки</div>
            <div className={s.item}>Свитшоты</div>
            <div className={s.item}>Худи</div>
            <div className={s.item}>Рюкзаки</div>
            <div className={s.item}>Штаны/шорты</div>
            <div className={s.item}>Поло</div>
            <div className={s.item}>Рубашки</div>
            <div className={s.item}>Пижама</div>
            <div className={s.item}>Шапки</div>
            <div className={s.item}>Кепки</div>
            <div className={s.item}>Трусы</div>
            <div className={s.item}>FAQ</div>
            <div className={s.item}>Ваш заказ</div>
          </div>
          <div className={s.features}>
            <div className={s.language}>РУС</div>
            <div className={s.currency}>USD</div>
            <div className={s.userIcon}>
              <HeaderSvgSelector id="user" />
            </div>
            <div className={s.shopIcon}>
              <HeaderSvgSelector id="shopping-cart" />
            </div>
            <div>0 USD</div>
          </div>
        </div>
      </header>

      <div className={s.caption}>
        <span>Есть</span>
        <span>только</span>
        <span className={s.styledSpan}>белый</span>
        <span>и</span>
        <span>чёрный.</span>
        <span>остальное -</span>
        <span>оттенки.</span>
      </div>
    </>
  );
};
