function Curtain(){
  $('#wrap').removeClass('curtain_open');
  $('#wrap').addClass('curtain_close');
};

$(function(){
    $("#button").click(
      function(data){
        Curtain();

        setTimeout( () => {

        $.ajax({
          url: 'https://randomuser.me/api',
          type: 'GET',
          dataType: 'json'
        })
        .done(function(data) {
          const results = data['results'];
          const gender = results[0].gender;
          const age = results[0].dob.age;
          console.log(gender);
          console.log(age);
          if( gender == 'female' ) {
            $('.mouth, .eyes').addClass('FM_parts');
            $('.mouth, .eyes').removeClass('M_parts');
            if ( age > 50 ) {
              $('.mouth').addClass('Old_parts');
            } else {
              $('.mouth').removeClass('Old_parts');
            }
          } else if( gender == 'male' ) {
            $('.mouth, .eyes').addClass('M_parts');
            $('.mouth, .eyes').removeClass('FM_parts');
            $('.hair').remove();
            if ( age > 50 ) {
              $('.mouth').addClass('Old_parts');
            } else {
              $('.mouth').removeClass('Old_parts');
            }
          }
        }).fail(function(){
            console.log('エラー');
        }).always(function() {
            $('#wrap').removeClass('curtain_close');
            $('#wrap').addClass('curtain_open');
        });

      }, 1500);

      }
    );
});