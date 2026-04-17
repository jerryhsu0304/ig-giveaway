import { getComments } from './instagram'

export default async function handler(req, res) {
  try {
    const comments = await getComments()

    res.status(200).json({
      total: comments.length,
      comments
    })
  } catch (err) {
    res.status(500).json({
      error: err.message
    })
  }
}
