const books = [

    { title: 'book1', genre: 'history', publish: '1999',edition: '2005'},
    { title: 'book2', genre: 'science', publish: '1998',edition: '2006'},
    { title: 'book3', genre: 'history', publish: '2000',edition: '2007'},
    { title: 'book4', genre: 'science', publish: '2007',edition: '2008'},
    { title: 'book5', genre: 'story', publish: '1990',edition: '2009'},
    { title: 'book6', genre: 'biology', publish: '1999',edition: '2010'},
    { title: 'book7', genre: 'naturalScience', publish: '2004',edition: '2011'},
    { title: 'book8', genre: 'geography', publish: '2003',edition: '2012'},
    { title: 'book9', genre: 'coding', publish: '2012',edition: '2013'},
    { title: 'book10', genre: 'java', publish: '1998',edition: '2014'},
    { title: 'book11', genre: 'evs', publish: '2010',edition: '2015'},
    { title: 'book12', genre: 'opps', publish: '2015',edition: '2016'},
    { title: 'book13', genre: 'os', publish: '2022',edition: '2017'},
    { title: 'book14', genre: 'java', publish: '2009',edition: '2018'},
    { title: 'book15', genre: 'history', publish: '1998', edition: '2019' },
    
]

// let userBooks = books.filter((bk) => bk.genre === "history")
userBooks = books.filter((bk) => {
    return bk.publish < 2015 && bk.genre === "java"
})

console.log(userBooks);
