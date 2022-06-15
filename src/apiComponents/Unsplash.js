import axios from "axios";

export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization: 'Client-ID dUgFTOsdeiAqmhWULamSE5UZ6G80Do17f2LOu6sK7ys'
    }
})