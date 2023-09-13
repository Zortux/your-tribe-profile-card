const expandButton = document.querySelector('header button') // Een variabele en de query selecteren
expandButton.addEventListener('click', expand)// Als je op de button klikt dan gebeurt er iets.

function expand () {
  document.body.classList.toggle('expand')
}// De functie voor expand, hier roept hij de functie aan.
