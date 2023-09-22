import request from "./request";

const appService = {
    getCategory: () => request.get('/hackathon/categories-list'),
    sendContactForm: (data) => request.post('/hackathon/contact-form', data)
}

export default appService