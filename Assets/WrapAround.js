var horizontalLimit : float = 7.5;
var verticalLimit : float = 5.5;

function Update () {
  if(transform.position.x > horizontalLimit) {
    transform.position.x = transform.position.x - horizontalLimit * 2;
    
  } else if(transform.position.x < -horizontalLimit) {
    transform.position.x = transform.position.x + horizontalLimit * 2;
    
  } else if(transform.position.y > verticalLimit) {
    transform.position.y = transform.position.y - verticalLimit * 2;
    
  } else if(transform.position.y < -verticalLimit) {
    transform.position.y = transform.position.y + verticalLimit * 2;
  }
}