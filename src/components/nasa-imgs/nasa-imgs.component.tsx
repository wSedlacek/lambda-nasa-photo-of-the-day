import React from 'react';
import { useEffect, useState } from 'react';

import axios from 'axios';
import * as uuid from 'uuid';

import { NASAImg } from '../../models/NASAImg';
import { Card } from '../card/card.component';
import styled from 'styled-components';

const Loading = styled.h3`
  position: absolute;
  top: calc(50% - 1rem);
  width: 100%;
  margin: 0;
  padding: 0;
  text-align: center;
`;

const Grid = styled.div`
  margin: 0 10px;

  display: grid;
  grid-gap: 10px;
  grid-template-columns: 1fr 1fr;
`;

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

  if (imgs.length === 0) return <Loading>Loading...</Loading>;
  return (
    <Grid>
      {imgs.map(data => (
        <Card data={data} key={uuid.v1()} />
      ))}
    </Grid>
  );
};
