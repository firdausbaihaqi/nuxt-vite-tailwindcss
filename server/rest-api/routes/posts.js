import { Router } from 'express';
import got from 'got';

const router = Router();

const resource = 'https://jsonplaceholder.typicode.com';

router.get('/', async (req, res) => {
  return res.json(await got.get(`${resource}/posts`).json());
});

router.get('/:id', async (req, res) => {
  const id = parseInt(req.params.id);
  if (id >= 0) {
    res.json(await got.get(`${resource}/posts/${id}`).json());
  } else {
    res.sendStatus(404);
  }
});

export default router;
