/*
Creare uno slider di immagini
Potete usare le immagini che desiderate.
Per facilitarvi la vita usate immagini delle stesse dimensioni :)
Lo slider prevederà due frecce (icone) che permettono di scorrere tra le immagini dello slider
Per scorrere le immagini permettere anche l'uso delle frecce sinistra e destra della tastiera ( e' un evento diverso dal click, quale? )
Utiliziamo una classe first e last  per capire quali sono la prima e ultima immagine dello slider
Utilizziamo una classe active per aiutarci a capire quale è l'immagine attuale da visualizzare nello slider
*/

//al click della freccia 'prev'
$('.prev').click(function(){
  //creo delle variabili con l'immagine e il pallino attivi
  var activeImg = $('img.active');
  var activeDot = $('.nav > i.active');

  //se il pallino attivo è il primo do istruzioni per passare all'ultimo
  if(activeImg.hasClass('first')){
    $('img.last').addClass('active');
    $('.nav > i.last').addClass('active');
  }

  //do istruzioni per spostare la classe active agli elementi precedenti
  activeImg.removeClass('active');
  activeImg.prev().addClass('active');
  activeDot.removeClass('active');
  activeDot.prev().addClass('active');
})

//al click della freccia 'next'
$('.next').click(function(){
  //creo delle variabili con l'immagine e il pallino attivi
  var activeImg = $('img.active');
  var activeDot = $('.nav > i.active');

  //se il pallino attivo è l'ultimo do istruzioni per passare al primo
  if(activeImg.hasClass('last')){
    $('img.first').addClass('active');
    $('.nav > i.first').addClass('active');
  }

  //do istruzioni per spostare la classe active agli elementi successivi
  activeImg.removeClass('active');
  activeImg.next().addClass('active');
  activeDot.removeClass('active');
  activeDot.next().addClass('active');
})


/*
Bonus:
Clicchiamo sui pallini e mostriamo l'immagine corrispondente
Generiamo i pallini con JS
*/
