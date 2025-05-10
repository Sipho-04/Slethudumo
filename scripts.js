// scripts.js

// Example function to enhance interactivity
document.addEventListener('DOMContentLoaded', () => {
    const tigerImages = document.querySelectorAll('#tiger-lodge .image-gallery img');
    const durbanImages = document.querySelectorAll('#durban .image-gallery img');

    // Add hover effect to images
    tigerImages.forEach(img => {
        img.addEventListener('mouseover', () => {
            img.style.transform = 'scale(1.05)';
            img.style.transition = 'transform 0.3s ease';
        });
        img.addEventListener('mouseout', () => {
            img.style.transform = 'scale(1)';
        });
    });

    durbanImages.forEach(img => {
        img.addEventListener('mouseover', () => {
            img.style.transform = 'scale(1.05)';
            img.style.transition = 'transform 0.3s ease';
        });
        img.addEventListener('mouseout', () => {
            img.style.transform = 'scale(1)';
        });
    });
});
