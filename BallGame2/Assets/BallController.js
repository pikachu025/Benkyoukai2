#pragma strict

var Speed = 15.0;
function Start () {  //最初にボールが飛ぶための処理
rigidbody.AddForce(
( transform.forward + transform.right ) * Speed,
ForceMode.VelocityChange );
}

function Update () {

}

function OnCollisionEnter() //ボールがラケットに戻ってくる処理
{
    rigidbody.velocity = rigidbody.velocity.normalized * 15;

    if (Mathf.Abs(rigidbody.velocity.z) < 3) {
        rigidbody.velocity.z = rigidbody.velocity.z * 3;
    }
    if (Mathf.Abs(rigidbody.velocity.x) < 3) {
        rigidbody.velocity.x = rigidbody.velocity.x * 3;
    }


}


