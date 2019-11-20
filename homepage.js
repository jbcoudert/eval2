$(document).ready(function () {
    var mainCard = $(' <div class="row no-gutters container py-4 main">');
    $('main').append(mainCard);
    
    var bandeauPhoto = $('<div class="col-12 bandeau py-4">').html("Photo Contest")
    mainCard.append(bandeauPhoto)

    for (let i = 0; i < pictures.length; i++) {
        var card = $('<div class="col-12 col-md-4 col-lg-3 mainCard">');
        mainCard.append(card);

        var bodyCard = $('<div class="row no-gutters cardVote">');
        card.append(bodyCard);

        var imgCard = $('<div class="col-12">');
        var img = $('<img src="'+pictures[i].url+'" alt="" srcset="">');
        imgCard.append(img)

        var tiitleCard = $('<div class="col-12 pt-4">');
        var title = $('<h5>').html(""+pictures[i].title+"");
        tiitleCard.append(title);

        var textCard = $('<div class="col-12">').html(""+pictures[i].subtile+"");
       
        var votePoop = $('<div class="col-3">');
        var poop = $('<i class="fas fa-poop">');
        votePoop.append(poop);

        var voteText = $('<div class="col-6">');
        var text = $('<p>').html("Votes "+pictures[i].votes+"");
        voteText.append(text);

        var voteHeart = $('<div class="col-3">');
        var heart = $('<i class="fas fa-heart">');
        voteHeart.append(heart);

        bodyCard.append(imgCard, tiitleCard, textCard, votePoop, voteText, voteHeart);
        
    }
})