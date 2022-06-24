import $ from 'jquery';

$(function() {
    // Responsive Scroll
    $('.table-responsive').each((index, element) => new SimpleBar(element));
});