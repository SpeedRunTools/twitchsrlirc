# Twitch / Speedrunslive IRC
This is a project to add a Speedrunslive IRC webchat to a Twitch embed.
The original project idea was laid out on [Nmaster64's Twitter](https://twitter.com/Nmaster64/status/379347530716549120).

## Usage
If you navigate to ''index.html#ubercow'' it will load the embed for ubercow's
twitch and an embeded IRC client that defaults to ''#ubercow'' on irc.speedrunslive.com.

## Development and Hosting
This project uses Bower and Grunt to manage dependencies and help with code. These
are both NodeJS projects and can be installed through npm.

Run ''grunt'' to compile it and ''grunt server'' to run the development server.
Once it's compiled, you can host it as a static site on any web server.


## SpeedRunTools
This is a [SpeedRunTools](http://www.speedruntools.com) project. An open source community
devoted to making cool tools for the Speedrunning Community. Come check us out.

## TODO / Future
- I'd like to make it so you can easily toggle between TwitchTV chat and IRC.
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
