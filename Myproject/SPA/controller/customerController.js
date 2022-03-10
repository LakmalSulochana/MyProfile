/*Customer part*/

$("#btnCustomerAdd").click(function (){

    let customerId =$("#customerId").val();
    let customerName =$("#customerName").val();
    let customerAddress =$("#customerAddress").val();
    let customerSalary =$("#salary").val();

    var customerOB={
        id:customerId,
        name:customerName,
        address:customerAddress,
        salary:customerSalary
    }
    customerDB.push(customerOB);
    addDataToTable();
    clearField();

    $("#tblcstmr>tr").click(function (){
        let customerId= $(this).children(":eq(0)").text();
        let customerName= $(this).children(":eq(1)").text();
        let customerAddress= $(this).children(":eq(2)").text();
        let customerSalary= $(this).children(":eq(3)").text();

        $("#Id").val(customerId);
        $("#Name").val(customerName);
        $("#Address").val(customerAddress);
        $("#customerSalary").val(customerSalary);
    });



});

$("#clearBtn").click(function (){
    clearField();
});



function addDataToTable(){
    $("#tblcstmr").empty();
    for (var i of customerDB){

        let raw = `<tr><td>${i.id}</td><td>${i.name}</td><td>${i.address}</td><td>${i.salary}</td></tr>`
        $("#tblcstmr").append(raw);
    }

}

function clearField(){
    $("#customerId,#customerName,#customerAddress,#salary,#Id,#Name,#Address,#customerSalary").val("");
}

/*enter next field*/
$("#Id").keydown(function (event) {
    if (event.key == "Enter") {
        $("#Name").focus();
    }
});



