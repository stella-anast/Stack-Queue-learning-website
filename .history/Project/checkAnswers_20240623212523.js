function check(){
  var finalScore = document.getElementById('finalScore');
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
  var answer1=document.getElementById("answer1").value.trim();
  var answer2=document.getElementById("answer2").value.trim();
  var answer3=document.getElementById("answer3").value.trim();
  var answer4=document.getElementById("answer4").value.trim();
  var answer5=document.getElementById("answer5").value.trim();
  var answer6=document.getElementById("answer6").value.trim();
  var answer7=document.getElementById("answer7").value.trim();
  var answer8=document.getElementById("answer8").value.trim();
  var answer9=document.getElementById("answer9").value.trim();
  var answer10=document.getElementById("answer10").value.trim();
  var answer11=document.getElementById("answer11").value.trim();
  var answer12=document.getElementById("answer12").value.trim();
  var answer13=document.getElementById("answer13").value.trim();
  var answer14=document.getElementById("answer14").value.trim();
  var answer15=document.getElementById("answer15").value.trim();
  var answer16=document.getElementById("answer16").value.trim();
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
  if(answer1=='3'){
    document.getElementById("answer1").style.backgroundColor='green';
    count++;
  }else{
    document.getElementById("answer1").style.backgroundColor='red';
  }
  if(answer2=='5'){
    document.getElementById("answer2").style.backgroundColor='green';
    count++;
  }else{
    document.getElementById("answer2").style.backgroundColor='red';
  }
  if(answer3=='10 6 5 8 10' || answer3=='1065810'){
    document.getElementById("answer3").style.backgroundColor='green';
    count++;
  }else{
    document.getElementById("answer3").style.backgroundColor='red';
  }
  if(answer4==5){
    document.getElementById("answer4").style.backgroundColor='green';
    count++;
  }else{
    document.getElementById("answer4").style.backgroundColor='red';
  }
  if(answer5==7){
    document.getElementById("answer5").style.backgroundColor='green';
    count++;
  }else{
    document.getElementById("answer5").style.backgroundColor='red';
  }
  if(answer6=='ΔΧΔ' || answer6=='Δ Χ Δ'){
    document.getElementById("answer6").style.backgroundColor='green';
    count++;
  }else{
    document.getElementById("answer6").style.backgroundColor='red';
  }
  if(answer7==2){
    document.getElementById("answer7").style.backgroundColor='green';
    count++;
  }else{
    document.getElementById("answer7").style.backgroundColor='red';
  }
  if(answer8==3){
    document.getElementById("answer8").style.backgroundColor='green';
    count++;
  }else{
    document.getElementById("answer8").style.backgroundColor='red';
  }
  if(answer9==4){
    document.getElementById("answer9").style.backgroundColor='green';
    count++;
  }else{
    document.getElementById("answer9").style.backgroundColor='red';
  }
  if(answer10==1){
    document.getElementById("answer10").style.backgroundColor='green';
    count++;
  }else{
    document.getElementById("answer10").style.backgroundColor='red';
  }
  if(answer11=='Λ'){
    document.getElementById("answer11").style.backgroundColor='green';
    count++;
  }else{
    document.getElementById("answer11").style.backgroundColor='red';
  }
  if(answer12=='Σ'){
    document.getElementById("answer12").style.backgroundColor='green';
    count++;
  }else{
    document.getElementById("answer12").style.backgroundColor='red';
  }
  if(answer13=='Λ'){
    document.getElementById("answer13").style.backgroundColor='green';
    count++;
  }else{
    document.getElementById("answer13").style.backgroundColor='red';
  }
  if(answer14=='Σ'){
    document.getElementById("answer14").style.backgroundColor='green';
    count++;
  }else{
    document.getElementById("answer14").style.backgroundColor='red';
  }
  if(answer15=='Λ'){
    document.getElementById("answer15").style.backgroundColor='green';
    count++;
  }else{
    document.getElementById("answer15").style.backgroundColor='red';
  }
  if(answer16=='Σ'){
    document.getElementById("answer16").style.backgroundColor='green';
    count++;
  }else{
    document.getElementById("answer16").style.backgroundColor='red';
  }
  //Για να γίνουν πρώτα πράσινα τα input

    if (count===26){
      finalScore.textContent = 'Συγχαρητήρια!!!Τελικό σκορ: 26/26';
    }else{
      finalScore.textContent = 'Τελικό σκορ: ' + count + '/26. Παρακαλώ διορθώστε τις λανθασμένες απαντήσεις';
    }
}