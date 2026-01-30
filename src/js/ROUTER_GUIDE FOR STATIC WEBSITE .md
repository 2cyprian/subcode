
# Client-Side Router Implementation Guide (Updated)

This guide documents the custom client-side router for Binary (Labs) and the major errors we solved during development.

---

## Router Features

- **Hash-based navigation:** Uses clean URLs like `#/` and `#binary-labs` for SPA-like navigation.
- **Dynamic content loading:** Loads page content into `#main-content` without full reloads.
- **Script injection:** Dynamically loads page-specific scripts (e.g., skills.js, lab.js) after content injection.
- **Page caching:** Caches loaded pages for instant navigation after first load.
- **Global link handling:** Intercepts all internal anchor clicks (navbar, footer, etc.) for router navigation.
- **Scroll to top:** Automatically scrolls to top on every route change.
- **Home route normalization:** Handles `#/`, `#`, and `/` as home.

---

## Common Errors & Solutions

### 1. Duplicate Variable Declarations
**Error:**
```
Uncaught SyntaxError: Identifier 'teamMembers' has already been declared
Uncaught SyntaxError: Identifier 'overviewData' has already been declared
```
**Cause:**
- Injecting scripts (skills.js, lab.js) multiple times caused global variables to be redeclared.

**Solution:**
- Refactored scripts so all variables are declared inside functions (function scope), not globally.
- Only call rendering functions on script load, no global objects.

### 2. ReferenceError for Old Objects
**Error:**
```
Uncaught ReferenceError: RenderEngine is not defined
```
**Cause:**
- Old code referenced global objects that were removed during refactoring.

**Solution:**
- Removed all references to old global objects and used function-based rendering only.

### 3. Syntax Errors from Stray Text
**Error:**
```
Uncaught SyntaxError: Unexpected identifier 'through'
```
**Cause:**
- Stray text or copy-paste errors at the top of lab.js.

**Solution:**
- Removed all non-JavaScript text from scripts.

### 4. Broken setInterval Code
**Error:**
```
Uncaught ReferenceError: intervalTime is not defined
```
**Cause:**
- Code referenced undefined variables (intervalTime, cards, current).

**Solution:**
- Removed broken setInterval code from lab.js.

---

## How to Extend
- Add new routes in `src/js/routers.js`.
- Add new page HTML files and, if needed, page-specific scripts.
- Always use function scope for variables in scripts to avoid redeclaration errors.

## Best Practices
- Never declare variables globally in injected scripts.
- Always clean up old scripts before injecting new ones.
- Use function-based rendering for all dynamic content.

---

For troubleshooting, check the router logic in `src/js/routers.js` and page scripts in `src/js/component/`.
