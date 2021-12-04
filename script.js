window.addEventListener("load",function(){
    var users = [
    {
        name:"Santiago",
        gender:"M",
        hobbie:"deportes",
        avatar:'avatarM.jpg'
    },
    {
        name:"Fernanda",
        gender:"F",
        hobbie:"viajes",
        avatar:'avatarF.jpg'
    },
    {
        name:"Pablo",
        gender:"M",
        hobbie:"trabajo",
        avatar:'avatarM.jpg'
    },
    {
        name:"Maria",
        gender:"F",
        hobbie:"deportes",
        avatar:'avatarF.jpg'
    },
    {
        name:"Juan",
        gender:"M",
        hobbie:"viajes",
        avatar:'avatarM.jpg'
    },
    {
        name:"Josefina",
        gender:"F",
        hobbie:"runing",
        avatar:'avatarF.jpg'
    },
    {
        name:"Hector",
        gender:"M",
        hobbie:"naturaleza",
        avatar:'avatarM.jpg'
    },
    {
        name:"Juana",
        gender:"F",
        hobbie:"trabajo",
        avatar:'avatarF.jpg'
    },
    {
        name:"Paolo",
        gender:"M",
        hobbie:"fiesta",
        avatar:'avatarM.jpg'
    },
    {
        name:"Ana",
        gender:"F",
        hobbie:"naturaleza",
        avatar:'avatarF.jpg'
    },
    {
        name:"Patricio",
        gender:"M",
        hobbie:"viajes",
        avatar:'avatarM.jpg'
    }];

    function search (){
        
        var quetegusta = document.getElementById("quetegusta");
        var quetegusta = quetegusta.value;
        console.log(quetegusta)

        var genderField = document.getElementById("gender");
        var selected = genderField.selectedIndex;
        var gender = genderField.options[selected].value;
        console.log(gender)

        var resultadosHTML = "";
        var numResultados = users.length;

        for(var i=0; i < numResultados; i++){

        if(gender == "A" || gender == users[i].gender){
            if(quetegusta == '' || quetegusta == users[i].hobbie){
                resultadosHTML += '<div class=person-row>\
                                    <img src= "/'+ users[i].avatar +'"/>\
                                    <div class="person-info">\
                                    <div>' + users[i].name +'</div>\<div>' + users[i].hobbie + '</div></div>\
                                    <button>Add friends</button></div>';
             }
        }
    }   
        resultados.innerHTML = resultadosHTML;
    }


    var resultados = document.getElementById("resultados");
    var buscarhobbies = document.getElementById ("buscarhobbies");
    buscarhobbies.addEventListener("click", search);
    search();

});


