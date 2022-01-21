const body = document.querySelector('body')
  const p = document.createElement('p')
  const h3 = document.createElement('h3')
 



const artist = [
  {artist: 'KISS', genre: 'Rock', hit: 'R&R All Nite', pic: 'https://aquellos80.files.wordpress.com/2007/08/kiss5.jpg?w=584' },
  {artist: 'IRON MAIDEN', genre: 'HEAVY-Rock', hit: 'The Number Of The Beast' , pic: 'https://summainferno.com/wp-content/uploads/2019/10/iron-maiden-band.jpg' },
  {artist: 'LED ZEPPELIN', genre: 'Rock', hit: 'Rock and Roll' , pic: 'http://static.independent.co.uk/s3fs-public/thumbnails/image/2014/03/13/14/led-zeppelin2.jpg' },
  {artist: 'LED ZEPPELIN', genre: 'Rock', hit: 'Rock and Roll' , pic: 'https://e.radio-grpp.io/normal/2018/12/27/291729_732018.jpg' },
  ]


  const createCard = ( { artist , genre , hit , pic } ) => {
    const card = document.createElement('div')
    const listItems = document.createElement('ul')

    listItems.classList.add('card')
    listItems.innerHTML = 
              ` <img class='imgContainer' src='${pic}'/>
                <li><p class="itemTitle" >Artist:  </p> <h3> ${ artist } </h3> </li>
                <li><p class="itemTitle" >Genre:  </p> <p class="itemContent" > ${ genre } </p></li> 
                <li><p class="itemTitle" >Hit:  </p> <p class="itemContent" > ${ hit } </p></li>
              `

  
    card.appendChild(listItems)

    body.appendChild(card)
  }

artist.forEach( artist => {
  createCard( artist )
} )

