//Just a simple file the intent is to move all of the scripts to external files.
async function menudraw() {
  const menujson = fetch("./data/test.json")
    var menutext = "Home";
    const menu_html = document.getElementById("menu");
    const menuspot = document.createElement("div");
    const menu_text = document.createTextNode(menutext)
    menuspot.appendChild(menu_text);
    menu_html.appendChild(menuspot);
}
/*



const newDiv = document.createElement("div");

  // and give it some content
  const newContent = document.createTextNode("Hi there and greetings!");

  // add the text node to the newly created div
  newDiv.appendChild(newContent);

  // add the newly created element and its content into the DOM
  const currentDiv = document.getElementById("div1");
  document.body.insertBefore(newDiv, currentDiv);


<div class="leftside">
    <a href="./index.html">Home</a><br />
    <a href="./carcalculations.html">Automotive Calulators</a><br />
    <a href="./tamarackdrive.svg">Front Yard</a><br />
    <a href="./datacenternorth.html">Data Center North</a><br />
    <a href="./solarshed.html">Solar backup power</a><br />
    <a href="./watercool.html">Water cooled PC</a>
  <!--   <p>Test 2</p> -->
</div>
 */