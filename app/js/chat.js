////// Chat window script //////
  var myDataRef;

  $(function(){
    myDataRef = new Firebase('https://tictacthrone.firebaseio.com/chat/');
    $('#messageInput').keypress(function (e) {
      if (e.keyCode == 13) {
        var name = $('#nameInput').val();
        var text = $('#messageInput').val();
        myDataRef.push({name: name, text: text});
        $('#messageInput').val('');
      }
    });
    var displayChatMessage = function(name, text) {
      $('<div>').text(text).prepend($('<em>').text(name+':         ')).prependTo($('#messagesDiv'));
      $('#messagesDiv')[0].scrollTop = $('#messagesDiv')[0].scrollHeight;
    };
    myDataRef.on('child_added', function(snapshot) {
      var message = snapshot.val();
      displayChatMessage(message.name, message.text);
    });
  });
