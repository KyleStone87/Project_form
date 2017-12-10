$(document).ready(function(){
    
    /*$(function(){
        $('form[name="new-entry"]').validate({
            rules: {
                name:'required',
                email:{
                    required: true,
                    email: true
                }
                },
                phone:{
                    required: true,
                    minlength: 10
                }
            }
            messages: {
                name: 'Please enter a name.',
                email: 'Please enter an name.',
                phone: {
                    required: 'Please enter a phone number',
                    minlength: 'Please enter a 10 digit phone number.'
            }
            submitHandler: function(form){
                var item = $('form input')
                
                $.ajax({
                    type: 'POST',
                    url: '/new_contact',
                    data: item,
                    success: function(people){
                        location.replace('/')
                    }
                })
            }
        })
    })*/
    var item = $('form input')
    $('form').on('submit', function(){
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