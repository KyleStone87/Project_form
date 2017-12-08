$(document).ready(function(){
    $('.delete').on('click', function(){
        var id = $(this).closest('tr').attr('id')
        var phone = $(this).find('.phone').text()
        //var item = ''
        $.ajax({
            type: 'DELETE',
            url: '/'+id,
            //data:phone,
            success: function(data){
                location.reload()
            }
        })
    })

    $('.edit').on('click', function(){
        var entry ={
            name: $(this).closest('tr').find('.name').text(),
            email: $(this).closest('tr').find('.email').text(),
            phone: $(this).closest('tr').find('.phone').text()
        }
        
        $.ajax({
            type: 'POST',
            url: '/',
            data: entry,
            success: function(data){
                location.replace('/edit')
            }
        })
    })
})