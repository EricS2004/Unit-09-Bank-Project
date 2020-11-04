let despositers ={};
let despositamount={};


$(".newDeposit").click(function() {
    
    let deposit = $(".accountDeposit").val();
    let name = $(".accountName").val();
    $(".records").append(`<p> ${name}</p><p class='recordsBorder'>$ ${deposit}</p>`);
    
    
    
    
});