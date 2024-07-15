document.addEventListener("DOMContentLoaded", function(){
    const bird = document.getElementById("bird");
    const pipes = document.querySelectorAll("#pipes");
  let num = 0
  const collisionSound = new Audio("kl-peach-game-over-iii-142453.mp3")

  // function playCollisionSound(){
  //   collisionSound.play();
  // }

  function checkCollision(){
    const birdRect = bird.getBoundingClientRect();

    pipes.forEach((pipes) => {
      const pipesRect = pipes.getBoundingClientRect();

      if (
        birdRect.top < pipesRect.bottom &&
        birdRect.bottom > pipesRect.top &&
        birdRect.left < pipesRect.right &&
        birdRect.right > pipesRect.left
      ){
        document.getElementById("failed").style.display = "block";
        bird.style.display = "none";
        pipes.classList.add("stop")
        playCollisionSound();
      }
    })
  }

  document.addEventListener("keydown", function(l){
    switch(l.key){
      case "ArrowUp":
        num -= 10;
        bird.style.top = num + "px";
        break;
      case "ArrowDown":
        num += 10;
        bird.style.top = num + "px";
        break
        case "ArrowLeft":
          num -= 10;
          bird.style.left = num + "px";
          break
        case "ArrowRight":
          num += 10;
          bird.style.left = num + "px";
    }
    checkCollision();
  });
})