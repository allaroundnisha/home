
const modal = document.querySelector('.main-modal');
const closeButton = document.querySelectorAll('.modal-close');

const modalClose = () => {
    modal.classList.remove('fadeIn');
    modal.classList.add('fadeOut');
    setTimeout(() => {
        modal.style.display = 'none';
    }, 500);
}

const openModal = () => {
    modal.classList.remove('fadeOut');
    modal.classList.add('fadeIn');
    modal.style.display = 'flex';
}

for (let i = 0; i < closeButton.length; i++) {

    const elements = closeButton[i];

    elements.onclick = (e) => modalClose();

    modal.style.display = 'none';

    window.onclick = function (event) {
        if (event.target == modal) modalClose();
    }
}
        // JavaScript code
        function search_items() {
            let input = document.getElementById('searchbar').value
            input=input.toLowerCase();
            let x = document.getElementsByClassName('search-items');
            
            for (i = 0; i < x.length; i++) {
                if (!x[i].innerHTML.toLowerCase().includes(input)) {
                    x[i].style.display="none";
                }
                else {
                    x[i].style.display="list-item";				
                }
            }
        }
        
        function myFunction() {
            /* Get the text field */
            var copyText = document.getElementById("clipboard");
          
            /* Select the text field */
            copyText.select();
            copyText.setSelectionRange(0, 99999); /* For mobile devices */
          
            /* Copy the text inside the text field */
            document.execCommand("copy");
          
            /* Alert the copied text */
            swal("Copied!");
          }