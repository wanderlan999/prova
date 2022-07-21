function myFunction() {
    var table = document.getElementById("myTable");
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    
    cell2.innerHTML = document.getElementById("myEmail").value;
    cell1.innerHTML = document.getElementById("myNome").value;
    cell3.innerHTML = document.getElementById("myDate").value;
    cell4.innerHTML = document.getElementById("myTel").value;
    
  }

 