
const link = document.getElementById('myLink');  


link.addEventListener('click', function() {  
    gtag('event', 'click', {  
        'event_category': 'Link',  
        'event_label': 'Page Link'  
    });  
});