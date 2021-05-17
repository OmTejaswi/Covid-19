 api();
var stateCode = []
async function api(){

    var timeData = await fetch("https://worldtimeapi.org/api/ip");
    var jsonCoverter = await timeData.json();
    var date = jsonCoverter.datetime;
    var take = date.slice(0,10);
    console.log(take);

    var data = await fetch("https://api.covid19india.org/data.json");
    var dataFetch = await data.json();
    var decode = await JSON.parse(JSON.stringify(dataFetch),true);
    var count = decode['statewise'].length;
    console.log(decode);
    console.log(count)

    var datai = await fetch("https://api.covid19india.org/v4/min/data-all.min.json");
    var datafe = await datai.json();
    var increase = await JSON.parse(JSON.stringify(datafe),true)   
    
    //stateCode = [];

    if(count === decode['statewise'].length) {
        for(var i = 1; i < count+1; i++) {
            stateCode.push(decode['statewise'][i]['statecode']);
            console.log(increase)
            if(increase[take][stateCode[i-1]]['delta'] !== undefined) {
                if(i % 2-1 === 0) {
                    var rows = "<tr style='background-color: #fff;' class='even' data-aos='slide-left'><td class='fix'>"+decode['statewise'][i]['state']+"</td><td><div style='color: tomato; font-size: 12px; margin-left:10px'>"+increase[take][stateCode[i-1]]['delta']['confirmed']+"</div><br>"+decode['statewise'][i]['confirmed']+"</td><td>"+decode['statewise'][i]['active']+"</td><td>"+decode['statewise'][i]['recovered']+"</td><td>"+decode['statewise'][i]['deaths']+"</td><td>"+decode['statewise'][i]['lastupdatedtime']+"</td></tr>";
                } else {
                    var rows = "<tr style='background-color: #e7e7e7;' class='odd' data-aos='slide-right'><td class='fix'>"+decode['statewise'][i]['state']+"</td><td><div style='color: tomato; font-size: 12px; margin-left:10px'>"+increase[take][stateCode[i-1]]['delta']['confirmed']+"</div><br>"+decode['statewise'][i]['confirmed']+"</td><td>"+decode['statewise'][i]['active']+"</td><td>"+decode['statewise'][i]['recovered']+"</td><td>"+decode['statewise'][i]['deaths']+"</td><td>"+decode['statewise'][i]['lastupdatedtime']+"</td></tr>";
                }
            } else {
                if(i % 2-1 === 0) {
                    var rows = "<tr style='background-color: #fff;' class='even' data-aos='slide-left'><td class='fix'>"+decode['statewise'][i]['state']+"</td><td><div style='color: tomato; font-size: 12px; margin-left:10px'>"+''+"</div><br>"+decode['statewise'][i]['confirmed']+"</td><td>"+decode['statewise'][i]['active']+"</td><td>"+decode['statewise'][i]['recovered']+"</td><td>"+decode['statewise'][i]['deaths']+"</td><td>"+decode['statewise'][i]['lastupdatedtime']+"</td></tr>";
                } else {
                    var rows = "<tr style='background-color: #e7e7e7;' class='odd' data-aos='slide-right'><td class='fix'>"+decode['statewise'][i]['state']+"</td><td><div style='color: tomato; font-size: 12px; margin-left:10px'>"+''+"</div><br>"+decode['statewise'][i]['confirmed']+"</td><td>"+decode['statewise'][i]['active']+"</td><td>"+decode['statewise'][i]['recovered']+"</td><td>"+decode['statewise'][i]['deaths']+"</td><td>"+decode['statewise'][i]['lastupdatedtime']+"</td></tr>";
                }
            }
            
            document.getElementById("co-table").innerHTML += rows;
        }
    }
    //document.write(decode['statewise'][1]['state'])
}