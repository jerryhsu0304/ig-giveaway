import axios from 'axios'

const TOKEN = process.env.IG_TOKEN
const IG_POST_ID = process.env.IG_POST_ID

export async function getComments() {
  const url = `https://graph.facebook.com/v19.0/${IG_POST_ID}/comments`

  const res = await axios.get(url, {
    params: {
      access_token: TOKEN,
      fields: 'id,text,username,timestamp'
    }
  })

  return res.data.data
}
