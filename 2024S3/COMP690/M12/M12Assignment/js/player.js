class Jukebox {
    constructor(albums) {
        this.albums = []
    }
    addAlbum = function(album) {
        this.albums.push(album)
    }
    favoriteAlbum = function() {
        let max = -1, fav
        for (let i = 0; i < this.albums.length; i++) {
            if (this.albums[i].played > max) {
                max = this.albums[i].played
                fav = this.albums[i]
            }
        }
        return fav.display()
    }
}

class Album {
    constructor(artist, title) {
        this.artist = artist
        this.title = title
        this.played = 0
    }
    play = function() {
        this.played += 1
    }
    display = function() {
        return `${this.artist} : ${this.title}. The album has been played ${this.played} times.`
    }
}

var jbox = new Jukebox()
const album1 = new Album('Operation Ivy', 'Energy')
const album2 = new Album('Blink 182', 'Dude Ranch')
const album3 = new Album('New Found Glory', 'Sticks and Stones')

jbox.addAlbum(album1)
jbox.addAlbum(album2)
jbox.addAlbum(album3)


//  New code begins here  ------------------------------------------

var albumArray = new Array()
albumArray.push(`${album1.artist}:${album1.title}`)
albumArray.push(`${album2.artist}:${album2.title}`)
albumArray.push(`${album3.artist}:${album3.title}`)

var x = document.getElementById("selectSong");
for (let i =0 ; i < albumArray.length; i++) {
  //  console.log(albumArray[i]);

  var option = document.createElement("option");
  option.text = albumArray[i];
  option.value = albumArray[i];
  x.add(option,null);
}


function playSong() {
  switch(x.selectedIndex){
    case 0:
      album1.play();
      break;
    case 1:
      album2.play();
      break;
    case 2:
      album3.play();
      break;
  }

}

function favAlbum() {
  //  console.log(`Your favorite album is: ${jbox.favoriteAlbum()}`)
  var x = document.getElementById("favoriteAlbum");
  x.innerHTML = `Your favorite album is: ${jbox.favoriteAlbum()}`
}

// End new code  ------------------------------------------

album1.play()
album2.play()
album2.play()
album2.play()
album2.play()
album2.play()
album3.play()

//  console.log(`Your favorite album is: ${jbox.favoriteAlbum()}`)

// vim: ai ts=2 et nu
