function signInUser(e) {
  e.preventDefault()

  // retrieving data 
  var bookname = document.getElementById("bookname").value;
  var author = document.getElementById("author").value;
  var description = document.getElementById("description").value;
  var genre = document.getElementById("genre").value;

  // storing the user data in local storage

  var database = []
  database = JSON.parse(localStorage.getItem("db")) || [];
  var user = {bookname, author,description,genre};
  database.push(user)

  // storing data

  localStorage.setItem("db", JSON.stringify(database));
  alert("Sign up successful, pease login");

}

function searchBook() {
  const searchInput = document.getElementById('searchInput');
  const searchQuery = searchInput.value.toLowerCase();
  
  if (searchQuery.trim() === '') {
      alert('Please enter a search query.');
      return;
  }
  
  const names = localStorage.getItem('names') ? JSON.parse(localStorage.getItem('names')) : [];
  const matchingNames = names.filter(name => name.toLowerCase().includes(searchQuery));
  
  displayResults(matchingNames);
}

function displayResults(results) {
  const resultDiv = document.getElementById('result');
  
  if (results.length === 0) {
      resultDiv.innerHTML = 'No matching names found.';
  } else {
      resultDiv.innerHTML = '<h2>Matching Names:</h2>' + results.join('<br>');
  }
}


