$(function() {
    $('.btn').click(
        function() {
            $('.modal-wrapper').fadeIn(300)
        },
    );

    $(document).click(function(e) {
        if ($(e.target).closest('.modal-close').length || !$(e.target).is('.btn')) {
            // ターゲット要素の外側をクリックした時の操作
            $('.modal-wrapper').fadeOut(300)
        }
    })

})