import styled from '@emotion/styled';
import { useId } from 'react';
const Container = styled.div`
    width: 51px;
    height: 31px;
    position: relative;
`;
const SwitchBase = styled.label`
    width: 100%;
    height: 100%;
    display: block;
    background-color: #e9e9eb;
    border-radius: 16px;
    cursor: pointer;
    transition: all 0.2s ease-out;
`;
const Slider = styled.span`
    width: 27px;
    height: 27px;
    position: absolute;
    left: calc(50% - 27px / 2 - 10px);
    top: calc(50% - 27px / 2);
    border-radius: 50%;
    background: #ffffff;
    box-shadow:
        0px 3px 8px rgba(0, 0, 0, 0.15),
        0px 3px 1px rgba(0, 0, 0, 0.06);
    transition: all 0.2s ease-out;
    cursor: pointer;
`;
const Checkbox = styled.input`
    opacity: 0;
    width: 0;
    height: 0;
    position: absolute;
    &:checked + label {
        background-color: #34c759;
    }
    &:checked + .switch .slider {
        left: calc(50% - 27px / 2 + 10px);
        top: calc(50% - 27px / 2);
    }
`;
export default function Switch({ checked, onChange }: { checked: boolean; onChange: (v: boolean) => void }) {
    const id = useId()
    return (
        <Container>
            <Checkbox id={id} type="checkbox" checked={checked} onChange={(e) => onChange(e.target.checked)}/>
            <SwitchBase className="switch" htmlFor={id}>
                <Slider className="slider"></Slider>
            </SwitchBase>
        </Container>
    );
}
