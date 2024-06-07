$(document).ready(function () { 
  
    // FETCHING DATA FROM JSON FILE 
    $.getJSON("Restraunt_name.json",function (data) { 
        var html = ''; 
     
        // ITERATING THROUGH OBJECTS 
        $.each(data, function (key, value) { 
            let x= value.id;
            html += '<a onclick ="exp_x(x)" class="linka" href = "rest_dets.html">';
            html += '<div class ="image-card">' + '<img src="' +value.img+'" alt="'+value.id+'">';
            html += '<div class="description">'+value.Name+'</div></div></a>';
            //add text desciption which will be on left side of the 
            html+='<br><br>';
        }); 
          
        //INSERTING ROWS INTO TABLE  
        $('#dataDisplay').append(html); 
    }); 
}); 

function exp_x(x)
{
    let z=x;
}

export const y=z;


/*
fetch('./Restraunt_name.json')
        .then(res =>res.json)
        .then(data =>{

        }
        )*/