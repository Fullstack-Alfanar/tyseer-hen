let sum = 0;
let arr = [];
function Students() {

    let elements = [];
    elements[0] = document.getElementById("name");
    elements[1] = document.getElementById("score");
    elements[2] = document.getElementById("time");
    elements[3] = document.getElementById("img");
    elements[4] = document.getElementById("bodyy");


    if (elements[0].value == "" || elements[0].value == null) {
        elements[0].style.borderColor = 'red';
        alert("please enter your name");
    }
    else if (elements[1].value == "" || elements[1].value == null) {
        elements[1].style.borderColor = 'red';
        alert("please enter your score");
    }
    else if (isNaN(elements[1].value) || elements[1].value == null) {
        alert("please enter a number for score");
    }
    else if (elements[1].value < 0 || elements[1].value > 100) {
        alert("please make sure that your score is between 0-100");
    }

    else {


       let ele1 = document.createElement("label");
       let ele2 = document.createElement("label");
       let ele3=document.createElement("img");
        ele3.className="str";
       let ele4= document.createElement("label");

       let ele5 = document.createElement("td");
       let ele6 = document.createElement("td");
       let ele7 = document.createElement("td");
       let ele8 = document.createElement("td");

       let ele9 = document.createElement("tr");

       ele1.textContent = elements[0].value;
       ele2.textContent = elements[1].value;
       ele3.src=elements[3].value;
       ele4.textContent = elements[2].value

       
       ele5.appendChild(ele1);
       ele6.appendChild(ele2);
       ele7.appendChild(ele3);
       ele8.appendChild(ele4);
       ele9.appendChild(ele5);
       ele9.appendChild(ele6);
       ele9.appendChild(ele7);
       ele9.appendChild(ele8);

       elements[4].appendChild(ele9);

       var counter = elements[4].getElementsByTagName("tr");

        let x1 = document.getElementById("info");
        x1.textContent = counter.length;

        let x2 = document.getElementById("avg");
        sum += Number.parseInt(elements[1].value);

        x2.textContent = Math.floor(sum / counter.length);




        let y = {
            studentName: elements[0].value,
            studentScore: elements[1].value,
            studentInfo: counter.length,
            studentAverage: x2.textContent
        };

        arr.push(y);
        elements[0].value = "";
        elements[1].value = "";

        localStorage.setItem('data', JSON.stringify(arr));

    }
}