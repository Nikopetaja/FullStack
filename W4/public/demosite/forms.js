function fillMsg() {
    var textarea = document.getElementById('textdata');
    textarea.value = "Please fill in the form with proper data."
}

function countChar() {
    var textarea = document.getElementById('textdata');
    var charCount = document.getElementById('charcount');

    var currentCount = parseInt(charCount.textContent) || 0;

    charCount.textContent = currentCount + 1;
}

function validateForm() {
    var textarea = document.getElementById('textdata');

    if (textarea.value.trim() === '') {
        alert("Please fill in the textarea before submitting.");
        return false;
    }

    alert('Form submitted successfully!')
    return true;
}