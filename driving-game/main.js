var carDirection = {
  direction: 'east',
  location: { x: 0, y: 0 }
};

var $car = document.querySelector('.car');

document.addEventListener('keydown', function () {
  if (event.key === 'ArrowUp') {
    carDirection.direction = 'north';
  } else if (event.key === 'ArrowRight') {
    carDirection.direction = 'east';
  } else if (event.key === 'ArrowDown') {
    carDirection.direction = 'south';
  } else if (event.key === 'ArrowLeft') {
    carDirection.direction = 'west';
  }
  $car.setAttribute('class', 'car ' + carDirection.direction);
});
