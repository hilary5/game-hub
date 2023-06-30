import axios from "axios";


export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "fb65bb5513e84f80b6648a226f5b27ce"
    }
})