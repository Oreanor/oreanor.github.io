/**
 * Created with IntelliJ IDEA.
 * User: nikonets
 * Date: 16.01.14
 * Time: 17:06
 * To change this template use File | Settings | File Templates.
 */

var carts = [];

$(document).ready(function () {

    $.ajax({
        type: "GET", url: "data.xml", dataType: "xml", success: function(xml) {
            var cnt = 0;
            jQuery(xml).find('cart').each(
                function(){

                    var name = $(this).attr('name'),
                        file = $(this).attr('filename');
                    carts[cnt] = [];
                    carts[cnt][0] = name;
                    carts[cnt][1] = file;


                    $('.main').append('<div class="listitem" filename="'+file+'">'+name+'</div>');
                    cnt++;
                }
            );
            $(".shown").html("Показано: <b>"+cnt+"</b>");
            initCarts();
        }
    });


    $("#searchform").submit(function(){
        var cnt = 0;
        var str = $("#srch").val();
        console.log(str);
        if(str!=""){
            $(".listitem").each(function(){
                $(this).removeClass("hide");
                $(this).addClass("show");
                //console.log($(this).text().toLowerCase().indexOf(str));
                if ($(this).text().toLowerCase().indexOf(str) < 0){
                    $(this).addClass("hide");

                } else {
                    cnt++;
                }

                // console.log($(this).text());

            })
        } else {
            $(".listitem").each(function(){
                $(this).removeClass("hide");
                $(this).addClass("show");
                cnt++;
            });
        }

        $(".shown").html("Показано: <b>"+cnt+"</b>");

        event.preventDefault();
    });


});

function initCarts(){
    $(".listitem").hover(overListItem,overListItem);
    $(".listitem").click(loadImg);

}

function overListItem(){
    $(this).toggleClass("hoverListItem")

}

function loadImg(){
    //console.log($(this).attr("filename"));
    $(".listitem").removeClass("activeListItem");
    $(this).addClass("activeListItem");
    var pathfront = "img/"+$(this).attr("filename")+".jpg";
    var pathback = "img/"+$(this).attr("filename")+"_back.jpg";
    console.log($("#i1"));

    $('.preview').html('');

    $('.preview').append('<img class="imgpr" src="'+pathfront+'"/><img class="imgpr" src="'+pathback+'"/>');
    // $('.preview').append('');


}