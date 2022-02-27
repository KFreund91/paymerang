var trace1 = {
    x: ['AWS', 'Tazza', 'Apple', 'Microsoft', 'Fraud Busters', 'Github'],
    y: [10000,3200.45,8020.45,3603.96,300.08,340],
    text: ['$10,000', '$3200.45', '8020.45', '3603.96', '300.08', '340'],
    type: "bar"
  };
  
  var data1 = [trace1];
  
  var layout = {
    title: "Customer Payment Data"
  };
  
  Plotly.newPlot("plot", data1, layout);
