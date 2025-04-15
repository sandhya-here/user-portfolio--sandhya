const container = document.getElementById('user-container');
const toggleBtn = document.getElementById('darkModeToggle');

// Toggle dark mode
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Your custom user data
const users = [
  {
    name: "Sandhya Burje",
    email: "sandhya@example.com",
    phone: "123-456-7890",
    company: { name: "Sandhya Innovations" }
  },
  {
    name: "Priya Sharma",
    email: "priya@example.com",
    phone: "987-654-3210",
    company: { name: "Bright Minds Pvt Ltd" }
  },
  {
    name: "Rahul Mehta",
    email: "rahul@example.com",
    phone: "555-555-5555",
    company: { name: "CodeForge Inc." }
  }
];

// Display data
container.innerHTML = '';
users.forEach(user => {
  const card = document.createElement('div');
  card.className = 'user-card';
  card.innerHTML = `
    <h2>${user.name}</h2>
    <p><strong>Email:</strong> ${user.email}</p>
    <p><strong>Phone:</strong> ${user.phone}</p>
    <p><strong>Company:</strong> ${user.company.name}</p>
  `;
  container.appendChild(card);
});
