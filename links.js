// lets
    let body = document.getElementById('body')
    let mode_btn = document.getElementById('mode')
    let mode = 'light'

// mode
    function set_mode(){
        if(mode == 'light'){
            body.style.background = 'grey'
            body.style.color = 'lightyellow'
            mode = 'dark'
            console.log(`set mode to ${mode}`)
        }
        else if(mode == 'dark'){
            body.style.background = 'white'
            body.style.color = 'black'
            mode = 'light'
            console.log(`set mode to ${mode}`)
        }
    }
    