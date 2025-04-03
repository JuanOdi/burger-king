export const headerLink = () => {
    $(".header-menu__link").on("click", function (e) {
        var targetId = $(this).attr("href");

        // If "Home" ("/") is clicked, redirect instead of scrolling
        if (targetId === "/" || targetId === `${relativePath}/`) {
            window.location.href = targetId; // Redirect to home
            return; // Stop further execution
        }

        // Prevent default behavior for in-page links
        e.preventDefault();
        var targetElement = $(targetId);

        if (targetElement.length) {
            var headerHeight = $(".header").outerHeight();
            $("html, body").animate(
                { scrollTop: targetElement.offset().top - headerHeight - 20 },
                800
            );
        }
    });
};
