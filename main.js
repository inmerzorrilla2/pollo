document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.box img');
    
    images.forEach(image => {
        image.addEventListener('mouseover', () => {
            image.style.transform = 'rotate(10deg)';
            image.style.transition = 'transform 0.3s ease-in-out';
        });
        image.addEventListener('mouseout', () => {
            image.style.transform = 'rotate(0deg)';
            image.style.transition = 'transform 0.3s ease-in-out';
        });
    });

    const headings = document.querySelectorAll('h1, h2');
    headings.forEach(heading => {
        heading.addEventListener('mouseover', () => {
            heading.style.color = 'rgba(250, 9, 9, 0.9)';
            heading.style.transition = 'color 0.3s ease-in-out';
        });
        heading.addEventListener('mouseout', () => {
            heading.style.color = '';
            heading.style.transition = 'color 0.3s ease-in-out';
        });
    });
});
