---
date: 2025-01-01
description: Monoglyph is a monospace text layout engine, that handles line-breaks and spacing, to format monospaced text in a pleasant to read manner.
titleImage: /images/title_images/monoglyph.png
titleImageAlt: Monospaced Lorem Ipsum Dolor filler-text which has been formatted to be justified
titleImageSize:
  - 200
  - 200
---

# Monoglyph - Monospace Text Layout Engine

<!-- prettier-ignore-start -->
::mono-layout
---
text: |
    A friend of mine asked on Mastodon if anyone knew a monospaced text-layout engine.
    I didn't, but I thought it would be fun to try building one.

    The next day Monoglyph was borne. It's a command-line utility built in deno and typescript, that can insert spaces and line-breaks into a monospaced text to make it pleasent to read.

    Let's go through the "justify" setting of monoglyph to see how it works.
    First, each paragraph is split up, to be layed out separately.
    Then, each word is hypenated, and stored in an array.
    The split up words are added back to each line, until the next line would exceed the given max line length.
    If this would result in a word being split up, the layout engine checks if enough space is being saved by splitting up the word to justify the split.
    Otherwise, the entire line is carried over.

    Finally, whitespace is added between the words, until the max line length is reached for every line.
    The whitespace is added around short words preferably, as this looks cleaner than equal whitespace distribution.

    The text you are reading right now is being layed out by the same algorithm I wrote for Monoglyph! Try resizing the window and watch the text reflow.
---
::
<!-- prettier-ignore-end -->

::color-button{to="https://github.com/ElectronicBlueberry/Monoglyph/" target="\_blank"}
You can find Monoglyph here.
::
