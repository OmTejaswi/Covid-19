 api();
var stateCode = [];
var state = [];
async function api(){

    var data = await fetch("https://api.covid19india.org/data.json");
    var dataFetch = await data.json();
    var decode = await JSON.parse(JSON.stringify(dataFetch),true);
    var count = 36;
    console.log(decode);
    console.log(count)

    var datai = await fetch("https://api.covid19india.org/v4/min/data-all.min.json");
    var datafe = await datai.json();
    var increase = await JSON.parse(JSON.stringify(datafe),true)   
    
    //stateCode = [];
    stateCode.push("AN", "AP", "AR", "AS", "BR", "CH", "CT", "DN", "DL", "GA", "GJ", "HR", "HP", "JK", "JH", "KA", "KL","LA", "LD", "MP", "MH", "MN", "ML", "MZ", "NL", "OR", "PY", "PB", "RJ","SK","TN","TG","TR","TT","UP","UT","WB");
    state.push("Andaman and Nicobar Islands","Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chandigarh","Chhattisgarh","Dadra and Nagar Haveli and Daman and Diu","Delhi","Goa","Gujarat","Haryana","Himachal Pradesh","Jammu and Kashmir","Jharkhand","Karnataka","Kerala","Ladakh","Lakshadweep","Madhya Pradesh","Maharashtra","Manipur","Meghalaya","Mizoram","Nagaland","Odisha","Puducherry","Punjab","Rajasthan","Sikkim","Tamil Nadu","Telangana","Tripura","Uttar Pradesh","Uttarakhand","West Bengal");

        for(var i = 1; i < count+2; i++) {
            console.log(increase[Object.keys(increase)[Object.keys(increase).length-1]])
            console.log(stateCode);
            if(increase[Object.keys(increase)[Object.keys(increase).length-1]][stateCode[i-1]]['delta'] !== undefined) {
                if(i % 2-1 === 0) {
                    var rows = "<tr style='background-color: #fff;' class='even' data-aos='slide-left'><td class='fix'>"+state[i-1]+"</td><td><div style='color: tomato; font-size: 12px; margin-left:15px'><b>&#8593;"+increase[[Object.keys(increase)[Object.keys(increase).length-1]]][stateCode[i-1]]['delta']['confirmed']+"</b></div>"+increase[[Object.keys(increase)[Object.keys(increase).length-1]]][stateCode[i-1]]['total']['confirmed']+"</td><td><br>"+decode['statewise'][i]['active']+"</td><td><div style='color: #31AA4C; font-size: 12px; margin-left:15px'><b>&#8593;"+increase[[Object.keys(increase)[Object.keys(increase).length-1]]][stateCode[i-1]]['delta']['recovered']+"</b></div>"+increase[[Object.keys(increase)[Object.keys(increase).length-1]]][stateCode[i-1]]['total']['recovered']+"</td><td><div style='color: black; font-size: 12px; margin-left:15px'><b>&#8593;"+increase[[Object.keys(increase)[Object.keys(increase).length-1]]][stateCode[i-1]]['delta']['deceased']+"</b></div>"+increase[[Object.keys(increase)[Object.keys(increase).length-1]]][stateCode[i-1]]['total']['deceased']+"</td><td><br>"+decode['statewise'][i]['lastupdatedtime']+"</td></tr>";
                } else {
                    var rows = "<tr style='background-color: #e7e7e7;' class='odd' data-aos='slide-right'><td class='fix'>"+state[i-1]+"</td><td><div style='color: tomato; font-size: 12px; margin-left:15px'><b>&#8593;"+increase[[Object.keys(increase)[Object.keys(increase).length-1]]][stateCode[i-1]]['delta']['confirmed']+"</b></div>"+increase[[Object.keys(increase)[Object.keys(increase).length-1]]][stateCode[i-1]]['total']['confirmed']+"</td><td><br>"+decode['statewise'][i]['active']+"</td><td><div style='color: #31AA4C; font-size: 12px; margin-left:15px'><b>&#8593;"+increase[[Object.keys(increase)[Object.keys(increase).length-1]]][stateCode[i-1]]['delta']['recovered']+"</b></div>"+increase[[Object.keys(increase)[Object.keys(increase).length-1]]][stateCode[i-1]]['total']['recovered']+"</td><td><div style='color: black; font-size: 12px; margin-left:15px'><b>&#8593;"+increase[[Object.keys(increase)[Object.keys(increase).length-1]]][stateCode[i-1]]['delta']['deceased']+"</b></div>"+increase[[Object.keys(increase)[Object.keys(increase).length-1]]][stateCode[i-1]]['total']['deceased']+"</td><td><br>"+decode['statewise'][i]['lastupdatedtime']+"</td></tr>";
                }
            } else {
                if(i % 2-1 === 0) {
                    var rows = "<tr style='background-color: #fff;' class='even' data-aos='slide-left'><td class='fix'>"+state[i-1]+"</td><td><div style='color: tomato; font-size: 12px; margin-left:10px'>"+''+"</div>"+decode['statewise'][i]['confirmed']+"</td><td>"+decode['statewise'][i]['active']+"</td><td>"+decode['statewise'][i]['recovered']+"</td><td>"+decode['statewise'][i]['deaths']+"</td><td>"+decode['statewise'][i]['lastupdatedtime']+"</td></tr>";
                } else {
                    var rows = "<tr style='background-color: #e7e7e7;' class='odd' data-aos='slide-right'><td class='fix'>"+state[i-1]+"</td><td><div style='color: tomato; font-size: 12px; margin-left:10px'>"+''+"</div>"+decode['statewise'][i]['confirmed']+"</td><td>"+decode['statewise'][i]['active']+"</td><td>"+decode['statewise'][i]['recovered']+"</td><td>"+decode['statewise'][i]['deaths']+"</td><td>"+decode['statewise'][i]['lastupdatedtime']+"</td></tr>";
                }
            }
            
            document.getElementById("co-table").innerHTML += rows;
        }
    
        
    //document.write(decode['statewise'][1]['state'])
}
