export default function handler(req, res) {
  const comments = [
    { username: 'alice' },
    { username: 'bob' },
    { username: 'cindy' },
    { username: 'david' },
    { username: 'alice' }
  ]

  // 去重
  const uniqueUsers = [...new Set(comments.map(c => c.username))]

  const winner =
    uniqueUsers[Math.floor(Math.random() * uniqueUsers.length)]

  res.status(200).json({
    total: uniqueUsers.length,
    winner
  })
}
