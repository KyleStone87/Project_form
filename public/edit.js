$(document).ready(function(){
    $('form').on('submit', function(){
        var updateEntry = $('form input')

        $.ajax({
            type: 'POST',
            url: '/edit',
            data: updateEntry,
            success: function(doc){
                location.replace('/')
            }
        })
        return false
    })
})