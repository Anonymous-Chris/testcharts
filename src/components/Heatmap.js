// STEP 1 - Include Dependencies

// Include react
import React from 'react';
import ReactDOM from 'react-dom';

// Include the react-fusioncharts component
import ReactFC from 'react-fusioncharts';

// Include the fusioncharts library
import FusionCharts from 'fusioncharts';

// Include the chart type
import Column2D from 'fusioncharts/fusioncharts.charts';

// Include the theme as fusion
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

// Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

// STEP 2- Define the categories representing the labels on the X-axis
const categories =  [
    {
      "category": [
        { "label": "Qz1" },
        { "label": "Q2" },
        { "label": "Q3" },
        { "label": "Q4" },
        { "label": "Q1" },
        { "label": "Q2" },
        { "label": "Q3" },
        { "label": "Q4" }
      ]
    }
  ]
  // STEP 3- Construct the dataset comprising multiple series
  const dataset = [
    {
      "seriesname": "Previous Year",
      "data": [
        { "value": "1" },
        { "value": "2" },
        { "value": "5" },
        { "value": "16" },
        { "value": "1" },
        { "value": "2" },
        { "value": "5" },
        { "value": "16" }
      ]
    },
    {
      "seriesname": "Current Year",
      "data": [
        { "value": "20" },
        { "value": "2" },
        { "value": "20" },
        { "value": "22" },
        { "value": "20" },
        { "value": "2" },
        { "value": "20" },
        { "value": "22" }
      ]
    }
  ]

// STEP 4 - Creating the JSON object to store the chart configurations
const chartConfigs = {
    type: 'mscolumn2d',// The chart type
    width: '100%', // Width of the chart
    height: '100%', // Height of the chart
    dataFormat: 'json', // Data type
     dataSource: {
    //Chart Configurations
      "chart": {
        "theme": "fusion",
        "caption": "Comparison of Quarterly Revenue",
        "xAxisname": "Quarter",
        "yAxisName": "Revenues (In USD)",
        "numberPrefix": "$",
        "plotFillAlpha": "80",
        "divLineIsDashed": "1",
        "divLineDashLen": "1",
        "divLineGapLen": "1"
      },
      "categories": categories,
      "dataset": dataset,
    }
  }
// STEP 5 - Creating the DOM element to pass the react-fusioncharts component
class Multibar extends React.Component {
  render() {
     return (
     <ReactFC
        {...chartConfigs}/>

     );
  }
}

export default Multibar;