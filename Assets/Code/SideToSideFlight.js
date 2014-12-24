/*
 * Fly logic
 * 
 * Flies around from side to side
 */

 // how fast the fly flies
var horizontalDistance : float = 1;
var verticalDistance : float = 1;

var horizontalSpeed : float = 1;
var verticalSpeed : float = 1;

var horizontalOffset : float = 0;
var verticalOffset : float = 0;

// called over and over
function Update () {
  var x = Mathf.Cos(horizontalOffset + Time.time * horizontalSpeed) * horizontalDistance;
  var y = Mathf.Sin(verticalOffset + Time.time * verticalSpeed) * verticalDistance;
  
  transform.position = Vector3(x, y, 0);
}

function Squash() {
  Destroy(this);  
}