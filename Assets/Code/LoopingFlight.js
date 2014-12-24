/*
 * Fly logic
 * 
 * Flies around randomly
 */

 // how fast the fly flies
var flySpeed : float = 5;

// how fast the fly turns
var rotateSpeed : float = 45;

function Start () {
  transform.position.x += Random.Range(-2, 2);
}

// called over and over
function Update () {
  // rotate by a random amount
  var rotateAmount = rotateSpeed * (Mathf.PerlinNoise(Time.time, transform.position.x) - 0.5);
  
  // rotate the fly
  transform.Rotate(0, 0, rotateAmount);
  
  // move the fly
  transform.position += transform.up * flySpeed * Time.deltaTime;
}

function Squash() {
  Destroy(this);  
}