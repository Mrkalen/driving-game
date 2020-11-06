var redCarDirection = {
  direction: 'east',
  location: { x: 0, y: 0 },
  ignition: 'off'
};

var $car = document.querySelector('.redcar');
var moveInterval = 0;

document.addEventListener('keydown', function () {
  if (event.key === ' ' && redCarDirection.ignition === 'off') {
    moveInterval = setInterval(moveCar, 16);
    redCarDirection.ignition = 'on';
  } else if (event.key === ' ' && redCarDirection.ignition === 'on') {
    clearInterval(moveInterval);
    redCarDirection.ignition = 'off';
  }
  if (event.key === 'ArrowUp') {
    redCarDirection.direction = 'north';
  } else if (event.key === 'ArrowRight') {
    redCarDirection.direction = 'east';
  } else if (event.key === 'ArrowDown') {
    redCarDirection.direction = 'south';
  } else if (event.key === 'ArrowLeft') {
    redCarDirection.direction = 'west';
  }
  $car.setAttribute('class', 'redcar ' + redCarDirection.direction);
});

function moveCar() {
  if (redCarDirection.direction === 'east') {
    $car.setAttribute('style', 'left: ' + (redCarDirection.location.y += 16) + 'px; top: ' + redCarDirection.location.x + 'px');
  } else if (redCarDirection.direction === 'north') {
    $car.setAttribute('style', 'top: ' + (redCarDirection.location.x -= 16) + 'px; left: ' + redCarDirection.location.y + 'px');
  } else if (redCarDirection.direction === 'south') {
    $car.setAttribute('style', 'top: ' + (redCarDirection.location.x += 16) + 'px; left: ' + redCarDirection.location.y + 'px');
  } else if (redCarDirection.direction === 'west') {
    $car.setAttribute('style', 'left: ' + (redCarDirection.location.y -= 16) + 'px; top: ' + redCarDirection.location.x + 'px');
  }
}

var yellowCarDirection = {
  direction: 'east',
  location: { x: 0, y: 0 },
  ignition: 'off'
};

var $yellowcar = document.querySelector('.yellowcar');
var yellowInterval = 0;

document.addEventListener('keydown', function () {
  if (event.key === ' ' && yellowCarDirection.ignition === 'off') {
    yellowInterval = setInterval(moveyellowCar, 16);
    yellowCarDirection.ignition = 'on';
  } else if (event.key === ' ' && yellowCarDirection.ignition === 'on') {
    clearInterval(yellowInterval);
    yellowCarDirection.ignition = 'off';
  }
  if (event.key === 'w') {
    yellowCarDirection.direction = 'north';
  } else if (event.key === 'd') {
    yellowCarDirection.direction = 'east';
  } else if (event.key === 's') {
    yellowCarDirection.direction = 'south';
  } else if (event.key === 'a') {
    yellowCarDirection.direction = 'west';
  }
  $yellowcar.setAttribute('class', 'yellowcar ' + yellowCarDirection.direction);
});

function moveyellowCar() {
  if (yellowCarDirection.direction === 'east') {
    $yellowcar.setAttribute('style', 'left: ' + (yellowCarDirection.location.y += 16) + 'px; top: ' + yellowCarDirection.location.x + 'px');
  } else if (yellowCarDirection.direction === 'north') {
    $yellowcar.setAttribute('style', 'top: ' + (yellowCarDirection.location.x -= 16) + 'px; left: ' + yellowCarDirection.location.y + 'px');
  } else if (yellowCarDirection.direction === 'south') {
    $yellowcar.setAttribute('style', 'top: ' + (yellowCarDirection.location.x += 16) + 'px; left: ' + yellowCarDirection.location.y + 'px');
  } else if (yellowCarDirection.direction === 'west') {
    $yellowcar.setAttribute('style', 'left: ' + (yellowCarDirection.location.y -= 16) + 'px; top: ' + yellowCarDirection.location.x + 'px');
  }
}
