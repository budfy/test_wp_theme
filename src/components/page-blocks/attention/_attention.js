function hideAttention() {
  document.querySelector('.attention__close').addEventListener("click", () => {
    document.querySelector('.attention').style.height = 0;
    document.querySelector('.attention').style.padding = 0;
    setTimeout(() => {
      document.querySelector('.attention').remove()
    }, 240);
  })
}

hideAttention()