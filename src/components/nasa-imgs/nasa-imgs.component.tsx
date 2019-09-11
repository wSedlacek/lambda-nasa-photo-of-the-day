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
    axios
      .get<NASAImg>(
        'https://api.nasa.gov/planetary/apod?api_key=mmcs6j3Ms0Pt5cGtt4zaziKitBbMRtdLhl97JTJv'
      )
      .then(res => setImgs(imgs => [...imgs, res.data]));
  }, []);

  return (
    <div className='NASAImgs'>
      {imgs.map(data => (
        <Card data={data} key={uuid.v1()} />
      ))}
    </div>
  );
};
