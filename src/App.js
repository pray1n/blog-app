import React, {useState} from 'react';
import './App.css';
import GetPost from './components/GetPost';
import Header from './components/Header';
import Footer from './components/Footer';
import Sidepanel from './components/Sidepanel';

function App() {
    const [search, setSearch] = useState('');

    const handleSearch = (search) => {
        setSearch(search);
    }

    return (
        <div>
            <Header handleSearch={handleSearch} search={search}/>
            <main>
                <GetPost search={search}/>
                <Sidepanel />
            </main>
            <Footer />
        </div>
    )
}

export default App;