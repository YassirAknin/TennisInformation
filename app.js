

const apiKey = "42250ec111ca104377269af545fbff1103e22a5badd6ff566f29aca6e66f5db4"


function searchPlayer(player_key){

    const url=`https://api.api-tennis.com/tennis/?method=get_players&player_key=${player_key}&APIkey=${apiKey}`

    $.ajax(url)
    .then((data)=>{
        console.log(data)
        const $main = $("main")
        $main.empty()

        $main.html(`
        
        <img alt="${data.result[0].player_name}" src="${data.result[0].player_logo}">
        <h1>Name:   ${data.result[0].player_name}</h1>
        <h1>Country:   ${data.result[0].player_country}</h1>
        <h2>Birthday:   ${data.result[0].player_bday}</h2>
        <h2>Country:   ${data.result[0].player_country}</h2>
        

        `)
    })


}

$("button[type=submit]").on("click", (event) => {

    // prevent the refresh
    event.preventDefault()

    // grab text from input box
    const inputText = $("input[type=text]").val()
    console.log(inputText)
    
    // update the screen
    searchPlayer(inputText)
})





// const apiKey = "42250ec111ca104377269af545fbff1103e22a5badd6ff566f29aca6e66f5db4"


// function searchPlayer(player_name){

//     const url=`https://api.api-tennis.com/tennis/?method=get_players&player_name=${player_name}&APIkey=${apiKey}`

//     $.ajax(url)
//     .then((data)=>{
//         console.log(data)
//         const $main = $("main")
//         $main.empty()

//         $main.html(`
        
//         <img alt="${data.result[0].player_name}" src="${data.result[0].player_logo}">
//         <h1>Name:   ${data.result[0].player_name}</h1>
//         <h1>Country:   ${data.result[0].player_country}</h1>
//         <h2>Birthday:   ${data.result[0].player_bday}</h2>
//         <h2>Country:   ${data.result[0].player_country}</h2>
        

//         `)
//     })


// }

// $("button[type=submit]").on("click", (event) => {

//     // prevent the refresh
//     event.preventDefault()

//     // grab text from input box
//     const inputText = $("input[type=text]").val()
//     console.log(inputText)
    
//     // update the screen
//     searchPlayer(inputText)
// })
