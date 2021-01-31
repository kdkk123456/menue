student_array=[];
function submit(){
    console.log("hi");
    var student1=document.getElementById("input1").value;
    student_array.push(student1);
    console.log(student_array);
    document.getElementById("output").innerHTML=student_array;
}
