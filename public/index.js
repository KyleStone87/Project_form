// Get the modal
var modal = document.getElementById('myModal')
var newContact = document.getElementById('new-contact-form')
var details = document.getElementById('details-modal')
// Get the button that opens the modal
var modalNew = document.getElementById('modalNew');
// Get the <span> element that closes the modal
var closeBtn = document.getElementsByClassName('modal-close')[0];
// Listen for open click
modalNew.addEventListener('click', openNewContact)
// Listen for close click
closeBtn.addEventListener('click', closeModal)
// Listen for outside click
window.addEventListener('click', outsideClick)

//function to open modal
//open new contact open
function openNewContact(){
    modal.style.display = 'block'
    newContact.style.display ='block'
    document.getElementById('index').style.filter = "blur(5px)"
}
//open details modal
function openDetails(){
    var detailName = event.target.closest('tr').getElementsByClassName('name')[0].innerHTML
    var detailEmail = event.target.closest('tr').getElementsByClassName('email')[0].innerHTML
    var detailPhone = event.target.closest('tr').getElementsByClassName('phone')[0].innerHTML
    document.getElementById('detailName').innerHTML = detailName
    document.getElementById('detailEmail').innerHTML = detailEmail
    document.getElementById('detailPhone').innerHTML = detailPhone
    modal.style.display = 'block'
    details.style.display ='block'
    document.getElementById('index').style.filter = "blur(5px)"
}
// function to close modal
function closeModal(){
    modal.style.display = 'none'
    newContact.style.display = 'none'
    details.style.display = 'none'
    document.getElementById('index').style.filter = "blur(0px)"
}
//function to close modal if outside click
function outsideClick(e){
    if(e.target == modal){
        modal.style.display = 'none'
        newContact.style.display = 'none'
        details.style.display = 'none'
        document.getElementById('index').style.filter = "blur(0px)"
    }
}
$(document).ready(function(){
    
        $('.delete').on('click', function(){
            var r = confirm('Are you sure you want to delete?')
            if (r==true){
                var id = $(this).closest('tr').attr('id')
                var phone = $(this).find('.phone').text()
                $.ajax({
                    type: 'DELETE',
                    url: '/'+id,
                    success: function(data){
                        location.reload()
                    }
                })
            }
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