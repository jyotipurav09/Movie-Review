// Local storage...
export const getAllMovies = () => {
    const movies = localStorage.getItem('movies');
    return movies ? JSON.parse(movies) : [];
};

export const getMovieById = (id) => {
    const movies = getAllMovies();
    return movies.find(movie => movie.id === parseInt(id));
};

export const saveMovies = (movies) => {
    localStorage.setItem('movies', JSON.stringify(movies));
};
//----------------------------------
import axios from "axios";

const API_URL = "https://localhost:7015/api";
export const login = async (email, password) => {
    try {
        const response = await axios.post(`${API_URL}/auth/login`, {
            email,
            password
        });

        const data = response.data;

        if (data.token) {
            localStorage.setItem("token", data.token);
        }

        localStorage.setItem("currentUser", JSON.stringify(data.user));

        return { success: true, user: data.user };
    } catch (error) {
        return { success: false, error: "Invalid email or password" };
    }
};







// API

//----------------------------------------------- npm install axios
// import axios from 'axios';
// const API_URL = "";

// export const getAllMovies = async () => {
//     const response = await axios.get(API_URL);
//     return response.data;
// };

// export const getMovieById = async (id) => {
//     const response = await axios.get(`${API_URL}/${id}`);
//     return response.data;
// };