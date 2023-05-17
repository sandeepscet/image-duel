// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const images = [
    [
      {
        src: '/images/1/1-r.jpg',
        type: 0,
      },
      {
        src: '/images/1/1-m.jpg',
        type: 1,
      },
    ],
    [
      {
        src: '/images/1/2-r.jpg',
        type: 0,
      },
      {
        src: '/images/1/2-m.png',
        type: 1,
      },
    ],
    [
      {
        src: '/images/1/3-r.jpg',
        type: 0,
      },
      {
        src: '/images/1/3-m.png',
        type: 1,
      },
    ],
    [
      {
        src: '/images/1/4-r.jpg',
        type: 0,
      },
      {
        src: '/images/1/4-m.jpg',
        type: 1,
      },
    ],
    [
      {
        src: '/images/1/5-r.jpg',
        type: 0,
      },
      {
        src: '/images/1/5-m.png',
        type: 1,
      },
    ],
    [
      {
        src: '/images/1/6-r.jpg',
        type: 0,
      },
      {
        src: '/images/1/6-m.png',
        type: 1,
      },
    ],
    [
      {
        src: '/images/1/7-r.jpg',
        type: 0,
      },
      {
        src: '/images/1/7-m.jpg',
        type: 1,
      },
    ],
    [
      {
        src: '/images/1/8-r.jpg',
        type: 0,
      },
      {
        src: '/images/1/8-m.png',
        type: 1,
      },
    ],
    [
      {
        src: '/images/1/9-r.jpg',
        type: 0,
      },
      {
        src: '/images/1/9-m.jpg',
        type: 1,
      },
    ],
    [
      {
        src: '/images/1/10-r.jpg',
        type: 0,
      },
      {
        src: '/images/1/10-m.png',
        type: 1,
      },
    ],
    [
      {
        src: '/images/1/11-r.jpg',
        type: 0,
      },
      {
        src: '/images/1/11-m.png',
        type: 1,
      },
    ],
    [
      {
        src: '/images/1/12-r.jpg',
        type: 0,
      },
      {
        src: '/images/1/12-m.png',
        type: 1,
      },
    ],
    [
      {
        src: '/images/1/13-r.jpg',
        type: 0,
      },
      {
        src: '/images/1/13-m.jpg',
        type: 1,
      },
    ],
  ];
  res.status(200).json(images);
}
