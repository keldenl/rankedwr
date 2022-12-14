
import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import { Home } from './pages/Home';
import { FullTierList } from './pages/FullTierList';
import { ChampionDetails } from './pages/ChampionDetails';
import { Champions } from './pages/Champions';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import ScrollToTop from './components/ScrollToTop';


function App() {
    return (
        <Router>
            <ScrollToTop />
            <div>
                <Navbar />
                <Routes>
                    <Route
                        path="/"
                        element={<Home />}
                    />
                    <Route
                        path="/champions"
                        element={<Champions />}
                    />
                    <Route
                        path="/tier-list"
                        element={<FullTierList />}
                    />
                    <Route
                        path="/champion/:championName"
                        element={<ChampionDetails />}
                    />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
