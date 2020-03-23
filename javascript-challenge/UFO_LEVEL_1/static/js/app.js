
// from data.js
var tableData = data;


// 1. POPULATE THE TABLE

// Select the table body
var tbody = d3.select("tbody");

// Update cells with data
tableData.forEach((UFOReport) => {
    var row = tbody.append("tr");
    Object.entries(UFOReport).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

// 2. SEARCH FUNCTION

// Select the button
var button = d3.select("#filter-btn");

button.on("click", function() {

  // Select the input element 
  var inputElement = d3.select("#datetime");

  var inputValue = inputElement.property("value");

  console.log(inputValue);

  // Create the filtering function
  
  var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);
  console.log(filteredData);

  function filteredAll(sighting) {
    return sighting.datetime === inputValue;
  }
    
  var newtableData = tableData.filter(filteredAll);
  console.log(newtableData);

  newtableData.forEach((sighting) => {
    Object.entries(sighting).forEach(([key, value]) => 
    {console.log(`"Key is: "{'key}" and Value is: " {value}`);})
  });


  //Populating the table with the filtered data

  if (filteredData.length < tableData.length) {
      
      //Delete initial table
      tbody.html(""); 
      if (inputValue == "") {
        tableData.forEach((UFOsight) => {
          var row = tbody.append("tr");
          Object.entries(UFOSight).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
          });
        });
      }

      else {
        newtableData.forEach((sighting) => {
          var row2 = tbody.append("tr");
            console.log(row2);
            Object.entries(sighting).forEach(([key, value]) => {
              var cell2 = row2.append("td");
              cell2.text(value);
              });
        }); 
      }
      
      console.log("got here");
         
      
    };
});

