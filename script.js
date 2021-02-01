var activePlayer, roundScore, dicer, scores
init()
$('.btn-roll').on('click', function () {
    if (activePlayer === 0)
    activePlayer=1
    else
    activePlayer=0
    
    var N1 =(Math.random()*6)+1
    dicer =Math.trunc(N1)
    document.getElementById('dice1').src = 'dice' + dicer + '.png'
    roundScore=0
    roundScore += dicer
    $('#sec'+ activePlayer).text(roundScore)
    console.log(roundScore)
    console.log(activePlayer)
   
    $( '.J-0').toggleClass( 'active' );
    $( '.J-1').toggleClass( 'active' );


    
})


$('.btn-hold').on('click', function () {
            

    scores[activePlayer]+=roundScore
    $('#score'+ activePlayer ).text(scores[activePlayer])

    console.log(scores)
    console.log(roundScore)
    if (scores[activePlayer]>=100){
    $('#joueur' + activePlayer).text('Winner!')
   }
})
function init() {

    scores = [0, 0]
  
}

$(".btn-new").on('click', function(){

  init()

  scores = [0, 0]
  roundScore = 0

  
  $('#score0').text('0')
  $('#score1').text('0')
  $('#sec0').text('0')
  $('#sec1').text('0') 
  $('#joueur0').text ('JOUEUR 1')
  $('#joueur1').text('JOUEUR 2')
  

}
)

