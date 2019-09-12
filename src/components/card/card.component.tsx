import React from 'react';
import { NASAImg } from '../../models/NASAImg';

import styled from 'styled-components';

const CardHost = styled.div`
  height: 450px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  overflow: hidden;

  img {
    height: 80%;
    width: 100%;
    overflow: hidden;
  }

  *:not(img) {
    margin: 10px;
  }
`;

export const Card = ({ data }: { data: NASAImg }) => {
  return (
    <CardHost>
      <img src={data.url.includes('apod.nasa.gov/apod/') ? data.url : 'missing.jpg'}></img>
      <h2>{data.title}</h2>
      <p>{data.date}</p>
    </CardHost>
  );
};
