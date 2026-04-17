import { useState } from 'react'
import axios from 'axios'

export default function App() {
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)

  const draw = async () => {
    setLoading(true)
    const res = await axios.get('/api/raffle')
    setResult(res.data)
    setLoading(false)
  }

  return (
    <div style={{ padding: 40, fontFamily: 'Arial' }}>
      <h1>IG 留言抽獎系統</h1>

      <button onClick={draw}>
        開始抽獎
      </button>

      {loading && <p>抽獎中...</p>}

      {result && (
        <div style={{ marginTop: 20 }}>
          <h2>🏆 得獎者</h2>
          <p>{result.winner}</p>
          <p>參與人數：{result.total}</p>
        </div>
      )}
    </div>
  )
}
