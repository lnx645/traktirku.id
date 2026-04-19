const breakpoints = [576, 768, 992, 1200]

import type { CSSObject } from '@emotion/react';
import facepaint from 'facepaint'

const selector = breakpoints.map(bp => `@media (min-width: ${bp}px)`);

const mq = facepaint(selector) as unknown as  (style: CSSObject) => CSSObject;
export default mq;
