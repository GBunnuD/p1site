$(document).ready(function(){
     $('#num1').val(localStorage.getItem('num1'));
     $('#num2').val(localStorage.getItem('num2'));
     $('#num3').val(localStorage.getItem('num3'));
     
 })





function practice_app()
{
     const numb1=parseFloat(document.querySelector('#num1').value)
     const numb2=parseFloat(document.querySelector('#num2').value)
     const numb3=parseFloat(document.querySelector('#num3').value)
     localStorage.setItem('num1',numb1);
     localStorage.setItem('num2',numb2);
     localStorage.setItem('num3',numb3);
    
     
     const grandtotal=numb1*numb2*numb3;
     

     
     document.querySelector('#grandtotal').innerHTML=`${grandtotal}`
}
     document.querySelector('#calculation').addEventListener('click',practice_app)

     const jokeURI = 'https://stats.nba.com/stats/commonallplayers'

// fetch information
const getJoke = async () => {
    try {
        const response = await fetch(jokeURI)
        const obj = await response.json()
        console.log(`FETCHED. Response JSON ${obj}`)
        const joke = obj.message || 'No joke for you.'
        return joke
    } catch (error) { console.error(error) }
}
const updateWithJoke = async (event) => {
    try {
        document.querySelector('#dogarea').src = ''
        const answer = await getJoke()
        document.querySelector('#dogarea').src = answer
    } catch (error) { console.error(error) }
}
// document.getElementById('getscore').onclick(getJoke);
document.addEventListener('click', event => {
    if (event.target && event.target.id === 'getscore') { updateWithJoke(event) }
})