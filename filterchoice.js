$(document).ready(function () {
    $(".main_menu").change(function () {
        var val = $(this).val();
        if (val == "MUMBAI") {
            $(".sub_menu").html("<option value='TO'>TO</option><option value='DELHI'>DELHI</option><option value='CHANDIGARH'>CHANDIGARH</option>");
        } else if (val == "DELHI") {
            $(".sub_menu").html("<option value='TO'>TO</option><option value='MUMBAI'>MUMBAI</option><option value='CHANDIGARH'>CHANDIGARH</option>");
        } else if (val == "CHANDIGARH") {
            $(".sub_menu").html("<option value='TO'>TO</option><option value='DELHI'>DELHI</option><option value='MUMBAI'>MUMBAI</option>");
        } 
    });
    
});