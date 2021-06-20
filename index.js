const button = document.querySelector("button");
const displayArea = document.querySelector("span");

let checkYear = ()=>{
    let year = parseInt(document.getElementById('yearID').value);
    let value;
    
    
      if(year % 4 === 0 && year % 100 === 0 ){
        if(year % 400 === 0){
          value = "The year "+ year +", is a leap year.";
        }else{
          value = "The year "+ year +", is not a leap year.";
        }
      }else if(year % 4 === 0){
          value = "The year "+ year +", is a leap year.";
    
      }else{
          value= "The year "+ year +", is not a leap year.";
      }
      displayArea.innerHTML = value;
    }

button.addEventListener("click", checkYear);