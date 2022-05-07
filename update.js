var flights={
    DELHI:['MUMBAI', 'CHANDIGARH','BANGLORE'],
    MUMBAI:['DELHI', 'CHANDIGARH','BANGLORE'],
    CHANDIGARH:['MUMBAI', 'DELHI','BANGLORE'],
    BANGLORE:['MUMBAI', 'CHANDIGARH','DELHI']
}

var main= document.getElementsByClassName('main_menu');
var sub= document.getElementsByClassName('sub_menu');

main.addEventListener('change',function(){

    var selected_options= flights[this.value];

    while (sub.options.length > 0) {
        sub.options.remove(0);
    }

    Array.from(selected_option).forEach(function(el){
        let option= new option(el,el);
        sub.appendChild(option);
    });
        
});
