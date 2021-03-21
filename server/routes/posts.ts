import { Request, Response, Router } from 'express'
import got from 'got'

const router = Router()

const fetchPost = () => {
  return got.get(`https://jsonplaceholder.typicode.com/posts`).json()
}

const fetchPostById = (id: string | number) => {
  return got.get(`https://jsonplaceholder.typicode.com/posts/${id}`).json()
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
router.get('/', async (req: Request, res: Response) => {
  return res.json(await fetchPost())
})

/* GET user by ID. */
router.get('/:id', async (req: Request, res: Response) => {
  const id = parseInt(req.params.id)
  if (id >= 0) {
    res.json(await fetchPostById(id))
  } else {
    res.sendStatus(404)
  }
})

export default router
