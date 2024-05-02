var datosMET=null;
var datosPRED=[];
var sta=[];
var staP=[];
var pinta="cross";
var pintaP="cross";
var ini=0;
var iniP=0;
var map="";

console.log(predData);

function leafMET(m){

    map=m;
	//DATA REQUEST BUTTON
    //Create button
    var btmet = window.document.createElement("BUTTON");
    btmet.id="btmet";
    btmet.title="Cargar datos meteorológicos";
    btmet.innerHTML="<b>📊</b>";
    btmet.style.zIndex="1000";
    btmet.style.position="absolute";
    btmet.style.top="100px";
    btmet.style.left="10px";
    btmet.style.fontSize="16px";
	btmet.style.textAlign="center";
    btmet.style.width="35px";
    btmet.style.height="35px";
    btmet.style.background="Turquoise";
	btmet.style.border="0px solid black";
    btmet.style.borderRadius="5px";
    btmet.style.cursor="pointer";
    btmet.addEventListener("click", pintaMET);
    window.document.body.appendChild(btmet);
    //Top-title
	var btit = window.document.createElement("P");
	btit.id="btit";
	btit.innerHTML="<b><u>Datos</u></b>";
    btit.title="Cargar datos meteorológicos";
    btit.style.zIndex="1000";
    btit.style.position="absolute";
    btit.style.top="75px";
    btit.style.left="7px";
    btit.style.fontSize="10px";
	btit.style.textAlign="center";
    btit.style.width="40px";
    btit.style.height="15px";
    btit.style.background="rgba(255,255,255,0.1)";
	btit.style.border="0px solid black";
    btit.style.borderRadius="0px";
    btit.style.cursor="context-menu";
    btit.style.fontFamily="Arial";
    window.document.body.appendChild(btit);
    //Create subtitle
    var mtxt = window.document.createElement("P");
    mtxt.id="mtxt";
    mtxt.innerHTML="<b>Cargar</b>";
    mtxt.title="Cargar datos meteorológicos";
    mtxt.style.zIndex="1000";
    mtxt.style.position="absolute";
    mtxt.style.top="130px";
    mtxt.style.left="7px";
    mtxt.style.fontSize="10px";
	mtxt.style.textAlign="center";
    mtxt.style.width="40px";
    mtxt.style.height="15px";
    mtxt.style.background="DarkOrange";
	mtxt.style.border="0px solid black";
    mtxt.style.borderRadius="2px";
    mtxt.style.cursor="context-menu";
    mtxt.style.fontFamily="Arial";
    window.document.body.appendChild(mtxt);
    //Create key
    for (var i=1; i<=6;i++){
        var mkey = window.document.createElement("P");
        mkey.id="mkey"+i;
        mkey.innerHTML="<b>"+i+"</b>";
        mkey.style.zIndex="1000";
        mkey.style.position="absolute";
        var pos = 140+i*16;
        pos = pos+"px";
        mkey.style.top=pos;
        mkey.style.left="7px";
        mkey.style.fontSize="10px";
	    mkey.style.textAlign="center";
	    mkey.style.textIndent="0px";
        mkey.style.width="40px";
        mkey.style.height="15px";
        mkey.style.background="DarkOrange";
        mkey.style.opacity="0.75";
	    mkey.style.border="0px solid black";
        mkey.style.borderRadius="2px";
        mkey.style.cursor="context-menu";
        mkey.style.fontFamily="Arial";
        mkey.style.fontWeight="bold";
        mkey.style.color="black";
        mkey.style.display="none";
        window.document.body.appendChild(mkey);
    }
	//FORECAST REQUEST BUTTON
    //Create button
    var btmet = window.document.createElement("BUTTON");
    btmet.id="btmetP";
    btmet.title="Cargar predicción meteorológica";
    btmet.innerHTML="<b>🌤</b>";
    btmet.style.zIndex="1000";
    btmet.style.position="absolute";
    btmet.style.top="100px";
    btmet.style.left="60px";
    btmet.style.fontSize="16px";
	btmet.style.textAlign="center";
    btmet.style.width="35px";
    btmet.style.height="35px";
    btmet.style.background="Turquoise";
	btmet.style.border="0px solid black";
    btmet.style.borderRadius="5px";
    btmet.style.cursor="pointer";
    btmet.addEventListener("click", pintaMETp);
    window.document.body.appendChild(btmet);
    //Top-title
	var btit = window.document.createElement("P");
	btit.id="btitP";
	btit.innerHTML="<b><u>Pred.</u></b>";
    btit.title="Cargar predicción meteorológica";
    btit.style.zIndex="1000";
    btit.style.position="absolute";
    btit.style.top="75px";
    btit.style.left="57px";
    btit.style.fontSize="10px";
	btit.style.textAlign="center";
    btit.style.width="40px";
    btit.style.height="15px";
    btit.style.background="rgba(255,255,255,0.1)";
	btit.style.border="0px solid black";
    btit.style.borderRadius="0px";
    btit.style.cursor="context-menu";
    btit.style.fontFamily="Arial";
    window.document.body.appendChild(btit);
    //Create subtitle
    var mtxt = window.document.createElement("P");
    mtxt.id="mtxtP";
    mtxt.innerHTML="<b>Cargar</b>";
    mtxt.title="Cargar predicción meteorológica";
    mtxt.style.zIndex="1000";
    mtxt.style.position="absolute";
    mtxt.style.top="130px";
    mtxt.style.left="57px";
    mtxt.style.fontSize="10px";
	mtxt.style.textAlign="center";
    mtxt.style.width="40px";
    mtxt.style.height="15px";
    mtxt.style.background="DarkOrange";
	mtxt.style.border="0px solid black";
    mtxt.style.borderRadius="2px";
    mtxt.style.cursor="context-menu";
    mtxt.style.fontFamily="Arial";
    window.document.body.appendChild(mtxt);
    //Create key
    for (var i=1; i<=6;i++){
        var mkey = window.document.createElement("P");
        mkey.id="mkeyP"+i;
        mkey.innerHTML="<b>"+i+"</b>";
        mkey.style.zIndex="1000";
        mkey.style.position="absolute";
        var pos = 140+i*16;
        pos = pos+"px";
        mkey.style.top=pos;
        mkey.style.left="57px";
        mkey.style.fontSize="10px";
	    mkey.style.textAlign="center";
	    mkey.style.textIndent="0px";
        mkey.style.width="40px";
        mkey.style.height="15px";
        mkey.style.background="DarkOrange";
        mkey.style.opacity="0.75";
	    mkey.style.border="0px solid black";
        mkey.style.borderRadius="2px";
        mkey.style.cursor="context-menu";
        mkey.style.fontFamily="Arial";
        mkey.style.fontWeight="bold";
        mkey.style.color="black";
        mkey.style.display="none";
        window.document.body.appendChild(mkey);
    }
	//Create date switch
	var btDate = window.document.createElement("P");
}

//Create loading message
function loader(){
    var ldmet = window.document.createElement("P");
    ldmet.id="ldmet";
    ldmet.innerHTML="CARGANDO DATOS METEOROLÓGICOS";
    ldmet.style.zIndex="1000";
    ldmet.style.position="relative";
    ldmet.style.top="-50vh";
    ldmet.style.width="250px";
	ldmet.style.margin="auto";
	ldmet.style.textAlign="center";
    ldmet.style.background="DarkOrange";
    ldmet.style.fontWeight="bold";
    ldmet.style.fontSize="11px";
    ldmet.style.padding="4px 4px 4px 4px";
    ldmet.style.fontFamily="Arial";
    window.document.body.appendChild(ldmet);
}

function loaderP(){
    var ldmet = window.document.createElement("P");
    ldmet.id="ldmetP";
    ldmet.innerHTML="CARGANDO PREDICCIÓN METEOROLÓGICA";
    ldmet.style.zIndex="1000";
    ldmet.style.position="relative";
    ldmet.style.top="-50vh";
    ldmet.style.width="250px";
	ldmet.style.margin="auto";
	ldmet.style.textAlign="center";
    ldmet.style.background="DarkOrange";
    ldmet.style.fontWeight="bold";
    ldmet.style.fontSize="11px";
    ldmet.style.padding="4px 4px 4px 4px";
    ldmet.style.fontFamily="Arial";
    window.document.body.appendChild(ldmet);
}


function getAEMET(est){
    //show loading message
    loader();
    //http GET request to data
    var data = null;

    var xhr = new XMLHttpRequest();
    var xhd = new XMLHttpRequest();
    xhr.withCredentials = true; //API request
    xhd.withCredentials = true; //Data request resulting from API request

	//Make the request to the API
    xhr.onload= function () {
        var consulta= JSON.parse(this.responseText);
        xhd.open("GET", consulta.datos);
        xhd.send();
    }
    xhd.onload= function () {
        data= JSON.parse(this.responseText);
        loadAEMET(data);
    }

    xhr.open("GET", "https://opendata.aemet.es/opendata/api/observacion/convencional/todas?api_key=eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0aGVyb2FtaW5nd29ya3Nob3BAZ21haWwuY29tIiwianRpIjoiMTRhZGVlNjUtNmQ1ZC00MDI4LWFiYTctYTVhMDgzODY1MTdiIiwiaXNzIjoiQUVNRVQiLCJpYXQiOjE2NjI1Njg3MDEsInVzZXJJZCI6IjE0YWRlZTY1LTZkNWQtNDAyOC1hYmE3LWE1YTA4Mzg2NTE3YiIsInJvbGUiOiIifQ.0fnqmhwdtdu_5lfRFOF8KjVj--nsUDtxyecnHUuz0vU");
    xhr.setRequestHeader("cache-control", "no-cache");
    xhr.send(data);
}

function loadAEMET(d){
    var obj=d.length;
	var cods=[];

    //loop to plot stations (s) as circles using station coordinate data
    for (var s=0; s < obj; s++){
		//check if station code exists already
		if(cods.includes(d[s].idema)==true){
			//si existe, comprobar la fecha
			sta.forEach((val,ind,arr)=>{
				if(arr[ind].cod==d[s].idema){
					if(d[s].fint>arr[ind].date){
						arr[ind].date=d[s].fint;
						arr[ind].temp=d[s].ta;
						arr[ind].viento=d[s].vmax;
						arr[ind].lluvia=d[s].prec;

						var prop="<p><b>"+arr[ind].title+"</b></p>";
						prop=prop+"<p>"+arr[ind].date+"</p>";
						prop=prop+"<p><b>Temperatura: </b>"+arr[ind].temp+" ºC</p>";
						prop=prop+"<p><b>Viento: </b>"+arr[ind].viento+" km/h</p>";
						prop=prop+"<p><b>Lluvia: </b>"+arr[ind].lluvia+" mm</p>";
						arr[ind].bindPopup(prop);
					}
				}
			});
			continue; //ir a la siguiente iteración
		}else{
			//add code to list
			cods.push(d[s].idema);
			//define circle marker
			sta[s]=window.L.circle([d[s].lat, d[s].lon],{radius: 5000, weight: 0, opacity: 0.0, fillColor: "RoyalBlue", fillOpacity: 0.5});
			//add name data
			sta[s].title=d[s].ubi;
			//add station code
			sta[s].cod=d[s].idema;

			//add data values (date, temp, wind speed and rain)

			sta[s].date=d[s].fint;
			sta[s].temp=d[s].ta;
			sta[s].viento=d[s].vmax;
			sta[s].lluvia=d[s].prec;
		}

		var prop="<p><b>"+sta[s].title+"</b></p>";
		prop=prop+"<p>"+sta[s].date+"</p>";
		prop=prop+"<p><b>Temperatura: </b>"+sta[s].temp+" ºC</p>";
		prop=prop+"<p><b>Viento: </b>"+sta[s].viento+" km/h</p>";
		prop=prop+"<p><b>Lluvia: </b>"+sta[s].lluvia+" mm</p>";
		sta[s].bindPopup(prop);
	}
	//console.log(cods);
	//console.log(sta);
    //remove loading message
    window.document.getElementById("ldmet").style.display="none";
    //update stations visible in view
    colocaEnLaVista(pinta);
}

function loadPRED(d){

    var obj=d.length;
	var cods=[];

    //loop to plot stations (s) as circles using station coordinate data
    for (var sP=0; sP < obj; sP++){
		//check if station code exists already
		if(cods.includes(d[sP][0])==true){
			//si existe, comprobar la fecha
			staP.forEach((val,ind,arr)=>{
			    /*arr[ind].date=d[s].fint;*/
			    arr[ind].temp=d[sP].ta;/*
			    arr[ind].viento=d[s].vmax;
			    arr[ind].lluvia=d[s].prec;*/

			    var prop="<p><b>"+arr[ind].title+"</b></p>";
/*			    prop=prop+"<p>"+arr[ind].date+"</p>";*/
			    prop=prop+"<p><b>Temperatura: </b>"+arr[ind].temp+" ºC</p>";
/*			    prop=prop+"<p><b>Viento: </b>"+arr[ind].viento+" km/h</p>";
			    prop=prop+"<p><b>Lluvia: </b>"+arr[ind].lluvia+" mm</p>";*/
			    arr[ind].bindPopup(prop);
			});
			continue; //ir a la siguiente iteración
		}else{
			//add code to list
			cods.push(d[sP][0]);
			//define circle marker
			staP[sP]=window.L.circle([d[sP][2], d[sP][3]],{radius: 5000, weight: 0, opacity: 0.0, fillColor: "RoyalBlue", fillOpacity: 0.5});
			//add name data
			staP[sP].title=d[sP][1];
			//add station code
			staP[sP].cod=d[sP][0];

			//add data values (date, temp, wind speed and rain)
			/*
			staP[s].date=d[s].fint;*/
			staP[sP].temp=d[sP][4][0].prediccion.dia[0].temperatura.maxima;
			/*
			staP[s].viento=d[s].vmax;
			staP[s].lluvia=d[s].prec;*/
		}

		var prop="<p><b>"+staP[sP].title+"</b></p>";
		/*
		prop=prop+"<p>"+sta[s].date+"</p>";
		prop=prop+"<p><b>Temperatura: </b>"+sta[s].temp+" ºC</p>";
		prop=prop+"<p><b>Viento: </b>"+sta[s].viento+" km/h</p>";
		prop=prop+"<p><b>Lluvia: </b>"+sta[s].lluvia+" mm</p>";*/
		staP[sP].bindPopup(prop);
	}
	//console.log(cods);
	//console.log(sta);
    //remove loading message
    window.document.getElementById("ldmetP").style.display="none";
    //update stations visible in view
    colocaEnLaVistaP(pintaP);
}

function colocaEnLaVista(p){
	if(p=="cross"){
    	return;
    }
    //Plot only stations visible in view bounds
    var vista=o.getBounds();
    for (var s in sta){
    sta[s].setStyle({fillOpacity: 0.5,fill: 0.5});
        if(vista.contains(sta[s].getLatLng())){
            var cobertura=o.distance(o.getBounds().getNorthEast(),o.getBounds().getSouthEast());
            sta[s].setRadius(cobertura/30);
            sta[s].addTo(map);
        }else if(sta[s]){
            sta[s].remove();
        }
    //edit stations display color according to data value
    switch(pinta){
    case "viento":
        if (sta[s].viento==null || sta[s].viento<0){
            sta[s].setStyle({fillOpacity: 0.0,fill: 0.0, cursor: "none"});
        }else if (sta[s].viento>=0 && sta[s].viento<5){
            sta[s].setStyle({fillColor: "green"});
        }else if (sta[s].viento>=5 && sta[s].viento<10){
            sta[s].setStyle({fillColor: "yellow"});
        }else if (sta[s].viento>=10 && sta[s].viento<20){
            sta[s].setStyle({fillColor: "orange"});
        }else if (sta[s].viento>=20 && sta[s].viento<30){
            sta[s].setStyle({fillColor: "red"});
        }else if (sta[s].viento>=30 && sta[s].viento<500){
            sta[s].setStyle({fillColor: "purple"});
        }
    break;
    case "lluvia":
        if (sta[s].lluvia==null || sta[s].lluvia<=0){
            sta[s].setStyle({fillOpacity: 0.0, fill: 0.0, cursor: "none"});
        }else if (sta[s].lluvia>0 && sta[s].lluvia<2){
            sta[s].setStyle({fillColor: "LightCyan"});
        }else if (sta[s].lluvia>=2 && sta[s].lluvia<5){
            sta[s].setStyle({fillColor: "LightSkyBlue"});
        }else if (sta[s].lluvia>=5 && sta[s].lluvia<10){
            sta[s].setStyle({fillColor: "SkyBlue"});
        }else if (sta[s].lluvia>=10 && sta[s].lluvia<20){
            sta[s].setStyle({fillColor: "DodgerBlue"});
        }else if (sta[s].lluvia>=20 && sta[s].lluvia<30){
            sta[s].setStyle({fillColor: "Blue"});
        }else if (sta[s].lluvia>=30 && sta[s].lluvia<500){
            sta[s].setStyle({fillColor: "DarkBlue"});
        }
    break;
    case "temp":
        if (sta[s].temp==null || sta[s].temp<=0){
            sta[s].setStyle({fillOpacity: 0.0, fill: 0.0, cursor: "none"});
        }else if (sta[s].temp>0 && sta[s].temp<5){
            sta[s].setStyle({fillColor: "LightCyan"});
        }else if (sta[s].temp>=5 && sta[s].temp<10){
            sta[s].setStyle({fillColor: "DodgerBlue"});
        }else if (sta[s].temp>=10 && sta[s].temp<20){
            sta[s].setStyle({fillColor: "SpringGreen"});
        }else if (sta[s].temp>=20 && sta[s].temp<30){
            sta[s].setStyle({fillColor: "Gold"});
        }else if (sta[s].temp>=30 && sta[s].temp<100){
            sta[s].setStyle({fillColor: "DarkOrange"});
        }
    break;
    case "cross":
            sta[s].remove();
    break;
    }
    }
}

function colocaEnLaVistaP(p){
	if(p=="cross"){
    	return;
    }
    //Plot only stations visible in view bounds
    var vistaP=o.getBounds();
    for (var sP in staP){
    staP[sP].setStyle({fillOpacity: 0.5,fill: 0.5});
        if(vistaP.contains(staP[sP].getLatLng())){
            var coberturaP=o.distance(o.getBounds().getNorthEast(),o.getBounds().getSouthEast());
            staP[sP].setRadius(coberturaP/30);
            staP[sP].addTo(map);
        }else if(staP[sP]){
            staP[sP].remove();
        }
    //edit stations display color according to data value
    switch(pintaP){
    case "viento":
        if (staP[sP].viento==null || staP[sP].viento<0){
            staP[sP].setStyle({fillOpacity: 0.0,fill: 0.0, cursor: "none"});
        }else if (staP[sP].viento>=0 && staP[sP].viento<5){
            staP[sP].setStyle({fillColor: "green"});
        }else if (staP[sP].viento>=5 && staP[sP].viento<10){
            staP[sP].setStyle({fillColor: "yellow"});
        }else if (staP[sP].viento>=10 && staP[sP].viento<20){
            staP[sP].setStyle({fillColor: "orange"});
        }else if (staP[sP].viento>=20 && staP[sP].viento<30){
            staP[sP].setStyle({fillColor: "red"});
        }else if (staP[sP].viento>=30 && staP[sP].viento<500){
            staP[sP].setStyle({fillColor: "purple"});
        }
    break;
    case "lluvia":
        if (staP[sP].lluvia==null || staP[sP].lluvia<=0){
            staP[sP].setStyle({fillOpacity: 0.0, fill: 0.0, cursor: "none"});
        }else if (staP[sP].lluvia>0 && staP[sP].lluvia<2){
            staP[sP].setStyle({fillColor: "LightCyan"});
        }else if (staP[sP].lluvia>=2 && staP[sP].lluvia<5){
            staP[sP].setStyle({fillColor: "LightSkyBlue"});
        }else if (staP[sP].lluvia>=5 && staP[sP].lluvia<10){
            staP[sP].setStyle({fillColor: "SkyBlue"});
        }else if (staP[sP].lluvia>=10 && staP[sP].lluvia<20){
            staP[sP].setStyle({fillColor: "DodgerBlue"});
        }else if (staP[sP].lluvia>=20 && staP[sP].lluvia<30){
            staP[sP].setStyle({fillColor: "Blue"});
        }else if (staP[sP].lluvia>=30 && staP[sP].lluvia<500){
            staP[sP].setStyle({fillColor: "DarkBlue"});
        }
    break;
    case "temp":
        if (staP[sP].temp==null || staP[sP].temp<=0){
            staP[sP].setStyle({fillOpacity: 0.0, fill: 0.0, cursor: "none"});
        }else if (staP[sP].temp>0 && staP[sP].temp<5){
            staP[sP].setStyle({fillColor: "LightCyan"});
        }else if (staP[sP].temp>=5 && staP[sP].temp<10){
            staP[sP].setStyle({fillColor: "DodgerBlue"});
        }else if (staP[sP].temp>=10 && staP[sP].temp<20){
            staP[sP].setStyle({fillColor: "SpringGreen"});
        }else if (staP[sP].temp>=20 && staP[sP].temp<30){
            staP[sP].setStyle({fillColor: "Gold"});
        }else if (staP[sP].temp>=30 && staP[sP].temp<100){
            staP[sP].setStyle({fillColor: "DarkOrange"});
        }
    break;
    case "cross":
            staP[sP].remove();
    break;
    }
    }
}

function pintaMET(){
    //only download data at start
	if(ini==0){
    getAEMET(sta);
    ini=1;
    }
    //empty legend
    for (var i=1; i<=6;i++){
        window.document.getElementById("mkey"+i).style.display= "none";
        window.document.getElementById("mkey"+i).style.color="black";
        }
    //generate new legend for each type of data
    //(using the current icon to define the next key)
    if (pinta=="cross"){
        pinta="temp";
        window.document.getElementById("btmet").innerHTML="🌡";
    	window.document.getElementById("btmet").title="Temperatura (ºC)";
        window.document.getElementById("mtxt").innerHTML="<b>T (ºC)</b>";
        window.document.getElementById("mtxt").title="Temperatura (ºC)";
        //set key
        mkey1.style.display="block";
        mkey1.style.background="LightCyan";
        mkey1.innerHTML="0 - 5";
        mkey2.style.display="block";
        mkey2.style.background="DodgerBlue";
        mkey2.innerHTML="5 - 10";
        mkey3.style.display="block";
        mkey3.style.background="SpringGreen";
        mkey3.innerHTML="10 - 20";
        mkey4.style.display="block";
        mkey4.style.background="Gold";
        mkey4.innerHTML="20 - 30";
        mkey5.style.display="block";
        mkey5.style.background="DarkOrange";
        mkey5.innerHTML="> 30";
    }else if(pinta=="temp"){
        pinta="viento";
        window.document.getElementById("btmet").innerHTML="🌪";
    	window.document.getElementById("btmet").title="Viento (Km/h)";
        window.document.getElementById("mtxt").innerHTML="<b>V(km/h)</b>";
        window.document.getElementById("mtxt").title="Viento (Km/h)";
        //set key
        mkey1.style.display="block";
        mkey1.style.background="green";
        mkey1.innerHTML="0 - 5";
        mkey2.style.display="block";
        mkey2.style.background="yellow";
        mkey2.innerHTML="5 - 10";
        mkey3.style.display="block";
        mkey3.style.background="orange";
        mkey3.innerHTML="10 - 20";
        mkey4.style.display="block";
        mkey4.style.background="red";
        mkey4.innerHTML="20 - 30";
        mkey4.style.color="white";
        mkey5.style.display="block";
        mkey5.style.background="purple";
        mkey5.innerHTML="> 30";
        mkey5.style.color="white";
    }else if(pinta=="lluvia"){
        pinta="cross";
        window.document.getElementById("btmet").innerHTML="❌";
    	window.document.getElementById("btmet").title="Sin clima";
        window.document.getElementById("mtxt").innerHTML="<b>-</b>";
        window.document.getElementById("mtxt").title="Sin clima";
    }else if(pinta=="viento"){
        pinta="lluvia";
        window.document.getElementById("btmet").innerHTML="☔";
    	window.document.getElementById("btmet").title="Precipitación (l/m²)";
        window.document.getElementById("mtxt").innerHTML="<b>P (mm)</b>";
        window.document.getElementById("mtxt").title="Precipitación (l/m²)";
        //set key
        mkey1.style.display="block";
        mkey1.style.background="LightCyan";
        mkey1.innerHTML="0 - 2";
        mkey2.style.display="block";
        mkey2.style.background="LightSkyBlue";
        mkey2.innerHTML="2 - 5";
        mkey3.style.display="block";
        mkey3.style.background="SkyBlue";
        mkey3.innerHTML="5 - 10";
        mkey4.style.display="block";
        mkey4.style.background="DodgerBlue";
        mkey4.innerHTML="10 - 20";
        mkey5.style.display="block";
        mkey5.style.background="Blue";
        mkey5.innerHTML="20 - 30";
        mkey5.style.color="white";
        mkey6.style.display="block";
        mkey6.style.background="DarkBlue";
        mkey6.innerHTML="> 30";
        mkey6.style.color="white";
    }
    //update stations visible in view
    colocaEnLaVista(pinta);
}

function pintaMETp(){
    //only download data at start
	if(iniP==0){
	loaderP();
    loadPRED(predData)
    iniP=1;
    }

    //empty legend
    for (var i=1; i<=6;i++){
        window.document.getElementById("mkeyP"+i).style.display= "none";
        window.document.getElementById("mkeyP"+i).style.color="black";
        }
    //generate new legend for each type of data
    //(using the current icon to define the next key)
    if (pintaP=="cross"){
        pintaP="temp";
        window.document.getElementById("btmetP").innerHTML="🌡";
    	window.document.getElementById("btmetP").title="Temperatura (ºC)";
        window.document.getElementById("mtxtP").innerHTML="<b>T (ºC)</b>";
        window.document.getElementById("mtxtP").title="Temperatura (ºC)";
        //set key
        mkeyP1.style.display="block";
        mkeyP1.style.background="LightCyan";
        mkeyP1.innerHTML="0 - 5";
        mkeyP2.style.display="block";
        mkeyP2.style.background="DodgerBlue";
        mkeyP2.innerHTML="5 - 10";
        mkeyP3.style.display="block";
        mkeyP3.style.background="SpringGreen";
        mkeyP3.innerHTML="10 - 20";
        mkeyP4.style.display="block";
        mkeyP4.style.background="Gold";
        mkeyP4.innerHTML="20 - 30";
        mkeyP5.style.display="block";
        mkeyP5.style.background="DarkOrange";
        mkeyP5.innerHTML="> 30";
    }else if(pintaP=="temp"){
        pintaP="viento";
        window.document.getElementById("btmetP").innerHTML="🌪";
    	window.document.getElementById("btmetP").title="Viento (Km/h)";
        window.document.getElementById("mtxtP").innerHTML="<b>V(km/h)</b>";
        window.document.getElementById("mtxtP").title="Viento (Km/h)";
        //set key
        mkeyP1.style.display="block";
        mkeyP1.style.background="green";
        mkeyP1.innerHTML="0 - 5";
        mkeyP2.style.display="block";
        mkeyP2.style.background="yellow";
        mkeyP2.innerHTML="5 - 10";
        mkeyP3.style.display="block";
        mkeyP3.style.background="orange";
        mkeyP3.innerHTML="10 - 20";
        mkeyP4.style.display="block";
        mkeyP4.style.background="red";
        mkeyP4.innerHTML="20 - 30";
        mkeyP4.style.color="white";
        mkeyP5.style.display="block";
        mkeyP5.style.background="purple";
        mkeyP5.innerHTML="> 30";
        mkeyP5.style.color="white";
    }else if(pintaP=="lluvia"){
        pintaP="cross";
        window.document.getElementById("btmetP").innerHTML="❌";
    	window.document.getElementById("btmetP").title="Sin clima";
        window.document.getElementById("mtxtP").innerHTML="<b>-</b>";
        window.document.getElementById("mtxtP").title="Sin clima";
    }else if(pintaP=="viento"){
        pintaP="lluvia";
        window.document.getElementById("btmetP").innerHTML="☔";
    	window.document.getElementById("btmetP").title="Precipitación (l/m²)";
        window.document.getElementById("mtxtP").innerHTML="<b>P (mm)</b>";
        window.document.getElementById("mtxtP").title="Precipitación (l/m²)";
        //set key
        mkeyP1.style.display="block";
        mkeyP1.style.background="LightCyan";
        mkeyP1.innerHTML="0 - 2";
        mkeyP2.style.display="block";
        mkeyP2.style.background="LightSkyBlue";
        mkeyP2.innerHTML="2 - 5";
        mkeyP3.style.display="block";
        mkeyP3.style.background="SkyBlue";
        mkeyP3.innerHTML="5 - 10";
        mkeyP4.style.display="block";
        mkeyP4.style.background="DodgerBlue";
        mkeyP4.innerHTML="10 - 20";
        mkeyP5.style.display="block";
        mkeyP5.style.background="Blue";
        mkeyP5.innerHTML="20 - 30";
        mkeyP5.style.color="white";
        mkeyP6.style.display="block";
        mkeyP6.style.background="DarkBlue";
        mkeyP6.innerHTML="> 30";
        mkeyP6.style.color="white";
    }
    //update stations visible in view
    colocaEnLaVistaP(pintaP);
}
