// Loader
window.addEventListener('load', function() {
    setTimeout(function() {
        document.querySelector('.loader').classList.add('hidden');
    }, 2000);
});

// Smooth scrolling for navigation links
document.querySelectorAll('.nav-link[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Mobile menu toggle
document.querySelector('.hamburger').addEventListener('click', function() {
    document.querySelector('.nav-menu').classList.toggle('active');
});

// Booking Modal Functions (for index.html)
function openBookingModal() {
    document.getElementById('bookingModal').style.display = 'block';
}

function closeBookingModal() {
    document.getElementById('bookingModal').style.display = 'none';
}

function bookDoctor(doctorName) {
    document.getElementById('doctor').value = doctorName;
    openBookingModal();
}

// Close modal when clicking outside
window.addEventListener('click', function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
    }
});

// Booking Form Submission
document.addEventListener('DOMContentLoaded', function() {
    const bookingForm = document.getElementById('bookingForm');
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Check if we're on booking.html (has success modal) or index.html (different modal)
            const successModal = document.getElementById('successModal');
            if (successModal) {
                // Generate token number for booking.html
                const tokenNumber = 'MC' + Date.now().toString().slice(-6);
                document.getElementById('tokenNumber').textContent = tokenNumber;
                successModal.style.display = 'block';
                bookingForm.reset();
            } else {
                // For index.html modal, just show alert
                alert('Booking submitted successfully! We will contact you soon.');
                closeBookingModal();
                bookingForm.reset();
            }
        });
    }
});

// Close success modal
function closeSuccessModal() {
    const successModal = document.getElementById('successModal');
    if (successModal) {
        successModal.style.display = 'none';
    }
}

// Search functionality
const searchInput = document.querySelector('#searchInput');
if (searchInput) {
    const searchSuggestions = document.querySelector('.search-suggestions');
    
    searchInput.addEventListener('focus', function() {
        searchSuggestions.style.display = 'block';
    });
    
    searchInput.addEventListener('blur', function() {
        setTimeout(() => {
            searchSuggestions.style.display = 'none';
        }, 200);
    });
    
    searchSuggestions.addEventListener('click', function(e) {
        if (e.target.tagName === 'DIV') {
            searchInput.value = e.target.textContent;
            searchSuggestions.style.display = 'none';
        }
    });
}
