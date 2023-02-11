import '../styles/Mainpage.css'
import HeaderGeneral from "../HeaderGeneral";
import NavBar from "../NavBar";
import MainGrid from "../MainGrid";
import { useEffect, useState } from "react";
import { axiosGet } from "../../services/api";
import axios from 'axios';

const Mainpage = () => {
    const [dataPosts, setDataPosts] = useState([]);

    const URL_POST = '/posts';

    const readPosts = () => {
        axiosGet(URL_POST)
        .then((result) => setDataPosts(result.data))
    }

    useEffect(()=>{
        readPosts();
    }, [])

    return(
        <div className="grid-general">
            <HeaderGeneral/>
            <NavBar/>
            <MainGrid posts={dataPosts}/>
        </div>
    )
}

export default Mainpage;