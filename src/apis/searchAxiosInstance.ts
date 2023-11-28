import axios from "axios";

const searchAxiosInstance = axios.create({
    baseURL: 'https://sch.afreecatv.com/api.php'
});

export default searchAxiosInstance;