📌 What is a Card Component?
A Card Component is one of the most fundamental UI patterns in React. It is a self-contained, reusable block that displays a consistent piece of information — in this case, a photo, a name, and a location — in a styled box.
Instead of writing the same HTML twice for two "Tulips – Amsterdam" cards, you write the component once and render it as many times as needed by passing different data (props) each time.
🧠 Core React Concepts Used
1. Components: A component is a JavaScript function that returns JSX (HTML-like syntax).
2. Props (Properties): Props are how you pass data into a component from its parent. They make the component reusable.
3. Reusability : The same <Card /> component is rendered twice (or as many times as needed) with different props. This is the core power of React — write once, use everywhere.


📁 File Structure
src/
├── components/
│   ├── Card.jsx          ← The reusable card component
│   └── Card.css          ← Card-specific styles
├── App.jsx               ← Renders cards using props
└── main.jsx              ← Entry point

<img width="956" height="410" alt="card-component" src="https://github.com/user-attachments/assets/466c8ce6-8597-4dd3-a097-6ff58dcca2a6" />
