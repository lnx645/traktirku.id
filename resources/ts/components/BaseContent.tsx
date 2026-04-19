/** @jsxImportSource @emotion/react */
import mq from '@/lib/breakpoints';
import { css } from '@emotion/react';
import { ReactNode } from 'react';

const contentStyle = css(mq({
    paddingInline:[10,"3rem"]
}));

export const BaseContent = ({ children }: { children: ReactNode }) => {
    return <div css={contentStyle}>{children}</div>;
};

