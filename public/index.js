// Get the modal
var modal = document.getElementById('myModal')
// Get the button that opens the modal
var modalBtn = document.getElementById('modalBtn');
// Get the <span> element that closes the modal
var closeBtn = document.getElementsByClassName('modal-close')[0];
// Listen for open click
modalBtn.addEventListener('click', openModal)
// Listen for close click
closeBtn.addEventListener('click', closeModal)
// Listen for outside click
window.addEventListener('click', outsideClick)
//function to open modal
function openModal(){
    modal.style.display = 'block'
    document.getElementById('index').style.filter = "blur(5px)"
}
// function to close modal
function closeModal(){
    modal.style.display = 'none'
    document.getElementById('index').style.filter = "blur(0px)"
}
//function to close modal if outside click
function outsideClick(e){
    if(e.target == modal){
        modal.style.display = 'none'
        document.getElementById('index').style.filter = "blur(0px)"
    }
}
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