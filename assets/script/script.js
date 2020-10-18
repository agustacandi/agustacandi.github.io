$(window).on('load', () => {
    // profile
    $('.top div').css({
        'opacity': '1',
        'transform': 'translate(0,0)'
    })
    // about
    $('#about h2').css({
        'opacity': '1',
        'transform': 'translate(0,0)'
    })
    $('#about p').css({
        'opacity': '1',
        'transform': 'translate(0,0)'
    })
})

$(window).scroll(function() {
    const wScroll = $(this).scrollTop();
    // Certificate
    if (wScroll > $('#certificate').offset().top - 250) {
        $('#certificate h2').css({
            'opacity': '1',
            'transform': 'translate(0,0)'
        })
        $('.cert').each(function(i) {
            setTimeout(function() {
                $('.cert').eq(i).addClass('show');
            }, 300 * (i + 1));
        });
        setTimeout(() => {
            $('.more-btn').css({
                'opacity': '1',
                'transform': 'translate(0,0)'
            })
        }, 1000)
    };

    // Skills
    if (wScroll > $('#skills').offset().top - 250) {
        $('.bar').css({
            'width': '100%',
            'opacity': '1'
        })
        $('#skills h2').css({
            'opacity': '1',
            'transform': 'translate(0,0)'
        })
        setTimeout(() => {
            $('.javascript').css({
                'width': '40%'
            });
            $('.python').css({
                'width': '35%'
            });
            $('.php').css({
                'width': '30%'
            });
            $('.react').css({
                'width': '10%'
            });
            $('.cpp').css({
                'width': '10%'
            });
            $('.node').css({
                'width': '5%'
            });
            $('.skill-title').css({
                'opacity': '1'
            })
            setTimeout(() => {
                $('.skill-value').css({
                    'opacity': '1'
                })
            }, 500)
        }, 500)
    };

    // Experiences
    if (wScroll > $('#experiences').offset().top - 250) {
        $('#experiences h2').css({
            'opacity': '1',
            'transform': 'translate(0,0)'
        })
        $('#experiences .exp').css({
            'opacity': '1',
            'transform': 'translate(0,0)'
        })
    };

    // Project
    if (wScroll > $('#project').offset().top - 250) {
        $('#project-title').css({
            'opacity': '1',
            'transform': 'translate(0,0)'
        })
        $('.projects').each(function(i) {
            setTimeout(function() {
                $('.projects').eq(i).addClass('show');
            }, 300 * (i + 1));
        });
    };

    // Contact
    if (wScroll > $('#contact').offset().top - 250) {
        $('#contact h2').css({
            'opacity': '1',
            'transform': 'translate(0,0)'
        })
        $('.contact-item').css({
            'opacity': '1',
            'transform': 'translate(0,0)'
        })
        $('footer p').css({
            'opacity': '1',
            'transform': 'translate(0,0)'
        })
        $('.projects').each(function(i) {
            setTimeout(function() {
                $('.projects').eq(i).addClass('show');
            }, 300 * (i + 1));
        });
    };
});

