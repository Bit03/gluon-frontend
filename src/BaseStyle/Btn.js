import styled from 'styled-components';

const Btn = styled.a`
    color: ${p => p.color ? p.color : '#666666'};
    font-size: ${p => p.size ? p.size + 'px' : '14px'};
    font-family: ${p => p.family ? p.family : null};
    font-weight: ${p => p.bold ? 'bold' : null};
    padding: ${p => p.padding ? p.padding : null};
    width: ${p => p.width ? p.width + "px" : null};
    height: ${p => p.height ? p.height + "px" : null};
    border: ${p => p.border ? "1px solid #bababa" : null};

    cursor: pointer;
    display: flex;
    align-content: center;
    justify-content: center;
`;


export default Btn;