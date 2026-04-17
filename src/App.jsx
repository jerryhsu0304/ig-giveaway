import { useState } from 'react'
import axios from 'axios'

export default function App() {
  const [winner, setWinner] = useState(null)
  const [loading, setLoading] = useState(false)

  const runRaffle = async () => {
    setLoading(true)

    const res = await axios.get('/api/raffle')

    setWinner(res.data)
    setLoading(false)
  }

  return (
    <div style={{ padding: 40 }}>
      <h1>IG Giveaway Pro</h1>

      <button onClick={runRaffle}>
        Start Draw
      </button>

      {loading && <p>Drawing...</p>}

      {winner && (
        <div>
          <h2>Winner:</h2>
          <p>{winner.winner}</p>
          <p>Total participants: {winner.total}</p>
        </div>
      )}
    </div>
  )
}
