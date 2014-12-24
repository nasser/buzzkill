var inClapZone : boolean = false;
var squashedImage : Sprite;

function OnTriggerEnter2D (other: Collider2D) {
  if(other.name == "clap zone") {
    inClapZone = true;
  }
}

function OnTriggerExit2D (other: Collider2D) {
  if(other.name == "clap zone") {
    inClapZone = false;
  }
}

function TryToSquash () {
  if(inClapZone) {
    gameObject.SendMessage("Squash");
  }
}

function Squash() {
  audio.Play();
  GameObject.Find("/text/score").SendMessage("Increment");
  renderer.sprite = squashedImage;
  gameObject.tag = "Untagged";
  Destroy(this);  
}