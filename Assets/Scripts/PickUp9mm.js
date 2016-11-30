﻿var TheDistance : float = PlayerCasting.DistanceFromTarget;
var TextDisplay : GameObject;

var FakeGun : GameObject;
var RealGun : GameObject;
var AmmoDisplay : GameObject;
var PickUpAudio : AudioSource;

function Update ()  {
	TheDistance = PlayerCasting.DistanceFromTarget;
	if (Input.GetButtonDown("Action")) {
		if (TheDistance <= 3) {
			TakeNineMil();
		}
	}
}

function OnMouseOver () {
	if (TheDistance <= 3) {
		TextDisplay.GetComponent.<Text>().text = "Take 9mm Pistol";
	}
}

function OnMouseExit () {
	TextDisplay.GetComponent.<Text>().text = "";
}

function TakeNineMil () {
	PickUpAudio.Play();
	transform.position = Vector3(0,-1000,0);
	FakeGun.SetActive(false);
	RealGun.SetActive(true);
	AmmoDisplay.SetActive(true);

}

	