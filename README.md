# AWS Cloud Resume Challenge

Hey there! Welcome to my journey through the **Cloud Resume Challenge**. This project was a fantastic opportunity to build practical cloud skills while crafting a unique resume. This project is heavily focused on showcasing my technical skills with AWS features and tools.

## Tech Stack

- S3
- AWS CloudFront
- Certificate Manager
- AWS Lambda
- Dynamo DB
- Github Actions
- JavaScript
- HTML
- CSS

Here’s how I tackled each step:

## My Journey

### 1. Certification

I started with the AWS Cloud Practitioner certification. This was a great starting point, giving me a solid foundation in AWS basics before diving deeper.

### 2.& 3. HTML & CSS Resume

The HTML and CSS in this project are from a template by HTML5 UP (html5up.net | @ajlkn). I merely edited the code to reflect my information and resume.

### 4. Static Website

I hosted my resume on an Amazon S3 bucket as a static website. It was fun to see my creation come to life on the web!

### 5. HTTPS via CloudFront

To secure the site, I used Amazon CloudFront and set up HTTPS. Now my resume is safe and sound with encrypted traffic.

### 6. Custom DNS

Custom domains are cool, so I got one and pointed it to my CloudFront distribution. My resume now has its own URL!

### 7. JavaScript Visitor Counter

I added a JavaScript visitor counter to track how many people check out my site. Watching the numbers climb is motivating!

### 8. DynamoDB Database

For the visitor counter, I stored the data in a DynamoDB table. It’s efficient, and the pricing is perfect for this small project.

### 9. API for DynamoDB Access

To keep things secure and efficient, I built a REST API with AWS API Gateway and AWS Lambda. Now my resume’s visitor counter can fetch data without direct database access.

### 10. Python in Lambda

I wrote Python code in my Lambda function using boto3 to interact with DynamoDB. Python's flexibility made it easy to get this done.

### 11. Python Tests

Testing is crucial, so I wrote tests for my Python code to ensure everything runs smoothly.

### 12. Infrastructure as Code (IaC)

I defined my infrastructure using AWS SAM.

### 13. Source Control

I used GitHub to manage my backend code, ensuring I have a record of changes and can easily roll back if needed.

### 14. CI/CD for Backend

I set up GitHub Actions to automatically test and deploy backend updates. It's like having my own automation magic!

### 15. CI/CD for Frontend

Similarly, I created a separate repo for the frontend and automated updates to the S3 bucket. I added cache invalidation to keep everything fresh.

## Conclusion

This challenge pushed me to think creatively and solve real-world problems using AWS. I’m excited to keep exploring the cloud!

### Original Creators ReadME from the Template I used:

Dimension by HTML5 UP
html5up.net | @ajlkn
Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)

This is Dimension, a fun little one-pager with modal-ized (is that a word?) "pages"
and a cool depth effect (click on a menu item to see what I mean). Simple, fully
responsive, and kitted out with all the usual pre-styled elements you'd expect.
Hope you dig it :)

Demo images\* courtesy of Unsplash, a radtastic collection of CC0 (public domain) images
you can use for pretty much whatever.

(\* = not included)

AJ
aj@lkn.io | @ajlkn

Credits:

    Demo Images:
    	Unsplash (unsplash.com)

    Icons:
    	Font Awesome (fontawesome.io)

    Other:
    	jQuery (jquery.com)
    	Responsive Tools (github.com/ajlkn/responsive-tools)
