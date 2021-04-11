$(document).ready(function ($){

    generatePassword();

    $(".upper").change(function (){
        generatePassword()
    });
    $(".numbers").change(function (){
        generatePassword()
    });
    $(".specialCharacter").change(function (){
        generatePassword()
    });
    $("#generate").click(function (){
        generatePassword();
    })

    function generatePassword (){
        let isUpper = $(".upper").is( ":checked" );
        let isNumber = $(".numbers").is( ":checked" );
        let isSpecial = $(".specialCharacter").is( ":checked" );

        let size = $("#size").val();

        let possible = 'abcdefghijklmnopqrstuvwxyz';
        if(isUpper){
            possible += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        }

        if(isNumber){
            possible += '0123456789';
        }

        if(isSpecial){
            possible += '![]{}()%&*$#^<>~@|';
        }
        let password = '';
        for(let i = 0; i < size; i++){
            password += possible[Math.floor(Math.random() * possible.length)];
        }

        $("#password").val(password);
    }

    $("#size").change(function (){
        $("#sizeLabel").text("Length: " + $("#size").val());
        generatePassword();
    })
})