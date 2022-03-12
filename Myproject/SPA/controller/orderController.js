generateOrderId();
setDate();

//////////////-load customer and item ids /////////////////////////////////////

$("#cIdCmb").change(function (e){
    let selectedCustomerId =$('#cIdCmb').find(":selected").text();
    selectedCustomer(selectedCustomerId);
});


$("#itmIdCmb").change(function (e){
    let selectedItemId =$('#itmIdCmb').find(":selected").text();
    selectedItem(selectedItemId);
});

/* load customer ids to cmb (customer)*/
function loadAllCustomerIds() {
    $("#cIdCmb").empty();

    let cusHint=`<option disabled selected> Select Customer ID</option>`;

    $("#cIdCmb").append(cusHint);

    for (let i in customerDB) {
        let option = `<option value="${customerDB[i].getCustomerId()}">${customerDB[i].getCustomerId()}</option>`
        $("#cIdCmb").append(option);
    }
}
/*load customer data to text fields*/
function selectedCustomer(CustomerId){
    for (const i in customerDB){
        if (customerDB[i].getCustomerId()==CustomerId) {
            let element = customerDB[i];
            $("#cusName").val(element.getCustomerName());
            $("#cusSalary").val(element.getCustomerSalary());
            $("#cusAddress").val(element.getCustomerAddress());
        }
    }
}


/* load item ids to cmb (item)*/
function loadAllItemIds() {
    $("#itmIdCmb").empty();

    let itemHint=`<option disabled selected> Select Item ID</option>`;

    $("#itmIdCmb").append(itemHint);

    for (let i in itemDB) {
        let option = `<option value="${itemDB[i].getItemCode()}">${itemDB[i].getItemCode()}</option>`
        $("#itmIdCmb").append(option);
    }
}
/*load item data to text fields*/
function selectedItem(ItemId){
    for (const i in itemDB){
        if (itemDB[i].getItemCode()==ItemId) {
            let element = itemDB[i];
            $("#itmName").val(element.getItemName());
            $("#itmQtyOnHand").val(element.getItemQuantity());
            $("#itmPrice").val(element.getItemPrice());
        }
    }
}
////////////////////////////////////////////////////////////////////////////////////////

//generate order Id

function generateOrderId() {

    let index = orderDB.length - 1;
    let id;
    let temp;
    if (index != -1) {
        id = orderDB[orderDB.length - 1].getOrderId();
        temp = id.split("-")[1];
        temp++;
    }

    if (index == -1) {
        $("#orderId").val("O00-001");
    } else if (temp <= 9) {
        $("#orderId").val("O00-00" + temp);
    } else if (temp <= 99) {
        $("#orderId").val("O00-0" + temp);
    } else {
        $("#orderId").val("O00-" + temp);
    }

}

//set date

function setDate() {
    let d = new Date();
    let dd = d.toISOString().split("T")[0].split("-");
    $("#txtDate").val(dd[0]+"-"+dd[1]+"-"+dd[2]);
    $("#txtDate").text(dd[0]+"-"+dd[1]+"-"+dd[2]);
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////

