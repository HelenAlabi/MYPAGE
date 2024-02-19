// setTimeout(()=>{
//     const wel = document.getElementById('wel');
    
//     wel.innerHTML =`<h3 id="wel">Welcome to My Page</h3>`

// },10000)


let changes = document.getElementById("ski")
setInterval(function(){
let skills = ["HTML","CSS","JAVASCRIPT","TYPESCRIPT","Time Management","Attention to details",
"Customer Service Management","Customer Satisfaction","Analytical and Critical thinking",
"Microsoft Office (Excel, Power Point, Word)","Negotiation","Active Listening"]
for (let a  of skills ) {
    const random = Math.floor(Math.random()*12);
    const ele = skills[random];
    console.log(ele);
    changes.innerHTML =` 
                <li>${ele}</li>
             


    </article>`
    

}
}, 1000)
