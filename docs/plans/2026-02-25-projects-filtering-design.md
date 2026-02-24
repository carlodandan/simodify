# Projects Filtering Design

## Overview
This document outlines the design for implementing category-based filtering in the Projects section. The goal is to allow users to click on a project's category label to filter the entire project grid to show only projects belonging to that category, providing a seamless and intuitive way to explore the portfolio.

## Architecture & Data Flow

### State Management
- Introduce a new state variable `activeCategory` in the `Projects.tsx` component.
- The initial state will be `null` or an empty string, indicating that no filter is currently active (all projects are shown).

### Filtering Logic
- The existing `projects` array will serve as the source of truth.
- Creating a derived array, `filteredProjects`, by applying a `.filter()` based on the `activeCategory`.
- If `activeCategory` is null, `filteredProjects` equals `projects`.
- If `activeCategory` is set to a specific category string (e.g., "Web App"), `filteredProjects` contains only the items matching that category.

### Component Structure & Interaction
- **Category Labels:** The currently static category text within each project card will be wrapped in a `<button>` or a clickable `<span>` element.
- **Click Handler:** Clicking a category label will trigger a function `handleCategoryClick(category)`.
- **Toggle Behavior:** Inside `handleCategoryClick`, if the clicked category matches the current `activeCategory`, the state is reset to `null` (clearing the filter). Otherwise, it sets the state to the newly clicked category.

## UI/UX and Animations

### Interactive Feedback
- The category labels will receive hover states (e.g., underlining or slight color changes) to indicate clickability.
- When a category is active, its corresponding label across all visible cards might receive a slightly emphasized style to denote the active filter.

### Grid Animations
- The primary grid container will utilize Framer Motion's `AnimatePresence` to handle the smooth entry and exit of project cards as the filter changes.
- Cards that are filtered out will gracefully animate away (e.g., scaling down or fading out).
- Cards that remain or newly appear will animate into their new grid positions using a unified layout animation approach.

### Clear Filter Indication
- A subtle "Clear Filter" or "Show All" button will conditionally render above the grid whenever `activeCategory` is not null. This provides an explicit way for users to return to the full list without having to click the category label again.
- This button will also feature smooth entrance and exit animations.

## Implementation Steps
1. Add state for `activeCategory`.
2. Update the mapping logic in the JSX to map over `filteredProjects` instead of `projects`.
3. Wrap the category label in an interactive element with an `onClick` handler.
4. Integrate `AnimatePresence` around the grid items for smooth filtering transitions.
5. Add the conditional "Clear Filter" UI element above the grid.
