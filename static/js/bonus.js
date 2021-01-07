function plotGaugeChart(wfreq) {

    // var demoPanel = d3.selectAll("#sample-metadata");
    // var gaugeValue = demoPanel.text(wfreq).property("value");
    var data = [
        {
          domain: { x: [0, 1], y: [0, 1] },
          value: wfreq,
          title: { text: "Belly Button Washing Frequency" },
          type: "indicator",
          mode: "gauge+number",
          gauge: {
            axis: { range: [null, 9] },
            steps: [
              { range: [0, 1], color: "lime" },
              { range: [1, 2], color: "lightseagreen" },
              { range: [2, 3], color: "lawngreen" },
              { range: [3, 4], color: "olive" },
              { range: [4, 5], color: "darkseagreen" },
              { range: [5, 6], color: "forestgreen" },
              { range: [6, 7], color: "green" },
              { range: [7, 8], color: "limegreen" },
              { range: [8, 9], color: "seagreen" }
            ],
          }
        }
      ];
      
      var layout = { width: 600, height: 450, margin: { t: 0, b: 0 } };
      Plotly.newPlot('gauge', data, layout);

}
plotGaugeChart();