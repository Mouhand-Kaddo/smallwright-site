# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Astro 7 with Tailwind CSS 4 and pnpm, static output, no client JavaScript framework. Deployed to GitHub Pages at `mouhand-kaddo.github.io/smallwright-site/` once the app's first public release exists.

## Users

Android tinkerers and developers who might install an alpha. They arrive from GitHub, a forum post or a link, read on a phone or a laptop, and decide whether to download two APKs and bring their own model key. The site's job is to get them to the GitHub release.

## Product Purpose

The site showcases Smallwright, an Android app that builds Android apps on the phone. A person describes an app in a chat; a cloud model writes plain Java and XML; the phone compiles, signs and installs it. Success is a visitor who understands what it does and what leaves the phone, and goes to the release.

## Positioning

Only the model runs in the cloud. Source files, the compiler, builds and the finished apps stay on the phone. Generated apps are ordinary native Java/XML Android apps, not previews, web views or streamed emulators.

## Operating Context

- Two apps: the Builder (holds projects, the model key and the chat) and the Worker (compiles with ECJ, D8 and AAPT2, has its own Android user and no Internet permission, accepts only the Builder signed with the same key).
- The Builder asks before new apps, plans, edits in steps until the model is done, and can run in the background. It can make app icons and pictures, look things up, read crash reports, look at the running app, and undo its last change.
- Each project gets its own signing key. Installing goes through Android's own confirmation screen. Generated code never runs inside the Builder.
- On first start the Builder shows Google's Android SDK terms and, once accepted, downloads Google's Android platform files to the phone.
- Install: download both APKs from the latest release, worker first, then builder, both from the same release.

## Capabilities and Constraints

- Requirements: Android 12 or newer on a 64-bit ARM phone; an API key for OpenRouter or any OpenAI-compatible service.
- Requests are paid by the user, per request, with no spending limit set by the app. Messages, the project's source files and attached pictures are sent to that service and the chosen model.
- Web search, app icons and pictures, attached pictures, cost totals and the spending limit need OpenRouter.
- Status: alpha. Do not show test counts or name the test phone.
- License: Apache-2.0; third-party files keep their own licenses.
- The product name and release URL may still change; they live in one config file in this repo.
- Terminology on the site: "Builder" and "Worker" (the app repo's glossary calls the Builder the Controller internally).

## Brand Commitments

- Name: Smallwright.
- Launcher icons: the Builder is a rounded phone slab with a prompt chevron, the Worker is the same slab with a cursor square. Both are #7AA2F7 on #1A1B26 (Builder) or #24283B (Worker). Source vectors are in the app repo under `controller/src/main/res/drawable/ic_launcher_foreground.xml` and `worker/src/main/res/drawable/ic_launcher_foreground.xml`.
- Voice: plain and factual, matching the app's README. Every claim must match the README.

## Evidence on Hand

- The app README and docs/STATUS.md in `~/Work/phone-local-builder`.
- Real screenshots of the current Builder and of generated apps are still to be taken on the test phone. No screenshots of the renamed app exist yet. No mockups, invented UI, stock images, testimonials, user counts or benchmarks may be fabricated.

## Product Principles

- Say exactly what leaves the phone and what stays on it.
- Show real output from the phone, never an illustration standing in for it.
- Be honest about alpha status and cost: the user pays the model provider directly.
- One decision for the visitor: go to the release.

## Accessibility & Inclusion

WCAG 2.2 AA. Readable without JavaScript.
