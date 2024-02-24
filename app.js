document.addEventListener('DOMContentLoaded', function() {
  const loginForm = document.getElementById('login-form');
  loginForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Empêcher l'envoi du formulaire par défaut
    const email = loginForm.querySelector('input[type="email"]').value;
    const password = loginForm.querySelector('input[type="password"]').value;
    // Envoyer les informations de connexion au serveur (non inclus dans cet exemple)
    console.log('Adresse e-mail:', email);
    console.log('Mot de passe:', password);
  });

  // Exemple de cours
  const coursesList = document.getElementById('courses-list');
  const courses = [
    { title: 'Introduction à JavaScript', author: 'John Doe' },
    { title: 'HTML et CSS pour les débutants', author: 'Jane Smith' },
    { title: 'Programmation orientée objet en Java', author: 'Alice Johnson' }
  ];
  courses.forEach(function(course) {
    const courseItem = document.createElement('div');
    courseItem.classList.add('course-item');
    courseItem.innerHTML = `
      <h3>${course.title}</h3>
      <p>Auteur: ${course.author}</p>
      <button class="like-button">J'aime</button>
    `;
    coursesList.appendChild(courseItem);
  });
});
