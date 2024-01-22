// GET ELEMENT FROM THE DOM
const $ = (id) => document.getElementById(id)

// MAIN SLIDESHOW OBJECT
const slideshow = {
    timer: null,
    nodes: {image: null, caption: null},
    img: {cache: [], counter: 0},
    speed: 2000, // Default speed

    // Public method to set the speed
    setSpeed: function (newSpeed) {
        this.speed = newSpeed
        clearInterval(this.timer); // Clear the existing timer
 	// Set a new timer with the updated speed
        this.timer = setInterval(this.displayNextImage.bind(this), this.speed)
    },

    // Public method to get the speed
    getSpeed: function () {
        return this.speed
    },

    loadImages: function (slides) {
        let image
        for (let i = 0; i < slides.length; i++) {
            image = new Image()
            image.src = slides[i].href
            image.title = slides[i].title
            this.img.cache.push(image)
        }
        return this
    },
    startSlideShow: function (image, caption) {
        this.nodes.image = image
        this.nodes.caption = caption
        this.timer = setInterval(this.displayNextImage.bind(this), this.speed)
        return this
    },
    displayNextImage: function () {
        if (this.img.counter === this.img.cache.length) {
            this.img.counter = 0
        } else {
            this.img.counter++
        }
        let image = this.img.cache[this.img.counter]
        this.nodes.image.src = image.src
        this.nodes.caption.innerHTML = image.title
    }
}

// WIRE UP SLIDESHOW ON LOAD
window.addEventListener('load', () => {
    // ARRAY OF SLIDE FOR SLIDESHOW
    const slides = [
        {href: 'images/backpack.jpg', title: 'He likes to backpack in the Sierras.'},
        {href: 'images/boat.jpg', title: 'He loves his wake boat.'},
        {href: 'images/camaro.jpg', title: 'He loves his 67 Camaro.'},
        {href: 'images/punk.jpg', title: 'He used to be in a punk band.'},
        {href: 'images/race.jpg', title: 'He loves to obstacle course race.'},
        {href: 'images/wakeboard.jpg', title: 'He loves to wakeboard.'},
        {href: 'images/wakesurf.jpg', title: 'He also loves to wakesurf.'}
    ]

    // BEGIN THE SLIDE SHOW
    slideshow.loadImages(slides).startSlideShow($('image'), $('caption'))

    // Get the 'Set Speed' button element
    const setSpeedButton = $('setSpeedButton')

    // Add a click event listener to the 'Set Speed' button
    setSpeedButton.addEventListener('click', () => {
        const newSpeed = prompt('Enter the new speed (in milliseconds):')
        if (newSpeed !== null) {
            const parsedSpeed = parseInt(newSpeed, 10)
            if (!isNaN(parsedSpeed) && parsedSpeed > 0) {
                slideshow.setSpeed(parsedSpeed)
            } else {
                alert('Invalid input. Please enter a positive number.')
            }
        }
    })
})
