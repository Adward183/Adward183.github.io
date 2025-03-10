
var body = document.querySelectorAll("body");


var counter = 0;
tree = document.querySelector(".html_tree");

function showElements(elements) {

    console.log(elements.length);
    tree.innerHTML += '[';
    for (j = 0; j < elements.length; j++) { tree.innerHTML += elements[j].nodeName + ','; }
    tree.innerHTML += ']';
}
function addLine() {
    tree.innerHTML += "<hr>";
}
function showNodeName(el) {
    if(el.nodeName=="#text") { tree.innerHTML+=el.data;}
    else {
    tree.innerHTML += el.nodeName + ":";
    }
}
function getNodes(elements) {
    // elements : [ 'div','div','table' ]
    //отображает все элементы через запятую
    showElements(elements);
    addLine();
    counter++;
    if (counter > 1000) { return; }
    //перечисляем 
    for (i = 0; i < elements.length; i++) {
        showNodeName(elements[i]);
        if (elements[i].childNodes.length > 0) {
            getNodes(elements[i].childNodes);
        }
        else {
            tree.innerHTML += " [e] ";
        }
    }
}
getNodes(body);
