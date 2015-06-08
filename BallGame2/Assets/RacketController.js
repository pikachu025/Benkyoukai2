#pragma strict
//おまじない

function Start () { //ゲームを始めた時最初に行われる処理

}

var Accel = 1000.0; 
function Update () { // 1フレームごとに呼び出されます。
      rigidbody.AddForce( 
        transform.right * Input.GetAxisRaw( "Horizontal" ) * Accel,
        ForceMode.Impulse
      );
}
