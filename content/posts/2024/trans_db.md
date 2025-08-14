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

## Talk

2021 we held a talk at the remote chaos conference about Trans\*DB.
[You can watch it here, starting at 10:25](https://youtu.be/Kqzg-BB9_P0?t=625).
I used a avatar I modeled and textured in Blender for the talk.
