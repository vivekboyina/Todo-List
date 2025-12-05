let todo = [];
function add()
{
  var c = document.getElementById("at").value;
  if(c.trim() !== "")
  {
    todo.push(c);
    document.getElementById("at").value = "";
    display();
  }
}
function del()
{
  var a = document.getElementById("dt").value;
  if(a.length > 0)
  {
    var i = todo.indexOf(a);
    if(i != -1)
    {
      todo.splice(i,1);
    }
    document.getElementById("dt").value = "";
    display();
  }
}
function display()
{
  let res = "";
  for(let j = 0; j < todo.length; j++)
  {
    res+=`${j + 1} : ${todo[j]}<br>`;
  }
  document.getElementById("ans").innerHTML = res;

}
