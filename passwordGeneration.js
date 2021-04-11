$(document).ready(function ($){
    $("#generate").click(function (e){
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
    })

    $("#size").change(function (e){
        $("#sizeLabel").text($("#size").val());
    })
})