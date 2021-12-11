export default function videos(req, res) {
    const {
      method
    } = req
  
    switch (method) {
      case 'POST':
        // pegar no mongo
        res.status(200).json({ msg: method })
        break
      case 'PUT':
        // Update or create data in your database
        res.status(200).json({ id, name: name || `User ${id}` })
        break
      default:
        res.setHeader('Allow', ['GET', 'PUT'])
        res.status(405).end(`Method ${method} Not Allowed`)
    }
  }