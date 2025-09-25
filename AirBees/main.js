(function(){
  var form = document.getElementById('serviceForm');
  if (!form) return;

  form.addEventListener('submit', function(e){
    var required = form.querySelectorAll('[required]');
    var bad = [];
    for (var i=0;i<required.length;i++){
      if (!required[i].value.trim()) bad.push(required[i]);
    }
    if (bad.length){
      e.preventDefault();
      bad[0].focus();
      alert('Please fill in all required fields.');
    }
  });
})();