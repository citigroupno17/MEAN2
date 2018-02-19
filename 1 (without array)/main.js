
var animalContainer= document.getElementById("animal-info");
var btn= document.getElementById("btn");

btn.addEventListener("click", function(){

	//for infosys
    var ourRequest= new XMLHttpRequest();
	ourRequest.open('GET', "https://www.quandl.com/api/v3/datasets/NSE/INFY.json?api_key=ohudC4aZ_QkhbmV22Prx&start_date=2018-02-02");
	ourRequest.onload= function(){
    var ourData= JSON.parse(ourRequest.responseText);
    renderHTML(ourData);
	};
	ourRequest.send();
	
	//for tech mahindra
	var ourRequest1= new XMLHttpRequest();
	ourRequest1.open('GET', "https://www.quandl.com/api/v3/datasets/NSE/TECHM.json?api_key=ohudC4aZ_QkhbmV22Prx&start_date=2018-02-02");
	ourRequest1.onload= function(){
    var ourData1= JSON.parse(ourRequest1.responseText);
    renderHTML(ourData1);
	};
	ourRequest1.send();
	
	
	
});

function renderHTML(nifty){
		
		var close=0;
        var totalTrade=0;
        var Datasets=nifty.dataset.data.length;
        for(i=0; i<Datasets; i++)
        {
            for(j=0; j<nifty.dataset.data[i].length; j++)
             {
                 if(j==5)//close
					close+=Number(nifty.dataset.data[i][j]);
                
                if(j==6)
					totalTrade+=Number(nifty.dataset.data[i][j]);
             }
        }
        
        var AvgClose=close/Datasets;
        var AvgTrade=totalTrade/Datasets;

        htmlString+="Average of close= "+AvgClose;
        htmlString+="Average of Trade= "+AvgTrade;


    animalContainer.insertAdjacentHTML('beforeend', htmlString);
}