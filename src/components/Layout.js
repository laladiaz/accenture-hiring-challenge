import { Outlet } from "react-router-dom"

// this component is for the router. Allows nested routing

const Layout = () => {
    return (
        <main>
            <Outlet/>
        </main>
    )
}

export default Layout;