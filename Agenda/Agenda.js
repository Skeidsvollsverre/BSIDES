document.addEventListener('DOMContentLoaded', function() {
    const agendaItems = document.querySelectorAll('.agenda-item');
    
    agendaItems.forEach(item => {
        const header = item.querySelector('.agenda-header');
        
        header.addEventListener('click', () => {
            // Close all other items
            agendaItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle current item
            item.classList.toggle('active');
        });
    });
}); 