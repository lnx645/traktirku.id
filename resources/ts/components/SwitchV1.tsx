/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import { useId } from 'react';

const Wrapper = styled.div`
  --toggleWidth: 60px;
  --toggleHeight: 25px;
  --switchSize: 25px;
  --dotSize: 6px;

  width: var(--toggleWidth);
  height: var(--toggleHeight);
  position: relative;
  display: inline-block;
`;

const ToggleInput = styled.input`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + label {
    border-color: var(--button-shadow);
    background-color: var(--primary-color);
  }

  &:checked + label:after {
    left: calc(var(--toggleWidth) - var(--switchSize));
  }

  &:checked + label:before {
    left: calc(var(--toggleWidth) - var(--switchSize) + 8px);
    background: var(--primary-color);
  }
`;

const ToggleLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
  border: 1px solid #cd2d27; /* Warna default saat off (merah) */
  background-color: #ed352d;
  background-image: linear-gradient(to top, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.3) 100%);
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  z-index: 5;
  transition: background-color 0.2s, border-color 0.2s;

  &:after {
    content: "";
    display: block;
    position: absolute;
    top: -1px;
    left: -1px;
    width: var(--switchSize);
    height: var(--switchSize);
    border: 1px solid rgba(0, 0, 0, 0.3);
    background-color: #fff;
    border-radius: 3px;
    background-image: linear-gradient(to top, rgba(230, 233, 239, 0.31) 0%, rgba(255, 255, 255, 0.31) 100%);
    transition: left 0.2s;
  }

  // Titik kecil di tengah switch
  &:before {
    content: "";
    display: block;
    position: absolute;
    top: calc((var(--switchSize) / 2) - 4px);
    left: calc((var(--switchSize) / 2) - 4px);
    width: var(--dotSize);
    height: var(--dotSize);
    border-radius: 50%;
    border: 1px solid rgba(0, 0, 0, 0.25);
    background: #d4d6db;
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.05);
    z-index: 10;
    transition: left 0.2s, background 0.2s;
  }
`;

interface ToggleProps {
  label?:string,
  checked: boolean;
  onChange: (checked: boolean) => void;
}
const WrapperContent = styled.div`
display:flex;
gap:10px;
align-items:center;
`
const Label = styled.label`
  font-weight:600;
  font-size:13px;
`
export default function SwitchV1({ checked, onChange,label }: ToggleProps) {
  const id = useId(); // Generate unique ID otomatis

  return (
    <WrapperContent>
      <Wrapper>
      <ToggleInput
        type="checkbox"
        id={id}
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
      <ToggleLabel htmlFor={id} />
    </Wrapper>
    <Label htmlFor={id}>{label}</Label>
    </WrapperContent>
  );
}
