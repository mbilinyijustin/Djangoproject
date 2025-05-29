document.addEventListener('DOMContentLoaded', function () {
    console.log("Personal Website Loaded!");

    // Example interactivity
    const name = document.querySelector('h1');
    name.addEventListener('click', () => {
        alert("Welcome to my site!");
    });
});
