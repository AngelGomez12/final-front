import { Outlet } from 'react-router-dom'
import { NavBar } from '../components/NavBar'
import { Footer } from '../components/Footer'
import { ContextProvider } from '../components/utils/global.context'

export const Layout = () => {
    return (
        <div className='layout'>
            <ContextProvider>
                <NavBar />
                <Outlet />
                <Footer />
            </ContextProvider>
        </div>
    )
}
