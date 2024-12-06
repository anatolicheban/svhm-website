import '../styles/style.scss';

document.querySelectorAll('.questions-box-item').forEach(item => {
    item.addEventListener('click', () => {
        document.querySelectorAll('.questions-box-item').forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.classList.remove('active');
            }
        });

        item.classList.toggle('active');
    });
});