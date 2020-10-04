import React from 'react'
import styled from 'styled-components';

export default function Article() {

    const MainContent = styled.div`
        background-color: ${props => props.theme.regalBlue};
        flex: 1;
        padding: 10px;
    `;
    const Sidebar = styled.div`
        flex: 0 auto;
        width: 200px;
        background-color: ${props => props.theme.dimGray};
        padding: 10px;
    `;

    const Wrapper = styled.div`
    display: flex;
    flex-flow: row nowrap;
    `;
    return (
        <Wrapper>
            <MainContent>
                Main Content
        </MainContent>
            <Sidebar>
                SideBar
        </Sidebar>
        </Wrapper>
    )
}
