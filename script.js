

    const API_KEY = 'AIzaSyA1QpY_6WGbcVPGK0pAG6LP_8oYCfSmSgc'; // Replace with your API key
    const SHEET_ID = '1K97tNikyHscPFjSAxTrWWTjSFg6VO_c4-F3ItyPrRRw'; // Replace with your Google Sheet ID
    const RANGE = 'Sheet1'; // Replace with the range in your sheet

    // Function to fetch and display data
    function fetchData() {
    fetch(`https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${RANGE}?key=${API_KEY}`)
        .then(response => response.json())
        .then(data => {
            const rows = data.values;
            const tableBody = document.querySelector('#sheetData tbody');
            tableBody.innerHTML = '';
            const startBal=rows[1][5]
            const pl=rows[1][6]
            const totBonus=rows[1][7]
            const bonusDone=rows[1][9]
            console.log(bonusDone)
            const bex=rows[4][5]
            const avgx=rows[4][6]  
            const highestX=rows[7][5]
            const highestPay=rows[7][6]
            console.log(highestPay)
            const totleft=startBal+'/'+pl;
            const highestSlotpay=rows[6][8]
            const highestSlotx=rows[6][9]
            console.log(totleft)
            

// Initialize row counter for numbering
let rowNumber = 1;

// Skip the first row (header) and iterate over the remaining rows
rows.slice(1).forEach(row => {
    let tr = document.createElement('tr');
    

    // Limit to the first 3 columns
    row.slice(0, 3).forEach((cell, index) => {
    
        let td = document.createElement('td');
        // Limit cell text to 30 characters
        td.textContent = cell.length > 30 ? cell.slice(0, 27) + '...' : cell;

        // Add numbering to the first column (index 0)
        if (index === 0) { 
            td.textContent = rowNumber + '.' + td.textContent;  // Append row number
        }

        // Align text in the third column (index 2) to the right
        if (index === 2) {
            td.style.textAlign = 'right';
        }
     
        tr.appendChild(td);
    });

    tableBody.appendChild(tr);
    rowNumber++;  // Increment the row number for the next entry
});

            document.getElementById("startBal").innerText=startBal
            document.getElementById("pl").innerText=pl
            
            if(bex==='#DIV/0!'){
                document.getElementById("bex").innerText="--"
            }else{
                   document.getElementById("bex").innerText=bex

            }
            document.getElementById("totleft").innerText=bonusDone+'/'+totBonus
            if(avgx==='#DIV/0!'){
                document.getElementById("avgx").innerText="0"
            }else{
                   document.getElementById("avgx").innerText=avgx

            }
            document.getElementById("highestX").innerText=highestX+'x'
            if(highestSlotpay=='#N/A'){
                document.getElementById("slotpay").innerText='NIL'

            }else{
                document.getElementById("slotpay").innerText=highestSlotpay

            }
            document.getElementById('highestPay').innerText='$'+highestPay
             
       

            document.getElementById("slotx").innerText=highestSlotx
        })
        .catch(error => console.error('Error fetching data:', error));
}


    // Fetch data every 10 seconds (10,000 milliseconds)
    setInterval(fetchData, 10000);

    // Initial fetch
    fetchData();

    
let scrollableDiv = document.getElementById('scrollableDiv');
let scrollSpeed = 2; // Speed of scrolling
let scrollingDown = true; // Direction of scrolling
let pauseDuration = 2000; // Pause duration at the top and bottom in milliseconds
let paused = false; // To track if the scrolling is paused

function autoScroll() {
    if (!paused) {
        if (scrollingDown) {
            scrollableDiv.scrollTop += scrollSpeed; // Scroll down
            // Check if reached the bottom
            if (scrollableDiv.scrollTop >= scrollableDiv.scrollHeight - scrollableDiv.clientHeight - 2) {
                paused = true; // Pause scrolling
                setTimeout(() => {
                    scrollingDown = false; // Change direction to up
                    scrollableDiv.scrollTop = 0; // Reset to the top immediately
                    paused = false; // Resume scrolling
                }, pauseDuration);
            }
        } else {
            scrollableDiv.scrollTop -= scrollSpeed; // Scroll up
            // Check if reached the top
            if (scrollableDiv.scrollTop <= 0) {
                paused = true; // Pause scrolling
                setTimeout(() => {
                    scrollingDown = true; // Change direction to down
                    paused = false; // Resume scrolling
                }, pauseDuration);
            }
        }
    }
}

// Scroll every 20 milliseconds for a smooth effect
setInterval(autoScroll, 125);


    
