/* Getting Elements and asign them to variables */
const input = document.getElementById('input');
const lists = document.querySelector('.lists');

/* Event Listener */
input.addEventListener('input', addState);

/* Add State */
async function addState() {
   // Fetch Data
   const res = await fetch('state_capitals.json');
   const data = await res.json();
   
   // Input Value
   const inputValue = input.value.toUpperCase();
   // Filter the lists
   let filteredStates = data.filter(state=> state.name.toUpperCase().includes(inputValue) || state.capital.toUpperCase().includes(inputValue));

   let output = '';
   filteredStates.forEach(state=>{
      output += `
      <li class="list bg-info p-2 mb-2">
      <div class="mb-2"><span>${state.name} </span>(<span>${state.abbr}</span>) <span class="ml-2">${state.capital}</span></div>
      <div class="lat-long">Lat: <span>${state.lat}</span> / Long: <span>${state.long}</span></div>
    </li>
      `
   })
   
   if(input.value !== '') {
      lists.innerHTML = output;
   } else if (input.value === '') {
      lists.innerHTML = '';
   }
}