import axios from "axios";

const movieDb = axios.create({
    baseURL:'https://api.themoviedb.org/3/movie',
    params:{
        api_key:'9f8c36c1dd07b6b80ea7865ff7b8e815',
        language:'es-ES'
    }

})
export default movieDb

// https://api.themoviedb.org/3/movie/now_playing?api_key=9f8c36c1dd07b6b80ea7865ff7b8e815&language=es-ES