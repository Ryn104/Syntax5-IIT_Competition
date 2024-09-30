const logos = [
    { src: "assets/logos/Zoom.png", alt: "Zoom" },
    { src: "assets/logos/Classroom.png", alt: "Google Classroom" },
    { src: "assets/logos/TUT-WURI-HANDAYANI.png", alt: "Tutwuri Handayani" },
    { src: "assets/logos/Telkomsel.png", alt: "telkomsel" },
    { src: "assets/logos/google.png", alt: "google" },
    { src: "assets/logos/INTEL.png", alt: "Education Logo 2" },
    { src: "assets/logos/unesco.png", alt: "unesco" },
    { src: "assets/logos/merdeka.png", alt: "merdeka" }
];

const logoCarousel = document.getElementById('logoCarousel');

logos.forEach(logo => {
    const carouselItem = document.createElement('div');
    carouselItem.className = 'carousel-item';

    const img = document.createElement('img');
    img.src = logo.src;
    img.alt = logo.alt;
    img.className = 'h-24 ps-10 py-4 aspect-auto 2xl:ps-24 2xl:py-6 2xl:h-[110px]';

    carouselItem.appendChild(img);
    logoCarousel.appendChild(carouselItem);
});

const reviews = [
    { profile: "1", name: "Riyan Handriyana", role: "FrontEnd", message: "Komunitas EduLearn sangat aktif dengan forum diskusi yang dinamis, memudahkan berbagi pengetahuan dan mendapatkan dukungan dari sesama pengguna", rating: 4 },
    { profile: "2", name: "Wandi Apriansyah", role: "FullStack", message: "EduLearn menawarkan fitur lengkap dengan tampilan yang bersih dan navigasi yang mudah, membuat proses belajar menjadi lebih nyaman", rating: 5 },
    { profile: "3", name: "Dava Ghifari", role: "FrontEnd", message: "Komunitas EduLearn sangat aktif dengan forum diskusi yang dinamis, memudahkan berbagi pengetahuan dan mendapatkan dukungan dari sesama penggun", rating: 4 },
    { profile: "1", name: "Khulika", role: "FrontEnd", message: "Konten di EduLearn sangat berkualitas, dengan materi yang mendalam dan penjelasan yang mudah dipahami, ditambah dengan video dan infografis yang menarik", rating: 4 },
    { profile: "2", name: "Muhammad Rafli", role: "FrontEnd", message: "Konten EduLearn berkualitas tinggi dengan materi mendalam, penjelasan jelas, dan infografis menarik yang membuat belajar lebih interaktif dan efektif", rating: 5 },
    { profile: "3", name: "Naufal", role: "Networking", message: "Desain visual EduLearn modern, namun elemen grafis dan warna yang banyak bisa menjadi distraksi bagi sebagian pengguna dalam belajar", rating: 5 },
    { profile: "1", name: "Asy Syams", role: "Networking", message: "EduLearn tidak menyediakan fitur akses offline, jadi pengguna dengan koneksi internet tidak stabil mungkin akan mengalami kesulitan", rating: 3 },
    { profile: "2", name: "Muhammad Akbar", role: "Multimedia", message: "EduLearn bagus banget pokoknya apalagi yang sekolahnya di tingkat SMK udah jelas kepake banget ini pelajarannya, makasih edubook udah sediain materi khusus SMK", rating: 5 },
    { profile: "3", name: "Sevian Ludiana", role: "UI/UX Desainer", message: "Kecepatan loading halaman EduLearn terkadang lambat, terutama dengan koneksi internet kurang stabil, yang dapat mengganggu pengalaman belajar", rating: 4 },
  ];
  
  const carouselContainer = document.getElementById('carousel-container');
  
  reviews.forEach(review => {
    const carouselItem = `
      <div class="carousel-item">
        <div class="mx-2 2xl:mx-4">
          <div class="card bg-base-100 w-96 2xl:w-[450px] h-full shadow-xl 2xl:px-5 2xl:py-3">
            <div class="card-body">
              <div class="flex gap-2 2xl:gap-4">
                <div class="self-center">
                  <img class="w-14 rounded-full 2xl:w-[50px]" src="assets/Image/profile-komentar-${review.profile}.png" alt="">
                </div>
                <div class="self-center">
                  <h1 class="text-xl font-semibold 2xl:text-2xl">${review.name}</h1>
                  <p class="text-gray-500 2xl:text-xl">${review.role}</p>
                </div>
              </div>
              <h2 class="card-title h-full 2xl:text-2xl">"${review.message}"</h2>
              <div class="card-actions justify-end">
                <div class="rating">
                  ${[...Array(5)].map((_, index) => `
                    <input type="radio" name="rating-${review.name}" class="mask mask-star-2 bg-orange-400" ${index < review.rating ? 'checked' : ''} />
                  `).join('')}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  
    carouselContainer.innerHTML += carouselItem;
  });
