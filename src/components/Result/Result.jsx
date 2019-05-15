import React from 'react';
import './Result.scss';

const Result = (props) => <div className="Result">
  <div className="Result__header">Информация по номеру <strong>{props.number}</strong></div>
  <div className="Result__row">
    <div className="Result__row-cell">ФИО владельца</div>
    <div className="Result__row-cell">{props.owner}</div>
  </div>
  <div className="Result__row">
    <div className="Result__row-cell">Количество владельцев</div>
    <div className="Result__row-cell">{props.ownersCount}</div>
  </div>
  <div className="Result__row">
    <div className="Result__row-cell">Количество ДТП</div>
    <div className="Result__row-cell">{props.crashesCount}</div>
  </div>
  <div className="Result__row">
    <div className="Result__row-cell">Год регистрации</div>
    <div className="Result__row-cell">{props.year}</div>
  </div>
</div>;

export default Result;
