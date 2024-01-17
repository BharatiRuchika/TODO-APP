//user click on checkbox event is handled here
function checkboxClicked(e){
    var id = e.target.id;
    var row = document.getElementById(`row-${id}`)
    if(e.target.checked){
        row.childNodes[1].style.textDecoration = "line-through";
        row.childNodes[6].style.textDecoration = "line-through";
    }else{
        row.childNodes[1].style.textDecoration = "none"
        row.childNodes[6].style.textDecoration = "none";
    }
    var para = document.getElementById(`donePara-${id}`)
    if (para.style.display=="none"){
         para.style.display = "block"
    }else{
         para.style.display = "none"
    }
 }


 function deleteTask(){
    const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    const checkedValues = Array.from(checkboxes).map(checkbox => checkbox.id);
    window.location.href = `http://localhost:8000/task/deleteTask/${checkedValues}`
 }

  
document.addEventListener("DOMContentLoaded", function () {
    const dropdownItems = document.querySelectorAll(".dropdown-item");
    const selectedOptionInput = document.getElementById("selectedOption");
    dropdownItems.forEach(function (item) {
      item.addEventListener("click", function () {
        const selectedValue = item.getAttribute("data-value");
        console.log("selectedValue",selectedValue)
        selectedOptionInput.value = selectedValue;
        document.getElementById("dropdownMenuButton").innerText = item.innerText;
      });
    });  
  });