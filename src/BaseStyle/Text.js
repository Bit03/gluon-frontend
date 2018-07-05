import styled from 'styled-components';

const Text = styled.span`
    color: ${p => p.color ? p.color : '#666666'};
    font-size: ${p => p.size ? p.size + 'px' : '14px'};
    font-family: ${p => p.family ? p.family : null};
    font-weight: ${p => p.bold ? 'bold' : null};
    margin: ${p => p.margin ? p.margin : null};
`;

Text.p = Text.withComponent('p');
Text.block = Text.extend`
    display: block;
    margin-top: ${p => p.mtop ? p.mtop + 'px' : null};
`;
Text.item = Text.extend`
    display: block;
    font-weight: bold;
    font-size: 20px;
    color: #3B3B3B;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    padding: ${p => p.padding ? p.padding : null};
`;
Text.digest = Text.extend`
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
`;

Text.detail = Text.extend`
    font-size: 16px;
    color: #3B3B3B;
`;

export default Text;