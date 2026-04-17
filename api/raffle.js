import { getComments } from './instagram'

function pickWinner(list) {
  return list[Math.floor(Math.random() * list.length)]
}

export default async function handler(req, res) {
  try {
    const comments = await getComments()

    // 去重（同一人只算一次）
    const unique = {}
    comments.forEach(c => {
      unique[c.username] = c
    })

    const users = Object.keys(unique)

    if (users.length === 0) {
      return res.status(400).json({ error: 'no participants' })
    }

    const winner = pickWinner(users)

    res.status(200).json({
      total: users.length,
      winner
    })
  } catch (err) {
    res.status(500).json({
      error: err.message
    })
  }
}
