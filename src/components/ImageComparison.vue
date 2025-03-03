<template>
  <div class="img-comp-container" ref="imgCompContainer">
    <div class="img-comp-img">
      <img ref="imgBefore" :src="beforeSrc" width="300" height="200" />
    </div>
    <div class="img-comp-img img-comp-overlay" ref="imgOverlay">
      <img :src="afterSrc" width="300" height="200" />
    </div>
    <div class="img-comp-slider" ref="slider"></div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";

export default {
  props: {
    beforeSrc: String, // Source for the "before" image
    afterSrc: String,  // Source for the "after" image
  },
  setup() {
    const imgCompContainer = ref(null);
    const imgBefore = ref(null);
    const imgOverlay = ref(null);
    const slider = ref(null);
    let clicked = false;
    let w = 0;
    let h = 0;

    onMounted(() => {
      if (imgOverlay.value) {
        initializeComparison();
      }
    });

    function initializeComparison() {
      const img = imgOverlay.value;
      w = img.offsetWidth;
      h = img.offsetHeight;

      // Set initial width of the overlay image to 50%
      img.style.width = w / 2 + "px";

      // Position the slider in the middle
      slider.value.style.top = h / 2 - slider.value.offsetHeight / 2 + "px";
      slider.value.style.left = w / 2 - slider.value.offsetWidth / 2 + "px";

      // Event listeners for interactions
      slider.value.addEventListener("mousedown", slideReady);
      window.addEventListener("mouseup", slideFinish);
      slider.value.addEventListener("touchstart", slideReady);
      window.addEventListener("touchend", slideFinish);
    }

    function slideReady(e) {
      e.preventDefault();
      clicked = true;
      window.addEventListener("mousemove", slideMove);
      window.addEventListener("touchmove", slideMove);
    }

    function slideFinish() {
      clicked = false;
      window.removeEventListener("mousemove", slideMove);
      window.removeEventListener("touchmove", slideMove);
    }

    function slideMove(e) {
      if (!clicked) return;
      let pos = getCursorPos(e);
      if (pos < 0) pos = 0;
      if (pos > w) pos = w;
      slide(pos);
    }

    function getCursorPos(e) {
      e = e.changedTouches ? e.changedTouches[0] : e;
      const rect = imgOverlay.value.getBoundingClientRect();
      return e.pageX - rect.left - window.pageXOffset;
    }

    function slide(x) {
      imgOverlay.value.style.width = x + "px";
      slider.value.style.left = imgOverlay.value.offsetWidth - slider.value.offsetWidth / 2 + "px";
    }

    return { imgCompContainer, imgBefore, imgOverlay, slider };
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.img-comp-container {
  position: relative;
  height: 200px;
}

.img-comp-img {
  position: absolute;
  width: auto;
  height: auto;
  overflow: hidden;
}

.img-comp-img img {
  display: block;
}

.img-comp-slider {
  position: absolute;
  z-index: 9;
  cursor: ew-resize;
  width: 40px;
  height: 40px;
  background-color: #2196F3;
  opacity: 0.7;
  border-radius: 50%;
}
</style>
      const imgOverlay = ref(null);
      const slider = ref(null);
      const imgCompContainer = ref(null);
      let clicked = false;
      let w = 0;
      let h = 0;
  
      onMounted(() => {
        if (imgOverlay.value) {
          initializeSlider();
        }
      });
  
      function initializeSlider() {
        w = imgOverlay.value.offsetWidth;
        h = imgOverlay.value.offsetHeight;
  
        // Set the initial width of the overlay image to 50%
        imgOverlay.value.style.width = w / 2 + "px";
  
        // Position the slider in the middle
        slider.value.style.top = h / 2 - slider.value.offsetHeight / 2 + "px";
        slider.value.style.left = w / 2 - slider.value.offsetWidth / 2 + "px";
  
        // Event listeners for mouse and touch interactions
        slider.value.addEventListener("mousedown", slideReady);
        window.addEventListener("mouseup", slideFinish);
        slider.value.addEventListener("touchstart", slideReady);
        window.addEventListener("touchend", slideFinish);
      }
  
      function slideReady(e) {
        e.preventDefault();
        clicked = true;
        window.addEventListener("mousemove", slideMove);
        window.addEventListener("touchmove", slideMove);
      }
  
      function slideFinish() {
        clicked = false;
        window.removeEventListener("mousemove", slideMove);
        window.removeEventListener("touchmove", slideMove);
      }
  
      function slideMove(e) {
        if (!clicked) return;
        let pos = getCursorPos(e);
        if (pos < 0) pos = 0;
        if (pos > w) pos = w;
        slide(pos);
      }
  
      function getCursorPos(e) {
        e = e.changedTouches ? e.changedTouches[0] : e;
        const rect = imgOverlay.value.getBoundingClientRect();
        let x = e.pageX - rect.left - window.pageXOffset;
        return x;
      }
  
      function slide(x) {
        imgOverlay.value.style.width = x + "px";
        slider.value.style.left = imgOverlay.value.offsetWidth - slider.value.offsetWidth / 2 + "px";
      }
  
      return { imgBefore, imgOverlay, slider, imgCompContainer };
    }
  };
  </script>
  
  <style scoped>
  .img-comp-container {
    position: relative;
    width: 100%;
    max-width: 600px;
  }
  
  .img-comp-before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: auto;
  }
  
  .img-comp-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 50%; /* initial width of the overlay */
    height: auto;
    transition: width 0.2s ease-out;
  }
  
  .img-comp-slider {
    position: absolute;
    background: #fff;
    border: 2px solid #000;
    width: 20px;
    height: 40px;
    cursor: ew-resize;
    z-index: 9;
    transform: translateY(-50%);
  }
  </style>