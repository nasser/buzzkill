/*
 * Fly logic
 * 
 * Flies around in a square pattern
 */

 // how fast the fly flies
var flySpeed : float = 1;

// how fast the fly turns
var rotateFrequency : float = 0.5;

// called over and over
function Update () {
  var randomValue = Mathf.PerlinNoise(rotateFrequency * Time.time, transform.position.x);
  if(randomValue < 0.25) {
    transform.up = Vector3.right;
  } else if(randomValue < 0.50){
    transform.up = Vector3.left;
  } else if(randomValue < 0.75){
    transform.up = Vector3.up;
  } else if(randomValue < 1.0){
    transform.up = Vector3.down;
  }
  
  // move the fly
  transform.position += transform.up * flySpeed * Time.deltaTime;
}

function Squash() {
  Destroy(this);  
}