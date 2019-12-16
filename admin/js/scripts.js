// $(document).ready(function() { 
//   ClassicEditor
//       .create(document.querySelector('#body'))
//       .catch(error => {
//           console.error(error);
//       });
// })

document.addEventListener("DOMContentLoaded", function(){
    // CKEDITOR
  ClassicEditor
      .create(document.querySelector('#body'))
      .catch(error => {
          console.error(error);
      });
});