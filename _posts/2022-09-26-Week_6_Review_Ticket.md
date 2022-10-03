---
toc: true
layout: post
description: hacks for week 6
categories: [markdown]
title: Week 6 - Deployment
---
# Week 6 Review Ticket

{% include submenu.html %}

<ul>
    <li>
        <details closed>
            <summary>CollegeBoard MCQs (1.1, 1.2, 1.3)</summary>
            <img src="https://i.ibb.co/j60hfjb/Screen-Shot-2022-09-26-at-3-13-03-PM.png">
            <ul>
                <li>I got a point off on 1.2 because I forgot like basic Integrated math (5*3 vs 5^3)</li>
            </ul>
        </details>
    <li>
        <details closed>
            <summary>AWS Deployment (curl output)</summary>
            <pre>
            <code>
(webapp) ubuntu@ip-172-31-28-68:~/Flask_Swag$ curl http://localhost:8086&lt;br/&gt;
&lt;!-- Custom file for standardizing Project Data&lt;br/&gt;
This HTML is setup as as a Jinja2 layout, coders use layouts for:&lt;br/&gt;
 ... standardization of style&lt;br/&gt;
 ... setting expectations for data&lt;br/&gt;
 ... code reuse&lt;br/&gt;
--&gt;&lt;br/&gt;
&lt;!DOCTYPE HTML&gt;&lt;br/&gt;
&lt;html lang="en"&gt;&lt;br/&gt;
&lt;br/&gt;
&lt;br/&gt;
&lt;br/&gt;
&lt;br/&gt;
&lt;br/&gt;
&lt;br/&gt;
&lt;head&gt;&lt;br/&gt;
    &lt;!-- Required meta tags --&gt;&lt;br/&gt;
    &lt;meta charset="utf-8"&gt;&lt;br/&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1"&gt;&lt;br/&gt;
&lt;br/&gt;
    &lt;!-- JQuery CSS --&gt;&lt;br/&gt;
    &lt;script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"&gt;&lt;/script&gt;&lt;br/&gt;
    &lt;!-- Bootstrap CSS --&gt;&lt;br/&gt;
    &lt;link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"&gt;&lt;br/&gt;
&lt;br/&gt;
    &lt;link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"&gt;&lt;br/&gt;
    &lt;style&gt;&lt;br/&gt;
    .navbar {&lt;br/&gt;
        position: static;&lt;br/&gt;
        z-index: 9999;&lt;br/&gt;
        }&lt;br/&gt;
    &lt;br/&gt;
    &lt;br/&gt;
    &lt;/style&gt;&lt;br/&gt;
&lt;br/&gt;
    &lt;title&gt;Nighthawk Coding | Home &lt;/title&gt;&lt;br/&gt;
&lt;br/&gt;
&lt;/head&gt;&lt;br/&gt;
&lt;br/&gt;
&lt;body&gt;&lt;br/&gt;
    &lt;!-- Navigation Bar from bootstrap&lt;br/&gt;
This HTML is setup as a fragment allowing it to be "included" by other HTML files via Jinja2&lt;br/&gt;
--&gt;&lt;br/&gt;
&lt;nav class="navbar navbar-expand-lg navbar-light bg-light"&gt;&lt;br/&gt;
    &lt;img src="/static/assets/ncs_logo.png" width="50" height="50" class="d-inline-block align-center" alt=""&gt;&lt;br/&gt;
    &lt;a class="navbar-brand" href="https://csp.nighthawkcodingsociety.com/"&gt;Nighthawk Coding&lt;/a&gt;&lt;br/&gt;
    &lt;button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation"&gt;&lt;br/&gt;
        &lt;span class="navbar-toggler-icon"&gt;&lt;/span&gt;&lt;br/&gt;
    &lt;/button&gt;&lt;br/&gt;
    &lt;div class="collapse navbar-collapse" id="navbarNavAltMarkup"&gt;&lt;br/&gt;
        &lt;div class="navbar-nav"&gt;&lt;br/&gt;
            &lt;!-- url_for is a Jinja2 pre-processor that finds route from function name (def) --&gt;&lt;br/&gt;
            &lt;a class="nav-link" href=/&gt;Home&lt;/a&gt;&lt;br/&gt;
            &lt;a class="nav-link" href=/stub/&gt;Sign-Up&lt;/a&gt;&lt;br/&gt;
        &lt;/div&gt;&lt;br/&gt;
    &lt;/div&gt;&lt;br/&gt;
    &lt;div class="collapse navbar-collapse" id="navbarNavDarkDropdown"&gt;&lt;br/&gt;
        &lt;ul class="navbar-nav"&gt;&lt;br/&gt;
            &lt;li class="nav-item dropdown"&gt;&lt;br/&gt;
                &lt;a class="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false"&gt;&lt;br/&gt;
                    Blogs&lt;br/&gt;
                &lt;/a&gt;&lt;br/&gt;
                &lt;ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink"&gt;&lt;br/&gt;
                    &lt;li&gt;&lt;a class="dropdown-item" href=/projects/portfolio/&gt;Portfolio&lt;/a&gt;&lt;/li&gt;&lt;br/&gt;
                    &lt;li&gt;&lt;a class="dropdown-item" href=/projects/kangaroos/&gt;Kangaroos&lt;/a&gt;&lt;/li&gt;&lt;br/&gt;
                    &lt;li&gt;&lt;a class="dropdown-item" href=/projects/walruses/&gt;Dash's Blog&lt;/a&gt;&lt;/li&gt;&lt;br/&gt;
                    &lt;li&gt;&lt;a class="dropdown-item" href=/projects/aidensblog/&gt;Aiden's Blog&lt;/a&gt;&lt;/li&gt;&lt;br/&gt;
                &lt;/ul&gt;&lt;br/&gt;
            &lt;/li&gt;&lt;br/&gt;
        &lt;/ul&gt;&lt;br/&gt;
    &lt;/div&gt;&lt;br/&gt;
&lt;/nav&gt;&lt;br/&gt;
&lt;br/&gt;
    &lt;br/&gt;
    &lt;!-- Start of body content specific to page --&gt;&lt;br/&gt;
    &lt;html&gt;&lt;br/&gt;
        &lt;head&gt;&lt;br/&gt;
            &lt;style&gt;&lt;br/&gt;
                html,body { height:100%; }&lt;br/&gt;
                .mainDiv {&lt;br/&gt;
                    text-align: center;&lt;br/&gt;
                    padding: 30px;&lt;br/&gt;
                    background-color: #4d4d4dbe;&lt;br/&gt;
                    margin: auto;&lt;br/&gt;
                    border-radius:25px;&lt;br/&gt;
                    width:50%;&lt;br/&gt;
                    height:80%;&lt;br/&gt;
                }&lt;br/&gt;
                h2.titleText {&lt;br/&gt;
                    font-family: "Courier New";&lt;br/&gt;
                    color:rgb(0, 255, 170);&lt;br/&gt;
                }&lt;br/&gt;
                .button {&lt;br/&gt;
                    width: 100%;&lt;br/&gt;
                    height: 15%;&lt;br/&gt;
                    background-color: rgba(255, 255, 255, 0.9);&lt;br/&gt;
                    border: 0px;&lt;br/&gt;
                    border-radius:10px;&lt;br/&gt;
                }&lt;br/&gt;
            &lt;/style&gt;&lt;br/&gt;
       &lt;/head&gt;&lt;br/&gt;
       &lt;br&gt;&lt;br/&gt;
       &lt;div class="mainDiv"&gt;&lt;br/&gt;
        &lt;body&gt;&lt;br/&gt;
            &lt;h1 style="color:rgb(0, 255, 170);text-align:center;text-align:center;font-family:'Courier New'"&gt;title text&lt;/h1&gt; &lt;br/&gt;
            &lt;i style="color:rgb(212, 212, 212)"&gt;this doesn't do anything yet&lt;/i&gt;&lt;br/&gt;
            &lt;br&gt;&lt;br/&gt;
            &lt;br&gt;&lt;br/&gt;
            &lt;br&gt;&lt;br/&gt;
            &lt;button class="button"&gt;GAME TITLE 1&lt;/button&gt;&lt;br/&gt;
            &lt;br&gt;&lt;br/&gt;
            &lt;br&gt;&lt;br/&gt;
            &lt;button class="button"&gt;GAME TITLE 2&lt;/button&gt;&lt;br/&gt;
            &lt;br&gt;&lt;br/&gt;
            &lt;br&gt;&lt;br/&gt;
            &lt;button class="button"&gt;GAME TITLE 3&lt;/button&gt;&lt;br/&gt;
            &lt;br&gt;&lt;br/&gt;
            &lt;br&gt;&lt;br/&gt;
            &lt;button class="button"&gt;GAME TITLE 4&lt;/button&gt;&lt;br/&gt;
          &lt;/body&gt;&lt;br/&gt;
        &lt;/div&gt;&lt;br/&gt;
       &lt;/html&gt;&lt;br/&gt;
&lt;br/&gt;
&lt;br/&gt;
    &lt;!-- Bootstrap 5.0 Bundle with Popper --&gt;&lt;br/&gt;
    &lt;script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"&gt;&lt;/script&gt;&lt;br/&gt;
&lt;/body&gt;&lt;br/&gt;
&lt;br/&gt;
&lt;br/&gt;
    &lt;script src="/static/js/three.r119.min.js"&gt;&lt;/script&gt;&lt;br/&gt;
    &lt;script src="/static/js/vanta.birds.min.js"&gt;&lt;/script&gt;&lt;br/&gt;
    &lt;script&gt;&lt;br/&gt;
        VANTA.BIRDS({&lt;br/&gt;
            el: "body",&lt;br/&gt;
            mouseControls: true,&lt;br/&gt;
            touchControls: true,&lt;br/&gt;
            gyroControls: false,&lt;br/&gt;
            minHeight: 200.00,&lt;br/&gt;
            minWidth: 200.00,&lt;br/&gt;
            scale: 1.00,&lt;br/&gt;
            scaleMobile: 1.00&lt;br/&gt;
        })&lt;br/&gt;
    &lt;/script&gt;
            </code>
            </pre>
        </details>
    </li>
</ul>