$(document).ready(function() {
    const btn = $('.btn');
    const sidebar = $('.sidebar');

    btn.click(function() {
        sidebar.toggleClass('show');
        $('.article').toggleClass('click');
    });
});
