import React from 'react';
import { useState } from 'react';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Collapse from '@material-ui/core/Collapse';

import { NASAImg } from '../../models/NASAImg';

export const NASAImgCard = ({ data }: { data: NASAImg }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Card>
      <CardMedia
        height='280'
        component='img'
        alt={data.title}
        image={data.url.includes('apod.nasa.gov/apod/') ? data.url : 'missing.jpg'}
        title={data.title}
      />
      <CardActionArea onClick={() => setExpanded(!expanded)}>
        <CardContent>
          <Typography gutterBottom variant='h5' component='h2'>
            {data.title}
          </Typography>
          <Typography variant='body2' color='textSecondary' component='p'>
            {data.date}
          </Typography>
        </CardContent>
      </CardActionArea>

      <Collapse in={expanded} timeout='auto' unmountOnExit>
        <CardContent>
          <Typography paragraph>{data.explanation}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};
