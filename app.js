const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

let ticketPrice = +movieSelect.value;

movieSelect.addEventListener('change', event => {
  ticketPrice = +event.target.value;
  updateSelectedCount();
});

// Обновить данные по счету и количеству выбранных мест
function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll('.row .seat.selected');
  const selectedSeatsArr = Array.from(selectedSeats);

  count.textContent = selectedSeatsArr.length;
  total.textContent = `${selectedSeatsArr.length * ticketPrice}$`;
}

// Обработчик выбора места
container.addEventListener('click', event => {
  if ([
    event.target.classList.contains("seat"),
    !event.target.classList.contains("occupied"),
  ].every(Boolean)) {
    event.target.classList.toggle('selected');
    updateSelectedCount();
  }
});
