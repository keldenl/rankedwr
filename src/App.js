
import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import { Home } from './pages/Home';
import { FullTierList } from './pages/FullTierList';
import { ChampionDetails } from './pages/ChampionDetails';


function App() {
    return (
        <Router>
            <div>
                {/* <Navbar /> */}
                <Routes>
                    <Route
                        path="/"
                        element={<Home />}
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
            </div>
        </Router>
    );
}

export default App;
