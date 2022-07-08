<!DOCTYPE html>
<html lang="en">

<head>
	<!--  meta tags -->
	<meta charset="utf-8" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<meta name="description" content="Muhamad Jamaludin as Front-end and Back-end developer" />
	<meta name="generator" content="Eleventy v1.0.1" />
	<meta name="keywords"
		content="Muhamad Jamaludin, muhamadjamaludinpad, Muhamad Jamaludin Padmawinata, jamjam, muhjmlpad, front-end, back-end" />
	<meta name="author" content="Muhamad Jamaludin" />
	<link rel="apple-touch-icon" sizes="180x180" href="aset/img/icon.png" />
	<link rel="shortcut icon" href="aset/img/icon.png" />
	<!-- icon -->
	<link rel="icon" href="aset/img/icon.png" />

	<title>Jam Jam | Developer</title>

	<!-- Bootstrap CSS -->
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.rtl.min.css"
		integrity="sha384-gXt9imSW0VcJVHezoNQsP+TNrjYXoGcrqBZJpry9zJt8PCQjobwmhMGaDHTASo9N" crossorigin="anonymous" />


	<!-- font Awesome -->
	<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css" rel="stylesheet" />

	<!-- my css -->
	<link rel="stylesheet" href="aset/css/contact.css" />

	<!-- Google fonts -->
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=Titillium+Web:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700&display=swap"
		rel="stylesheet" />


</head>

<body class="d-flex flex-column min-vh-100">
	<!-- awal navbar -->
	<nav>
		<div class="navbar-pages">
			<ul>
				<li>
					<a href="index.html">
						<h1>JamJam</h1>
					</a>
				</li>
			</ul>
			<ul>
				<li><a href="index.html#work">Work</a></li>
				<li><a href="index.html#about">About</a></li>
				<li><a href="index.html#social">Social</a></li>
			</ul>

			<ul>
				<li><a href="#" class="active">Contact</a></li>
			</ul>
		</div>
	</nav>
	<!-- akhir navbar -->

	<!-- awal contact -->
	<section id="contact">
		<h1>Contact</h1>
		<div class="alert alert-success alert-dismissible fade show d-none my-alert" role="alert">
			<strong>Terima kasih!</strong> Pesan anda telah diterima.
			<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
		</div>

		<div class="alert alert-danger alert-dismissible fade show d-none gagal-alert" role="alert">
			<strong>Mohon maaf!</strong> Pesan anda gagal dikirim.
			<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
		</div>

		<form action="php/send.php" method="post" name="jamjam-contact-form">
			<!-- awal Form Contact Us -->

			<div class="col-12 mb-3">
				<input type="text" name="name" class="form-control w-100" placeholder="Full Name" autofocus required
					maxlength="250" />
			</div>

			<div class="col-12 mb-3">
				<input type="email" name="email" class="form-control" placeholder="Email" aria-label="Email" autofocus required
					maxlength="250" />
			</div>


			<div class="form mb-3">
				<textarea class="form-control" name="message" placeholder="Message to muhhjam@gmail.com" id="floatingTextarea2"
					style="height: 100px" autofocus required></textarea>
			</div>

			<button type="submit" class="btn btn-outline-dark me-2 btn-kirim">
				Submit
			</button>

			<button class="btn btn-dark d-none btn-loading" type="button" disabled>
				<span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
				Loading...
			</button>

			<button type="reset" value="Reset" class="btn btn-danger">
				Cancel
			</button>
		</form>

	</section>

	<!-- akhit contact -->

	<!-- awal footer -->
	<footer class="mt-auto">
		<p class="">
			<i class="far fa-copyright"></i> 2022
			<a href="https://www.instagram.com/muhamadjamaludinpad/" target="_blank">Muhamad Jamaludin</a>. Created With Love.
	</footer>
	<!-- akhir footer -->

	<!-- jquery -->
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>

	<!-- contact JS -->
	<script src="aset/js/contact.js"></script>

	<!-- navbar JS -->
	<script src="aset/js/nav.js"></script>

	<!-- Optional JavaScript; choose one of the two! -->

	<!-- Option 1: Bootstrap Bundle with Popper -->
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
		integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous">
	</script>


	<!-- JQBootstrap Validation -->
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>






	<!-- Option 2: Separate Popper and Bootstrap JS -->
	<!--
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous"></script>
    -->
</body>

</html>