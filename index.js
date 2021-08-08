
var gpabtn=document.getElementById('btngpa')
gpabtn.addEventListener('click',gpa)


var cgpabtn=document.getElementById('btncgpa')
cgpabtn.addEventListener('click',cgpa)


var btn1=document.getElementById('gpa')
btn1.addEventListener('click',gpa)


var btn2=document.getElementById('cgpa')
btn2.addEventListener('click',cgpa)

var HOMEbtn=document.getElementById('HOME')
HOMEbtn.addEventListener('click',function() {
    var hom=document.getElementById('home')
    console.log(hom)
    hom.innerHTML=""
    var con=document.getElementById('container')

    con.innerHTML=`<div id="home">
    <h1>Calculator</h1>
    <button id="cgpa" style="width:80%; ">CGPA</button>
    <button id="gpa" style="width:80%">GPA</button>
</div>

  <div id="container">

  </div>`
  var btn3=document.getElementById('gpa')
btn3.addEventListener('click',gpa)


var btn4=document.getElementById('cgpa')
btn4.addEventListener('click',cgpa)

})




function gpa(){
  var hom=document.getElementById('home')
  console.log(hom)
  hom.innerHTML=""
  var con=document.getElementById('container')
  con.innerHTML=`<div style="display: flex; flex-direction: column; align-items: center;">
    <h1>GPA Calculator</h1>
    <div style="display: flex; flex-direction: row;">
      <p style="font-weight:bold; font-size:20px;font-family:cooper; margin-top:30px">Number of Subjects you enrolled in this Semester:</p> 
      <input id="sub" type="number" max="8" min="1" placeholder="0" style="margin: 20px;margin-top:30px; height:30px;" > 
      <button class="btn btn-light me-md-2" id="enter" type="button " style="width:100px;height:40px; margin-top:25px">ENTER</button>

    </div>
    </div>`
  var ent=document.getElementById('enter')
  ent.addEventListener('click',function(){
  var Subjct=document.querySelector('input')
  console.log(Subjct.value)

  for(var i=1;i<=Subjct.value;i++){
    var element = document.createElement('div');    
    element.innerHTML=`<span style="font-weight:bold;color: rgb(35, 59, 57);margin-right:10px">${i}</span><input type="number" class="credithours" placeholder="Credit Hours" max="5" min="1" style="width:120px;"> <input class="obtainedmarks" type="number" placeholder="Obtained Marks"><br/>`
    con.appendChild(element)
    ent.setAttribute("disabled", false)
  } 
    var span=document.createElement('span')
    span.innerHTML=`</br><button class="btn btn-light me-md-2" id="resbtn" style="margin-left:110px" type="button">RESULT</button>
    `
    element.appendChild(span)
    var disbtn=document.getElementById('resbtn')
    disbtn.addEventListener('click',function(){
        let hour = document.getElementsByClassName('credithours')
        let obtmarks = document.getElementsByClassName('obtainedmarks') 
        var hourarray=[]
        var marksarray=[]
        for(let i=1;i<=Subjct.value;i++){
         
            hourarray.push(parseInt(hour[i-1].value))
            marksarray.push(parseInt(obtmarks[i-1].value))
            
        }
       // console.log(hourarray)
       var point=0
       var storemarks=[]

        hourarray.forEach((x,i) => {
          console.log( x +'  '+marksarray[i])
          if(x==3){
            var getmarks=marksarray[i]
            if (getmarks<=60) {
              if (getmarks>=48 && getmarks<=60) {
                point=12;
              }
             else {
             point = ( {
                  47: 11.67,
                  46: 11.33,
                  45:11,
                  44:10.67,
                  43:10.33,
                  42:10,
                  41:9.67,
                  40:9.33,
                  39:9,
                  38:8.67,
                  37:8.33,
                  36:8,
                  35:7.67,
                  34:7.33,
                  33:7,
                  32:6.67,
                  31:6.33,
                  30:6,
                  29:5.5,
                  28:5,
                  27:4.5,
                  26:4,
                  25:3.5,
                  24:3

              } )[ getmarks ] || 0;
              }
            }
            storemarks.push(point)
  
          }
          if(x==4){
            var getmarks=marksarray[i]
            if (getmarks<=80) {
              if (getmarks>=64 && getmarks<=80) {
                point=16;
              }
             else {
             point = ( {
                  63: 15.67,
                  62: 15.33,
                  61:15,
                  60:14.67,
                  59:14.33,
                  58:14,
                  57:13.67,
                  56:13.33,
                  55:13,
                  54:12.67,
                  53:12.33,
                  52:12,
                  51:11.67,
                  50:11.33,
                  49:11,
                  48:10.67,
                  47:10.33,
                  46:10,
                  45:9.67,
                  44:9.33,
                  43:9,
                  42:8.67,
                  41:8.33,
                  40:8,
                  39:7.5,
                  38:7,
                  37:6.5,
                  36:6,
                  35:5.5,
                  34:5,
                  33:4.5,
                  32:4,

              } )[ getmarks ] || 0;
              }
            }
            storemarks.push(point)
  
          }
          if(x==2){
            var getmarks=marksarray[i]
            if (getmarks<=40) {
              if (getmarks>=32 && getmarks<=40) {
                point=8;
              }
             else {
             point = ( {
                  31: 7.67,
                  30: 7.33,
                  29:7,
                  28:6.67,
                  27:6.33,
                  26:6,
                  25:5.67,
                  24:5.33,
                  23:5,
                  22:4.67,
                  21:4.33,
                  20:4,
                  19:3.5,
                  18:3,
                  17:2.5,
                  16:2,
                 
              } )[ getmarks ] || 0;
              }
            }
            storemarks.push(point)
  
          }
          if(x==1){
            var getmarks=marksarray[i]
            if (getmarks<=20) {
              if (getmarks>=16 && getmarks<=20) {
                point=4;
              }
             else {
             point = ( {
                  15: 3.67,
                  14: 3.33,
                  13:3,
                  12:2.67,
                  11:2.33,
                  10:2,
                  9:1.5,
                  8:1,
                 
              } )[ getmarks ] || 0;
              }
            }
            storemarks.push(point)
  
          }
          if(x==5){
            var getmarks=marksarray[i]
            if (getmarks<=100) {
              if (getmarks>=80 && getmarks<=100) {
                point=20;
              }
             else {
             point = ( {
                  79: 19.67,
                  78: 19.33,
                  77:19,
                  76:18.67,
                  75:18.33,
                  74:18,
                  73:17.67,
                  72:17.33,
                  71:17,
                  70:16.67,
                  69:16.33,
                  68:16,
                  67:15.67,
                  66:15.33,
                  65:15,
                  64:14.67,
                  63:14.33,
                  62:14,
                  61:13.67,
                  60:13.33,
                  59:13,
                  58:12.67,
                  57:12.33,
                  56:12,
                  55:11.67,
                  54:11.33,
                  53:11,
                  52:10.67,
                  51:10.33,
                  50:10,
                  49:9.5,
                  48:9,
                  47:8.5,
                  46:8,
                  45:7.5,
                  44:7,
                  43:6.5,
                  42:6,
                  41:5.5,
                  40:5,
              } )[ getmarks ] || 0;
              }
            }
            storemarks.push(point)
          }
       });
      
       console.log(storemarks)
       const sum1=storemarks.reduce((f,c) => {
         return f+c
       });
       console.log(sum1)
      const sum2= hourarray.reduce((h,k)=>{
         return h+k
       })
       console.log(sum2)
       var dis=sum1/sum2;
       console.log(dis)
       
       var newpara=document.createElement('p')
       newpara.style.fontSize="30px"
       newpara.style.fontFamily="cooper"
       newpara.innerHTML=`Your Gpa is ${dis.toFixed(2)}`
       element.appendChild(newpara)
       disbtn.setAttribute("disabled",false)
    })
    })
  }    



   function cgpa(){
    var hom=document.getElementById('home')
    console.log(hom)
    hom.innerHTML=""
    var con=document.getElementById('container')
    con.innerHTML=`<div style="display: flex; flex-direction: column; align-items: center;">
    <h1>CGPA Calculator</h1>
    <div style="display: flex; flex-direction: row;">
      <p style="font-weight:bold; font-size:20px;font-family:cooper; margin-top:30px">Enter Total Number of Semester:</p> 
      <input id="sub" type="number" max="8" min="1" placeholder="0" style="margin: 20px;margin-top:30px; height:30px;" > 
      <button class="btn btn-light me-md-2" id="enter" type="button " style="width:100px;height:40px; margin-top:25px">ENTER</button>

    </div>
    </div>`
    var ent=document.getElementById('enter')
    ent.addEventListener('click',function(){
    var semester=document.querySelector('input')
    console.log(semester.value)

    for(var i=1;i<=semester.value;i++){
      var element = document.createElement('div');
      element.innerHTML=`<span style="font-weight:bold;color: rgb(35, 59, 57);margin-right:10px">${i}</span><input class="totalmarks" type="number" placeholder="Enter GPA"><br/>`
      con.appendChild(element)
      ent.setAttribute("disabled", false)
    } 
      var span=document.createElement('span')
      span.innerHTML=`</br><button class="btn btn-light me-md-2" id="resbtn" style="margin-left:60px" type="button">RESULT</button>
      `
      element.appendChild(span)
      var disbtn=document.getElementById('resbtn')
      disbtn.addEventListener('click',function(){
        let obtmarks = document.getElementsByClassName('totalmarks') 
        var marksarray=[]
        for(let i=1;i<=semester.value;i++){
         
            marksarray.push(parseFloat(obtmarks[i-1].value))
            
        }
        console.log(marksarray)
        var store=marksarray.reduce((x,y) => {
         return x+y
    
      })
      console.log(store)
      var dis=store/semester.value
      console.log(dis)
      var newpara=document.createElement('p')
      newpara.style.fontSize="30px"
      newpara.style.fontFamily="cooper"
      newpara.innerHTML=`Your CGPA is ${dis.toFixed(2)}`
      con.appendChild(newpara)
      disbtn.setAttribute("disabled",false)
})
})
}