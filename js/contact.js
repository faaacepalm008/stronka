function selectchange()
{
	var savedIndex = document.getElementById("itemss").selectedIndex;
	var object= JSON.parse(localStorage.getItem(localStorage.key(savedIndex-1)));
	document.getElementById("name").value=object.imieNazwisko;
	document.getElementById("email").value=object.poczta;
	document.getElementById("subject").value=object.temat;
	document.getElementById("message").value=object.wiadomosc;
	
}

function update(){
	
		var item={};
		var savedIndex = document.getElementById("itemss").selectedIndex;
		var object= (localStorage.key(savedIndex-1));
	item.imieNazwisko=document.getElementById('name').value;
	item.poczta=document.getElementById('email').value;
	item.temat=document.getElementById('subject').value;
	item.wiadomosc=document.getElementById('message').value;

	localStorage.setItem(object, JSON.stringify(item));
	

}
function edycja()
{
	document.getElementById("itemss").style.display="block";
	document.getElementById("accept").style.display="block";
	document.getElementById("delete").style.display="block";
	document.getElementById("return").style.display="block";
	document.getElementById("send").style.display="none";
	document.getElementById("edit").style.display="none";
}
function returnn()
{
	document.getElementById("itemss").style.display="none";
	document.getElementById("accept").style.display="none";
	document.getElementById("delete").style.display="none";
	document.getElementById("return").style.display="none";
	document.getElementById("send").style.display="block";
	document.getElementById("edit").style.display="block";
}
function anuluj(){
	var savedIndex = document.getElementById("itemss").selectedIndex;
	var object= (localStorage.key(savedIndex-1));
	localStorage.removeItem(object);
	var x = document.getElementById("itemss");
	x.remove(x.selectedIndex);
	x.selectedIndex=0;
	document.getElementById("name").value='';
	document.getElementById("email").value='';
	document.getElementById("subject").value='';
	document.getElementById("message").value='';
}