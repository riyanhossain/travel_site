import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export default function ImageListSundarbon() {
  return (
    <ImageList sx={{ width: 500, height: 450 }} variant="woven" cols={3} gap={8}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=161&fit=crop&auto=format`}
            srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: 'https://source.unsplash.com/qay3lNDSHzc',
    title: 'Bed',
  },
  {
    img: 'https://source.unsplash.com/PAxuttF3BvQ',
    title: 'Kitchen',
  },
  {
    img: 'https://source.unsplash.com/v6A4nXxqkFo',
    title: 'Sink',
  },
  {
    img: 'https://source.unsplash.com/Op4XIPUPcD0',
    title: 'Books',
  },
  {
    img: 'https://source.unsplash.com/d_1fsESCexI',
    title: 'Chairs',
  },
  {
    img: 'https://source.unsplash.com/tf-pGvHjec8',
    title: 'Candle',
  },
  {
    img: 'https://source.unsplash.com/0F4EwNkG5To',
    title: 'Laptop',
  },
  {
    img: 'https://source.unsplash.com/DVJ_hCKcQzM',
    title: 'Doors',
  },
  {
    img: 'https://source.unsplash.com/jSgCHNQqEQ4',
    title: 'Coffee',
  },
  {
    img: 'https://source.unsplash.com/BSlEq_yMQIE',
    title: 'Storage',
  },
  {
    img: 'https://source.unsplash.com/CJ1oBPZJFPg',
    title: 'Coffee table',
  },
  {
    img: 'https://source.unsplash.com/LEpilI_K4fs',
    title: 'Blinds',
  },
];
