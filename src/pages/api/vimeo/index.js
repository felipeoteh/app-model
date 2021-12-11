import axios from "axios"

export default async function Vimeo(req, res){
        
    let config = {
        headers: {
        Authorization: `Bearer ${process.env.VIMEO_ACCESS_TOKEN}`
        }
    }

    const tutorial = await axios.get(`https://api.vimeo.com/tutorial`, config)
    const vimeoRes = await tutorial.data
        
    res.json(vimeoRes)

}