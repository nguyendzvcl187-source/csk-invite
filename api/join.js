export default function handler(req, res) {

  if (req.method === "POST") {

    const data = req.body

    console.log("New member:", data)

    return res.status(200).json({ success: true })

  }

  return res.status(405).json({ error: "Method not allowed" })

}
