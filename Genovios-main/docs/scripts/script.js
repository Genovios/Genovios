document.addEventListener("DOMContentLoaded", () => {
    console.log("Starting up!");

    document.getElementById('btnClicky').addEventListener('click', btnClicky);
    //alert("Hey!")
  });

function btnClicky () {
  console.log('in btnClicky event');
  document.getElementById('btnClicky').style.transform='rotate(15deg)';
  console.log('out of btnClicky event');
    //.querySelectorAll('.yourClassName')
    //.forEach(el => { el.style.transform = 'rotate(15deg)'; });
}

  
