var front=0;
var rear=0;
function modifyQueue(action){
    var value=document.getElementById('value').value.trim();
    var queue=document.getElementById('queueElements');
    var maxRows=10;
    if(action==='enqueue'){
        if(value!==''){
             if(queue.cells.length<maxRows){
                var row=document.createElement('td');
                row.textContent=value;
                queue.appendChild(row); //add new row
                rear++;
                document.getElementById('value').value=''; //clear input value field
             }else{
                alert('Η ουρά είναι γεμάτη!');
             }
        }else{
            alert('Λάθος.Παρακαλώ προσπαθήστε ξανά!');
        }
    
    }else if(action==='denqueue'){
      if (queue.cells.length > 0) {
        queue.deleteCell(0);
        front++;
        if (queue.cells.length === 0) {
            front = 0;
            rear = 0;
        }
       }else{
           alert('Η ουρά είναι άδεια!');
       }

    }
    document.getElementById("front").textContent="Front: "+front;
    document.getElementById('front').style.marginRight = '20px';
    document.getElementById("rear").textContent=" Rear: "+rear;
}