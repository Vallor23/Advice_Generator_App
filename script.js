//Get reference to DOM elements
const iconDice = document.getElementById("icon-dice");

//Function to fetch random advice from the server
async function getAdvice(){
    const url = "	https://api.adviceslip.com/advice";
    
    
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Respose status: ${response.status}`)
        }

        
        const data = await response.json();
        console.log(data.slip.advice);

        const adviceContent = document.querySelector('.advice-content');
        adviceContent.textContent = `"${data.slip.advice}"`;

        const heading = document.querySelector('h1');
        heading.textContent = `Advice #${data.slip.id}`
    } catch (error) {
        console.error(error.message);
    }

   

}
iconDice.addEventListener('click', getAdvice)