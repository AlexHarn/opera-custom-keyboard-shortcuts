# Opera Custom Keyboard Shortcuts
This is a very simple way to set custom keyboard shortcuts in Opera, which are not available in Opera's settings. It does not not have a menu and is not user friendly whatsoever. To customize the shortcuts you have to edit the files yourself. I currently have no plans to make this a proper extension.

## What is this for?
I personally missed the original Opera 12 `Ctrl + Space` shortcut to go to the start page and `ctr + number` to open the quick dial pages. Unfortunately there is no way to get these in current vanilla Opera. And as far as I know there are also no other simple working extensions to get those back. So this is my quick and dirty implementation of setting those shortcuts.

It can potentially be used to set all kinds of custom keyboard shortcuts.

## How to use?
1. Make sure the shortcut you want to set is not set to anything in Opera's keyboard shortcut settings page.
1. Add the desired shortcut as command in `manifest.json` just like mine.
1. Define what it should do in `bind.js` just like I did for mine. You can use any Java Script Code you want.
1. Compile the extension or just tell Opera to load it from the folder directly
    1. `Opera Menu -> Extensions -> Extensions`
    1. `Load unpacked extension...` or `Pack extension...`
    1. Select the repo folder

## Contribute
Feel free to use this idea to make this a proper extension with user friendly menu.

## Need Help?
Feel free to open an issue, if you are having trouble to make this work for you.
