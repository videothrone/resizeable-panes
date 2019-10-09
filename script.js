var containerOffset = $(".container").offset().left;

$(".bar").on("mousedown", function() {
    $(".container").on("mousemove", function(event) {
        $(".bar").css({
            left: event.pageX - 5 - containerOffset + "px"
        });

        $(".top-image").css({
            width: event.pageX - 5 - containerOffset + "px"
        });

        $(document).mouseup(function() {
            $(".container").off("mousemove");
            $(".bar").css({
                left: 395 + "px"
            });

            $(".top-image").css({
                width: 395 + "px"
            });
        });
    });
});
