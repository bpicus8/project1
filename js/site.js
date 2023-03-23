jQuery(function($) {
	$('html').removeClass('nojs');
	$('html').addClass('hasjs');
});

 
$('form').submit(function() {
 if ($('#my-input').val() === '') {
 alert('Please fill in the required field!'); 
 return false; // Prevent form submission 
} 
}); 
