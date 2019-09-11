import './card.component.scss';
import React from 'react';
import { NASAImg } from '../../models/NASAImg';

export const Card = ({ data }: { data: NASAImg }) => {
  return (
    <div className='Card'>
      <img src={data.url}></img>
      <h2>{data.title}</h2>
      <p>{data.date}</p>
    </div>
  );
};
