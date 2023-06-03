import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const ProduPage = () => {
    const {id} = useParams()
    useEffect(()=>{
        if (!id) {
            return;
        }
    })
    axios.get(`/product/${id}`)

    return ( 
        <div>
        Pagina de producto {id}
        </div>
     );
}
 
export default ProduPage;