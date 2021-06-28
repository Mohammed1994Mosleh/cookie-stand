'use strict';

// let seattle ={
// shopName:'seattle',    
//  minCust:23,
//  maxCust:65,
//  avgC:6.3,
//   purchased:[],

// purchase: function(minCust,maxCust,avgC){
// for(let i=0;i<14;i++){
  
//     this.purchased[i] = (Math.floor(Math.random() * (maxCust - minCust + 1) + minCust))*avgC;
    
//     }

// },

// render:function(){
   
//     let total=0;
//     let divEl = document.getElementById('seattle');
//     let h2El = document.createElement('h2');
//         divEl.appendChild(h2El);
//         h2El.textContent = this.shopName;

//         let ulEl = document.createElement('ul');
//         for (let i = 0; i <= 14; i++) {
            
//             let b=6;
            
//             console.log(total);
            
//             let liEl = document.createElement('li');
           
            
//            if (i<=5){
            
//             liEl.textContent =`${b+i}am:${this.purchased[i]}coockies` 
//              }
//              else if(i==6){

//                 liEl.textContent =`12pm:${this.purchased[i]}coockies`
            
//              }  else if(i>6&&i<14){

//                 liEl.textContent =`${i-6}pm:${this.purchased[i]}coockies`

//              }       else{
//                 liEl.textContent =`total:${total}cookies`
                
//              }
            
            
//             ulEl.appendChild(liEl);
//             total=total+this.purchased[i];
//             }
//             divEl.appendChild(ulEl);
           
//         }
//     }

// seattle.purchase(23,65,6.3);
// seattle.render()
let hours=['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

let charic=[];
let totalPd=[];
let sum2=0;

function Stores (Name, minCust, maxCust, avgC) {
    
    this.Name=Name;
    this.minCust=minCust;
    this.maxCust=maxCust;
    this.avgC=avgC;
    
    charic.push(this);
    this.purchased=[];
    this.sum=0;

    
}

Stores.prototype.purchase=function(minCust,maxCust,avgC){
    for(let i=0;i<14;i++){
  
    this.purchased[i] = (Math.floor(Math.random() * (maxCust - minCust + 1) + minCust))*avgC;
    this.sum+=this.purchased[i];

    }
}

// let seattle=new Stores('seattle',12,20,6.5)
// console.log(seattle);

// let contaIner =document.getElementById('con');
// let table = document.createElement('table');
// contaIner.appendChild(table);
let contaIner =document.getElementById('con');
let table = document.createElement('table');
contaIner.appendChild(table);



function toTalpd (){
for (let i=0;i<hours.length;i++){

sum2=seattle.purchased[i]+tokyo.purchased[i]+dubai.purchased[i]+paris.purchased[i]+lima.purchased[i];
totalPd.push(sum2);
// totalPd.push((seattle.purchased[i]+tokyo.purchased[i]+dubai.purchased[i]+paris.purchased[i]+lima.purchased[i]))

}



}


function creatheader(){
    
let raws=document.createElement('tr')
table.appendChild(raws);

for(let i=0;i<=hours.length;i++){
 let th;
    if(i==0){
        let th=document.createElement('th');
        th.textContent=[   ];
        raws.appendChild(th);

    }
   

if (i<hours.length){
    
let th=document.createElement('th');
th.textContent=hours[i];
raws.appendChild(th);
}
if(i==hours.length){
th=document.createElement('th');
th.textContent='total';
raws.appendChild(th);


}

}

}


Stores.prototype.creaTetable=function(){

    let raws=document.createElement('tr')
    table.appendChild(raws);

    for(let i=0;i<=(hours.length);i++){

        if(i==0){
            let td=document.createElement('td');
            td.textContent=this.Name;
            raws.appendChild(td);
    
        }

        if (i<hours.length){
    let td=document.createElement('td');
    td.textContent=this.purchased[i];
    raws.appendChild(td);
        }

        if(i==hours.length){
            let td=document.createElement('td');
    td.textContent=this.sum;
    raws.appendChild(td);

        }
       




    
    }

   
   
   




}

function lasTraw(){
    let raws=document.createElement('tr')
    table.appendChild(raws);

for(let i=0;i<hours.length;i++){
 


    
    if(i==0){
        let td=document.createElement('td');
        td.textContent='total';
        raws.appendChild(td);



    }
    let td=document.createElement('td');
    td.textContent=totalPd[i];
    raws.appendChild(td);



}






}




creatheader();
let seattle=new Stores('seattle',12,60,6.5);

seattle.purchase(12,5,6.5);

seattle.creaTetable();

let tokyo=new Stores('tokyo',2,3,4);
tokyo.purchase(2,3,4.5);
tokyo.creaTetable();

let dubai=new Stores('dubai',20,60,2.3);
dubai.purchase(20,60,2.3);
dubai.creaTetable();

let paris=new Stores('paris',70,80,3);
paris.purchase(70,80,3);
paris.creaTetable();

let lima=new Stores('lima',20,30,5);
lima.purchase(20,30,5);
lima.creaTetable();

toTalpd();
console.log();
lasTraw();
console.log(totalPd);






console.log(seattle.purchased);
