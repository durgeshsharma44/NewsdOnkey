import logo from './logo.svg';
import './App.css';
import Navbar from './component/navbar';
import {
  BrowserRouter as Router, 
  Route,
  Routes,
  Link
} from "react-router-dom";
import React, { Component } from 'react'
import LoadingBar from 'react-top-loading-bar';

import News from './component/news';
export default class App extends Component {

  state={
    progress:0,
    // apikey:process.env.REACT_APP_NEWS_API='a1d6aabb20f14995b3da0cc890c55452' ese karke aap apni api key loacl foldar se pas kar sakte ho
  }

  setProgress=(progress)=>{
   this.setState({progress:progress})
  }
  render() {
    return (
      <div>
     
        <Router>
        <Navbar/>
        <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        
      />
        <Routes>
         <Route exact path="/" element={<News setProgress={this.setProgress} />} />
         <Route exact path="/sports" element={<News  setProgress={this.setProgress} key="sports" category='sports'/>} />
         <Route exact path="/science" element={<News setProgress={this.setProgress} key="science" category='science' />} />
         <Route exact path="/health" element={<News setProgress={this.setProgress} key="helth" category='health' />} />
         <Route exact path="/technology" element={<News setProgress={this.setProgress} key="technology" category='technology' />} />
         <Route exact path="/entertainment" element={<News setProgress={this.setProgress} key="entertainment" category='entertainment' />} />

         {/* agr yaha pr  key nhi lagate to sirf path change hoga pr remount nhi hoga vo karne k lie refresh karna padega kyonki mount to phle se ho rkha h */}
        </Routes>
        </Router>

      </div>
    )
  }
}



