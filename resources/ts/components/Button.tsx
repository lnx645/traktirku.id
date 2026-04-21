/** @jsxImportSource @emotion/react */
import Styled from '@emotion/styled';
import { ReactNode } from 'react';

const variants = {
    default: { bg: 'rgb(248, 248, 248)', border: 'rgb(156, 156, 156)' },
    success: { bg: '#58cc02', border: '#46a302' },
    danger: { bg: '#fe2c55', border: '#d24545' },
    warning: { bg: '#ffc800', border: '#e5a400' },
    info: { bg: '#1cb0f6', border: '#1899d6' },
};

type VariantType = keyof typeof variants;

interface ButtonBaseProps {
    variant?: VariantType;
    block?: boolean;
    disabled?: boolean; // Tambahkan props disabled di sini
}

const ButtonBase = Styled.button<ButtonBaseProps>(function ({
    variant = 'default',
    disabled,
    block = false,
}) {
    const color = variants[variant] ?? variants.default;

    return `
    -webkit-tap-highlight-color:transparent;
    width: ${block ? '100%' : 'auto'};
    overflow: hidden;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: 1px solid ${disabled ? '#d3d3d3' : color.border};
    font-family: "Istok Web", sans-serif;
    letter-spacing: 1px;
    padding: 0 12px;
    text-align: center;
    height: 40px;
    font-size: 14px;
    text-transform: capitalize;
    font-weight: normal;
    border-radius: 1rem;
    outline: none;
    user-select: none;
    cursor: ${disabled ? 'not-allowed' : 'pointer'};
    transform: translateY(0px);
    position: relative;
    background: ${disabled ? '#e5e5e5' : color.bg};
    color: ${disabled ? '#afafaf' : variant == 'default' ? 'rgb(82, 82, 82)' : 'white'};
    transition: 150ms all ease-in-out;

    /* Logic Box Shadow saat disabled vs normal */
    box-shadow: ${
        disabled
            ? `0 3px 0 #d3d3d3` // Shadow flat saat disabled
            : `inset 0 30px 30px -15px rgba(255, 255, 255, 0.1),
         inset 0 0 0 1px rgba(255, 255, 255, 0.3),
         inset 0 1px 20px rgba(0, 0, 0, 0),
         0 3px 0 ${color.border},
         0 3px 2px rgba(0, 0, 0, 0.2),
         0 5px 10px rgba(0, 0, 0, 0.1),
         0 10px 20px rgba(0, 0, 0, 0.1)`
    };

    &:active {
      ${
          !disabled &&
          `
        transform: translateY(3px);
        box-shadow:
          inset 0 16px 2px -15px rgba(0, 0, 0, 0),
          inset 0 0 0 1px rgba(255, 255, 255, 0.15),
          inset 0 1px 20px rgba(0, 0, 0, 0.1),
          0 0 0 ${color.border},
          0 0 0 2px rgba(255, 255, 255, 0.5),
          0 0 0 rgba(0, 0, 0, 0),
          0 0 0 rgba(0, 0, 0, 0);
      `
      }
    }

    svg {
      width: 24px;
      margin-right: 8px;
      filter: ${disabled ? 'grayscale(1)' : 'none'};
    }
`;
});

export default function Button({
    children,
    variant = 'default',
    disabled = false,
    ...props
}: {
    variant?: VariantType;
    children: ReactNode;
    block?: boolean;
    disabled?: boolean;
    [key: string]: any;
}) {
    return (
        <ButtonBase variant={variant} disabled={disabled} {...props}>
            {children}
        </ButtonBase>
    );
}
