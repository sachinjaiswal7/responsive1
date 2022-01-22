
let val = document.getElementById("namaste");
val.addEventListener('click',showmsg);

function showmsg(){
let name = prompt("input the name");
val.textContent = "name of student is : "+name;
}
let arr = [10,"sachin",22];
for(let i = 0;i<arr.length;i++){
    console.log(arr[i]);
}

