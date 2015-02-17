var leftHand : Transform;
var rightHand : Transform;

var normalHandDistance : float = 2.5;
var clapHandDistance : float = 0.5;

var minimumClapLength : float = 1.0;
var timeSinceClapStarted : float = 0.0;

function Start() {
  leftHand.position.x = -normalHandDistance;
  rightHand.position.x = normalHandDistance;
}

function Update () {
  if(Input.GetKey("space")) {
    timeSinceClapStarted += Time.deltaTime;
    
    if(timeSinceClapStarted > minimumClapLength) {
      leftHand.position.x = -clapHandDistance;
      rightHand.position.x = clapHandDistance;
    }
  }
  
  if(Input.GetKeyUp("space")) {
    if(timeSinceClapStarted > minimumClapLength) {
      var flies = GameObject.FindGameObjectsWithTag("fly");
      for(var fly in flies) {
        fly.SendMessage("TryToSquash");
      }
      
      audio.Play();
      
      leftHand.position.x = -normalHandDistance;
      rightHand.position.x = normalHandDistance;
    }
    
    timeSinceClapStarted = 0;
  }
}