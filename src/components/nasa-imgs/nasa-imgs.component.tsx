import './nasa-imgs.component.scss';
import React from 'react';
import { useEffect, useState } from 'react';

import axios from 'axios';
import * as uuid from 'uuid';

import { NASAImg } from '../../models/NASAImg';
import { Card } from '../card/card.component';

export const NASAImgs = () => {
  const [imgs, setImgs] = useState<NASAImg[]>([]);
  useEffect(() => {
    for (let i = 0; i < 7; i++) {
      const day = new Date();
      day.setDate(day.getDate() - i);

      axios
        .get<NASAImg>(
          `https://api.nasa.gov/planetary/apod?api_key=${
            process.env.REACT_APP_NASA_KEY
          }&date=${day.getFullYear()}-${day.getMonth() + 1}-${day.getDate()}`
        )
        .then(res => setImgs(imgs => [...imgs, res.data]));
    }
  }, []);

  if (imgs.length === 0) return <h3 className='loading'>Loading...</h3>;
  return (
    <div className='NASAImgs'>
      {imgs.map(data => (
        <Card data={data} key={uuid.v1()} />
      ))}
    </div>
  );
};
