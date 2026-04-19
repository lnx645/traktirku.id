/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { ComponentPropsWithoutRef } from 'react';

// 1. Styling dasar menggunakan variabel CSS yang kita bahas tadi
const BaseInput = styled.input`
    padding: 7px 10px;
    border: 2px solid #ccc;
    border-radius: 5px;
    font-size: 13px;
    color: #555;
    outline: none;
    &:focus {
        border-color: #007bff;
        box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
    }
`;

interface InputProps extends ComponentPropsWithoutRef<'input'> {
    label?: string;
}

export default function Input({ type = 'text', ...props }: InputProps) {
    return (
        <div
            style={{
                display: 'flex',
                fontSize: 13,
                fontWeight: 500,
                flexDirection: 'column',
                gap: '1px',
            }}
        >
            {props.label && (
                <label
                    css={css`
                        font-weight: 600;
                    `}
                >
                    {props.label}
                </label>
            )}
            <BaseInput type={type} {...props} />
        </div>
    );
}
