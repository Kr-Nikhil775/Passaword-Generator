document.getElementById('generateButton').addEventListener('click', function () {
    const inputPassword = document.getElementById('inputPassword').value;
    const outputPassword = convertToStrongPassword(inputPassword);
    document.getElementById('outputPassword').value = outputPassword;
});

document.getElementById("resetButton").addEventListener("click", function () {
    document.getElementById("inputPassword").value = "";
    document.getElementById("outputPassword").value = "";
});

function convertToStrongPassword(password) {
    const specialCharMap = {
        'a': '@', 'b': '!', 'c': '(', 'd': '$', 'e': '%', 'f': '^',
        'g': '&', 'h': '*', 'i': ')', 'j': '_', 'k': '+', 'l': '=',
        'm': '{', 'n': '[', 'o': '}', 'p': ']', 'q': ':', 'r': ';',
        's': '"', 't': '.', 'u': '>', 'v': '<', 'w': ',', 'x': '?',
        'y': '/', 'z': '|'
    };

    return password.split('').map(char => {
        return specialCharMap[char.toLowerCase()] || char;
    }).join('');
}
