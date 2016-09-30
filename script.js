var ars="";
function v(val){
  document.getElementById("ioBox").value+=val;
  ars+=val;

}
function n(val) {
  document.getElementById("ioBox").value=val;

  ars="";
}
function a() {
  document.getElementById("ioBox").value=eval(ars);

}
