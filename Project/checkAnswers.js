function check(){
  var front1=document.getElementById("front1").value.trim();
  var rear1=document.getElementById("rear1").value.trim();
  var front=document.getElementById("front").value.trim();
  var newFront=front.toUpperCase();
  var front2=document.getElementById("front2").value.trim();
  var rear=document.getElementById("rear").value.trim();
  var newRear=rear.toUpperCase();
  var rear2=document.getElementById("rear2").value.trim();
  var pop=document.getElementById("pop").value.trim();
  var newPop=pop.toUpperCase();
  var enqueue=document.getElementById("enqueue").value.trim();
  var newEnqueue=enqueue.toUpperCase();
  var push=document.getElementById("push").value.trim();
  var newPush=push.toUpperCase();
  var denqueue=document.getElementById("denqueue").value.trim();
  var newDenqueue=denqueue.toUpperCase();
  var count=0;
  if(front1=='1'){
    document.getElementById("front1").style.backgroundColor='green';
    count++;
  }else{
    document.getElementById("front1").style.backgroundColor='red';
  }
  if(rear1=='5'){
    document.getElementById("rear1").style.backgroundColor='green';
    count++;
  }else{
    document.getElementById("rear1").style.backgroundColor='red';
  }
  if(newFront=="FRONT"){
    document.getElementById("front").style.backgroundColor='green';
    count++;
  }else{
    document.getElementById("front").style.backgroundColor='red';
  }
  if(front2=='2'){
    document.getElementById("front2").style.backgroundColor='green';
    count++;
  }else{
    document.getElementById("front2").style.backgroundColor='red';
  }
  if(newRear=="REAR"){
    document.getElementById("rear").style.backgroundColor='green';
    count++;
  }else{
    document.getElementById("rear").style.backgroundColor='red';
  }
  if(rear2=='6'){
    document.getElementById("rear2").style.backgroundColor='green';
    count++;
  }else{
    document.getElementById("rear2").style.backgroundColor='red';
  }
  if(newPop==='ΩΘΗΣΗ' || newPop==='ΏΘΗΣΗ'){
    document.getElementById("pop").style.backgroundColor='green';
    count++;
  }else{
    document.getElementById("pop").style.backgroundColor='red';
  }
  if(newEnqueue==='ΕΙΣΑΓΩΓΗ' || newEnqueue==='ΕΙΣΑΓΩΓΉ'){ 
    document.getElementById("enqueue").style.backgroundColor='green';
    count++;
  }else{
    document.getElementById("enqueue").style.backgroundColor='red';
  }
  if(newPush==='ΑΠΩΘΗΣΗ' || newPush==='ΑΠΏΘΗΣΗ'){
    document.getElementById("push").style.backgroundColor='green';
    count++;
  }else{
    document.getElementById("push").style.backgroundColor='red';
  }
  if(newDenqueue==='ΕΞΑΓΩΓΗ' || newDenqueue==='ΕΞΑΓΩΓΉ'){ 
    document.getElementById("denqueue").style.backgroundColor='green';
    count++;
  }else{
    document.getElementById("denqueue").style.backgroundColor='red';
  }
  if(count===10){
    alert("Συγχαρητήρια!!!");
  }


}