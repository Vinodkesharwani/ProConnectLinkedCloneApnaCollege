const {default : axios} = require("axios");

export const BASE_URL = "https://proconnectlinkedcloneapnacollege-9nu9.onrender.com"

export const clientServer = axios.create({
    baseURL : BASE_URL ,
    

})