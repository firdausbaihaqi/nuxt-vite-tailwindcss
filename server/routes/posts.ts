import axios from 'axios'
import { Request, Response, Router } from 'express'

const router = Router()

const fetchPost = async () => {
  const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts`)
  return data
}
const fetchPostById = async (id: string | number) => {
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  )
  return data
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
router.get('', async (req: Request, res: Response) => {
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
