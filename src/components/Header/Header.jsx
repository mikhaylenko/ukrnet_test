import React from 'react';
import './Header.scss';

const Header = (props) => <div className="Header">
  <div className="Header__input">
    <label htmlFor="car-number">Номер автомобиля</label>
    <input
      type="text"
      id="car-number"
      placeholder="AA0000AA"
      value={props.carNumber}
      onChange={props.changeInput}
      max={8}
    />
  </div>
  {props.error && props.carNumber.length > 0 && <span className="Header__error">Введите номер автомобиля в формате "AA0000AA"</span>}
</div>;

export default Header;
