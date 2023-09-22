import toast from "react-hot-toast";

export default class HttpErrorException extends Error{
    constructor(error){
        super()
        this.error = error
    }

    trigger(){
        console.log(this.error)
        if(this.error?.response?.data?.email){
            toast.error(this.error?.response?.data?.email[0])
        }
        if(this.error?.response?.data?.phone_number){
            toast.error(this.error?.response?.data?.phone_number[0])
        }
        if(this.error?.response?.data?.group_size){
            toast.error(this.error?.response?.data?.group_size[0])
        }
        if (this.error?.code === "ERR_NETWORK") {
            toast.error(this.error?.message)
        }
    }
}