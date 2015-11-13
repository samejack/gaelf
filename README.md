# gaelf
Google Analytics Helper, setup quickly and easy.

## How to Use?

```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
<script src="jquery.gaelf.js" type="text/javascript"></script>

<script>
  $(document).ready(function () {

    // init
    $().gaelf('create', 'UA-xxxxxxxx-1', 'auto');
    
    // send pageview
    $().gaelf('send', 'pageview', '/index.html');

    // bind on a tag click
    $('#a-tag-element').gaelf('send', 'pageview', '/register-btn');

  });
</script>
```
