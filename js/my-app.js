// Initialize your app
var myApp = new Framework7({    
    material: true, //untuk mengaktifkan theme material
    swipePanel: 'left',
});

var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    dynamicNavbar: true
});

//untuk API
var base_url='https://newsapi.org/v2/top-headlines?country=id&apiKey=51dfd39984fe476f90f625457f70c96a';

mainView.router.refreshPage();

myApp.onPageInit('index', function (page) {
	loading();
	//kosongkan tabel
	$$('#tempat_berita').html('');
	
	//ambil data api
	$$.getJSON(base_url, function(result){
		// console.log(result);


		//membuat array untuk menampung berita
		var arr = new Array();

		//memasukan berita ke array
		$$.each(result.articles, function(i, field){
			arr.push(field);
		});

		console.log(arr);

		//menampilkan berita ke halaman
		$$.each(arr, function(k, isi){
			$$('#tempat_berita').
				append($$('<div class="card">').
					append($$('<div class="card-header">').
						append(isi.title)
					).
					append($$('<div class="card-content">').
						append($$('<div class="card-content-inner">').
							append(isi.description)
						)
					).
					append($$('<div class="card-footer">').
						append('Penulis '+isi.author)
					)
				)
		});

	});

});

//untuk halaman olahraga
myApp.onPageInit('sport', function (page) {
	loading();
	//kosongkan tabel
	$$('#berita_olahraga').html('');
	
	//ambil data api
	$$.getJSON(base_url, {category : 'sports'}, function(result){
		// console.log(result);


		//membuat array untuk menampung berita
		var arr = new Array();

		//memasukan berita ke array
		$$.each(result.articles, function(i, field){
			arr.push(field);
		});

		console.log(arr);

		//menampilkan berita ke halaman
		$$.each(arr, function(k, isi){
			$$('#berita_olahraga').
				append($$('<div class="card">').
					append($$('<div class="card-header">').
						append(isi.title)
					).
					append($$('<div class="card-content">').
						append($$('<div class="card-content-inner">').
							append(isi.description)
						)
					).
					append($$('<div class="card-footer">').
						append('Penulis '+isi.author)
					)
				)
		});

	});

});

//untuk halaman bisnis
myApp.onPageInit('bisnis', function (page) {
	loading();
	//kosongkan tabel
	$$('#berita_bisnis').html('');
	
	//ambil data api
	$$.getJSON(base_url, {category : 'business'}, function(result){
		// console.log(result);


		//membuat array untuk menampung berita
		var arr = new Array();

		//memasukan berita ke array
		$$.each(result.articles, function(i, field){
			arr.push(field);
		});

		console.log(arr);
		var a = '';
		//menampilkan berita ke halaman
		$$.each(arr, function(k, isi){
			a += '<div class="card">';
				a += '<div class="card-header">';
					a += isi.title;
				a += '</div>';
				a += '<div class="card-content">';
					a += '<div class="card-content-inner">';
						a += isi.description;
					a += '</div>';
				a += '</div>';
				a += '<div class="card-footer">';
					a += isi.author;
				a += '</div>';
			a += '</div>';
			// $$('#berita_bisnis').
			// 	append($$('<div class="card">').
			// 		append($$('<div class="card-header">').
			// 			append(isi.title)
			// 		).
			// 		append($$('<div class="card-content">').
			// 			append($$('<div class="card-content-inner">').
			// 				append(isi.description)
			// 			)
			// 		).
			// 		append($$('<div class="card-footer">').
			// 			append('Penulis '+isi.author)
			// 		)
			// 	)
		});

			$$('#berita_bisnis').html(a);

	});

});

//untuk halaman kesehatan
myApp.onPageInit('kesehatan', function (page) {
	loading();
	//kosongkan tabel
	$$('#berita_kesehatan').html('');
	
	//ambil data api
	$$.getJSON(base_url, {category : 'health'}, function(result){
		// console.log(result);


		//membuat array untuk menampung berita
		var arr = new Array();

		//memasukan berita ke array
		$$.each(result.articles, function(i, field){
			arr.push(field);
		});

		console.log(arr);

		//menampilkan berita ke halaman
		$$.each(arr, function(k, isi){
			$$('#berita_kesehatan').
				append($$('<div class="card">').
					append($$('<div class="card-header">').
						append(isi.title)
					).
					append($$('<div class="card-content">').
						append($$('<div class="card-content-inner">').
							append(isi.description)
						)
					).
					append($$('<div class="card-footer">').
						append('Penulis '+isi.author)
					)
				)
		});

	});

});

//untuk halaman teknologi
myApp.onPageInit('teknologi', function (page) {
	loading();
	//kosongkan tabel
	$$('#berita_teknologi').html('');
	
	//ambil data api
	$$.getJSON(base_url, {category : 'technology'}, function(result){
		// console.log(result);


		//membuat array untuk menampung berita
		var arr = new Array();

		//memasukan berita ke array
		$$.each(result.articles, function(i, field){
			arr.push(field);
		});

		console.log(arr);

		//menampilkan berita ke halaman
		$$.each(arr, function(k, isi){
			$$('#berita_teknologi').
				append($$('<div class="card">').
					append($$('<div class="card-header">').
						append(isi.title)
					).
					append($$('<div class="card-content">').
						append($$('<div class="card-content-inner">').
							append(isi.description)
						)
					).
					append($$('<div class="card-footer">').
						append('Penulis '+isi.author)
					)
				)
		});

	});

});

//untuk halaman hiburan
myApp.onPageInit('hiburan', function (page) {
	loading();
	//kosongkan tabel
	$$('#berita_hiburan').html('');
	
	//ambil data api
	$$.getJSON(base_url, {category : 'entertainment'}, function(result){
		// console.log(result);


		//membuat array untuk menampung berita
		var arr = new Array();

		//memasukan berita ke array
		$$.each(result.articles, function(i, field){
			arr.push(field);
		});

		console.log(arr);

		//menampilkan berita ke halaman
		$$.each(arr, function(k, isi){
			$$('#berita_hiburan').
				append($$('<div class="card">').
					append($$('<div class="card-header">').
						append(isi.title)
					).
					append($$('<div class="card-content">').
						append($$('<div class="card-content-inner">').
							append(isi.description)
						)
					).
					append($$('<div class="card-footer">').
						append('Penulis '+isi.author)
					)
				)
		});

	});

});

function loading() {
		myApp.showPreloader();
	    setTimeout(function () {
	      myApp.hidePreloader();
	    },1000);
}