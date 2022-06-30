( function( $ ) {
$( document ).ready(function() {
$('#cssmenu').prepend('<div id="menu-button">Menu</div>');
	$('#cssmenu #menu-button').on('click', function(){
		var menu = $(this).next('ul');
		if (menu.hasClass('open')) {
			menu.removeClass('open');
		}
		else {
			menu.addClass('open');
		}
	});
});
} )( jQuery );

const checkForm = () => {
	let result = 0;
	const imieNazwisko = document.getElementById("name").value;
	let imieNazwiskoVisible = 0;
	const poczta = document.getElementById("email").value;
	const temat  = document.getElementById("subject").value;
	const text   = document.getElementById("message").value;
	
	if (imieNazwisko && poczta && temat && text) {
	let message = 'Imie i nazwisko: ' + imieNazwisko + '\n' +
	'Poczta: ' + poczta + '\n' + 'Temat: ' + temat + '\n' +
	'Wiadomość: ' + text;
	result = confirm(message);
	}
	if (result) {
		const toStorage = {
			'imieNazwisko': imieNazwisko,
			'poczta': poczta,
			'temat': temat,
			'wiadomosc': text

		}

		
		addLocalStorage(toStorage);
	}
	else{
			return false;}
	toStorage = {};
}

const addLocalStorage = (toStorage) => {
	id = Object.keys(localStorage).length;
    while (window.localStorage.getItem(id)) {
        id++;
    }
    window.localStorage.setItem(id.toString(), JSON.stringify(toStorage));
}

const fetchData = () => {
	let keys;
	document.getElementById("miasta").innerHTML = '';
    fetch('https://lomatt.github.io/miasta.json')
        .then((response) => {
            return response.json();
        })
        .then ((data) => {
            console.log(data);
            // keys = Object.keys(data);
            // console.log(keys);
            // for (let i = 0; i < data.length; i++) {
            //     console.log(data[keys[i]].data);
			// }
		})
}