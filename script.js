let num = 1;
let n = 1;
const userInput = document.getElementById("inputTask");
const userInputBtn = document.getElementById("inputTaskButton");
const addNewDiv = document.getElementById("itemContainer");
let btnSytleAfterDone;
let paraDecoAfterDone;
let rmDivAfterCross;
let rmElement;
let BtnImage = "bg-[url('button.png')]";
let userType;
let newDiv;
let markBtnState = false;

function addingNewDiv(userType , n){
   
    newDiv = document.createElement("div");
    newDiv.id = `newDiv${n}`;
    newDiv.innerHTML = ` <div id="divToRemove${n}" class="flex justify-between items-center" >
    <div id="clickDivForDone${n}" class="flex justify-start items-center">
    <button id="btnForMark${n}" class=" bg-slate-100 rounded-full mr-2 border-2 border-blue-600 bg-cover h-[20px] w-[20px] sm:h-[25px] sm:w-[25px]"></button>
    <p id="lineThroughPara${n}" class="cursor-pointer items-center text-center sm:text-xl text-md sm:font-semibold text-violet-300 justify-center mb-1"> 
    ${userType}
    </p>
    </div>
    <button id="removeDivBtn${n}" class=" bg-slate-500 hover:text-red-400 text-white font-bold text-lg bg-opacity-25 rounded-full items-end border-2 border-none bg-cover h-[20px] w-[20px] sm:h-[30px] sm:w-[30px]">X</button>
    </div>`
    addNewDiv.appendChild(newDiv);
   
}

// userInputBtn.addEventListener(('keydown') , (event) =>{
//     if(event.key === "Enter"){
//         if(userInput.value !== ""){
//             userType = userInput.value;
//             addingNewDiv(userType , n);
//             userInput.value = "";
//             n = n + 1;
//         }
//         else{
//             alert("please enter the task");
//         }
//     }
//     else{
//         alert("press enter to add item in list");
//     }
// });
userInputBtn.addEventListener(('click') , () =>{
    if(userInput.value !== ""){
        userType = userInput.value;
        addingNewDiv(userType , n);
        userInput.value = "";
        n = n + 1;
    }
    else{
        alert("please enter the task");
    }
});



function extractNumbersFromString(str) {
    // Regular expression to match numbers in the string
    let regex = /\d+/g;
    
    // Extract numbers from the string using the match method
    let numbersArray = str.match(regex);
   
    // Convert array of strings to array of numbers
    return numbersArray[0];
}

let elementId = "divToRemove1";

addNewDiv.addEventListener(('mouseover'), (event) => {
    let hoveredElement = event.target;
    elementId = hoveredElement.id;
    num = parseInt(extractNumbersFromString(elementId));
    console.log(num);
    btnSytleAfterDone = document.getElementById(`btnForMark${num}`);
    paraDecoAfterDone = document.getElementById(`lineThroughPara${num}`);
    rmDivAfterCross = document.getElementById(`removeDivBtn${num}`);
    rmElement = document.getElementById(`newDiv${num}`);
    elementId = "divToRemove1";

    
    btnSytleAfterDone.addEventListener(('click') , () =>{
        console.log(num);
        if(!markBtnState){
            btnSytleAfterDone.classList.remove("bg-slate-100","border-blue-600");
            btnSytleAfterDone.classList.add(BtnImage ,"border-none", "scale-150");
            paraDecoAfterDone.classList.add("line-through");
            markBtnState = true;
        }
        else{
            btnSytleAfterDone.classList.remove(BtnImage ,"border-none", "scale-150");
            btnSytleAfterDone.classList.add("bg-slate-100" ,"border-blue-600");
            paraDecoAfterDone.classList.remove("line-through");
            markBtnState = false;
        }
    });

    rmDivAfterCross.addEventListener(('click') , () =>{ 
        console.log(num);
        addNewDiv.removeChild(rmElement)
    }); 
});

 
