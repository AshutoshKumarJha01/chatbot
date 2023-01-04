
var total=0;
var mydata = JSON.parse(JSON.stringify(Get_data));

function SendMsg(){
   var send_list_msg = document.createElement("li");
   var send_list_msg1 = document.createElement("li");
   var text_msg = document.getElementById("get_text_msg").value;
   text_msg = text_msg.toLowerCase();
   if(text_msg.length!=0){
      send_list_msg.innerHTML = '<span>'+text_msg+'</span>';
   }
   send_list_msg.style.textAlign = "right";
   document.getElementById("send_list_item").appendChild(send_list_msg);
   document.getElementById("right_msg").scrollTo(0, document.body.scrollHeight);
   document.getElementById("get_text_msg").value = '';
   function output_msg(){
         for(i in mydata[1]){
         if(i==text_msg){
            send_list_msg1.innerHTML = '<span>'+mydata[1][i]+'</span>';
            document.getElementById("send_list_item").appendChild(send_list_msg1);
            document.getElementById("right_msg").scrollTo(0, document.body.scrollHeight);
         }
      }
   }
   setTimeout(output_msg, 1000);
}

      