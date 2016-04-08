pwgen
=====

Password Generator site by TameRobots (tamerobots.com)

Uses Jquery, Jquery UI, ZeroClipboard, HTML, CSS.

See a version in action here: www.tamerobots.com/project/pwgen

USE AT YOUR OWN RISK - I have not done a full security audit on it, and it's really a work in progress. There are better, more secure options out there for generating passwords, and 
a browser is not necessarily a great place to do this anyway.

Includes Options:

$ Use upper case letters
$ Use symbols
$ Choose number of characters

Suggested future functionality:

$ move away from using Math.random() its not a good enough random number generator

$ Remove the need for jQuery and other libraries that need updating/checks for compatibility

$ HTTPS!

$ crypto hashes of latest builds

$ xkcd-style passwords? (http://xkcd.com/936/)

$ Box for entering a word to build a password around.

$ Comments section

$ Keyboard shortcut to generate new password

$ App?

$ alternate version that doesn't use javascript and just returns a password, no markup (i.e. something to 'curl' for a quick pw)

Includes ZeroClipboard (http://zeroclipboard.github.io/ZeroClipboard/) to allow you to click the password to copy to clipboard.

You will need to pull ZeroClipboard as a submodule once you have created the main repository - 'git submodule sync' and 'git submodule update --init'

Read the mit-licence file for the licence.

Contact me at dave@tamerobots.com if you'd like to ask me any questions about it.
