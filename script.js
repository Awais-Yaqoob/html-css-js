function Searching(){
    const title = document.getElementById("searchbytitle").value
fetch(`https://www.omdbapi.com/?apikey=1560097f&s=${title}`)
.then(res => res.json())
.then(data => {
    localStorage.setItem('Movies', JSON.stringify(data.Search))

    const ulTag = document.getElementById("movies");
    while (ulTag.firstChild) {
        ulTag.removeChild(ulTag.firstChild);
    }
    data.Search.map(movieItems);
    function movieItems(movie){
        const liTag = `
        <li>
        <div>
        <p>Title: ${movie.Title}</p>
        <p>Year: ${movie.Year}</p>
        </div>
        </li>
        `
        ulTag.innerHTML = ulTag.innerHTML + liTag
    }
})
}

