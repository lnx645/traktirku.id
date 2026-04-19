/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import { useId } from 'react';

const Container = styled.div`
  display: inline-block;
  box-sizing: border-box;
`;

const ToggleInput = styled.input`
  display: none;

  &:checked + label {
    background: #86d993;
  }

  &:checked + label:active {
    box-shadow: none;
  }

  &:checked + label:after {
    left: 50%;
  }

  &:checked + label:active:after {
    margin-left: -0.8em;
  }
`;

const ToggleBtn = styled.label`
  outline: 0;
  display: block;
  width: 4em;
  height: 2em;
  position: relative;
  cursor: pointer;
  user-select: none;
  background: #fbfbfb;
  border-radius: 2em;
  padding: 2px;
  transition: all 0.4s ease;
  border: 1px solid #e8eae9;

  &:after {
    position: relative;
    display: block;
    content: "";
    width: 50%;
    height: 100%;
    left: 0;
    border-radius: 2em;
    background: #fbfbfb;
    transition: left 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275), padding 0.3s ease, margin 0.3s ease;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1), 0 4px 0 rgba(0, 0, 0, 0.08);
  }

  &:hover:after {
    will-change: padding;
  }

  &:active {
    box-shadow: inset 0 0 0 2em #e8eae9;
  }

  &:active:after {
    padding-right: 0.8em;
  }
`;

export default function IosToggle({ checked, onChange }: { checked: boolean; onChange: (v: boolean) => void }) {
  const id = useId();
  return (
    <Container>
      <ToggleInput id={id} type="checkbox" checked={checked} onChange={(e) => onChange(e.target.checked)} />
      <ToggleBtn htmlFor={id} />
    </Container>
  );
}
