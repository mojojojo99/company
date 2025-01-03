---
layout: page
title: Reviews 
description: See all reviews we've collected from our customers!
order: 5
name2: reviews 

image: reviews.jpg
image2: reviews2.jpg
---
<section>
<h2>Reviews</h2>

Read here what customers/clients have said about us! <br/> <br/>

Please feel free to <b><a href="#divReviewForm" style="color: #660000" >leave your own review</a> </b> below too or connect with us through <a href="https://api.whatsapp.com/send/?phone=6591125678">whatsapp</a>, <a href="tel:+6591125678">phone</a> or email. <br />
<hr />

{% assign comments = site.data.comments | where_exp: "item", "true" %} 
{% assign sorted_comments = comments | sort: 'date' | reverse %}

<div class="boo_inner clearfix">
{% for comment in sorted_comments %}
{% capture number %}{{ forloop.length }}{% endcapture %}
{% assign i = forloop.index0 | plus:1 %}
<div class="slide_content">
	<div class="testimonial_2" style="background-color: #c5d5e6; margin: 2em 0">
		<div class="content_2" style="overflow-wrap:break-word">
	            <div class="row uniform">
                <div class="6u 12u(small)" style="padding: 0 0 0 1.5em">
			            <h3 style="text-align:left; padding-top:1em">{{comment.name}}</h3>
                </div>
                <div class="6u 12u(small)" style="padding: 0 0 0 1.5em">
                {% if comment.rating == "5" %}
                  <h3 style="text-align:left; font-size:2em; color: gold; text-shadow: 3px 3px #2e3842;">★★★★★</h3>
                {% elsif comment.rating == "4" %}
                  <h3 style="text-align:left; font-size:2em; color: gold; text-shadow: 3px 3px #2e3842;">★★★★</h3>
                {% elsif comment.rating == "3" %}
                  <h3 style="text-align:left; font-size:2em; color: gold; text-shadow: 3px 3px #2e3842;">★★★</h3>
                {% elsif comment.rating == "2" %}
                  <h3 style="text-align:left; font-size:2em; color: gold; text-shadow: 3px 3px #2e3842;">★★</h3>
                {% else %}
                  <h3 style="text-align:left; font-size:2em; color: gold; text-shadow: 3px 3px #2e3842;">★</h3>
                {% endif %}
                </div>
              </div>
            <hr style="margin: 1.5em 0"/>
            <div style="text-align:left">
            {{comment.message | strip_html | markdownify }} 
            <br />
            <br />
            <p>
              <time
                class="post-meta dt-published"
                datetime="{{ page.date | date_to_xmlschema }}"
                itemprop="datePublished"
              >
                {%- assign date_format = site.minima.date_format | default: "%b %-d, %Y" -%}
                {{ comment.date | date:"%H:%M - %b %-d, %Y" }}
              </time>
            </p>
            <div>
            </div>
            </div>
	    </div>
</div>
</div>
{% endfor %}

</div>
<div>
</div>
	


<hr/>

<h2>Leave your own Review</h2>

<div id="divReviewForm">
<form id="myform" action="https://jojo-static-20439876cdb1.herokuapp.com/v3/entry/github/mojojojo99/company/master/comments"
 method="POST" onsubmit="return submitForm()" class="comment-form">
  <input
    name="options[redirect]"
    type="hidden"
    value="{{ page.url | absolute_url }}"
  />
 <input name="options[slug]" type="hidden" value="{{ page.slug }}" />
  <p style="text-align: left; margin: 0;"><b>Name (required)</b></p>
  <input
    class="comment-name"
    name="fields[name]"
    type="text"
    placeholder="Name"
    required
  />
  <br />
  <p style="text-align: left; margin: 0; font-size: 0.8em"><b>Phone Number</b></p>
  <p style="font-size: 0.6em; text-align: left; margin-bottom: .25em">We'll follow up about your review through the contact number here if provided.</p>
  <input
    class="comment-phone"
    name="fields[phone]"
    type="tel"
    pattern="[0-9]{4} [0-9]{4}"
    placeholder="8888 8888"
    title="8888 8888"
  />
  <br />
  <p style="text-align: left; margin: 0;"><b>Feedback (required)</b></p>
  <textarea
    class="comment-message"
    name="fields[message]"
    placeholder="Feedback/Testimonial message (optional)"
    onkeyup="textAreaAdjust(this)"
    style="overflow:hidden"
  ></textarea>
  <br/>
  <p style="text-align: left; margin: 0;"><b>Leave a 1-5 star rating here (required)</b></p>
  <div id="warning-rating" class="apparent-message warning-message">
  <div class="message-container">
    <div class="apparent-message-icon fa fa-fw fa-2x fa-exclamation-triangle" style="white">
        </div>
        <div class="content-container" style="background-color: white">
            <div class="message-body">Please mark out a 1-5 star rating below before submitting!</div>
        </div>
  </div>
  </div>
  <div class="comment-rating" style="font-size:3.5em; padding-top:.25em">
      <input id="star5" name="fields[rating]" type="radio" value="5" class="radio-btn" />
      <label style="color: #2e3842" for="star5">☆</label>
      <input id="star4" name="fields[rating]" type="radio" value="4" class="radio-btn" />
      <label style="color: #2e3842" for="star4">☆</label>
      <input id="star3" name="fields[rating]" type="radio" value="3" class="radio-btn" />
      <label style="color: #2e3842" for="star3">☆</label>
      <input id="star2" name="fields[rating]" type="radio" value="2" class="radio-btn" />
      <label style="color: #2e3842" for="star2">☆</label>
      <input id="star1" name="fields[rating]" type="radio" value="1" class="radio-btn" />
      <label style="color: #2e3842" for="star1">☆</label>
      <div class="clear"></div>
  </div>
  <br/>
  <button class="comment-submit" type="submit">Leave a review</button>
</form>
</div>

<hr/>