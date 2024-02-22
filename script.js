for (let i = 0; i < 16; i++){
    $('#container').append(`<div id="box${i}" class="box"></div>`)
    $(`#box${i}`).on('click', ()=>{
        $(`#box${i}`).toggleClass('lightBox')
    })
}
