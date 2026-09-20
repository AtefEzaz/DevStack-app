# 🧱 Dev Stack Builder

A responsive React web app where developers can browse a curated catalog of technologies, filter through frontend, backend, database, and DevOps tools, and build their own personal "stack" by adding and removing items — with live toast notifications for every action.

**Live Site:** _add your deployed link here_
**Repository:** _add your GitHub link here_

## 🛠️ Technologies Used

- React.js (Vite)
- Tailwind CSS + DaisyUI
- React-Toastify
- JavaScript (ES6+)
- JSON (technology data)

## ✨ Features

1. **Curated technology catalog** — 15 technologies loaded dynamically from a JSON file, each with a category, difficulty level, rating, and badge, displayed in a fully responsive card grid (1/2/3 columns).
2. **Build-your-own stack** — Add any technology to a live "Your Stack" sidebar with one click; duplicate adds are blocked with a warning toast, and the button switches to a disabled "✓ Added to Stack" state.
3. **Instant feedback everywhere** — Every add, duplicate attempt, remove, and "Remove All" action triggers a react-toastify notification, plus a lightweight loading state while the JSON data is fetched.

## 🚀 Getting Started

```bash
npm install
npm run dev
```

---

## 📝 React Questions

**1. What is JSX, and why is it used in React?**
JSX is a syntax extension that lets us write HTML-like markup directly inside JavaScript. React uses it because it makes component structure easier to read and write than calling `React.createElement()` by hand — it gets compiled into regular JavaScript behind the scenes.

**2. What is the difference between props and state?**
Props are values passed into a component from its parent — they're read-only from the child's point of view. State is data a component manages internally and can change over time, usually in response to user actions. In this project, `technologies` and `stack` are state in `App.jsx`, while `tech`, `isAdded`, and `onAdd` are props passed down to `TechCard`.

**3. What does the `useState` hook do, and where did you use it in this project?**
`useState` lets a function component hold and update its own local data, re-rendering whenever that data changes. It's used in `App.jsx` to track the fetched `technologies` list, the `loading` flag, and the user's selected `stack` array.

**4. What does the `useEffect` hook do, and why did you need it to load the JSON data?**
`useEffect` runs side effects (like data fetching) after a component renders, optionally re-running when dependencies change. Fetching is a side effect, not something that should happen during render, so `useEffect` (with an empty dependency array) is used in `App.jsx` to fetch `technologies.json` once when the app first mounts.

**5. Why does every item in a `.map()` list need a unique `key` prop?**
React uses the `key` to track which list item is which between renders, so it can update, reorder, or remove the correct DOM node efficiently instead of re-rendering the whole list. Without stable unique keys, React can mix up items and cause bugs or unnecessary re-renders.

**6. What is conditional rendering? Show one place you used it (example: the empty stack message).**
Conditional rendering means showing different UI depending on some condition, usually with a ternary or `&&`. In `YourStack.jsx`, `{count === 0 ? <emptyState /> : <stackList />}` shows a "Your stack is empty" message when nothing is selected, and the actual list of items otherwise.

**7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?**
A parent passes data down to a child as props, e.g. `<TechCard tech={tech} isAdded={...} onAdd={handleAdd} />`. To send information back up, the parent passes a callback function as a prop; the child calls that function (e.g. `onAdd(tech)`), which runs the parent's own state-updating logic — this is how `TechCard` and `YourStack` report add/remove actions back to `App.jsx`.
