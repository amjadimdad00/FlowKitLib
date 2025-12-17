# FlotKitLib ⚙️

### A modern React component library for predictable structure and fast UI development

**FlowKitLib** is a reusable React component library built with a strong focus on structure, flexibility, and long-term maintainability.
It’s designed for developers who want clean components, consistent patterns, and a solid tooling setup out of the box.

> 📦 Using the library? Installation and usage docs are on npm.  
> 🛠 Working on the library or contributing? You’re in the right place.

---

## ✨ What this library focuses on

- Predictable and scalable component structure
- Reusable UI primitives for real projects
- Type-safe development with TypeScript
- Smooth DX with Storybook, Rollup, and ESLint

This isn't an app template. It’s a **true component library** meant to be published, versioned, and reused.

---

## ✨ Features

### 🧩 Component Library Architecture

- Clean, isolated React components
- Designed for reuse across multiple projects
- Peer dependency–safe React setup

### 📚 Storybook Integration

- Interactive component previews
- Isolated development environment
- Built-in addons for controls, actions, and docs

### 🛠️ Build & Distribution

- Bundled using **Rollup**
- Supports **ESM** and **CommonJS**
- Auto-generated type definitions (`.d.ts`)
- Ready for npm publishing

### 🧪 Testing & Quality

- Unit testing with **Jest** + **Testing Library**
- ESLint with TypeScript support
- Consistent commits using Commitlint + Husky

---

## 🧠 Design Philosophy

- Predictability over magic
- Composition over configuration
- Explicit APIs over hidden behavior
- Library-first, framework-agnostic mindset

---

## 🛠️ Tech Stack

### Core

- React (peer dependency)
- TypeScript

### Styling

- styled-components
- PostCSS

### Build

- Rollup
- @rollup/plugin-node-resolve
- @rollup/plugin-commonjs
- @rollup/plugin-typescript
- rollup-plugin-dts

### Tooling

- Storybook
- Jest + jsdom
- ESLint
- Husky
- standard-version

---

## 🚀 Development

```bash
git clone https://github.com/amjadimdad00/FlowKitLib.git
cd FlowKitLib
npm install
npm run build
```

---

## 📚 Storybook

```bash
npm run storybook
npm run build-storybook
```

---

## 🧪 Testing

```bash
npm run test
```

---

## 📁 Output Structure

```bash
dist/
  ├─ cjs/
  ├─ esm/
  └─ index.d.ts
```

---

## 🔧 Linting

```bash
npm run lint
npm run lint:fix
```

---

## 🚧 Current Limitations

- No framework-specific adapters yet
- styled-components only (for now)
- Limited base components in early versions
- No theming system yet

---

## 🧭 Roadmap

- Expand core UI primitives
- Accessibility improvements
- Token-based theming
- Framework adapters
- Documentation website

---

## 🤝 Contributing

1. Fork the repo
2. Create a feature branch
3. Add or improve components with tests
4. Update Storybook if needed
5. Open a PR

---

## 📦 Versioning

- Semantic versioning
- standard-version for releases

```bash
npm run release
```

---

## 📜 License

MIT License
You’re free to use, modify, and distribute this library.

---

<p align="center"> Built with ❤️ by <b>Amjad Imdad</b><br> ⭐ Star the repo if you find it useful<br> <sub>Feedback, issues, and PRs are always welcome.</sub> </p>
