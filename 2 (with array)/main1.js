
var animalContainer= document.getElementById("stock-info");
var btn= document.getElementById("btn");


var it = ["WIPRO","INFY","TECHM","TCS","HCL"];
var ourRequest=[];
var ourData= [];
var i = 0;
btn.addEventListener("click", function(){

    //here we are using loop to get all the 5 companies from sector IT but array of our request dont work
    // it works when we create different variables
    for(i=0;i<it.length;i++){
        var url = "https://www.quandl.com/api/v3/datasets/NSE/"+it[i]+".json?api_key=ohudC4aZ_QkhbmV22Prx&start_date=2018-02-02";
       // animalContainer.insertAdjacentHTML('beforeend', url);
		ourRequest[i]= new XMLHttpRequest();
        ourRequest[i].open('GET', url);
        ourRequest[i].onload= function(){
        ourData[i]= JSON.parse(ourRequest[i].responseText);
        renderHTML(ourData[i]);
        };
        ourRequest[i].send();


 //    if(i==0){
 //        var ourRequest= new XMLHttpRequest();
 //        ourRequest.open('GET', url);
 //        ourRequest.onload= function(){
 //        var ourData= JSON.parse(ourRequest.responseText);
 //        renderHTML(ourData);
 //        };
 //        ourRequest.send();
            
 //    }
 //    if(i==1){
        
 //    var ourRequest1= new XMLHttpRequest();
	// ourRequest1.open('GET', url);
	// ourRequest1.onload= function(){
 //    var ourData1= JSON.parse(ourRequest1.responseText);
 //    renderHTML(ourData1);
	// };
	// ourRequest1.send();
 //    }
 //    if(i==2){
        
 //    var ourRequest2= new XMLHttpRequest();
	// ourRequest2.open('GET', url);
	// ourRequest2.onload= function(){
 //    var ourData2= JSON.parse(ourRequest2.responseText);
 //    renderHTML(ourData2);
	// };
	// ourRequest2.send();
 //    }
    }

    
	
/*	var ourRequest1= new XMLHttpRequest();
	ourRequest1.open('GET', "https://www.quandl.com/api/v3/datasets/NSE/TECHM.json?api_key=ohudC4aZ_QkhbmV22Prx&start_date=2018-02-02");
	ourRequest1.onload= function(){
    var ourData1= JSON.parse(ourRequest1.responseText);
    renderHTML(ourData1);
	};
	ourRequest1.send();*/
	
});

function renderHTML(nifty){
		var htmlString="";
		var close=0;
        var totalTrade=0;
        var Datasets=nifty.dataset.data.length;
        for(i=0; i<Datasets; i++)
        {
            for(j=0; j<nifty.dataset.data[i].length; j++)
             {
         
                 if(j==5)//close
                {
                    close+=Number(nifty.dataset.data[i][j]);
                }
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