const inputText = document.getElementById('search-query');

const searchGoogle = () => {
    const searchTerm = inputText.value;
    if(searchTerm.trim() == ''){
       console.log('there is no search term');        
       return alert('please enter a search term');
    }
    console.log('input text', inputText.value);
    return alert('Your search term is: ' + inputText.value);
    
};