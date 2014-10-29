
#Fancy Modal Ideas
This is how I'd do it with JQuery. Maybe for V1 the background just covers everything with exception to the actual modal, or, maybe you are able to specify only a specific area for it to cover - might be something you decide.

##Fancy Modal Options

$('#Div').fancyBG({
    
    bgEffect: 'gradient, squares, poly, random' // Then based on this configure

    bgSpeed: 0 // Speed the animation takes to complete (any valid FX speed value)

    bgColors: '#FFFFFF, #000000, #FFF434' // Hex or RGB values - the number of colors that are needed for the animation (max = 7, or whatever)

    modAnim: 'fade, flip, slideUp, slideDown, scale, etc' // Anim modal makes without specifying in or out

    modAnimIn: 'fade, flip, slideUp, slideDown, scale, etc' // Anim the modal makes on way in

    modAnimOut: 'fade, flip, slideUp, slidDown, scale, etc' // Anim the modal makes on the way out

    modSpeedIn: 0 // Speed the modal animation takes to complete on the way in

    modSpeedOut: 0 // Speed the modal animation takes to complete on the way out

    modSpeedStart: 0 // Anim delay in case it's not supposed to start with the 
    BG anim

    easeIn: null // Easing for In transition of modal

    easeOut: null // Easing for Out transition of modal

})

