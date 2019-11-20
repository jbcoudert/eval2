var GET_PARAM = function (id) {
    return decodeURIComponent((new RegExp('[?|&]' + id + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [null, ''])[1].replace(/\+/g, '%20')) || null;
};


$(document).ready(function () {

    cptVote = 0;
    click1 = null;
    click2 = null;

    var mainCard = $(' <div class="row no-gutters container py-4 main">');
    $('main').append(mainCard);

    var bandeauPhoto = $('<div class="col-12 bandeau py-4">').html("Photo Contest");
    mainCard.append(bandeauPhoto);


    for (let i = 0; i < pictures.length; i++) {



        var card = $('<div class="col-12 col-md-4 col-lg-3 mainCard">');
        mainCard.append(card);

        var bodyCard = $('<div class="row no-gutters cardVote">');
        card.append(bodyCard);

        var imgCard = $('<div class="col-12 img" style="background-image:url(' + pictures[i].url + ');">');
        var img = $('<img src="' + pictures[i].url + '" alt="" srcset="">');
        imgCard.append(img)

        var tiitleCard = $('<div class="col-12 pt-4">');
        var title = $('<h5>').html("" + pictures[i].title + "");
        tiitleCard.append(title);

        var textCard = $('<div class="col-12">').html("" + pictures[i].subtile + "");

        var votePoop = $('<div class="col-3">');
        var poop = $('<i class="fas fa-poop" id="btnPoop' + [i] + '">');
        votePoop.append(poop);

        var voteHeart = $('<div class="col-3">');
        var heart = $('<i class="fas fa-heart" id="btnheart' + [i] + '">');
        voteHeart.append(heart);

        var voteText = $('<div class="col-6">');
        var text = $('<p id="vote' + [i] + '">').html("Votes " + pictures[i].votes + "");
        voteText.append(text);


        bodyCard.append(imgCard, tiitleCard, textCard, votePoop, voteText, voteHeart);

        poop.click(function () {
            var poopId = $(this).attr("id")
            var voteId = poopId.replace("btnPoop", "vote")
            var nbVote = pictures[i].votes -= 1;
            var newText = nbVote
            $('#' + voteId).html("Votes " + newText)

        })

        heart.click(function () {
            var heartId = $(this).attr("id")
            var voteId = heartId.replace("btnheart", "vote")
            var nbVote = pictures[i].votes += 1;
            var newText = nbVote
            $('#' + voteId).html("Votes " + newText)
        })


    }


    // $('i[id*="btnPoop"]').click(function () {
    //     text + $(this).attr("id").replace("btnPoop", "")
    //     var itemIndex = pictures.findIndex(x => x.id == parseInt($(this).attr("id").replace("btnPoop", "")))
    //     pictures.splice(itemIndex, 1)
    //     console.log(pictures);
    // })
})