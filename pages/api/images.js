// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const images = [
    [
      {
        src: 'https://pbs.twimg.com/media/Frxa0nxWYAAHWLj?format=png&name=small',
        type: 0,
      },
      {
        src: 'https://pbs.twimg.com/media/Frxa2TmXoAAMFCB?format=jpg&name=large',
        type: 1,
      },
    ],
    [
      {
        src: 'https://images.unsplash.com/photo-1682687982185-531d09ec56fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        type: 0,
      },
      {
        src: 'https://images.unsplash.com/photo-1682809462945-a083392aacaa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        type: 1,
      },
    ],
  ];
  res.status(200).json(images);
}
