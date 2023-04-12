 function getFormvalue() {
    //Write your code here
	 const form = document.getElementById("form1");
	 const firstName = form.elements["f-name"].value;
  const lastName = form.elements["l-name"].value;
  alert(firstName +" "+ lastName);
 }