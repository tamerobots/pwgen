<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Password Generator | TameRobots</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Password Generator by tamerobots.com">
    <meta name="author" content="TameRobots">

    <!-- Le styles -->
    <link href="css/pwgen.css" rel="stylesheet">    

  </head>

  <body>

    <div class="container-narrow">

      <div class="masthead">
        <h3 class="muted">Password Generator</h3>
      </div>

      <hr>

      <div class="generate-main">
        <h1 class="password-display">Password Here</h1>
        <p class="click-to-copy">Click the password to copy to clipboard TODO</p>
        <a class="btn btn-large btn-generate" href="#">Generate!</a>
      </div>

      <hr>
      <form id="options-form" action="#">
      <div class="options">
        <div class="col-1">
          <p><input type="checkbox" name="uppercase" id="uppercase" >Enable Uppercase Letters</input></p>

          <p><input type="checkbox" name="symbols" id="symbols" >Enable Symbols</input></p>

          <p>Maecenas sed diam eget risus varius blandit sit amet non magna.</p>
        </div>

        <div class="col-2">
          <p>Donec id elit non mi porta gravida at eget metus. Maecenas faucibus mollis interdum.</p>

          <p>Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum.</p>

          <p>Maecenas sed diam eget risus varius blandit sit amet non magna.</p>
        </div>
      </div>
    </form>

      <hr>
      <div class="footer">
        <div class="footer-links">links to other places in site and other stuff go here</div>
        <div class="footer-disclaimer">This is where disclaimer goes.</div>
      </div>

    </div> <!-- /container -->

    <!-- Placed at the end of the document so the pages load faster -->
    <script src="js/jquery-1.8.3.js"></script>
    <script src="js/jquery-ui-1.9.2.custom.min.js"></script>
    <script src="js/pwgen.js"></script>
    
  </body>
</html>
