// Obtenha a URL atual
var url = window.location.pathname;

// Remova a classe 'active' de todos os links
var links = document.querySelectorAll('.footerIten');
links.forEach(function (link) {
	link.classList.remove('active');
});

// Verifique se a URL atual contém 'Ali', 'Beleza', 'Pesente'
if (url.includes('Ali')) {
	// Adicione a classe 'active' ao link do AliExpress
	var aliLink = document.querySelector('.footerIten[href="/ali/listarAli"]');
	if (aliLink) {
		aliLink.classList.add('active');
	}
} else if (url.includes('Beleza')) {
	// Adicione a classe 'active' ao link de Beleza
	var belezaLink = document.querySelector('.footerIten[href="/beleza/listarBeleza"]');
	if (belezaLink) {
		belezaLink.classList.add('active');
	}
} else if (url.includes('Pesente')) {
	// Adicione a classe 'active' ao link de Pesente
	var pesenteLink = document.querySelector('.footerIten[href="/pesente/listarPesente"]');
	if (pesenteLink) {
		pesenteLink.classList.add('active');
	}
} else {
	// Adicione a classe 'active' ao link correspondente à URL atual
	var activeLink = document.querySelector(`.footerIten[href="${url}"]`);
	if (activeLink) {
		activeLink.classList.add('active');
	}
}
////////////////////////////////////////////////////////////////

document.addEventListener('DOMContentLoaded', function () {
	// Defina o conteúdo das divs para 0 quando a página é carregada
	document.querySelector('.NumAli').textContent = 0;
	document.querySelector('.NumBeleza').textContent = 0;
	document.querySelector('.NumPesente').textContent = 0;

	function updateItemCount(url, element) {
		fetch(url)
			.then((response) => {
				if (!response.ok) {
					throw new Error('Erro na resposta da solicitação fetch');
				}
				return response.json();
			})
			.then((data) => {
				console.log('Novo valor de count:', data);
				let count = Math.floor(Math.random() * data);
				document.querySelector(element).textContent = count;
			})
			.catch((error) => console.error('Erro na solicitação fetch:', error));
	}

	document.querySelector('#button').addEventListener('click', function () {
		updateItemCount('http://localhost:3000/alis_count', '.NumAli');
		updateItemCount('http://localhost:3000/belezas_count', '.NumBeleza');
		updateItemCount('http://localhost:3000/pesentes_count', '.NumPesente');
	});
});

