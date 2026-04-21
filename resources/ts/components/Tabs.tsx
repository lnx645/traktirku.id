import React, { useState } from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
    font-family:
        'Serif', Georgia, li-serif; /* Mengikuti style font di gambar */
`;

const TabList = styled.div`
    display: flex;
    align-items: flex-end;
    border-bottom: 1px solid #ccc;
`;

const TabButton = styled.button<{ isActive: boolean }>`
    padding: 4px 20px;
    cursor: pointer;
    font-weight: bold;
    background: transparent;
    font-size: 13px;
    border: 1px solid transparent;
    margin-bottom: -1px;

    ${(props) =>
        props.isActive &&
        `
    background:white;
    border: 1px solid #ccc;
    border-bottom: 1px solid white;
    border-radius: 4px 4px 0 0;
    z-index: 1;
  `}

    &:hover {
        color: #666;
    }
`;

const Content = styled.div`
    padding: 5px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-top: none;
    background: white;
    font-style: italic; /* Sesuai contoh gambar "After 'while, Crocodile!" */
`;

export default function ClassicTabs() {
    const [activeTab, setActiveTab] = useState('Croc');

    const tabs = [
        { id: 'Gator', label: 'Gator', text: 'See you later, Alligator!' },
        { id: 'Croc', label: 'Croc', text: "After 'while, Crocodile!" },
        { id: 'Sarcosuchus', label: 'Sarcosuchus', text: 'Ancient giant!' },
    ];

    return (
        <Container>
            <TabList>
                {tabs.map((tab) => (
                    <TabButton
                        key={tab.id}
                        isActive={activeTab === tab.id}
                        onClick={() => setActiveTab(tab.id)}
                    >
                        {tab.label}
                    </TabButton>
                ))}
            </TabList>

            <Content>{tabs.find((t) => t.id === activeTab)?.text}</Content>
        </Container>
    );
}
