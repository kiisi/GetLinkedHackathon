import request from "./request";

const appService = {
    getCategory: () => request.get('/hackathon/categories-list')
}

export default appService