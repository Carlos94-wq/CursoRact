 import axios from "axios";

 export const pokemonApi = axios.create({
    baseURL: process.env.REACT_APP_API_URL
 })