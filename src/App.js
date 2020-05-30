import React, { Component } from 'react';
import Gantt from './components/Gantt';
import Toolbar from './components/Toolbar';
import data from './components/data/dataArr.json';

import './App.css';

const projectData = {
  data: data.data,
  links: data.links
};

class App extends Component {
  state = {
    currentZoom: 'Days',
    
  };

  handleZoomChange = (zoom) => {
    this.setState({
      currentZoom: zoom
    });
  }

  render() {
    const { currentZoom} = this.state;
    return (
      <div>
        <div className="zoom-bar">
          <Toolbarr
            zoom={currentZoom}
            onZoomChange={this.handleZoomChange}
          />
        </div>
        <div className="gantt-container">
          <Gantt_Chart
            tasks={projectData}
            zoom={currentZoom}
          />
        </div>
        
      </div>
    );
  }
}

export default App;

