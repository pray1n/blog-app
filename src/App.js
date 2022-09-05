import React, {useState} from 'react';
import './App.css';
import GetPost from './components/GetPost';
import Header from './components/Header';
import Footer from './components/Footer';
import Sidepanel from './components/Sidepanel';
import {Route,BrowserRouter, Routes} from 'react-router-dom';


function App() {
    const [search, setSearch] = useState('');

    const handleSearch = (search) => {
        setSearch(search);
    }

    return (
        <BrowserRouter>
        
            <Header handleSearch={handleSearch} search={search}/>
            <main>
        
        <Routes>
                    <Route path="/" element={<GetPost content="home" search={search} />}>
            
                    </Route>

                    <Route path="/countries" element={<GetPost content="countries" search={search} />}>
            
                    </Route>

                    <Route path="/cities" element={<GetPost content="cities" search={search} />}>
            
                    </Route>
        </Routes>
                
                <Sidepanel />
            </main>
            <Footer />
        </BrowserRouter>
        
    )
}

export default App;