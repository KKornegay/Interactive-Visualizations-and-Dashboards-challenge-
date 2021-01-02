function plotData() {
// Read samples.json
    d3.json("samples.json").then (sampledata => {
        // create variables for top 10 samples and values
        var otuTop10 = sampledata.samples[0].otu_ids.slice(0, 10).reverse();
        var sampleValuesTop10 = sampledata.samples[0].sample_values.slice(0,10).reverse();
        var labelsTop10 = sampledata.samples[0].otu_labels.slice(0,10);
        // create variable with corrected id format
        var otuIdsTop10 = otuTop10.map(id => "OTU " + id);
        // create trace for bar chart
        var trace1 = {
            x: sampleValuesTop10,
            y: otuIdsTop10,
            text: labelsTop10,
            marker: {
            color: 'blue'},
            type: "bar",
            orientation: "h"
        };
        // create data variable for bar chart
        var data1 = [trace1];

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
    Plotly.newPlot("bar", data1, layout);

    // create variables for all values
        var otuAll = sampledata.samples[0].otu_ids;
        var sampleValuesAll = sampledata.samples[0].sample_values;
        var labelsAll = sampledata.samples[0].otu_labels;
    // create trace for bubble plot
        var trace2 = {
            x: otuAll,
            y: sampleValuesAll,
            mode: "markers",
            marker: {
                size: sampleValuesAll,
                color: otuAll
            },
            text: labelsAll
        };
    // create data variable for bubble plot
        var data2 = [trace2];

    // create layout for bubble plot
        var layout2 = {
            xaxis:{title: "OTU ID"},
            height: 600,
            width: 1000
        };

    // create bubble plot
    Plotly.newPlot("bubble", data2, layout2);

    });
}

plotData();

// create function to get metadata
function getMetaData(value) {

    //read samples.json
    d3.json("samples.json").then((data) =>{
    // create variable for metadata
        var metadata = data.metadata;
    // create variable for filtered metadata by id
        var filtermeta = metadata.filter(meta => meta.id.toString() === value)[0];
    // create variable to select demographics panel using d3
        var demoPanel = d3.select("#sample-metadata");
    // empty panel before getting new info
        demoPanel.html("");
    // grab the necessary metadata for the id and append to the demographics panel
        Object.entries(filtermeta).forEach((key) => {
            demoPanel.append("h5").text(key[0].toUpperCase() + ": " + key[1] + "\n");
        });
    });
}

