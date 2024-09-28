const logos = [
    { src: "assets/logos/Zoom.png", alt: "Zoom" },
    { src: "assets/logos/Classroom.png", alt: "Google Classroom" },
    { src: "assets/logos/TUT-WURI-HANDAYANI.png", alt: "Tutwuri Handayani" },
    { src: "assets/logos/Telkomsel.png", alt: "Education Logo 1" },
    { src: "assets/logos/INTEL.png", alt: "Education Logo 2" }
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
    { profile: "1", name: "Riyan Handriyana", role: "FrontEnd", message: "Sangat menyenangkan balajar di website ini!", rating: 4 },
    { profile: "2", name: "Wandi Apriansyah", role: "FullStack", message: "Bekerja dengan baik kurir sangat cepat", rating: 5 },
    { profile: "3", name: "Dava Ghifari", role: "FrontEnd", message: "Kata-kata naon", rating: 4 },
    { profile: "1", name: "Hamba Allah", role: "FrontEnd", message: "Terus semangat dan jangan menyerah", rating: 3 },
    { profile: "2", name: "Rafli Wibu", role: "FrontEnd", message: "Tidak ada yang perlu disesali", rating: 2 },
    { profile: "3", name: "Manusia Sigma", role: "Samurai", message: "Keyakinan adalah langkah pertama menuju pencapaian", rating: 5 },
    { profile: "1", name: "Asy Syams", role: "Networking", message: "Tidak punya kata-kata", rating: 1 },
    { profile: "2", name: "Akbar Emur", role: "Multimedia", message: "Walaupun hidup 1000 tahun kalau tak sembahyang apa gunanya", rating: 5 },
    { profile: "3", name: "Sevian Ludiana", role: "Siswa SMKN 5", message: "Tetaplah bernafas", rating: 5 },
  ];
  
  const carouselContainer = document.getElementById('carousel-container');
  
  reviews.forEach(review => {
    const carouselItem = `
      <div class="carousel-item">
        <div class="mx-2 2xl:mx-4">
          <div class="card bg-base-100 w-96 2xl:w-[350px] h-full shadow-xl 2xl:px-5 2xl:py-3">
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


  // Data Quiz
  document.querySelectorAll('.btn-level').forEach(button => {
    button.addEventListener('click', function() {
        const level = this.getAttribute('data-level');
        // Redirect to quizQuestion.html with query parameters for quiz name, subject, and level
        window.location.href = `quizQuestion.html?quiz=${quizName}&subject=${subject}&level=${level}`;
    });
});

// Ensure this is in your quiz page's script
async function loadQuizData() {
  try {
      const response = await fetch('/assets/json/SoalQuiz.json'); // Fetch the JSON data
      if (!response.ok) {
          throw new Error('Data tidak ditemukan');
      }
      const quizData = await response.json();
      return quizData;
  } catch (error) {
      console.error('Error fetching the quiz data:', error);
      alert('Gagal mengambil data quiz. Pastikan file JSON tersedia dan jalurnya benar.');
  }
}

function displayQuiz(quizData, subject, level) {
  const quizTitle = document.getElementById('quiz-title');
  const quizQuestion = document.getElementById('quiz-question');
  const quizOptions = document.getElementById('quiz-options');

  // Validate the subject and level in the JSON data
  if (!quizData || !quizData[subject] || !quizData[subject][level]) {
      quizTitle.textContent = 'Data quiz tidak ditemukan';
      quizQuestion.textContent = '';
      return;
  }

  // Get the quiz content for the specified subject and level
  const quizContent = quizData[subject][level];

  // Display the question and options
  quizTitle.textContent = `${subject} Level ${level}`;
  quizQuestion.textContent = quizContent.question;

  // Clear previous options
  quizOptions.innerHTML = '';
  quizContent.options.forEach((option) => {
      const button = document.createElement('button');
      button.textContent = option;
      button.classList = 'bg-slate-200 h-20 text-2xl font-bold hover:bg-slate-400 hover:text-white rounded-md';
      button.addEventListener('click', () => {
          validateAnswer(option, quizContent.correctAnswer);
      });
      quizOptions.appendChild(button);
  });
}
const params = new URLSearchParams(window.location.search);
const subject = params.get('subject');
const level = params.get('level');

// Validasi jika tidak ada subject atau level
if (!subject || !level) {
    alert('Parameter URL tidak lengkap. Pastikan menambahkan subject dan level.');
} else {
    // Load quiz data dan tampilkan soal
    loadQuizData().then(quizData => {
        if (quizData) {
            displayQuiz(quizData, subject, level);
        }
    });
}

  // End Data Quiz
  