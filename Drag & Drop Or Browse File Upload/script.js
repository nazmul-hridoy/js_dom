const dragApp = document.querySelector('.app-body');
const dragText = dragApp.querySelector('h3');
const button = dragApp.querySelector('button');
const inPut = document.querySelector('.input');

let Myfile;




button.onclick =  () => {
        inPut.click()
}

inPut.addEventListener('change', function(){
    Myfile = this.files[0]
    dragApp.classList.add('active')
    ShowMe()
})

dragApp.addEventListener('dragover', (event) =>{

    event.preventDefault()
    dragApp.classList.add('active')
    dragText.textContent = "Release to Upload File"

})

dragApp.addEventListener('dragleave', () => {

    dragApp.classList.remove('active')
    dragText.textContent = "Drag & Drop !"

})
dragApp.addEventListener('drop', (event) =>{
    event.preventDefault()
    Myfile = event.dataTransfer.files[0]

    ShowMe()
})

function ShowMe(){
    let filetype = Myfile.type; 
    let VaildEx =  ["image/jpeg", "image/jpg", "image/png"];

    if(VaildEx.includes(filetype)){
        
      let fileReader  = new FileReader(); 

      fileReader.onload = () => {
          let imgUrl = fileReader.result; 
          let img  = `<img src="${imgUrl}" alt="">`

          dragApp.innerHTML = img
      }
      fileReader.readAsDataURL(Myfile); 
    }
    else  {
        alert("File not Supported .  Please upload an image file 🥰"); 
        dragApp.classList.remove("active"); 
        dragText.textContent = "Drag & Drop";
    }
}