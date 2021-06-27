'use strict';

let seattle ={
shopName:'seattle',    
 minCust:23,
 maxCust:65,
 avgC:6.3,
  purchased:[],


purchase: function(minCust,maxCust,avgC){
for(let i=0;i<14;i++){
  
    this.purchased[i] = (Math.floor(Math.random() * (maxCust - minCust + 1) + minCust))*avgC;
    
    }

},

render:function(){
   
    let total=0;
    let divEl = document.getElementById('seattle');
    let h2El = document.createElement('h2');
        divEl.appendChild(h2El);
        h2El.textContent = this.shopName;

        let ulEl = document.createElement('ul');
        for (let i = 0; i <= 14; i++) {
            
            let b=6;
            
            console.log(total);
            
            let liEl = document.createElement('li');
           
            
           if (i<=5){
            
            liEl.textContent =`${b+i}am:${this.purchased[i]}coockies` 
             }
             else if(i==6){

                liEl.textContent =`12pm:${this.purchased[i]}coockies`
            
             }  else if(i>6&&i<14){

                liEl.textContent =`${i-6}pm:${this.purchased[i]}coockies`


             }       else{
                liEl.textContent =`total:${total}cookies`
                
             }
            
            
            ulEl.appendChild(liEl);
            total=total+this.purchased[i];
            }
            divEl.appendChild(ulEl);
           
        }
    }

seattle.purchase(23,65,6.3);
seattle.render()






let Tokyo ={
    shopName:'Tokyo',    
     minCust:3,
     maxCust:24,
     avgC:1.2,
      purchased:[],
    
    
    purchase: function(minCust,maxCust,avgC){
    for(let i=0;i<14;i++){
      
        this.purchased[i] = (Math.floor(Math.random() * (maxCust - minCust + 1) + minCust))*avgC;
        
        }
    
    },
    
    render:function(){
       
        let total=0;
        let divEl = document.getElementById(this.shopName);
        let h2El = document.createElement('h2');
            divEl.appendChild(h2El);
            h2El.textContent = this.shopName;
    
            let ulEl = document.createElement('ul');
            for (let i = 0; i <= 14; i++) {
                
                let b=6;
                
                console.log(total);
                
                let liEl = document.createElement('li');
               
                
               if (i<=5){
                
                liEl.textContent =`${b+i}am:${this.purchased[i]}coockies` 
                 }
                 else if(i==6){
    
                    liEl.textContent =`12pm:${this.purchased[i]}coockies`
                
                 }  else if(i>6&&i<14){
    
                    liEl.textContent =`${i-6}pm:${this.purchased[i]}coockies`
    
    
                 }       else{
                    liEl.textContent =`total:${total}cookies`
                    
                 }
                
                
                ulEl.appendChild(liEl);
                total=total+this.purchased[i];
                }
                divEl.appendChild(ulEl);
               
            }
        }
    
    Tokyo.purchase(3,24,1.2);
    Tokyo.render()


    let Dubai ={
        shopName:'Dubai',    
         minCust:11,
         maxCust:38,
         avgC:3.7,
          purchased:[],
        
        
        purchase: function(minCust,maxCust,avgC){
        for(let i=0;i<14;i++){
          
            this.purchased[i] = (Math.floor(Math.random() * (maxCust - minCust + 1) + minCust))*avgC;
            
            }
        
        },
        
        render:function(){
           
            let total=0;
            let divEl = document.getElementById(this.shopName);
            let h2El = document.createElement('h2');
                divEl.appendChild(h2El);
                h2El.textContent = this.shopName;
        
                let ulEl = document.createElement('ul');
                for (let i = 0; i <= 14; i++) {
                    
                    let b=6;
                    
                    console.log(total);
                    
                    let liEl = document.createElement('li');
                   
                    
                   if (i<=5){
                    
                    liEl.textContent =`${b+i}am:${this.purchased[i]}coockies` 
                     }
                     else if(i==6){
        
                        liEl.textContent =`12pm:${this.purchased[i]}coockies`
                    
                     }  else if(i>6&&i<14){
        
                        liEl.textContent =`${i-6}pm:${this.purchased[i]}coockies`
        
        
                     }       else{
                        liEl.textContent =`total:${total}cookies`
                        
                     }
                    
                    
                    ulEl.appendChild(liEl);
                    total=total+this.purchased[i];
                    }
                    divEl.appendChild(ulEl);
                   
                }
            }
        
            Dubai.purchase(11,38,3.7);
            Dubai.render()


            let paris ={
                shopName:'paris',    
                 minCust:20,
                 maxCust:38,
                 avgC:2.3,
                  purchased:[],
                
                
                purchase: function(minCust,maxCust,avgC){
                for(let i=0;i<14;i++){
                  
                    this.purchased[i] = (Math.floor(Math.random() * (maxCust - minCust + 1) + minCust))*avgC;
                    
                    }
                
                },
                
                render:function(){
                   
                    let total=0;
                    let divEl = document.getElementById(this.shopName);
                    let h2El = document.createElement('h2');
                        divEl.appendChild(h2El);
                        h2El.textContent = this.shopName;
                
                        let ulEl = document.createElement('ul');
                        for (let i = 0; i <= 14; i++) {
                            
                            let b=6;
                            
                            console.log(total);
                            
                            let liEl = document.createElement('li');
                           
                            
                           if (i<=5){
                            
                            liEl.textContent =`${b+i}am:${this.purchased[i]}coockies` 
                             }
                             else if(i==6){
                
                                liEl.textContent =`12pm:${this.purchased[i]}coockies`
                            
                             }  else if(i>6&&i<14){
                
                                liEl.textContent =`${i-6}pm:${this.purchased[i]}coockies`
                
                
                             }       else{
                                liEl.textContent =`total:${total}cookies`
                                
                             }
                            
                            
                            ulEl.appendChild(liEl);
                            total=total+this.purchased[i];
                            }
                            divEl.appendChild(ulEl);
                           
                        }
                    }
                
                    paris.purchase(20,38,2.3);
                    paris.render()



                    let lima ={
                        shopName:'lima',    
                         minCust:2,
                         maxCust:16,
                         avgC:4.6,
                          purchased:[],
                        
                        
                        purchase: function(minCust,maxCust,avgC){
                        for(let i=0;i<14;i++){
                          
                            this.purchased[i] = (Math.floor(Math.random() * (maxCust - minCust + 1) + minCust))*avgC;
                            
                            }
                        
                        },
                        
                        render:function(){
                           
                            let total=0;
                            let divEl = document.getElementById(this.shopName);
                            let h2El = document.createElement('h2');
                                divEl.appendChild(h2El);
                                h2El.textContent = this.shopName;
                        
                                let ulEl = document.createElement('ul');
                                for (let i = 0; i <= 14; i++) {
                                    
                                    let b=6;
                                    
                                    console.log(total);
                                    
                                    let liEl = document.createElement('li');
                                   
                                    
                                   if (i<=5){
                                    
                                    liEl.textContent =`${b+i}am:${this.purchased[i]}coockies` 
                                     }
                                     else if(i==6){
                        
                                        liEl.textContent =`12pm:${this.purchased[i]}coockies`
                                    
                                     }  else if(i>6&&i<14){
                        
                                        liEl.textContent =`${i-6}pm:${this.purchased[i]}coockies`
                        
                        
                                     }       else{
                                        liEl.textContent =`total:${total}cookies`
                                        
                                     }
                                    
                                    
                                    ulEl.appendChild(liEl);
                                    total=total+this.purchased[i];
                                    }
                                    divEl.appendChild(ulEl);
                                   
                                }
                            }
                        
                            lima.purchase(2,16,4.6);
                            lima.render()