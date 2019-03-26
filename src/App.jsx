import React, { Component } from 'react';
import ReactFC from 'react-fusioncharts';
import FusionCharts from 'fusioncharts';
import Column2D from 'fusioncharts/fusioncharts.charts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import './App.css';


ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

const chartConfigs = {
  type: 'column2d',// The chart type
  width: '700', // Width of the chart
  height: '400', // Height of the chart
  dataFormat: 'json', // Data type
  dataSource: {
      // Chart Configuration
      "chart": {
          "animation": 1,
          "animationDuration": 1,
          "setAdaptiveYMin": 1,
          "baseFontColor": "#FFFFFF",
          "toolTipBgColor": "#5a5a5a",
          "baseFontSize": 14,
          "paletteColors": "#FF0000,#00FF00,#0000FF,#FF00FF,#00FFFF,#FFFF00,#FFF06F,#000000",
          "caption": "Países com maiores reservas de óleo [2017-18]",
          "subCaption": "In MMbbl = One Million barrels",
          "xAxisName": "País",
          "yAxisName": "Reservas (MMbbl)",
          "canvasBGColor":"#282c34",
          "BGColor":"#282c34",
          "numberSuffix": "Mil",
          "theme": "fusion",
      },
      // Chart Data
      "data": [{
          "label": "Venezuela",
          "value": "290"
      }, {
          "label": "Saudi",
          "value": "260"
      }, {
          "label": "Canadá",
          "value": "180"
      }, {
          "label": "Irã",
          "value": "140"
      }, {
          "label": "Rússia",
          "value": "115"
      }, {
          "label": "UAE",
          "value": "100"
      }, {
          "label": "EUA",
          "value": "30"
      }, {
          "label": "China",
          "value": "30"
      }]
  }
};

class App extends Component {
  render() {
    return (
      <div className="App">
          <ReactFC {...chartConfigs} />
      </div>
    );
  }
}

export default App;
