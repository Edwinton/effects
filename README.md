# 3D Tilt, Glow & Magnetic Library

A collection of lightweight, vanilla JavaScript and CSS snippets for premium micro-interactions.

## Modular Features
- **tilt.js**: 3D card tilt with parallax depth.
- **glow.css**: A spotlight that follows your mouse.
- **magnetic.js**: Buttons that pull toward the cursor.

## Usage

### 1. The 3D Tilt & Glow Card
```html
<link rel="stylesheet" href="glow.css">
<div class="tilt-card">
  <div class="tilt-inner">
    <h2>Card Title</h2>
  </div>
</div>
<script src="tilt.js"></script>
```

### 2. Magnetic Buttons
```html
<script src="magnetic.js"></script>
<button class="magnetic-btn">Hover Me</button>
```

## Customization
- Tilt Amount: change the 6 in tilt.js
- Parallax Depth: change translateZ(30px) in tilt.js
- Glow Color: change rgba(255, 123, 0, 0.15) in glow.css
- Magnetic Strength: change 0.3 in magnetic.js