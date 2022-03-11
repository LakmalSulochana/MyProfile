/*item Part*/

$("#btnItemSave").click(function (){

    let customerId =$("#iCode").val();
    let customerName =$("#iName").val();
    let customerAddress =$("#iPrice").val();
    let customerSalary =$("#iQuantity").val();


    var customerOB=new Item(customerId,customerName,customerAddress,customerSalary)
    customerDB.push(customerOB);
    addDataToTable();
    clearField();
    generateId();

});