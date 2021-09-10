var activePlayer, roundScore, dicer, scores ;
init();

//lancer le dé pour determiner le score en cours

$('.btn-roll').on('click', function () {
    
    var N1 =(Math.random()*6)+1
    dicer =Math.trunc(N1)
    document.getElementById('dice1').src = 'dice' + dicer + '.png'
    roundScore = 0
    if(dicer === 1) {   
        nextPlayer()
    } else {
        roundScore += dicer;
        $('#sec'+ activePlayer).text(roundScore)
    }
  
    console.log(activePlayer) 
    console.log(scores)
    console.log(roundScore)
  
})

//ajouter le score en cours au score global 

$('.btn-hold').on('click', function () {
       
    scores[activePlayer]+=roundScore
    $('#score'+ activePlayer ).text(scores[activePlayer])
    if (scores[activePlayer]>=100){
    $('#joueur' + activePlayer).text('Winner!')
   } else{
       nextPlayer()
   }
})

//remise a zero et lancer un nouveau jeu 

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
//initialisation
function init() {

    scores = [0, 0];
    activePlayer = 0 
  
}
// changement de joueur 
function nextPlayer() {
    
  if (activePlayer === 0){
      activePlayer = 1 
  }else {
      activePlayer = 0 
  }
    $( '.J-0').toggleClass( 'active' )
    $( '.J-1').toggleClass( 'active' )
}


