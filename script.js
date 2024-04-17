var terminal = document.getElementById("terminal");
var apps = document.getElementById("apps");

logo2.addEventListener("click", function() {
    toggleterminal();
});

logo4.addEventListener("click", function() {
    toggleapps();
});

function toggleterminal() {
    if (terminal.style.display === "none" || terminal.style.display === "") {
        terminal.style.display = "block";
        addText(); 
    } else {
        terminal.style.display = "none";
    }
}

function toggleapps() {
    if (apps.style.display === "none" || apps.style.display === "") {
        apps.style.display = "block";
    } else {
        apps.style.display = "none";
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



// apps 
var explore2 = document.getElementById("explore2");
var installed2 = document.getElementById("installed2");
var updates2 = document.getElementById("updates2");

var tabs = {
  explore: explore2,
  installed: installed2,
  updates: updates2
};

var activeTab = null;

function toggleTab(tabName) {
  if (activeTab === tabName) {
    return; 
  }
  
  for (var tab in tabs) {
    if (tabs.hasOwnProperty(tab)) {
      if (tab === tabName) {
        tabs[tab].style.display = "block";
      } else {
        tabs[tab].style.display = "none";
      }
    }
  }
  
  activeTab = tabName;
}

document.getElementById("explore").addEventListener("click", function() {
  toggleTab("explore");
});

document.getElementById("installed").addEventListener("click", function() {
  toggleTab("installed");
});

document.getElementById("updates").addEventListener("click", function() {
  toggleTab("updates");
});

document.getElementById("close").addEventListener("click", function() {
  for (var tab in tabs) {
    if (tabs.hasOwnProperty(tab)) {
      tabs[tab].style.display = "none";
    }
  }
  
  activeTab = null;
});


