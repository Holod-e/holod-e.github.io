var shuffle = function(a) {
  for (var i = a.length; --i > 0;) {
    // Получение случайного числа между первым и текущим индексом.
    var r = Math.floor(Math.random() * (i + 1));
    // Перестановка случайно выбранного элемента с текущим.
    var d = a[r];
    a[r] = a[i];
    a[i] = d;
  }
  return a;
}
var shuffle2 = function(a) {
  for (var i = a.length; --i > 0;) {
    // Получение случайного числа между первым и текущим индексом.
    var r = Math.floor(Math.random() * (i + 1));
    // Перестановка случайно выбранного элемента с текущим.
    var d = a[r];
    a[r] = a[i];
    a[i] = d;
  }
  return a;
}
var p1 = {
    name: "Ermac",
    img: 'img/ermac.png'
    },
    p2 = {
    name: "Jax",
    img: 'img/jax.png'
    },
    p3 = {
    name: "Johnny Cage",
    img: 'img/Johnny-Cage.png'
    },
    p4 = {
    name: "Kano",
    img: 'img/Kano.png'
    },
    p5 = {
    name: "Kenshi",
    img: 'img/Kenshi.png'
    },
    p6 = {
    name: "Kitana",
    img: 'img/Kitana.png'
    },
    p7 = {
    name: "Kung Lao",
    img: 'img/Kung-Lao.png'
    },
    p8 = {
    name: "Liu Kang",
    img: 'img/Liu-Kang.png'
    },
    p9 = {
    name: "Mileena",
    img: 'img/Mileena.png'
    },
    p10 = {
    name: "Quan Chi",
    img: 'img/Quan-Chi.png'
    },
    p11 = {
    name: "Raiden",
    img: 'img/Raiden.png'
    },
    p12 = {
    name: "Reptile",
    img: 'img/Reptile.png'
    },
    p13 = {
    name: "Scorpion",
    img: 'img/Scorpion.png'
    },
    p14 = {
    name: "Shinnok",
    img: 'img/Shinnok.png'
    },
    p15 = {
    name: "Sub-Zero",
    img: 'img/Sub-Zero.png'
    },
    p16 = {
    name: "Cassie Cage",
    img: 'img/Cassie-Cage.png'
    },
    p17 = {
    name: "DiVorah",
    img: 'img/DiVorah.png'
    },
    p18 = {
    name: "Erron Black",
    img: 'img/Erron-Black.png'
    },
    p19 = {
    name: "Ferra & Torr",
    img: 'img/Ferrator.png'
    },
    p20 = {
    name: "Jacqui Briggs",
    img: 'img/Jacqui-Briggs.png'
    },
    p21 = {
    name: "Kotal Kahn",
    img: 'img/Kotal-Kahn.png'
    },
    p22 = {
    name: "Kung Jin",
    img: 'img/Kung-Jin.png'
    },
    p23 = {
    name: "Takeda Takahashi",
    img: 'img/Takeda-Takahashi.png'
    },
    p24 = {
    name: "Sonya Blade",
    img: 'img/Sonya-Blade.png'
    },
    p25 = {
    name: "Tanya",
    img: 'img/Tanya.png'
    },
    p26 = {
    name: "Tremor",
    img: 'img/Tremor.png'
    },
    p27 = {
    name: "Goro",
    img: 'img/Goro.png'
    },
    p28 = {
    name: "Predator",
    img: 'img/Predator.png'
    },
    p29 = {
    name: "Jason",
    img: 'img/maska.png'
    },
     p30 = {
    name: "Triborg",
    img: 'img/Triborg.png'
    },
     p31 = {
    name: "Alien",
    img: 'img/alien.png'
    },
     p32 = {
    name: "Bo'Rai Cho",
    img: 'img/Boracho.png'
    },
     p33 = {
    name: "Leatherface",
    img: 'img/Leatherface.png'
    };
// Использование
var fighters = [p1, p2, p3, p4, p5, p6, p7 ,p8, p9, p10, p11, p12 ,p13 ,p14, p15, p16, p17, p18, p19,p20 ,p21 ,p22 ,p23 , p24, p25, p26, p27, p28, p29, p30, p31, p32, p33];
var count1 = 0;
var count2 = 0;

var generate1 = function(){
    $('#fighters1').children().remove();
    var player1 = shuffle(fighters);
    for(var j = player1.length; --j > -1;){
        var randomNumber = Math.random();
        var styleNumber;
        if (randomNumber <= 0.3333) {
            styleNumber = 1;
        }
        if (randomNumber > 0.333 && randomNumber <= 0.6666) {
            styleNumber = 2;
        }
        if (randomNumber > 0.6666) {
            styleNumber = 3;
        }
        var el = "<li>" + player1[j].name + "<img src='" + player1[j].img + "'><span class='styleNumber'>" + styleNumber +"</span><button>win</button> </li>";
        $('#fighters1').append(el);
    };
};

var generate2 = function(){
    $('#fighters2').children().remove();
    var player2 = shuffle(fighters);
    for(var j = player2.length; --j > -1;){
        var randomNumber = Math.random();
        var styleNumber;
        if (randomNumber <= 0.3333) {
            styleNumber = 1;
        }
        if (randomNumber > 0.333 && randomNumber <= 0.6666) {
            styleNumber = 2;
        }
        if (randomNumber > 0.6666) {
            styleNumber = 3;
        }
        var el = "<li><button>win</button><span class='styleNumber'>" + styleNumber +"</span><img src='" + player2[j].img + "'>" + player2[j].name + "</li>";
        $('#fighters2').append(el);
    };
};

$('#gen').on('click', function(){
    generate1();
    generate2();
    count1 = 0;
    count2 = 0;
    $('#score1').html(count1);
    $('#score2').html(count2);
    return count1, count2;
})


$('#fighters1').on('click', 'button', function(){
      var nb = $(this).closest('li').index('li');
      var nb2 = nb + 2;
      var loser = nb +1;
      var nb3 =  "li:nth-child(" + nb2 + ")";
  if ($(this).hasClass('winner')) {
    count1 = count1 - 1;
    $(this).removeClass('winner');
    $('#fighters2').find("li:nth-child(" + loser + ")").removeClass('loose');
  }
  else {
      count1 = count1 +1;
      $(this).addClass('winner');
      $('#fighters2').find("li:nth-child(" + loser + ")").addClass('loose');
      $(nb3).fadeIn(1000);
  }
  $('#score1').html(count1);
  $('#score2').html(count2);
});

$('#fighters2').on('click', 'button', function(){
     var nb = $(this).closest('li').index('li');
     var nb2 = nb + 1 - 32 ;
     var loser = nb + 1 - 33 ;
     var nb3 =  "li:nth-child(" + nb2 + ")";
     $('#fighters1').find("li:nth-child(" + loser + ") ").removeClass('loose');
  if ($(this).hasClass('winner')) {
    count2 = count2 - 1;
    $(this).removeClass('winner');
  }
  else {
    count2 = count2 +1;
    $(this).addClass('winner');

    $('#fighters1').find("li:nth-child(" + loser + ") ").addClass('loose');
    $(nb3).fadeIn(1000);
  }
  $('#score1').html(count1);
  $('#score2').html(count2);
});

