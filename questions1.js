/* Question 1 */
function q1(){
  clearCode();
  delCode();
  var nCL = new Question("Question 1: Which line has the mistake?<br>");
program.push(nCL);
  var nCL = new Code("10","Put Peanut Butter Jar on Counter");
program.push(nCL);
  var nCL = new Command("20","goTo","cupBoard");
program.push(nCL);
  var nCL = new Command("30","get","peanutButterJar");
program.push(nCL);
  var nCL = new Command("40","goTo","counter");
program.push(nCL);
  var nCL = new Command("50","put","peanutButterJar");
program.push(nCL);
nCL.log();
showCode(true);
}

/* Question 2 */
function q2(){
  clearCode();
  delCode();
  var nCL = new Question("Question 2: Which line has the mistake?<br>");
program.push(nCL);
  var nCL = new Code("50","Get Peanut Butter on Butter Knife");
program.push(nCL);
  var nCL = new Command("60","get","peanutButterJar");
program.push(nCL);
  var nCL = new Command("70","hold","peanutButterJar");
program.push(nCL);
  var nCL = new Command("80","open","peanutButter");
program.push(nCL);
  var nCL = new Command("90","get","butterKnife");
program.push(nCL);
nCL.log();
showCode(true);
}

/* Question 3 */
function q3(){
  clearCode();
  delCode();
  var nCL = new Question("Question 3: Which line has the mistake?<br>");
program.push(nCL);
  var nCL = new Code("20","Spread Jelly on Bread");
program.push(nCL);
  var nCL = new Command("120","get","jellyJar");
program.push(nCL);
  var nCL = new Command("130","hold","jellyJar");
program.push(nCL);
  var nCL = new Command("140","get","butterKnife");
program.push(nCL);
  var nCL = new Command("150","hold","butterKnife");
program.push(nCL);
nCL.log();
showCode(true);
}

/* Question 4 */
function q4(){
  clearCode();
  delCode();
  let myString="";
  myString+="10 goto(fridge);<br><br>\n\n";
  myString+="20 open(fridge);<br><br>\n\n";
  myString+="30 get(jelly);<br><br>\n\n";
  myString+="40 goTo(counter)<br><br><br>\n\n";
  myString+="Question 4: Which line does <strong>NOT</strong> have a mistake?<br>"
  code.innerHTML=myString;
}

/* Question 5 */
function q5(){
  clearCode();
  delCode();
  let myString="";
  myString+="110 get(jellyJar);<br><br>\n\n";
  myString+="120 hold(jellyJar);<br><br>\n\n";
  myString+="130 get(butterKnife);<br><br>\n\n";
  myString+="140 open(jellyJar);<br><br><br>\n\n";
  myString+="Question 5: Which line is impossible to do in this sequence(order)?<br>"
  code.innerHTML=myString;
}

/* Question 6 */
function q6(){
  clearCode();
  delCode();
  let myString="";
  myString+="110 goTo(pantry);<br><br>\n\n";
  myString+="120 open(pantry);<br><br>\n\n";
  myString+="Question 6: Use these lines to answer question 6."
  code.innerHTML=myString;
}

/* Question 7 */
function q7(){
  clearCode();
  delCode();
  let myString="<dt><strong>scoop(CObject)</strong></dt><dd><br><em>Rules: </em><ol><li>Argument CObject is a Container Object.</li><li>CObject contains spread (SObject).</li><li>Left.holding = CObject.</li><li>CObject.open = true.</li><li>Right.holding = knife.</li></ol></dd><dd><em>Results: </em><ol><li>Knife has enough SObject to coat 1 slice.</li></ol></dd>";
  code.innerHTML=myString;
}

/* Question 8 */
function q8(){
  clearCode();
  delCode();
  let myString="";
  myString+="1<br> CObject.open = false <br><em>means</em><br> Container object is open.<br><br>\n\n";
  myString+="2<br> Right.holding = knife <br><em>means</em><br> Knife is in right hand.<br><br>\n\n";
  myString+="3<br> Argument = CObject <br><em>means</em><br> Command is performed on a container object.<br><br>\n\n";
  myString+="4<br> Sister.location = Location <br><em>means</em><br> Sister is at the location in the argument.<br><br>\n\n";
  code.innerHTML=myString;
}

/* Question 9 */
function q9(){
  clearCode();
  delCode();
  let myString="";
  myString+="10 /* Get Peanut Butter //<br>";
  myString+="20 goto(pantry)<br>";
  myString+="30 open pantry;<br>";
  myString+="40 get(peanut Butter Jar);<br>";
  myString+="50 hold(peanutButter);<br>";
  myString+="60 Close(Pantry);<br>";
  code.innerHTML=myString;
}

/* Question 10 */
function q10(){
  clearCode();
  delCode();
  let myString="";
  myString+="/* Spread Peanut Butter On Bread */<br>";
  myString+="get(peanutButterJar);<br>";
  myString+="scoop(peanutButter);<br>";
  myString+="get(knife);<br>";
  myString+="hold(peanutButterJar);<br>";
  myString+="spread(peanutButter,leftSlice);<br>";
  myString+="open(peanutButterJar);<br>";
  code.innerHTML=myString;
}
