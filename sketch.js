// api(); 
var preloader = document.getElementById('loading');
async function api(){

    var stateCode = [];
    var state = [];

    var data = await fetch("https://api.covid19india.org/data.json");
    var dataFetch = await data.json();
    var decode = await JSON.parse(JSON.stringify(dataFetch),true);


    var datai = await fetch("https://api.covid19india.org/v4/min/data-all.min.json");
    var datafe = await datai.json();
    var increase = await JSON.parse(JSON.stringify(datafe),true);

    preloader.style.display = 'none';
    document.getElementById("co-table").innerHTML = `<tr data-aos="slide-down">
    <th>State</th>
    <th>Confirmed</th>
    <th>Active</th>
    <th>Recovered</th>
    <th>Deaths</th>
    <th>Last Time Updated</th>
    </tr>`;
    
    //stateCode = [];
    stateCode.push("AN", "AP", "AR", "AS", "BR", "CH", "CT", "DN", "DL", "GA", "GJ", "HR", "HP", "JK", "JH", "KA", "KL","LA", "LD", "MP", "MH", "MN", "ML", "MZ", "NL", "OR", "PY", "PB", "RJ","SK","TN","TG","TR","UP","UT","WB");
    state.push("Andaman and Nicobar Islands","Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chandigarh","Chhattisgarh","Dadra and Nagar Haveli and Daman and Diu","Delhi","Goa","Gujarat","Haryana","Himachal Pradesh","Jammu and Kashmir","Jharkhand","Karnataka","Kerala","Ladakh","Lakshadweep","Madhya Pradesh","Maharashtra","Manipur","Meghalaya","Mizoram","Nagaland","Odisha","Puducherry","Punjab","Rajasthan","Sikkim","Tamil Nadu","Telangana","Tripura","Uttar Pradesh","Uttarakhand","West Bengal");
    var count = state.length;

        for(var i = 1; i < state.length+1; i++) {
            if(increase[Object.keys(increase)[Object.keys(increase).length-1]][stateCode[i-1]]['delta'] !== undefined) {
                if(increase[Object.keys(increase)[Object.keys(increase).length-1]][stateCode[i-1]]['delta']['confirmed'] !== undefined &&
                increase[Object.keys(increase)[Object.keys(increase).length-1]][stateCode[i-1]]['delta']['recovered'] !== undefined &&
                increase[Object.keys(increase)[Object.keys(increase).length-1]][stateCode[i-1]]['delta']['deceased'] !== undefined){
                    if(i % 2-1 === 0) {
                        var rows = "<tr style='background-color: #fff;' class='even' data-aos='slide-left'><td class='fix'>"+state[i-1]+"</td><td><div style='color: tomato; font-size: 12px; margin-left:15px'><b>&#8593;"+increase[[Object.keys(increase)[Object.keys(increase).length-1]]][stateCode[i-1]]['delta']['confirmed']+"</b></div>"+increase[[Object.keys(increase)[Object.keys(increase).length-1]]][stateCode[i-1]]['total']['confirmed']+"</td><td><br>"+decode['statewise'][i]['active']+"</td><td><div style='color: #31AA4C; font-size: 12px; margin-left:15px'><b>&#8593;"+increase[[Object.keys(increase)[Object.keys(increase).length-1]]][stateCode[i-1]]['delta']['recovered']+"</b></div>"+increase[[Object.keys(increase)[Object.keys(increase).length-1]]][stateCode[i-1]]['total']['recovered']+"</td><td><div style='color: black; font-size: 12px; margin-left:15px'><b>&#8593;"+increase[[Object.keys(increase)[Object.keys(increase).length-1]]][stateCode[i-1]]['delta']['deceased']+"</b></div>"+increase[[Object.keys(increase)[Object.keys(increase).length-1]]][stateCode[i-1]]['total']['deceased']+"</td><td><br>"+decode['statewise'][i]['lastupdatedtime']+"</td></tr>";
                    } else {
                        var rows = "<tr style='background-color: #e7e7e7;' class='odd' data-aos='slide-right'><td class='fix'>"+state[i-1]+"</td><td><div style='color: tomato; font-size: 12px; margin-left:15px'><b>&#8593;"+increase[[Object.keys(increase)[Object.keys(increase).length-1]]][stateCode[i-1]]['delta']['confirmed']+"</b></div>"+increase[[Object.keys(increase)[Object.keys(increase).length-1]]][stateCode[i-1]]['total']['confirmed']+"</td><td><br>"+decode['statewise'][i]['active']+"</td><td><div style='color: #31AA4C; font-size: 12px; margin-left:15px'><b>&#8593;"+increase[[Object.keys(increase)[Object.keys(increase).length-1]]][stateCode[i-1]]['delta']['recovered']+"</b></div>"+increase[[Object.keys(increase)[Object.keys(increase).length-1]]][stateCode[i-1]]['total']['recovered']+"</td><td><div style='color: black; font-size: 12px; margin-left:15px'><b>&#8593;"+increase[[Object.keys(increase)[Object.keys(increase).length-1]]][stateCode[i-1]]['delta']['deceased']+"</b></div>"+increase[[Object.keys(increase)[Object.keys(increase).length-1]]][stateCode[i-1]]['total']['deceased']+"</td><td><br>"+decode['statewise'][i]['lastupdatedtime']+"</td></tr>";
                    }

             }  else if(increase[Object.keys(increase)[Object.keys(increase).length-1]][stateCode[i-1]]['delta']['recovered'] === undefined &&
             increase[Object.keys(increase)[Object.keys(increase).length-1]][stateCode[i-1]]['delta']['deceased'] === undefined) {
                 if(i % 2-1 === 0) {
                     var rows = "<tr style='background-color: #fff;' class='even' data-aos='slide-left'><td class='fix'>"+state[i-1]+"</td><td><div style='color: tomato; font-size: 12px; margin-left:15px'><b>&#8593;"+increase[[Object.keys(increase)[Object.keys(increase).length-1]]][stateCode[i-1]]['delta']['confirmed']+"</b></div>"+increase[[Object.keys(increase)[Object.keys(increase).length-1]]][stateCode[i-1]]['total']['confirmed']+"</td><td><br>"+decode['statewise'][i]['active']+"</td><td><div style='color: #31AA4C; font-size: 12px; margin-left:15px'><b>"+""+"</b></div>"+increase[[Object.keys(increase)[Object.keys(increase).length-1]]][stateCode[i-1]]['total']['recovered']+"</td><td><div style='color: black; font-size: 12px; margin-left:15px'><b>"+''+"</b></div>"+increase[[Object.keys(increase)[Object.keys(increase).length-1]]][stateCode[i-1]]['total']['deceased']+"</td><td><br>"+decode['statewise'][i]['lastupdatedtime']+"</td></tr>";
                 } else {
                     var rows = "<tr style='background-color: #e7e7e7;' class='odd' data-aos='slide-right'><td class='fix'>"+state[i-1]+"</td><td><div style='color: tomato; font-size: 12px; margin-left:15px'><b>&#8593;"+increase[[Object.keys(increase)[Object.keys(increase).length-1]]][stateCode[i-1]]['delta']['confirmed']+"</b></div>"+increase[[Object.keys(increase)[Object.keys(increase).length-1]]][stateCode[i-1]]['total']['confirmed']+"</td><td><br>"+decode['statewise'][i]['active']+"</td><td><div style='color: #31AA4C; font-size: 12px; margin-left:15px'><b>"+""+"</b></div>"+increase[[Object.keys(increase)[Object.keys(increase).length-1]]][stateCode[i-1]]['total']['recovered']+"</td><td><div style='color: black; font-size: 12px; margin-left:15px'><b>"+''+"</b></div>"+increase[[Object.keys(increase)[Object.keys(increase).length-1]]][stateCode[i-1]]['total']['deceased']+"</td><td><br>"+decode['statewise'][i]['lastupdatedtime']+"</td></tr>";
                 }
             } else if(increase[Object.keys(increase)[Object.keys(increase).length-1]][stateCode[i-1]]['delta']['recovered'] === undefined &&
             increase[Object.keys(increase)[Object.keys(increase).length-1]][stateCode[i-1]]['delta']['deceased'] !== undefined) {
                if(i % 2-1 === 0) {
                    var rows = "<tr style='background-color: #fff;' class='even' data-aos='slide-left'><td class='fix'>"+state[i-1]+"</td><td><div style='color: tomato; font-size: 12px; margin-left:15px'><b>&#8593;"+increase[[Object.keys(increase)[Object.keys(increase).length-1]]][stateCode[i-1]]['delta']['confirmed']+"</b></div>"+increase[[Object.keys(increase)[Object.keys(increase).length-1]]][stateCode[i-1]]['total']['confirmed']+"</td><td><br>"+decode['statewise'][i]['active']+"</td><td><div style='color: #31AA4C; font-size: 12px; margin-left:15px'><b>"+""+"</b></div>"+increase[[Object.keys(increase)[Object.keys(increase).length-1]]][stateCode[i-1]]['total']['recovered']+"</td><td><div style='color: black; font-size: 12px; margin-left:15px'><b>&#8593;"+increase[[Object.keys(increase)[Object.keys(increase).length-1]]][stateCode[i-1]]['delta']['deceased']+"</b></div>"+increase[[Object.keys(increase)[Object.keys(increase).length-1]]][stateCode[i-1]]['total']['deceased']+"</td><td><br>"+decode['statewise'][i]['lastupdatedtime']+"</td></tr>";
                } else {
                    var rows = "<tr style='background-color: #e7e7e7;' class='odd' data-aos='slide-right'><td class='fix'>"+state[i-1]+"</td><td><div style='color: tomato; font-size: 12px; margin-left:15px'><b>&#8593;"+increase[[Object.keys(increase)[Object.keys(increase).length-1]]][stateCode[i-1]]['delta']['confirmed']+"</b></div>"+increase[[Object.keys(increase)[Object.keys(increase).length-1]]][stateCode[i-1]]['total']['confirmed']+"</td><td><br>"+decode['statewise'][i]['active']+"</td><td><div style='color: #31AA4C; font-size: 12px; margin-left:15px'><b>"+""+"</b></div>"+increase[[Object.keys(increase)[Object.keys(increase).length-1]]][stateCode[i-1]]['total']['recovered']+"</td><td><div style='color: black; font-size: 12px; margin-left:15px'><b>&#8593;"+increase[[Object.keys(increase)[Object.keys(increase).length-1]]][stateCode[i-1]]['delta']['deceased']+"</b></div>"+increase[[Object.keys(increase)[Object.keys(increase).length-1]]][stateCode[i-1]]['total']['deceased']+"</td><td><br>"+decode['statewise'][i]['lastupdatedtime']+"</td></tr>";
                }

             } else if(increase[Object.keys(increase)[Object.keys(increase).length-1]][stateCode[i-1]]['delta']['deceased'] === undefined &&
             increase[Object.keys(increase)[Object.keys(increase).length-1]][stateCode[i-1]]['delta']['recovered'] !== undefined) {
                if(i % 2-1 === 0) {
                    var rows = "<tr style='background-color: #fff;' class='even' data-aos='slide-left'><td class='fix'>"+state[i-1]+"</td><td><div style='color: tomato; font-size: 12px; margin-left:15px'><b>&#8593;"+increase[[Object.keys(increase)[Object.keys(increase).length-1]]][stateCode[i-1]]['delta']['confirmed']+"</b></div>"+increase[[Object.keys(increase)[Object.keys(increase).length-1]]][stateCode[i-1]]['total']['confirmed']+"</td><td><br>"+decode['statewise'][i]['active']+"</td><td><div style='color: #31AA4C; font-size: 12px; margin-left:15px'><b>&#8593;"+increase[[Object.keys(increase)[Object.keys(increase).length-1]]][stateCode[i-1]]['delta']['recovered']+"</b></div>"+increase[[Object.keys(increase)[Object.keys(increase).length-1]]][stateCode[i-1]]['total']['recovered']+"</td><td><div style='color: black; font-size: 12px; margin-left:15px'><b>"+''+"</b></div>"+increase[[Object.keys(increase)[Object.keys(increase).length-1]]][stateCode[i-1]]['total']['deceased']+"</td><td><br>"+decode['statewise'][i]['lastupdatedtime']+"</td></tr>";
                } else {
                    var rows = "<tr style='background-color: #e7e7e7;' class='odd' data-aos='slide-right'><td class='fix'>"+state[i-1]+"</td><td><div style='color: tomato; font-size: 12px; margin-left:15px'><b>&#8593;"+increase[[Object.keys(increase)[Object.keys(increase).length-1]]][stateCode[i-1]]['delta']['confirmed']+"</b></div>"+increase[[Object.keys(increase)[Object.keys(increase).length-1]]][stateCode[i-1]]['total']['confirmed']+"</td><td><br>"+decode['statewise'][i]['active']+"</td><td><div style='color: #31AA4C; font-size: 12px; margin-left:15px'><b>&#8593;"+increase[[Object.keys(increase)[Object.keys(increase).length-1]]][stateCode[i-1]]['delta']['recovered']+"</b></div>"+increase[[Object.keys(increase)[Object.keys(increase).length-1]]][stateCode[i-1]]['total']['recovered']+"</td><td><div style='color: black; font-size: 12px; margin-left:15px'><b>"+''+"</b></div>"+increase[[Object.keys(increase)[Object.keys(increase).length-1]]][stateCode[i-1]]['total']['deceased']+"</td><td><br>"+decode['statewise'][i]['lastupdatedtime']+"</td></tr>";
                }
            }
            } else if(increase[Object.keys(increase)[Object.keys(increase).length-1]][stateCode[i-1]]['delta'] === undefined){
                if(i % 2-1 === 0) {
                    var rows = "<tr style='background-color: #fff;' class='even' data-aos='slide-left'><td class='fix'>"+state[i-1]+"</td><td><div style='color: tomato; font-size: 12px; margin-left:10px'>"+''+"</div>"+increase[[Object.keys(increase)[Object.keys(increase).length-1]]][stateCode[i-1]]['total']['confirmed']+"</td><td>"+decode['statewise'][i]['active']+"</td><td>"+increase[[Object.keys(increase)[Object.keys(increase).length-1]]][stateCode[i-1]]['total']['recovered']+"</td><td>"+increase[[Object.keys(increase)[Object.keys(increase).length-1]]][stateCode[i-1]]['total']['deceased']+"</td><td>"+decode['statewise'][i]['lastupdatedtime']+"</td></tr>";
                } else {
                    var rows = "<tr style='background-color: #e7e7e7;' class='odd' data-aos='slide-right'><td class='fix'>"+state[i-1]+"</td><td><div style='color: tomato; font-size: 12px; margin-left:10px'>"+''+"</div>"+increase[[Object.keys(increase)[Object.keys(increase).length-1]]][stateCode[i-1]]['total']['confirmed']+"</td><td>"+decode['statewise'][i]['active']+"</td><td>"+increase[[Object.keys(increase)[Object.keys(increase).length-1]]][stateCode[i-1]]['total']['recovered']+"</td><td>"+increase[[Object.keys(increase)[Object.keys(increase).length-1]]][stateCode[i-1]]['total']['deceased']+"</td><td>"+decode['statewise'][i]['lastupdatedtime']+"</td></tr>";
                }
                
            }
            if(i === state.length) {
                var rows = "<tfoot><tr style='background-color: #c9c9c9;' data-aos='slide-up'><td><b>"+'Total</b></td><td><b>'+"<div style='color: tomato; font-size: 12px; margin-left:15px'><b>&#8593;"+increase[[Object.keys(increase)[Object.keys(increase).length-1]]]['TT']['delta']['confirmed']+"</b></div>"+increase[[Object.keys(increase)[Object.keys(increase).length-1]]]['TT']['total']['confirmed']+"</b></td><td><b><br>"+decode['statewise'][0]['active']+"</b><td><b><div style='color: green; font-size: 12px; margin-left:15px'><b>&#8593;"+increase[[Object.keys(increase)[Object.keys(increase).length-1]]]['TT']['delta']['recovered']+"</b></div>"+increase[[Object.keys(increase)[Object.keys(increase).length-1]]]['TT']['total']['recovered']+"</b></td><td><b><div style='color: black; font-size: 12px; margin-left:15px'><b>&#8593;"+increase[[Object.keys(increase)[Object.keys(increase).length-1]]]['TT']['delta']['deceased']+"</b></div>"+increase[[Object.keys(increase)[Object.keys(increase).length-1]]]['TT']['total']['deceased']+"</b></td><td><b><br>"+decode['statewise'][0]['lastupdatedtime']+"</b></td></tr></tfoot>";
            }
            
            document.getElementById("co-table").innerHTML += rows;

        }
        
    //document.write(decode['statewise'][1]['state'])
}
