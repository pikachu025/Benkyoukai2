#pragma strict

function Start () {

}

function Update () {

}
function OnCollisionEnter(collision: Collision) { //衝突判定
Destroy(gameObject); //ぶつかったものを消す
}