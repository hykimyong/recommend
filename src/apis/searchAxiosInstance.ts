import axios from "axios";

const searchAxiosInstance = axios.create({
    baseURL: 'https://sch.afreecatv.com/api.php', // API의 기본 URL
    // 기타 axios 설정
});

export default searchAxiosInstance;