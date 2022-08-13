import './App.css';

function App() {
  var contentful = require('contentful');
  var client = contentful.createClient({
    space: 'a5pwwbsii6k0',
    accessToken: 'r8cRv4S5kkPOszbqR32nOugt9yZF-yt007mJM3Mmq0s',
  });
  client.getEntry('1vRgHx5IZXSR8ayaeytQnz').then(function (entry) {
    // logs the entry metadata
    console.log(entry.sys);
  
    // logs the field with ID title
    console.log(entry.fields.productName);
  });
  return (
    <p>this is a test</p>
  );
}

export default App;

