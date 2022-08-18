let enterr = document.getElementById('enterr');
// let ancorr = document.getElementsByTagName('a')

let searchInput =document.getElementById('searchInput');
let Popular = document.getElementById('Popular');
let nowP = document.getElementById('nowP')
// let contac = document.getElementById('contac');
let topRetad = document.getElementById('topRetad')
let treand = document.getElementById('treand')
let upC = document.getElementById('upC')

let searchMove;
let response;
let resResponse;
let resultss=[]


$("#contactUs").click(function(){

    $("html,body").animate({scrollTop:'4000px'},0)
    
    })

$('#enterr ').click( function(e){

    console.log(e.target)
    let divwidthh = $('#divwidthh').innerWidth();

    if($('#enter1').css('left') == '0px'){


        $('#enter1').animate({left : `-${divwidthh}`} , 1000) 
        enterr.innerHTML = `<i  class="fa fa-align-justify"></i> `

        // ($('a').css(' display: none;') )
       



    }

    else{
       

            $('#enter1').animate({left: `0px`} , 1000 , function(){
                // $('#divwidthh').slideDown(500)
                $('.hOne').show(300 , function(){
                    $('.hTwo').show(300 , function(){
                        $('.hThree').show(300 , function(){
                            $('.hFour').show(300 , function(){
                                $('.hFive').show(300 , function(){
                                    $('.hSex').show(300)
                                })
                            })
                        })
                    })


                })

            }) 
            enterr.innerHTML = `<i class="fa-solid fa-circle-xmark fs-4 " style="left:50%;"></i>`
   
    }


console.log(divwidthh)

    // $('#enter1').toggle()
})

//......................................fetchFunctionToAll.............................................
async function getNewMoves(searchMove = 'now_playing'){
  
    response = await fetch(`https://api.themoviedb.org/3/movie/${searchMove}?api_key=be22844913886056a229c40d39a1daac`)
    resResponse = await response.json();
    resultss = resResponse.results
    console.log(resultss)
    // console.log(e)

    // pop= Popular.addEventListener('click' , function(){
    //     e='popular'
    //     console.log('ohhhhhhhhhh')
    //     console.log(e)
    // })

    displayData(resultss)
}

getNewMoves()


nowP.addEventListener('click', function(){
    getNewMoves('now_playing')
})

Popular.addEventListener('click' , function(){
    getNewMoves('popular')
   
})

topRetad.addEventListener('click' , function(){
    getNewMoves('top_rated')
   
})

upC.addEventListener('click' , function(){
    getNewMoves('upcoming')
 
})

//.........................displayFunction................................
function displayData(list){
       
    let cartona = ``;
    for( let i = 0 ; i<list.length ; i++){

       let name1= list[i].name
    //    console.log(name1)
       let name2 = list[i].title
    //    console.log(name2)
        if (list[i].name ){
            
        
        cartona +=`
        <div class="col-md-4 position-relative hov "><img src="https://image.tmdb.org/t/p/w500${list[i].poster_path}" class="w-100  " alt="">
        <div class="layer d-flex align-items-center">
            <div class="content">
       
                <h2>${list[i].name}</h2>
                <p>${list[i].overview}</p>
                <p>rate:${list[i].vote_average}</p>
                <p>${list[i].first_air_date}</p>
                
            </div>
        </div>
    </div>`

    }
    else{
         
        cartona +=`
        <div class="col-md-4 position-relative hov "><img src="https://image.tmdb.org/t/p/w500${resultss[i].poster_path}" class="w-100  " alt="">
        <div class="layer d-flex align-items-center">
            <div class="content">
       
                <h2>${list[i].title}</h2>
                <p>${list[i].overview}</p>
                <p>rate:${list[i].vote_average}</p>
                <p>${list[i].release_date}</p>
            
            </div>
        </div>
    </div>`


    }

    }

    

    document.getElementById('demo').innerHTML=cartona;
 
}

//.......................................only...............................

async function getMoves(){

    response = await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=0baecb2ca1948d3d843c177ac589fdc9`)
    resResponse = await response.json();
    resultss = resResponse.results
    console.log(resultss)
  
    displayData(resultss)
}
treand.addEventListener('click' , function(){
    getMoves()
   
})



//......................................valid.......................................


let addBtn =document.getElementById('addBtn');
let nameAlert=document.getElementById('nameAlert')  
let emailInp=document.getElementById('emailInp');
let emailAlert=document.getElementById('emailAlert');
let phoneInp=document.getElementById('phoneInp');
let phoneAlert=document.getElementById('phoneAlert');
let ageInp=document.getElementById('ageInp');
let passwordInp=document.getElementById('passwordInp');
let passwordAlert=document.getElementById('passwordAlert');
let repassInp=document.getElementById('repassInp');
let repassAlert=document.getElementById('repassAlert');



  nameInp.onkeyup=function(){

  let nameRejex=/^[A-Z][a-z]+$/;

   if(nameRejex.test(nameInp.value)){
    
    // addBtn.removeAttribute('disabled')
    nameInp.classList.add('is-valid')
    nameInp.classList.remove('is-invalid')
    nameAlert.classList.add('d-none')
   }

else{

    // addBtn.disabled='true'
    nameInp.classList.add('is-invalid')
    nameInp.classList.remove('is-valid')
    nameAlert.classList.remove('d-none')
}


  }



  emailInp.onkeyup=function(){

    let emailRejex=/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  
     if(emailRejex.test(emailInp.value)){
      
    //   addBtn.removeAttribute('disabled')
      emailInp.classList.add('is-valid')
      emailInp.classList.remove('is-invalid')
      emailAlert.classList.add('d-none')
     }
  
  else{
  
    //   addBtn.disabled='true'
      emailInp.classList.add('is-invalid')
      emailInp.classList.remove('is-valid')
      emailAlert.classList.remove('d-none')
  }
  
  
    }



    
  phoneInp.onkeyup=function(){

    let phoneRejex=/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
  
     if(phoneRejex.test(phoneInp.value)){
      
      addBtn.removeAttribute('disabled')
      phoneInp.classList.add('is-valid')
      phoneInp.classList.remove('is-invalid')
      phoneAlert.classList.add('d-none')
     }
  
  else{
  
      addBtn.disabled='true'
      phoneInp.classList.add('is-invalid')
      phoneInp.classList.remove('is-valid')
      phoneAlert.classList.remove('d-none')
  }
  
  
    }





    
  ageInp.onkeyup=function(){

    let ageRejex=/^[1-9][0-9]?$|^100$/;
  
     if(ageRejex.test(ageInp.value)){
      
      addBtn.removeAttribute('disabled')
      ageInp.classList.add('is-valid')
      ageInp.classList.remove('is-invalid')
      ageAlert.classList.add('d-none')
     }
  
  else{
  
      addBtn.disabled='true'
      ageInp.classList.add('is-invalid')
      ageInp.classList.remove('is-valid')
      ageAlert.classList.remove('d-none')
  }
  
  
    }

    passwordInp.onkeyup=function(){

        let passwordRejex=/^(?=.[A-Za-z])(?=.\d)[A-Za-z\d]{8,}$/;
      
         if(passwordRejex.test(passwordInp.value)){
          
          addBtn.removeAttribute('disabled')
          passwordInp.classList.add('is-valid')
          passwordInp.classList.remove('is-invalid')
          passwordAlert.classList.add('d-none')
         }
      
      else{
      
          addBtn.disabled='true'
          passwordInp.classList.add('is-invalid')
          passwordInp.classList.remove('is-valid')
          passwordAlert.classList.remove('d-none')
      }
      
      if(  ageRejex.test(ageInp.value) == 'true' && phoneRejex.test(phoneInp.value) == 'true' &&  emailRejex.test(emailInp.value) == 'true' && nameRejex.test(nameInp.value) == 'true'){

        addBtn.removeAttribute('disabled')
       


     }
      
      
        }




        let searchApiUrl= "https://api.themoviedb.org/3/search/movie?api_key=0baecb2ca1948d3d843c177ac589fdc9&language=en-US&page=1"
        let seaechINPT = document.getElementById('search-Input');


        $('#search').keyup(function(e){
            let searchMove = seaechINPT.value;
            if(searchMove != ''){
                getNewMoves(searchApiUrl+'&query=searchMove')
            }
        });