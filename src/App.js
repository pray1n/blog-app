import './App.css'
import GetPost from './components/GetPost'
import Header from './components/Header'
import Footer from './components/Footer'
import Sidepanel from './components/Sidepanel'


function App() {
  
  
  return (
    
    <div>
    <Header />
    
    <hr/>
    <div className="main">
    <GetPost />
    </div>
    <hr/>
    <Sidepanel />
    <Footer />
    </div>
  );
}


    //   // logs the field with ID title
    //  console.log(entry.sys.contentType.sys.id)
    // });
    // const response = await client.getEntries({ content_type: 'blogPost'})
    return (
        <div>
            <Header />

            <div className="main">
                <GetPost />
            </div>
            <hr />
            <Sidepanel />
            <Footer />
        </div>
    )
}

export default App
