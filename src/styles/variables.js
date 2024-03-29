import { css } from "styled-components"

const variables = css`
  :root {
    --fz-xxs: 12px;
    --fz-xs: 13px;
    --fz-sm: 14px;
    --fz-md: 16px;
    --fz-lg: 18px;
    --fz-xl: 20px;
    --fz-xxl: 22px;
    --fz-heading: 32px;
    --fz-heading-sm: 48px;
    --fz-heading-md: 64px;
    --fz-heading-xl: 78px;

    --title-header: clamp(40px, 6vw, 80px);
    --title: clamp(32px, 4vw, 72px);
    --subtitle: clamp(18px, 3vw, 32px);
    --title-content: clamp(16px, 3vw, 20px);
    --title-card: clamp(12px, 1.3vw, 14px);
    --description: clamp(12px, 2vw, 16px);

    --border-radius: 4px;
    --border: 1px;
    --border-medium: 2px;
    --nav-height: 100px;
    --nav-scroll-height: 70px;

    --easing: cubic-bezier(0.645, 0.045, 0.355, 1);
    --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

    --font-mono: "SF Mono", "Fira Code", "Fira Mono", "Roboto Mono", monospace;
    --font-sans: "Calibre", "Inter", "San Francisco", "SF Pro Text";
    --font-oswald: "Oswald", sans-serif;
  }
`

export default variables
