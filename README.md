# Planted Aquarium Art

![Page overview](https://miroslavsvec.github.io/Planted-Aquarium-Art//assets/files/page-overview.png)

Hello there,  
and welcome to my first [Code Institute (CI)](https://courses.codeinstitute.net/) school project.
In this project I should be able to show that I can work with HTML and CSS as well as create responsive design which works on commonly used devices. As I started the course on older platform I knew little bit of JS as well and therefore I decided to add few scripts to enhance the user experiences, form validation and send real email after submitting the contact form.

## UX

I decided to go with my own idea and create fake website for a company called **Planted Aquarium Art**.  
I created full business plan base on existing companies.

The company:

- We require a place for our potential customers to:
  - see what do we offer
  - show our work
  - be able to contact us and connect with us via contact form or social links
- The landing page should be entertaining and not overwhelming with lots of unnecessary info (less is more)

The user:

- As a user I would like to see basic info about the company (what they do and what they can offer).
- As a user I would like to see they work
- As a user I would like to see basic info about their bundles
- As a user I would like to be able to see more info of all above if I desire
- As a user I would like to be able to contact the company via contact form and / or social links

Base on the above I created wireframe using wall-sticker-chalkboard which can be find [here](https://miroslavsvec.github.io/Planted-Aquarium-Art//assets/files/wireframe.png).  
Later on I created full mockup for the page using [Balsamiq](https://balsamiq.com/) which can be find [here](https://miroslavsvec.github.io/Planted-Aquarium-Art//assets/files/mokup.pdf).

## Features

Most of the required features has been implemented.  
However, there are some which needs (will be) added later.  

### Existing Features

#### [index.htmll](https://miroslavsvec.github.io/Planted-Aquarium-Art/index.html)

- Our Work - allows users to see few examples of our work as well as visit our gallery to see even more examples of our work.
- Our Servises - allows users to get idea about services we offer:
  - free advice
  - design of the planted aquarium
  - instalation of the equipment as well as full set-up of the planted aquarium based on the design
  - caring for the the plants and keep the aquarium looks good at any time
  - also added “freebees” to attract more potentional customers
  
- About Us - allows users to see who we are as well as few feedbacks from existing customers
- Contact Us - allows users to conatact us via:
  - email
  - phone number
  - contact form
  - socail links (footer)

#### [gallery.html](https://miroslavsvec.github.io/Planted-Aquarium-Art/gallery.html)

- Our Work (extended) – allows users to browse our work collection from smallest as >28 liters to as big as 120< liters

### Features left to implement

- About Us (extended) - allows users to read more about us and the company. Also add more feedbacks from existing customers.
- Your project - allows users to create simple wireframe of their projects including size of the aquarium, choosing plants and equipment.  
  Let the customer to choose to source the necessary items by himself or let the company to do it for him (for additional fee).

For additional information about “Features left to implement” please see the [old master branch](https://github.com/MiroslavSvec/Planted-Aquarium-Art/tree/old-master).

## Technologies Used

- [Bootstrap v3.3.7](https://getbootstrap.com/docs/3.3/)
  - The project uses **Bootstrap** to speed up the development.
- [Font Awesome v5.0.6](https://fontawesome.com/)
  - The project uses **Font Awesome** for icons.
- [JQuery v3.2.1](https://blog.jquery.com/2017/03/20/jquery-3-2-1-now-available/)
  - The project uses **JQuery** for better user experiences as well as contact form validation.
- [Email JS](http://www.emailjs.com/)
  - The project uses **Email JS** to submit real eamil via contact form


## Testing

The project has been tested on commonly used devices and browsers such as:

- Desktop PC
  - Chrome 70 (fully compatible)
  - Opera 57 (fully compatible)
  - Firefox 63 (minor CSS compatibility issue with links)
  - Internet Explorer 11 (minor CSS compatibility issue with links)
  - Microsoft Edge 42 (minor CSS compatibility issue with links)

- Tablets
  - Nexus 7 - Chrome 69 (fully compatible)
  - iPad air - Safari (fully compatible)

- Mobiles
  - Samsung Galaxy - Chrome 69/70 (fully compatible)
  - iPhone - Safari (fixed)

Found major issue with `background-attachment: fixed;` on mobile devices.  The splash images was blury and did not scale properly.  

Solution - `background-attachment: scroll;`.

- Contact form:
  - added basic form validation via JS to check for empty feilds and minimum length of the message
  - also added `split()` function to remove all empty spaces and prevent the user to sumbit form with empty spaces

Additional to above both pages has been validated via [W3C Markup Validation Service](https://validator.w3.org/) and [W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/).

Unfortunately, JS's has been tested manually.

## Deployment

The project has been deployed to GitHUb Pages  - [Planted Aquarium Art](https://miroslavsvec.github.io/Planted-Aquarium-Art/index.html)

There is one additional branch – [old master](https://github.com/MiroslavSvec/Planted-Aquarium-Art/tree/old-master) which points to stage of the project before making adjustments for final submission. This branch will be merged to the current master branch later.

## What could be done better?

- some of the images are called `1.jpg` which says nothing about the image
- better file structure
  
## Credits

**Special thanks to:**

- everyone for finding few minutes to test the project!  

  All of you gave me constructive feedback which made the project better 😊

- Karol Maleska owner of [CO2 Art](https://www.co2art.co.uk/) as he allowed me to use pictures and content from [Aquascape Awards](https://www.aquascapeawards.com/) for this project.
- To all of the acuascapers who created such a beautiful aquariums.

### Media

- all photos on this website has been borrowed from [Aquascape Awards](https://www.aquascapeawards.com/).

### Content of [gallery.html](https://miroslavsvec.github.io/Planted-Aquarium-Art/gallery.html)

- the content on this page is taken from [Aquascape Awards](https://www.aquascapeawards.com/).