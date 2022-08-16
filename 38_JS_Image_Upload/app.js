// Image Upload
let uploadForm = document.querySelector('#upload-form');
uploadForm.addEventListener('submit', function () {
   let imageFile = document.querySelector('#custom-file').files[0];
   let imageName = imageFile.name;

   let reader = new FileReader();  // A pre-defined Object of JavaScript used to read the file
       reader.readAsDataURL(imageFile);

       reader.addEventListener('load', function () {
           if (this.result && localStorage){
               let imagesList = localStorage.getItem('images') ? JSON.parse(localStorage.getItem('images')) : [];
               imagesList.push(this.result);
               localStorage.setItem('image', JSON.stringify(imagesList));
           }
       });
    displayImage();
});

// display Image
let displayImage = () => {
    let imagesList = localStorage.getItem('images') ? JSON.parse(localStorage.getItem('images')) : [];
    if (imagesList.length !== 0){
        let cardImages = '';
        for (let image of imagesList){
            cardImages += `<div class="col-md-6">
                          <div class="card img-card">
                             <img src="img/img_3.jpg" alt="" class=" card-image">
                                <div class="card-body">
                                    <h3 class="card-title">Image</h3>
                                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum odio, quas sapiente tempora totam voluptatum</p>
                                </div>
                            </div>
                        </div> `;
        }
        document.querySelector('#card-row').innerHTML = cardImages;
    }
};
displayImage();


// Remove all Images
let removeBtn = document.querySelector('#remove-btn');
removeBtn.addEventListener('click', function () {
    localStorage.removeItem('images');
    displayImage();
});