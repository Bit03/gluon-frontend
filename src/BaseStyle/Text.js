import styled from 'styled-components';

const Text = styled.span`
    color: ${p => p.color ? p.color : '#666666'};
    font-size: ${p => p.size ? p.size + 'px' : '14px'};
    font-family: ${p => p.family ? p.family : null};
    font-weight: ${p => p.bold ? 'bold' : null};
`;

Text.p = Text.withComponent('p');
Text.block = Text.extend`
    display: block;
    margin-top: ${p => p.mtop ? p.mtop + 'px' : null};
`;

export default Text;