# dicebear-browser

dicebear-browser is a fork of [dicebear](https://github.com/dicebear/dicebear) that allows you to generate avatar images directly in the browser. The supported methods are toString and toDataUriSync. This makes it ideal for use in web applications that require quick and easy avatar generation.

## Installation

```code
npm install dicebear-browser
```

## Usage

To generate an avatar, create a new avatar object using ```createAvatar``` as described here (https://dicebear.com/how-to-use/js-library),
then convert the object with ```toString``` or ```toDataUriSync```.

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

## License

DiceBear Browser is licensed under the MIT License.
