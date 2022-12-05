let myArray = [
    ["Group Id", "Project Name"],
    ["G6", "Develop a Software for Categorization of cases"],
    ["G8", "Develop a Software for Categorization of cases"],
    ["G41", "Crowd Sourcing model for preparing large question banks"],
    ["G47", "Crowd Sourcing model for preparing large question banks"],
    ["G30", "Online project platform for sharing"],
    ["G26", "Online project platform for sharing"],
    ["G33", "Centralized grievance system portal"],
    ["G38", "Centralized grievance system portal"]
    ]
function createTable(tableData) {
    var table = document.createElement('table');
    var tableBody = document.createElement('tbody');
      
    tableData.forEach(function(rowData) {
        var row = document.createElement('tr');
      
        rowData.forEach(function(cellData) {
            var cell = document.createElement('td');
            cell.appendChild(document.createTextNode(cellData));
            row.appendChild(cell);
          });
      
          tableBody.appendChild(row);
        });
      
        table.appendChild(tableBody);
        document.body.appendChild(table);
      }
createTable(myArray)