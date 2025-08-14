---
date: 2024-08-01
titleImage: /images/title_images/trans_db.png
titleImageAlt: Mobile view of Trans*DB website showing the sites header and search-bar
titleImageSize:
  - 300
  - 140
---

# Trans\*DB Search Engine for trans\* Healthcare and Support Groups

[Trans\*DB](https://transdb.de/) is a german community contributed public database and search engine by and for the german trans community.
It features a location based geo-search and extensive administrative tools for managing the data.
I contributed to the project from it's inception until the middle of 2024.

![Landing page of Trans*DB](/images/posts/trans_db/screenshot.png)

## Technologies

Trans\*DB' front-end was originally built with Nuxt.
Unsatisfied with the speed of Nuxt at the time, development and production, we switched to Svelte half way through project completion.
Overall we were very happy with the switch at the time, as we greatly improved development speeds as well as loading time and UI responsiveness.

The data is stored in a Mongo DB database, which we also use for the geo-location search.
Each new entry has it's coordinates extracted using the Open Street Maps API, though our Geo-Location search was self-hosted, with a database of region / town names, to not stress the Open Street Maps public API.

The data is user-submitted through a form, and then curated by admins.
We have a admin-interface which offers access to the database, with an advanced [autocompleting query language](https://github.com/TransDB-de/filter-lang) I built for the project.

## Design

I drew all the art for the project, and made many parts of the design.
The two parts I am proudest of are the responsive background image behind the first text, and the header art.

### Responsive Background Image

![cartoon style landscape with a city on the left, fields in the middle, and mountains on the right. Several location indicators are scattered across the landscape](/images/posts/trans_db/responsive_background.png)

The background image behind the first text consists of two halfs, the city and the mountains.
When the screen width decreases the images slide together and seamlessly form into a single landscape.

The size between mountains and city further decreases as the screen real-estate shrinks, until they are right next to each other.

### Responsive Header Art

![the header of trans*db featuring a repeating pattern and a gradient](/images/posts/trans_db/header.png)

We knew we wanted to include some sort of gradient and pattern into the header.
This lead to several problems with responsiveness.
On small screens the gradient became to sudden, while on large screens the gradient behind the pattern would repeat.

I solved this by designing the pattern with bright repeating colors over the gradient, then subtracting the gradient out, and re-adding it in css.
This allowed us to tile and repeat the background image, while responsively adjusting the gradient to any screen-size.
On large screens, the pattern stretches out infinitely, while on small screens, it gradually transitions into a half-gradient.

## Talk

2021 we held a talk at the remote chaos conference about Trans\*DB.
[You can watch it here, starting at 10:25](https://youtu.be/Kqzg-BB9_P0?t=625).
I used an avatar I modeled and textured in Blender for the talk.
