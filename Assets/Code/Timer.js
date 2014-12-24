var timerSpeed : float;
var timeRemaining : float;

function Update () {
  timeRemaining -= Time.deltaTime * timerSpeed;
  GetComponent("Text").text = "Time: " + Mathf.Round(timeRemaining);
}