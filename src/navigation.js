window.addEventListener('DomContentLoaded', navigator, false)
window.addEventListener('hashchange', navigator, false)

function navigator () {
    console.log({ location })
    
    if(location.hash.startsWith('#trends')){
        trendsPage()
    } else if (location.hash.startsWith('#search=')){
        searchPage()
    }
    else if (location.hash.startsWith('#movie=')){
        movieDetailPage()
    }
    else if (location.hash.startsWith('#category=')){
        categoriesPage()
    } else {
        homePage()    
        getTrendMoviesPreview()
        getCategoriesPreview()
    }

    location.hash
}

function homePage () {
    console.log('Home!')
}

function categoriesPage () {
    console.log('Categories!')
}

function movieDetailPage () {
    console.log('Movie!')
}

function searchPage () {
    console.log('Search!')
}

function trendsPage () {
    console.log('Trends!!')
}