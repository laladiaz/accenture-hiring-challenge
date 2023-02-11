import '../styles/Mainpage.css'
import HeaderGeneral from "../HeaderGeneral";
import NavBar from "../NavBar";
import MainGrid from "../MainGrid";

const Mainpage = () => {
    return(
        <div class="grid-general">
            <HeaderGeneral/>
            <NavBar/>
            <MainGrid/>
        </div>
    )
}

export default Mainpage;