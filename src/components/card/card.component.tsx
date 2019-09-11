import './card.component.scss';
import React from 'react';

export const Card = ({ img }: { img: string }) => {
  return <div className='Card'>{img}</div>;
};
