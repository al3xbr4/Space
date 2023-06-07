function openModal(image) {
    var modal = document.getElementById("modal");
    var modalImage = document.getElementById("modal-image");
  
    modal.style.display = "block";
    modalImage.src = image.src;
  
    var modalOverlay = document.getElementById("modal-overlay");
    modalOverlay.style.display = "block";
  
    document.body.style.overflow = "hidden";
  }
  
  function closeModal() {
    var modal = document.getElementById("modal");
    var modalOverlay = document.getElementById("modal-overlay");
  
    modal.style.display = "none";
    modalOverlay.style.display = "none";
  
    document.body.style.overflow = "auto";
  }
  