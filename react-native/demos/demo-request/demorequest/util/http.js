import  axios  from "axios"


const URL ="mon url firebase"

export function requestPost(data) {
    axios.post(URL,data)
}