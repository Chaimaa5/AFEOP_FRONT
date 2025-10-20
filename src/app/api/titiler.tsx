import axios from "axios";
// import { updateError, updateErrorModal } from "../../slices/errorSlice";
// import store from "../../store";

const Titiler = axios.create({
  baseURL: "http://localhost:8081",
  // withCredentials: true,
});

Titiler.interceptors.response.use(
    (response)=>{
        return response}
    // },
    // (error) => {
    //     if(error.response.data.message == "Unauthorized")
    //         console.log("Unauthorized")
    //     else if (error.response.data.message == "Forbidden")
    //         console.log("Forbidden")
    //     else if (error.response.data.message == "Internal Server Error")  
    //         console.log("Internal Server Error")
    //     else if (error.response.data.message == "Not Found")
    //     {
    //       console.log("No data available for the selected date")
    //       store.dispatch(updateErrorModal(true));
    //       store.dispatch(updateError("No data available for the selected date"))
    //     }
    // }
)

export default Titiler;
