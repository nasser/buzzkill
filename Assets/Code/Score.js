var score : float = 0;
var multiplier : float = 1;

function Update () {
  GetComponent("Text").text = "Score: " + Mathf.Round(score);
}

function Increment() {
  score = score + multiplier;
}