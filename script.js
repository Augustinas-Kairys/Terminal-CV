var terminal = document.getElementById("terminal");

logo2.addEventListener("click", function() {
    toggleterminal();
});

function toggleterminal() {
    if (terminal.style.display === "none" || terminal.style.display === "") {
        terminal.style.display = "block";
        addText(); // Call addText when the terminal is opened
    } else {
        terminal.style.display = "none";
    }
}


var minimizeIcon = document.querySelector(".minimize");
var maximizeIcon = document.querySelector(".maximize");
var closeIcon = document.querySelector(".close");


document.getElementById('red').addEventListener('click', function() {
    document.getElementById('terminal').style.display = 'none';
});

var commandLineInput = document.getElementById("command-line");

 function addText() {
    const symbols = "!@*!182!@5 41!@$! !@*@$$@&#%+=%?~:@;@*%@";
    const targetText = "Augustinas Kairys Full-Stack Developer";
    let index = 0;
    let textIndex = 0;

    const interval = setInterval(function() {
        if (index >= symbols.length) {
            clearInterval(interval);
            // Display the card after the text has been completely replaced
            const cardDiv = document.querySelector('.card');
            cardDiv.style.display = 'block';
        } else {
            const currentSymbol = symbols[index];
            const newText = targetText.substring(0, textIndex + 1);
            const newTextWithSymbols = newText + symbols.substring(textIndex + 1);
            commandLineInput.value = newTextWithSymbols;
            textIndex++;
            index++;
        }
    }, 100);
} 

function updateTime() {
    const now = new Date();
    const options = { month: 'long', day: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true };
    const formattedDate = now.toLocaleString('en-US', options);
    document.getElementById('date-time').textContent = formattedDate;
}

updateTime();

setInterval(updateTime, 1000);