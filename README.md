# react-likecoin

Unofficial plugin for LikeCoin on React, Nextjs or Gatsby. 

Civic Liker is a movement to realign creativity and reward, by the technology of nano-payment to decouple media’s income from advertising needs. Any website can enable the LikeCoin button by installing the plugin. Each “Like” from the readers let creators to be rewarded.

[What's LikeCoin?](https://like.co/)

## Install
```
yarn react-likecoin
```

## How to use
In your React component, add the following to use `react-likecoin`:
```jsx
import LikeCoin from 'react-likecoin';

// render
<LikeCoin userId="" />
```

| Props             | Required?    | Description                                                                         |
|-------------------|--------------|-------------------------------------------------------------------------------------|
| `userId` (string)   | Y            | Your LikeCoin ID.                                                                   |
| `referrer` (string) | N / Y for SSR | Referrer URL, your page current URL for LikeCoin's tracking. Only required for SSR. |
| `style` (object)    | N            | Optional styling.                                                                   |

## Author
- [Andrew Mok](https://andrewmmc.com) (@andrewmmc)

## Questions?
- Please feel free to [open an issue here](../../issues) or [contact me via email](mailto:hello@andrewmmc.com).