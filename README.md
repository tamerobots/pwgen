pwgen
=====

Password Generator site by TameRobots (tamerobots.com)

Uses Jquery, Jquery UI, ZeroClipboard, HTML, CSS.

You can view the project page for this at [tamerobots.com/projects/password-generator](https://www.tamerobots.com/projects/password-generator).

See a version in action here: https://www.tamerobots.com/project/pwgen

**USE AT YOUR OWN RISK** - I have not done a full security audit on it, and it's really a work in progress. There are better, more secure options out there for generating passwords, and a browser is not really a great place to do this anyway, because of the possibility of malicious plugins or badly written browsers. This is really just a fun side project.

Includes Options:

* Use upper case letters
* Use symbols
* Choose number of characters

Suggested future functionality:

* move away from using Math.random() its not a good enough random number generator
* Remove the need for jQuery and other libraries that need updating/checks for compatibility
* crypto hashes of latest builds to check for integrity
* xkcd-style passwords? (https://xkcd.com/936/)
* Box for entering a word to build a password around.
* Comments section
* Keyboard shortcut to generate new password
* App?

Includes ZeroClipboard (http://zeroclipboard.github.io/ZeroClipboard/) to allow you to click the password to copy to clipboard.

You will need to pull ZeroClipboard as a submodule once you have created the main repository - 'git submodule sync' and 'git submodule update --init'

Read the mit-licence file for the licence.

Contact me at dave@tamerobots.com if you'd like to ask me any questions about it.

Screenshots
----------

#### Output Password


Main output of password.

![alt text](https://raw.githubusercontent.com/tamerobots/pwgen/master/pwgen.jpg "Password Generator Output Example")

#### Options

Options for complexity/length of the password. This allows you to specify options based on the occasional site or service that may ask you for some bizarre combination of rules (that in some cases will actually force a user into having a less secure password!).
These get entered as querystrings into the URL, so you can bookmark specific rules in order to use them in the future if you need to.

![alt text](https://raw.githubusercontent.com/tamerobots/pwgen/master/pwgen2.jpg "Password Generator Options")
