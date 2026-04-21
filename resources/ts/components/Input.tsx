/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { ComponentPropsWithoutRef, useId } from 'react';

const BaseInput = styled.input`
    label: input;
    background-color: #f9f9f9;
    border: 1px solid rgb(188, 188, 188);
    border-radius: 7px;
    outline: none;
    padding: 9px 12px;
    &:focus {
        border-color: rgb(110, 110, 110);
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
