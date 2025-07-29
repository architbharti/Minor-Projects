// Heading of the list
let head = document.createElement("h3");
head.textContent = "SET YOUR TASKS FOR THE DAY";
document.querySelector(".myInp").appendChild(head);


// text box and add button
let div1 = document.createElement("div");
div1.classList.add("inpBox");
document.querySelector(".myInp").appendChild(div1);

let text = document.createElement("input");
text.setAttribute("type" , "text");
text.setAttribute("id" , "inp");
document.querySelector(".inpBox").appendChild(text);

let lbl = document.createElement("label");
lbl.setAttribute("for" , "inp");
document.querySelector(".inpBox").appendChild(lbl);

let btn1 = document.createElement("button");
btn1.textContent = "Add Task";
btn1.classList.add("addBtn"); 
btn1.style.backgroundColor = "darkblue";
document.querySelector(".inpBox").appendChild(btn1);

let div2 = document.createElement("div");
div2.classList.add("items");
document.querySelector(".myInp").appendChild(div2);


btn1.addEventListener("click" , function(){

        let div3 = document.createElement("div");
        div2.appendChild(div3);
        div3.classList.add("item") ;
        
        let val = document.querySelector("#inp").value;
        let task = document.createElement("input");
        task.setAttribute("type" , "text");
        task.disabled = true;
        task.value = val;
        task.classList.add("task");
        div3.appendChild(task);

        let btn2 = document.createElement('button');
        btn2.textContent = "Save";
        btn2.classList.add("updtBtn");
        div3.appendChild(btn2);
        btn2.addEventListener("click" , function(){
            task.disabled = true;
        })

        let btn3 = document.createElement('button');
        btn3.textContent = "Edit";
        btn3.classList.add("updtBtn");
        div3.appendChild(btn3);
        btn3.addEventListener("click" , function(){
            task.disabled = false;
            task.focus();
        })

        let btn4 = document.createElement('button');
        btn4.textContent = "Delete";
        btn4.classList.add("updtBtn");
        div3.appendChild(btn4);
        btn4.addEventListener("click" , function(){
            div3.remove();
        });

        text.value = "";
});




