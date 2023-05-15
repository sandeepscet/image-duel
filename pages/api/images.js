// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const images = [
    [
      'https://pbs.twimg.com/media/Frxa0nxWYAAHWLj?format=png&name=small',
      'https://pbs.twimg.com/media/Frxa2TmXoAAMFCB?format=jpg&name=large',
    ],
  ];
  res.status(200).json(images);
}
