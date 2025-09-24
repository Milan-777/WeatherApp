//references
const search= document.getElementById('search-btn');
const input= document.getElementById('ip');
const region = document.getElementById('region');
const city= document.getElementById('city');
const country= document.getElementById('country');

const temp= document.getElementById('temperature');
const localtime= document.getElementById('localtime');
const statuss= document.getElementById('statuss');

// const image = document.getElementsByClassName('img');................



//All operations
function all(){
    alert("Wellcome to my Weather_App...");
}


//function to fetch data through API  
async function data(location){
    const promise = await fetch(`http://api.weatherapi.com/v1/current.json?key=d69e554818a2444f810160129252409&q=${location}&aqi=yes`);
       
    return await promise.json()
}


// let count = 0;..........................................

// Image array....................................................
// const images = [
//     'img1.webp',
//     'img2.webp',
//     'img3.webp',
//     'img4.webp'
// ];...............................................................



//'click' event or action
search.addEventListener("click",async ()=>{
    const result = await data(input.value);
    console.log(result);



    
    region.innerText = result.location.region;
    city.innerText = result.location.name;
    country.innerText = result.location.country;


    localtime.innerText = result.location.localtime;
    temp.innerText = result.current.temp_c;


    const tempval = result.current.temp_c;
    if (tempval <= 20){
        statuss.innerText = 'Heavy Rain';
    }
    else if(tempval > 20 && tempval <= 30){
        statuss.innerText = 'Moderate Rain';
    }
    else{
        statuss.innerText = 'Sunny / Hot';
    }


    
    // image.style.backgroundimage = url('img1.webp'); ..................

    // count++;

    // if (count == 1){
    //     document.querySelector(".img").style.backgroundimage = url('img2.webp');
    // }...............................................................
    


});



