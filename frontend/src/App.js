  
import React from 'react';
import Homepage from './components/Homepage'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

const colors = ["lightblue", "lightyellow", "lightpink", "cornsilk", "lavenderblush", "moccasin", "azure", "floralwhite", "honeydew", "mintcream", "thistle"]

let i1 = Math.floor(colors.length * Math.random())
var color1 = colors[i1]
let i2 = Math.floor(colors.length * Math.random())
var color2 = i2 !== i1 ? colors[i2] : "lightgray"


const App = () => {
  return(
    <div className="app" style={{
      "backgroundImage": `radial-gradient(${color1}, ${color2})`
    }}>
      <Router>
        {/* <Toolbar /> */}
        <Switch>
          <Route exact path="/" component={Homepage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;