function formValidation(){
    var x = document.forms['new_entry']['name'].value

    if (x){
        return false
    }else{
        alert('Name is a required field')
    }
}

$(document).ready(function(){
    $('form').on('submit', function(){
        
        var item = $('form input')

        $.ajax({
            type: 'POST',
            url: '/new_contact',
            data: item,
            success: function(people){
                location.replace('/')
            }
        })
        return false
    })
})