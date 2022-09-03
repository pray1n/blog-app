import './App.css'
import GetPost from './components/GetPost'
import Header from './components/Header'
import Footer from './components/Footer'
import Sidepanel from './components/Sidepanel'

function App() {
    return (
        <div>
        
            <Header />
            
            <main>
                <GetPost />
                <Sidepanel />
            </main>
            
            <Footer />
        </div>
    )
}

export default App;