# Frontend Mentor - Calculator app solution


## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- See the size of the elements adjust based on their device's screen size
- Perform mathmatical operations like addition, subtraction, multiplication, and division
- Adjust the color theme based on their preference
- **Bonus**: Have their initial theme preference checked using `prefers-color-scheme` and have any additional changes saved in the browser

### Screenshot

![](./design/desktop-design-theme-1.jpg)


### Links

- Solution URL: [solution URL here](https://github.com/deepak1ok/LGM-VIP.git)
- Live Site URL: [live site URL here](https://calculator-deepak1ok.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- JavaScript

**Note: These are just examples. Delete this note and replace the list above with your own choices**

### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:

```html
 <div id="del" class="num">DEL</div>
```
```css
.num {
    box-shadow: 0px 5px 2px hsl(28deg 16% 65%)
}
```
```js
else if (e.target.innerText == 'DEL') {
    console.log(text)
    text = text.slice(0, -1);
    document.querySelector(".display-section p").innerText = text;
}
```


## Author

- Frontend Mentor - [@deepak1ok](https://www.frontendmentor.io/profile/deepak1ok)
- Twitter - [@deepak10460](https://twitter.com/deepak10460)

