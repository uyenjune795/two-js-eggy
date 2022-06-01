// Get drawing for drawing
const container = document.querySelector('section');

// parameters
let params = {
  width: 500,
  height: 500
};

// `new` instantiation Two.js
const two = new Two( params );
// append to `container`
two.appendTo( container );

// draw shape
let shape = two.makeCircle(250, 250, 250, 250);
let shape1 = two.makeCircle(250, 250, 180, 180);
let shape2 = two.makeEllipse(280, 270, 140, 120);
let shape3 = two.makeEllipse(250, 220, 120, 150);
let shape4 = two.makeEllipse(220, 260, 150, 100)
let shape5 = two.makeEllipse(240, 280, 120,140)
let shape6 = two.makeCircle(250, 250, 58, 58);
let shape7 = two.makeCircle(240, 250, 48, 48);

//Properties
shape.fill='black';
shape.stroke ='black';

shape1.fill='#1b1b1b';
shape.stroke = 'gray';

shape2.fill='white';
shape2.noStroke();

shape3.fill='white';
shape3.noStroke();

shape4.fill='white';
shape4.noStroke();

shape5.fill='white';
shape5.noStroke();

shape6.fill = '#FACA3B';
shape6.noStroke();

shape7.fill = '#f2da52';
shape7.noStroke();

// rotate in radians
shape3.rotation = Math.PI * .15;
shape4.rotation = Math.PI * .15;
shape5.rotation = Math.PI * .15;
shape6.rotation = Math.PI * .15;

// update animation
two.bind('update', () => {
  //update what??
  shape2.rotation = shape2.rotation += .015;
});

two.bind('update', () => {
  //update what??
  shape3.rotation = shape3.rotation += .02;
});

two.bind('update', () => {
  //update what??
  shape4.rotation = shape4.rotation += .015;
});

two.bind('update', () => {
  //update what??
  shape5.rotation = shape5.rotation += .02;
});

// draw to page
two.play();