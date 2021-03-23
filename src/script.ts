const btn = document.getElementById('btn') as HTMLElement;
const myText = document.getElementById('myText') as HTMLElement;
btn.addEventListener('click', () => {
   myText.classList.toggle('text-purple');
});
