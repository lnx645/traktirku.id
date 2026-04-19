import styled from '@emotion/styled';
import mq from '../lib/breakpoints';
const Container = styled.div(
    mq({
        color: ['red', 'black'],
    }),
);
export default function Welcome() {
    return (
        <Container>
            <h2>home</h2>
        </Container>
    );
}
