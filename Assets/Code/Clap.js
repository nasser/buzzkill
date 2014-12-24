var leftHand : Transform;
var rightHand : Transform;

var normalHandDistance : float = 2.5;
var clapHandDistance : float = 0.5;

function Start() {
  leftHand.position.x = -normalHandDistance;
  rightHand.position.x = normalHandDistance;
}

function Update () {
  if(Input.GetKeyDown("space")) {
    var flies = GameObject.FindGameObjectsWithTag("fly");
    for(var fly in flies) {
      fly.SendMessage("TryToSquash");
    }
    
    audio.Play();
    
    leftHand.position.x = -clapHandDistance;
    rightHand.position.x = clapHandDistance;
  }
  
  if(Input.GetKeyUp("space")) {
    leftHand.position.x = -normalHandDistance;
    rightHand.position.x = normalHandDistance;
  }
}