var accID=null;
//actions
var jQT = new $.jQTouch({
	themeSelectionSelector: '#jqt'
});

$(function(){
    document.addEventListener('deviceready',function(){
        //acelerometro
        $('#acelerometro .individual li').tap(function(){
            if($(this).index()==0){//iniciar
                iniciarAcc();
            }else{
                //detener
                detenerAcc();
            }
        });
    },false);
});

function iniciarAcc(){
    function onSuccess(acceleration) {
        $('#acelerometro h2').html('Acceleration X: ' + acceleration.x + '<br>' +
          'Acceleration Y: ' + acceleration.y + '<br>' +
          'Acceleration Z: ' + acceleration.z + '<br>' +
          'Timestamp: '      + acceleration.timestamp + '<br>');
    };

function onError() {
    alert('onError!');
};

var options = { frequency: 500 };  // Update every 3 seconds

accID = navigator.accelerometer.watchAcceleration(onSuccess, onError, options);
}

function detenerAcc(){
    if(accID){
        navigator.accelerometer.clearWatch(accID);
        accID=null;
        $('#acelerometro h2').html('detenido');
    }
    
}