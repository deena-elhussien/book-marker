
// global variables
var siteInput= document.getElementById("site");
var thelinkInput= document.getElementById("thelink");
var alertElement= document.getElementById("alertMsg");


submit.onclick= getData

dataList=[];
if(localStorage.getItem("siteData") !== null){
    dataList= JSON.parse(localStorage.getItem("siteData"))
    displayData()
}



function getData(){
    
    if( validationName() ==true && validationLink() ==true){
        var webSite= {
            siteName: siteInput.value,
            siteEmail: thelinkInput.value,
        }
        console.log(webSite);
        dataList.push(webSite)
        localStorage.setItem("siteData" , JSON.stringify(dataList));
        displayData()
        // clearProducts() 
        
    }

    


}


function displayData(){

    
    var cartona=""
    for( var i=0; i<dataList.length; i++){
        cartona+=`
        <tr>
        <td> ${i+1}</td>
        <td> ${dataList[i].siteName}</td>
        <td>
            <button onclick="openWebsite(${i})"  id="visitBtn" class="btn btn-visit">
                <i class="fa-solid fa-eye pe-2 text-white"></i>
                Visit</button>
           
        </td>
        <td>
            <button onclick="deleteItem(${i})" class="btn btn-danger">
                <i class="fa-solid fa-trash-can pe-2 " id="deleting"></i>
                Delete</button>
        </td>
    </tr>
        `
    }
    document.getElementById("showData").innerHTML= cartona
}


// delete item
function deleteItem(indexItem){
    dataList.splice(indexItem ,1);
    displayData()
    localStorage.setItem("siteData" , JSON.stringify(dataList));
}

// open website
function openWebsite(indexLink){
    for(var i=0; i<dataList.length; i++){
        window.open(indexLink, "_blank" );
    dataList= JSON.parse(localStorage.getItem("siteEmail"))
    

        
    }
    
        
        
    
    
}




function clearProducts(){
    siteInput.value= null;
    thelinkInput.value= null;
}






function validationName(){
    // console.log( siteInput.value);
    var text= siteInput.value;
    // var regex= /^[a-zA-Z]{3}[a-zA-Z0-9]*$/
    var regex=/^[A-Za-z]{3,}[A-Za-z0-9]*$/


    




    if (regex.test(text)== true){
        siteInput.classList.add("is-valid")
        siteInput.classList.remove("is-invalid")
        // alertElement.classList.add("d-none")
        return true;

    }else{
        siteInput.classList.add("is-invalid")
        siteInput.classList.remove("is-valid")
       
        return false;
    }
}



function validationLink(){
    var text= thelinkInput.value;
    var regex=/^(www\.|https).+\.com$/;
    

    if (regex.test(text)== true){
        thelinkInput.classList.add("is-valid")
        thelinkInput.classList.remove("is-invalid")
        // alertElement.classList.add("d-none")
        return true;

    }else{
        thelinkInput.classList.add("is-invalid")
        thelinkInput.classList.remove("is-valid")
        // alertElement.classList.add("d-none")
        return false;
    }
}

submit.addEventListener("click", function(){
    if(validationName()== false && validationLink()== false){
        alertElement.classList.remove("d-none");
        // console.log("hi");
    }else{
        alertElement.classList.add("d-none");
    }
});


// hide card by button X
btnClose.onclick= closeCard
function closeCard(){
    document.getElementById("alertMsg").classList.add('d-none');
    
}





















