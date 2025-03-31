export const marquee = () => {
    jQuery('.marquee').removeAttr('style');
    var txtWidth = jQuery('.marquee').width();
    jQuery('.marquee').css({
        '--tw': txtWidth + 'px',
    });
}