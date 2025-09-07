# Medical Management Dashboard

## Overview

This is a comprehensive medical management system built with React (frontend) and Express.js (backend) that manages patients, medical staff, and equipment. The application provides a dark-themed dashboard interface for healthcare facilities to track patient information, employee details, and medical equipment status. The system uses a PostgreSQL database with Drizzle ORM for data persistence and includes real-time state management through TanStack Query.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite for fast development and building
- **UI Library**: Radix UI components with shadcn/ui design system for consistent, accessible interfaces
- **Styling**: Tailwind CSS with custom dark theme configuration and CSS variables for theming
- **State Management**: TanStack React Query for server state management and caching
- **Routing**: Wouter for lightweight client-side routing
- **Forms**: React Hook Form with Zod validation for type-safe form handling
- **Build Tool**: Vite with custom configuration for path aliases and development features

### Backend Architecture
- **Framework**: Express.js with TypeScript for REST API endpoints
- **Database ORM**: Drizzle ORM with PostgreSQL dialect for type-safe database operations
- **Data Storage**: In-memory storage implementation (MemStorage) with interface for easy database swapping
- **API Structure**: RESTful endpoints for CRUD operations on patients, employees, and gear
- **Middleware**: Custom logging middleware for API request tracking and error handling

### Database Schema Design
The system uses three main entities:
- **Patients**: Stores patient demographics, insurance information, health monitoring status, and medical history
- **Employees**: Manages medical staff with roles, specializations, and employment status
- **Gear**: Tracks medical equipment with operational status, costs, and maintenance schedules

Each entity uses UUID primary keys and includes comprehensive validation through Zod schemas.

### Component Architecture
- **Form Components**: Reusable form components for each entity with validation and error handling
- **UI Components**: Comprehensive set of accessible UI components from Radix UI/shadcn
- **Modal System**: Confirmation dialogs and form modals for user interactions
- **Dashboard Layout**: Single-page application with tabbed navigation between different data views

### Development and Build Process
- **Development**: Hot module replacement with Vite development server
- **TypeScript**: Strict type checking with shared types between client and server
- **Path Aliases**: Configured for clean imports (@/, @shared/, @assets/)
- **Build Process**: Separate builds for client (Vite) and server (esbuild) with production optimization

## External Dependencies

### Database and ORM
- **PostgreSQL**: Primary database with Neon serverless database support
- **Drizzle ORM**: Type-safe database operations with schema migration support
- **Drizzle Kit**: Database migration and schema management tools

### UI and Styling
- **Radix UI**: Accessible component primitives for complex UI interactions
- **Tailwind CSS**: Utility-first CSS framework with custom dark theme
- **Lucide React**: Icon library for consistent iconography
- **Class Variance Authority**: Utility for creating variant-based component APIs

### State Management and Data Fetching
- **TanStack React Query**: Server state management, caching, and synchronization
- **React Hook Form**: Form state management with minimal re-renders
- **Zod**: Runtime type validation and schema parsing

### Development Tools
- **TypeScript**: Static type checking across the entire application
- **Vite**: Fast build tool with HMR and optimized production builds
- **PostCSS**: CSS processing with Tailwind CSS and Autoprefixer
- **ESBuild**: Fast bundling for server-side code

### Fonts and Assets
- **Google Fonts**: Inter for UI text and Fira Code for monospace elements
- **Custom Font Loading**: Preconnected font loading for performance optimization