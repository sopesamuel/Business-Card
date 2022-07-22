import React from "react"
import ReactDOM from "react-dom"
import './App.css'
import image from "./img copy.jpg"
import Title from "./components/NavTitle"
import Content from "./components/Content"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="App">
      <img src={image} />
<Title />
<Content />
<Footer />
    </div>
  );
}

export default App;

ReactDOM.render(<App />, document.getElementById("root"))