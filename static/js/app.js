function plotData() {
// Read samples.json
    d3.json("samples.json").then (sampledata => {
        // create variables for top 10 samples and values
        var otuTop10 = sampledata.samples[0].otu_ids.slice(0, 10).reverse();
        var sampleValues = sampledata.samples[0].sample_values.slice(0,10).reverse();
        var labels = sampledata.samples[0].otu_labels.slice(0,10);
        // create variable with corrected id format
        var otuIds = otuTop10.map(id => "OTU " + id);
        // create trace for bar chart
        var trace1 = {
            x: sampleValues,
            y: otuIds,
            text: labels,
            marker: {
            color: 'blue'},
            type: "bar",
            orientation: "h"
        };
        // create data variable for bar chart
        var data = [trace1];

        // create layout for bar chart
        var layout = {
            title: "Top 10 Operation Taxinomic Units",
            yaxis: {
                tickmode: "linear"
            },
            margin: {
                l: 100,
                r: 100,
                t: 100,
                b: 30
            }
        };
    // create the bar plot
    Plotly.newPlot("bar", data, layout);

    })
}