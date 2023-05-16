import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient({
  log: [
    {
      emit: 'stdout',
      level: 'error',
    },
    {
      emit: 'stdout',
      level: 'warn',
    },
  ],
});
const statsId = '64637c2b546d3d7384e7675c';

export default async function handle(req, res) {
  try {
    if (req.method === 'POST') {
      const winner = parseInt(req.query.winner, 10);
      const data = await prisma.stats.findUnique({
        where: { id: statsId },
      });

      if (winner === 0) {
        data.humanWins = data.humanWins + 1;
      } else {
        data.machineWins = data.machineWins + 1;
      }

      const upsertUser = await prisma.stats.upsert({
        where: {
          id: statsId,
        },
        update: {
          humanWins: data.humanWins,
          machineWins: data.machineWins,
        },
        create: {
          humanWins: 0,
          machineWins: 0,
        },
      });

      res.status(200).json(upsertUser);
    } else {
      const stats = await prisma.stats.findMany();
      console.log(stats);
      res.status(200).json(stats);
    }
  } catch (error) {
    console.log({ error });
    prisma.$disconnect();
    res.status(500).json({
      error: { message: 'Internal Server Error', err: error },
      status: 500,
    });
  }
}
