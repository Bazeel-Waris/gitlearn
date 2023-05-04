// Tabs row
function openCity(evt, cityName) {
     var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
  }

  let tabs = document.querySelectorAll('.tablinks');
    tabs[0].addEventListener('click', openCity('London'));
    tabs[1].addEventListener('click', openCity('Paris'));
    tabs[2].addEventListener('click', openCity('Tokyo'));

    console.log(tabs)
// let tabBtn = document.querySelector('.tabs');
// var content = document.querySelectorAll('.content');
// let london = document.getElementById('London');
// let paris = document.getElementById('Paris');
// let tokyo = document.getElementById('Tokyo');
// let i;
    
// tabBtn.addEventListener('click', (e)=>{
//     if(e.target.innerHTML == 'London'){
//         paris.style.display = 'none';
//         tokyo.style.display = 'none';
//         london.style.display = 'block';
//     } else if(e.target.innerHTML == 'Paris'){
//         tokyo.style.display = 'none';
//         london.style.display = 'none';
//         paris.style.display = 'block';
//     } else {
//         london.style.display = 'none';
//         paris.style.display = 'none';
//         tokyo.style.display = 'block';
//     }
// });