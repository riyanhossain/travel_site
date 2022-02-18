import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export default function ImageListSreemongal() {
  return (
    <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
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
    img: 'https://source.unsplash.com/Ew4zObtcUPQ',
    title: 'Breakfast',
  },
  {
    img: 'https://source.unsplash.com/c61jL_NpAn8',
    title: 'Burger',
  },
  {
    img: 'https://source.unsplash.com/A2FfWb50SiI',
    title: 'Camera',
  },
  {
    img: 'https://source.unsplash.com/ySQXoZLAsmc',
    title: 'Coffee',
  },
  {
    img: 'https://source.unsplash.com/QfbyNUCVNos',
    title: 'Hats',
  },
  {
    img: 'https://source.unsplash.com/Sr9oVMRGV70',
    title: 'Honey',
  },
  {
    img: 'https://source.unsplash.com/Lj6OgKfNkdI',
    title: 'Basketball',
  },
  {
    img: 'https://source.unsplash.com/GsoYimQ6U9g',
    title: 'Fern',
  },
  {
    img: 'https://source.unsplash.com/JKbyACnTvuE',
    title: 'Mushrooms',
  },
  {
    img: 'https://source.unsplash.com/P16k5cJX-Fw',
    title: 'Tomato basil',
  },
  {
    img: 'https://source.unsplash.com/XkYAr4NoF8c',
    title: 'Sea star',
  },
  {
    img: 'https://source.unsplash.com/M5L0vUGqX84',
    title: 'Bike',
  },
];
