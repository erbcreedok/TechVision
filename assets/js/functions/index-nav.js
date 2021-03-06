$(document).ready(function() {
    if ($('#sitepage').val() !== 'index' ) return;
    var navItems = $('.navbar .main-nav li');

    $('.navbar .main-nav li a').bind('click', function(e) {
        e.preventDefault();
        var id = $(this).attr('href');
        var elementOffset = document.querySelector(id).offsetTop;
        $('html, body').animate({
            scrollTop: elementOffset - 50
        }, '1000');
    });
    var checkWaypoint = function( waypoint ) {
        var hash = '';
        if (!waypoint.element.dataset.waypoint) {
            hash = $(waypoint.element).attr('id');
        } else {
            hash = waypoint.element.dataset.waypoint;
        }
        if (hash === '') return;
        var noOne = true;
        $.each(navItems, function(i) {
            var b = $(this).children('a').attr('href').slice(1) === hash;
            $(this).toggleClass('active', b);
            if (b && i!==0) {
                noOne = false;
            }
        });
        $(navItems[0]).toggleClass('active', noOne);
    };

    var sections = $('section');

    sections.waypoint(function(direction) {
        if (direction === 'up') {
            checkWaypoint(this);
        }
    }, { offset: 45 });

    sections.waypoint(function(direction) {
        if (direction === 'down') {
            checkWaypoint(this);
        }
    }, { offset: 55 });
});