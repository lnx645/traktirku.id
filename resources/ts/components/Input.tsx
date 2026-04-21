/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { ComponentPropsWithoutRef, useId } from 'react';

const BaseInput = styled.input`
    label: input;
    background-color: white;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 7px;
    outline: none;
    caret-color:#fe2c55;
    color:#000;
    height:36px;
    padding-left:10px;
    &:focus {
    border: 1px solid rgba(0, 0, 0, 0.2);
    }
`;

interface InputProps extends ComponentPropsWithoutRef<'input'> {
    label?: string;
}

export default function Input({ type = 'text', ...props }: InputProps) {
    const id = useId();
    return (
        <div
            css={css({
                display: 'flex',
                fontSize: 13,
                fontWeight: 500,
                flexDirection: 'column',
                gap: '1px',
            })}
        >
            {props.label && (
                <label
                    css={css`
                        color: #000000a8;
                        font-weight: 600;
                    `}
                    htmlFor={id}
                >
                    {props.label}
                </label>
            )}
            <BaseInput type={type} {...props} id={id} />
        </div>
    );
}
