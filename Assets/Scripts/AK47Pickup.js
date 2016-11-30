var TheDistance : float = PlayerCasting.DistanceFromTarget;
var TextDisplay : GameObject;

var FakeGun : GameObject;
var RealGun : GameObject;
var AmmoDisplay : GameObject;
var PickupSound : AudioSource;

function Update () {
	TheDistance = PlayerCasting.DistanceFromTarget;
	if (Input.GetButtonDown("Action")) {
		if (TheDistance <= 3) {
			TakeAK47();
		}
	}
}

function OnMouseOver () {
	if (TheDistance <= 3) {
		TextDisplay.GetComponent.<Text>().text = "Take AK-47";
	}
}

function OnMouseExit () {
	TextDisplay.GetComponent.<Text>().text = "";
}

function TakeAK47 () {
	PickupSound.Play();
	transform.position = Vector3(0,-500,0);
	FakeGun.SetActive(false);
	RealGun.SetActive(true);
	AmmoDisplay.SetActive(true);
}

