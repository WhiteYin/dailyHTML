window.onload = function () {
    var maleSelect = document.querySelector(".male-container");
    var femaleSelect = document.querySelector('.female-container');

    maleSelect.addEventListener('click', function () {
        maleSelect.classList.add('active');
        femaleSelect.classList.remove('active');
    });
    femaleSelect.addEventListener('click', function () {
        femaleSelect.classList.add('active');
        maleSelect.classList.remove('active');
    });
}