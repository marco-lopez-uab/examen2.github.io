function convertirD(){
    var n1=document.getElementById('va1').value;
    n1=parseFloat(n1);

    var c= n1*6.91;

    document.getElementById('result').innerHTML=c;
}
function convertirB(){
    var n1=parseDouble(document.getElementById('va1').value);
    n1=parseFloat(n1);
    var c= n1*0.14;

    document.getElementById('result').innerHTML=c;
}

function convertir(){
    var selectConv=document.getElementById('selectMonedas').value;

    var convInput=document.getElementById('convInput').value;
    convInput=parseFloat(convInput);
    var salida=0;
    var titulo='';
    if(selectConv=="1"){
        salida=convInput/6.96;
        salida
        titulo=convInput+'Bs ='+salida.toFixed(2)+" $";
    }
    if(selectConv=="2"){
        salida=convInput*6.96;
        salida
        titulo=convInput+' $ ='+salida.toFixed(2)+" Bs";
    }
    document.getElementById('resultadoConver').innerHTML=titulo;
}