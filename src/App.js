import "./App.css";
import Hardware from "./components/Hardware";
import Intro from "./components/Intro";
import NavigationBar from "./components/NavigationBar";
import Software from "./components/Software"

import "./style/landingPage.css"

function App() {
  return (
    <div>
      <div className="myBG">
        <NavigationBar />
        <Intro />
      </div>
      <div className="software">
        <Software />
      </div>
      <div className="hardware">
        <Hardware />
      </div>
    </div>
  )
}

export default App;
