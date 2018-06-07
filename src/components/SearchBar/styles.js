import styled from 'styled-components';

const TextInput = styled.input.attrs({
    type: 'text'
})`
    color: #fff;
    font-size: 14px;
    width: 100%;
    height: 36px;
    line-height: 36px;
    border: none;
    padding: 0;
    padding-left: 20px;
    background: rgba(255,255,255,0.10);
    ::-webkit-input-placeholder {
        color: #fff;
        opacity: 0.5;
    }
    :focus {
        border: none;
        outline: none;
    }
`;
const Wrapper = styled.div`
    width: 240px;
    height: 36px;
`;

export {
    TextInput,
    Wrapper
}