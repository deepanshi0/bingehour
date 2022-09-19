console.log("hiii")

let title=document.getElementById('name');


// console.log(base);

document.getElementById("search").addEventListener('click',()=>{
    title=document.getElementById("name").value;
    const base=`http://www.omdbapi.com/?t=${title}&apikey=843f36ea`;


    
    fetch(base)
    .then((response) => {
        return response.json();
      })
      .then((data)=>{
        var r="";
        var r1="";
        // for(i in data){
        //   // const name2=data[0].name.common;
        //   console.log(data[i])
          r1+="<div class=poster>";
          let im=data.Poster;
          console.log(im)
          r1+=`<img src=${im}>`  
          r1+="</div>"
          document.getElementById("results1").innerHTML=r1;
          r+="<div class=title1>";
          r+="<b style=color:yellow>Title :</b>   "
          r+= data.Title  
          r+="</div>"
          r+="<div class=released>";
          r+="<b style=color:yellow>Released :</b>   "
          r+= data.Released  
          r+="</div>"
          r+="<div class=actors>";
          r+="<b style=color:yellow>Actors :</b>   "
          r+= data.Actors  
          r+="</div>"
          r+="<div class=genre>";
          r+="<b style=color:yellow>Genre :</b>   "
          r+= data.Genre  
          r+="</div>"
          r+="<div class=plot>";
          r+="<b style=color:yellow>Plot :</b>   "
          r+= data.Plot 
          r+="</div>"
          r+="<div class=imdb-rating>";
          r+="<b style=color:yellow>IMDB-Rating :</b>   "
          r+= data.imdbRating 
          r+="</div>"
        //   r+="<td>"+data[i].name.common+"</td>"
        //   // console.log(data[i].name)
        //   r+="<td><ol>"
        //   for(j in data[i].borders)
        //   {
        //     r+="<li>"+data[i].borders[j]+"</li>"
        //     // console.log(data[i].borders[j])
        //   }
        //   r+="</ol></td>"
        //   r+="<td>"+data[i].capital+"</td>"
        //   // console.log(data[i].capital)
          
        //   var ab=Object.values(data[i].languages);
        //   // console.log(ab)
        //   r+="<td><ol>"
        //   for(let j=0;j<ab.length;j++)
        //   {
            
        //     r+="<li>"+ab[j]+"</li>"
        //     // console.log(ab[j])
        //   }
        //   r+="</ol></td>"
        //   // console.log(data[i].languages)
        //   let currency=Object.values(data[i].currencies)
        //   // console.log(currency)
        //   r+="<td><ol>"
        //   for(let j=0;j<currency.length;j++){
        //   r+="<li>"+currency[j].name+"</li>"
        // }
        //   r+="</ol></td>"
        //   r+="<td>"+data[i].population+"</td>"
        //   // console.log(data[i].currency)
        //   // r+="<td>"+data[i].borders+"</td>"
        //   r+="</tr>"
        //   // console.log(name2);
        //   // const lang=data[1].languages;
        //   // console.log(lang);
        // }
        console.log(data.Title)
        document.getElementById('results').innerHTML=r;

      })
    })
