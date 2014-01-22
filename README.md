# Twitch / Speedrunslive IRC
This is a project to add a Speedrunslive IRC webchat to a Twitch embed.
The original project idea was laid out on [Nmaster64's Twitter](https://twitter.com/Nmaster64/status/379347530716549120).

## Usage
If you navigate to `index.html#ubercow` it will load the embed for ubercow's
twitch and an embeded IRC client that defaults to `#ubercow` on irc.speedrunslive.com.

Now you can also specify a separate twitch chat and IRC channel!

## Installation Guide
This project uses Node, Ruby, Bower and Grunt to help build and compile assets into a static site. This makes it easier for me to manage the codebase while still making a clean optimized website. 

To install the website you need Node.JS, npm, Ruby, and the Compass Rubygem. I am using Node v0.10.18 and Ruby 1.9.3p392 at the time of writing. After you clone the repository, run `npm install` to make sure the node dependencies are up to date.

Next you need to setup bower, which I use to pull in jQuery and other helpful JS frameworks. If you haven't used bower before, you have to install it via npm with `npm install -g bower`. Then run `bower` in the root of the repository to download the dependencies.

Finally it's time to build the site into static files. Simply run `grunt` in the root of the repository to compile everything. The static site will be put into the `dist` directory.

You can also run `grunt server` to run the development server.

## SpeedRunTools
This is a [SpeedRunTools](http://www.speedruntools.com) project. An open source community
devoted to making cool tools for the Speedrunning Community. Come check us out.

## TODO / Future
- Json decode http://twitchstatus.com/api/status?type=chat to determine if Twitch servers are usable or not.

## Shoutouts
- [Jack268](https://github.com/Jack268) for creating the rough draft of this.

## License
Copyright (c) 2013 Zak Kristjanson

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
