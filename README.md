# dicebear-browser

dicebear-browser is a fork of [dicebear](https://github.com/dicebear/dicebear) that allows you to generate avatar images directly in the browser. The supported methods are toString and toDataUriSync. This makes it ideal for use in web applications that require quick and easy avatar generation.

## Installation

```code
npm install dicebear-browser
```

## Usage

To generate an avatar, create a new instance of the
DiceBearBrowser class and call the generate method:

```js
import { createAvatar } from "dicebear-browser/core";
import { botttsNeutral } from "dicebear-browser/collection/lib/index";

const avatar = createAvatar(avatars.botttsNeutral, {
    seed: "Angel",
    backgroundColor: ["1e88e5", "fdd835"],
    backgroundType: ["gradientLinear"],
    backgroundRotation: [-270],
    mouth: ["smile02"],
});
document.querySelector("img").src = avatar.toDataUriSync();
```

## Customization

DiceBear Browser supports all of the same options as the original DiceBear library, as well as some additional options specific to the browser. You can customize the appearance of the avatars by passing options to the generate method:

```js
const db = new DiceBearBrowser();
const svg = db.generate("identicon", {
    seed: "example",
    backgroundColor: "#ff0000",
    color: ["#00ff00", "#0000ff"],
    radius: 50,
});
document.body.appendChild(svg);
```

## License

DiceBear Browser is licensed under the MIT License.
