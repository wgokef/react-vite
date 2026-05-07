import { Route, Routes } from 'react-router-dom'

import MainLayout from '@/layouts/MainLayout/MainLayout';
import Home from '@/pages/Home/Home';
import About from '@/pages/About/About';
import NotFound from '@/pages/NotFound/NotFound';
import StarWars from '@/layouts/MainLayout/StarWars/StarWars';
import Verstka from '@/pages/Verstka/Verstka';
import Shifrovka from '@/pages/Shifrovka/Shifrovka';


const AppRouter = () => {
    return <Routes>
        <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="/star/" element={<StarWars />}>
            <Route index element={<Verstka />} />
        </Route>
        <Route path="shifrovka" element={<Shifrovka />} />
    </Routes>
};

export default AppRouter;