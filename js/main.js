document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Navbar background change on scroll
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    });

    // Menu category filtering
    const menuCategories = document.querySelectorAll('.menu-category');
    menuCategories.forEach(category => {
        category.addEventListener('click', function() {
            // Remove active class from all categories
            menuCategories.forEach(cat => cat.classList.remove('active'));
            // Add active class to clicked category
            this.classList.add('active');
            
            // Here you would typically filter the menu items
            const selectedCategory = this.dataset.category;
            filterMenuItems(selectedCategory);
        });
    });
});

// Function to filter menu items (to be implemented with actual menu data)
function filterMenuItems(category) {
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
        if (category === 'all' || item.dataset.category === category) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

// Reservation form handling (to be implemented)
function handleReservation(event) {
    event.preventDefault();
    // Add reservation form handling logic here
}
