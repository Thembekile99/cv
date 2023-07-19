function send() {

   let name = document.getElementById("name")
   let email = document.getElementById("email")
  
   let message = document.getElementById("massage")

   let demo = document.getElementById("demo");

    if (name.value == '') {
       demo.innerHTML = 'Name is required'
       return
   }

   if (email.value == '') {
       demo.innerHTML = 'Email is required'
       return
   }


  
   if (message.value == '') {
       demo.innerHTML = 'Please write your message'
       return
   }


}

