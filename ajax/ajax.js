let getbtn = document.getElementById('getbtn');
getbtn.addEventListener('click', getbtnHandler)
//Function to send data from query to an end point
function getbtnHandler() {
    console.log("Inside Get Data Function");

    //make xhr object
    const xhrobject = new XMLHttpRequest();

    //open the object
    //for get request with file/url
    //xhrobject.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', true);

    //for post request with data
    xhrobject.open('POST', 'http://dummy.restapiexample.com/api/v1/create');

    xhrobject.getResponseHeader('Content-type', 'application/json');

    //on progress
    xhrobject.onprogress = function() {
        console.log("On Progress");
    }

    //on result
    xhrobject.onload = function() {
        if (this.status === 200) {
            console.log(this.responseText);
        } else {
            console.log("Error Occured")
        }
    }

    //send request
    params = `{"name":"t512","salary":"12743","age":"273"}`;
    xhrobject.send(params);

    console.log("Request is complete")
}

let setbtn = document.getElementById('setbtn');
setbtn.addEventListener('click', setbtnHandler)
//Function to get and then set data from an endpoint into html page
function setbtnHandler() {
    console.log("Inside Set Data Function");

    //make xhr object
    const xhrobject = new XMLHttpRequest();

    //open the object
    xhrobject.open('GET', 'http://dummy.restapiexample.com/api/v1/employees');

    //resposne ready/on result
    xhrobject.onload = function() {
        if (this.status === 200) {
            let obj = JSON.parse(this.responseText);
            let objData = obj.data;
            console.log(obj);
            //console.log(obj.data);
            let list = document.getElementById('list');
            str = "";
            for (key in objData) {
                str += `<li>${objData[key].employee_name}</li>`;
            }
            list.innerHTML = str;
        } else {
            console.log("Error Occured");
        }
    }

    //on result
    xhrobject.send();
    console.log("Request is complete");
}