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
        <a class="btn btn-large btn-generate">Generate!</a>
        <p class="options-link"><a>Options <span class="options-arrow options-arrow-down">asdf</span></a></p>
      </div>

      <hr>

      
      <div class="options">
        <form id="options-form" >
          <p><input type="checkbox" name="uppercase" id="uppercase" > Enable Uppercase Letters</input></p>

          <p><input type="checkbox" name="symbols" id="symbols" > Enable Symbols</input></p>

          <!-- <p><input type="text" name="length" id="length" value="10">Length</input></p> -->
          <p>
            <select name="length" id="length">
              <optgroup label="Too Short">
                <option value="8">8</option>
                <option value="9">9</option>
              </optgroup>
              <optgroup label="Recommended Length">
                <option value="10" selected="selected">10</option>              
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
              </optgroup>
            </select>
            Password Length            
          </p>
          <p>
            Box for copying short url with querystring parameters here.
          </p>
          </form>
          <hr>
      </div>
    

      
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
