document.addEventListener("DOMContentLoaded", () => {
    const list = document.querySelector(".carousel .list");
    const thumbnails = document.querySelectorAll(".thumbnail .item");
    const leftArrow = document.querySelector(".arrow .left");
    const rightArrow = document.querySelector(".arrow .right");
    const dots = document.querySelectorAll(".dots .dot");
    const items = document.querySelectorAll(".carousel .item");
    let currentIndex = 0;
    const totalItems = items.length;
  
    // Function to update the carousel state
    function updateCarousel() {
      items.forEach((item, index) => {
        item.style.transform = `translateX(${(index - currentIndex) * 100}%)`;
      });
  
      // Update active thumbnail
      thumbnails.forEach((thumb, index) => {
        thumb.classList.toggle("active", index === currentIndex);
      });
  
      // Update active dot
      dots.forEach((dot, index) => {
        dot.classList.toggle("active", index === currentIndex);
      });
  
      // Disable/enable arrows based on current index
      leftArrow.classList.toggle("disabled", currentIndex === 0);
      rightArrow.classList.toggle("disabled", currentIndex === totalItems - 1);
    }
  
    // Arrow click handlers
    leftArrow.addEventListener("click", () => {
      if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
        moveThumbnailRight();
      }
    });
  
    rightArrow.addEventListener("click", () => {
      if (currentIndex < totalItems - 1) {
        currentIndex++;
        updateCarousel();
        moveThumbnailLeft();
      }
    });
  
    // Dot click handlers
    dots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        currentIndex = index;
        updateCarousel();
      });
    });
  
    // Thumbnail click handlers
    thumbnails.forEach((thumb, index) => {
      thumb.addEventListener("click", () => {
        currentIndex = index;
        updateCarousel();
      });
    });
  
    // Function to move the thumbnail container left by 40px
    function moveThumbnailLeft() {
      const thumbnailContainer = document.querySelector(".thumbnail");
      const currentLeft =
        parseInt(getComputedStyle(thumbnailContainer).left, 10) || 0;
      thumbnailContainer.style.left = `${currentLeft - 275}px`;
    }
  
    function moveThumbnailRight() {
      const thumbnailContainer = document.querySelector(".thumbnail");
      const currentLeft =
        parseInt(getComputedStyle(thumbnailContainer).left, 10) || 0;
      thumbnailContainer.style.left = `${currentLeft + 275}px`;
    }
  
    updateCarousel();
  });
  