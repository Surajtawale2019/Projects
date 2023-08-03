# Simple Responsive design without Bootstrap

## File structure

```
    index.html
    css
        style.css
    js
        script.js
```

1. In this tutorial we'll learn how to make our sites responsive without using any libraries/frameworks like Bootstrap
1. First of all, we need to understand how Bootstrap works to make sites responsive

    - In the latest versions of BootStrap i.e. BootStrap 4, it mostly does the responsive work with CSS Flexbox and CSS Grid
    - CSS Grid has changed the way responsiveness of a site is implemented, it is so easy to make your site responsive with the help of Grid
    - Although CSS Grids won't do all the job for us, we still have to use a major responsive feature called the **Media Queries**
    - So what are **Media Queries**? media queries are way to monitor the screen viewport width and height so that we can apply specific breakpoints to the site

    ![Media Query image](https://www.seobility.net/en/wiki/images/6/6f/Media-Queries.png)

1. Media Queries

    - Syntax :

    ```css
        //For smartphones
        @media screen and (max-width: 730px){code}
        //For tablets
        @media screen and (max-width: 1200px){code}
    ```

    - Let me walk you through the code and what it does
    - The first media query checks if the viewport width of the screen is less than or equal to 730px, if yes then apply the styles specified

1. Go through the files and resize the browser to see changes in the layouts without BootStrap. **Happy Coding😊😊!**
