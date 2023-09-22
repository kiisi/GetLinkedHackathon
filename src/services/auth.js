import request from "./request";

const authService = {
    register: (data) => request.post('/hackathon/registration', data)
}

export default authService