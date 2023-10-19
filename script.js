var tablinks = document.getElementsByClassName("tab-links");
    var tabcontents = document.getElementsByClassName("tab-contents");

    function opentab(tabname){
        for(tablink of tablinks){
            tablink.classList.remove("active-link");
        }

        for(tabcontent of tabcontents){
            tabcontent.classList.remove("active-tab");
        }
        event.currentTarget.classList.add("active-link");
        document.getElementById(tabname).classList.add("active-tab");
    }
    function alertmsg(){
        document.getElementById("see-msg").innerHTML = "More Projects will be Uploaded Soon !!",setTimeout(function(){
            document.getElementById("see-msg").innerHTML = "";
        },5000);
    }

var sidemen = document.getElementById("sidemenu");

function openmenu(){
    sidemen.style.right="0";
}
function closemenu(){
    sidemen.style.right="-180px";
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbzRCiyG9IDCGC7XpbYloHhHUYfRInCl1FgPOEa4rSAnMNHW7bN_hTLLLdNLJ4tAovKx/exec'
    const form = document.forms['submit-to-google-sheet']
    const msg = document.getElementById("msg")

  
    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            msg.innerHTML = "Message sent Successfully !!!"
            setTimeout(function(){
                msg.innerHTML = ""
            },5000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
    })



