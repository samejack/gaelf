# gaelf
Google Analytics Helper, setup quickly and easy.

## Features
* A Tag Click Auto Binding
* Form Submit Binding (TODO: -_-)

## How to Use?

```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
<script src="jquery.gaelf.js" type="text/javascript"></script>

<script>
  $(document).ready(function () {

    // init
    $(window).gaelf('create', 'UA-xxxxxxxx-1', 'auto');
    
    // send pageview
    $(window).gaelf('send', 'pageview', '/index.html');

    // bind on a tag click
    $('#a-tag-element').gaelf('send', 'pageview', '/register-btn');

  });
</script>
```
