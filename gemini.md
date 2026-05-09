# gemini.md — Spice Heritage Website Specification

## Project Overview

Spice Heritage is a premium food recipe restaurant website that blends traditional culinary heritage with modern digital experience. The platform serves both as a restaurant showcase and a recipe/content hub.

Tech Stack:

* Tailwind CSS (UI & responsiveness)
* Vanilla JavaScript (interactivity)

Design Philosophy:

* Elegant, warm, cultural
* Rich food storytelling
* High-conversion restaurant UX

---

## Brand Identity

**Brand Name:** Spice Heritage
**Tagline:** Rooted in Tradition. Bold in Taste.

**Core Values:**

* Tradition
* Authenticity
* Flavor richness
* Cultural storytelling

**Color Palette:**

* Primary: Deep Brown (#3b2f2f)
* Accent: Spice Orange (#ea580c)
* Secondary: Cream (#fef3c7)
* Dark Mode: Charcoal (#111827)

**Typography:**

* Headings: Playfair Display (elegant)
* Body: Inter / Open Sans

---

## Website Structure

### 1. Navbar

* Logo (Spice Heritage)
* Links: Home, Menu, Recipes, Videos, About, Contact
* Sticky on scroll
* Mobile menu toggle (JS)
* Dark mode toggle

---

### 2. Hero Section

* Full-screen food background/video
* Headline:

  > "Experience the Taste of Tradition"
* Subtext storytelling
* CTA:

  * Explore Menu
  * Discover Recipes

---

### 3. Featured Dishes (Menu)

* Grid layout
* Dish image + name + price
* Hover animations
* Categories filter (JS)

---

### 4. Recipe Section

* Recipe cards:

  * Image
  * Title
  * Ingredients preview
  * "View Recipe"
* Recipe detail page:

  * Ingredients
  * Steps
  * Cooking time

---

### 5. Video Cooking Section

* Video grid
* Click opens modal player
* Categories (e.g., Soups, Grills, Desserts)

---

### 6. About Section

* Brand story
* Cultural inspiration
* Chef introduction

---

### 7. Reservation Section

* Booking form:

  * Name
  * Date
  * Time
  * Guests
* Validation (JS)

---

### 8. Testimonials

* Customer reviews slider
* Auto + manual navigation

---

### 9. Newsletter

* Email subscription form
* Validation

---

### 10. Footer

* Contact info
* Opening hours
* Social links

---

## JavaScript Features

### 1. Mobile Menu Toggle

* Show/hide nav menu

### 2. Dark Mode Toggle

* Tailwind `dark` class
* Save preference in `localStorage`

### 3. Video Modal

* Open/close modal
* Inject video source dynamically

### 4. Recipe Filter

* Filter recipes by category

### 5. Testimonials Slider

* Auto-slide + controls

### 6. Form Validation

* Reservation & newsletter forms

---

## Responsive Strategy

* Mobile-first approach
* Breakpoints: sm, md, lg
* Grid + flex layouts
* Use aspect-ratio for images
* Avoid fixed heights

---

## Performance Optimization

* Lazy load images
* Use optimized formats (WebP)
* Minify JS
* Tailwind purge

---

## Folder Structure

```
/spice-heritage
  /assets
    /images
    /videos
  /js
    main.js
  /pages
    recipe.html
  index.html
```

---

## Advanced Features (Future Ready)

### 1. Online Ordering

* Add cart system
* Checkout UI

### 2. Payment Integration

* Paystack / Flutterwave / Stripe

### 3. User Accounts

* Save favorite recipes
* Order history

### 4. Admin Panel

* Manage recipes & menu

---

## Final Vision

Spice Heritage should feel like:

* A luxury restaurant website
* A cultural food storytelling platform
* A recipe learning hub

The goal is to combine **tradition, taste, and technology** into one seamless digital experience.
