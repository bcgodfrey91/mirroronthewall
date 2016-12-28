
let mirror = document.querySelector('video');

navigator.mediaDevices.getUserMedia({ audio: false, video: true })
  .then(stream => {
    mirror.src = window.URL.createObjectURL(stream);
    mirror.onloadedmetadata = (event) => {
      mirror.play();
    };
  })
  .catch(error => {
    console.log('navigator.getUserMedia error: ', error);
  });
