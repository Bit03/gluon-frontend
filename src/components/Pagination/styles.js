import styled from 'styled-components';

const Wrapper = styled.ul`
    height: 40px;
    display: flex;
    align-items: center;
`;

const Num = styled.li`
    border: ${ p => p.active ? "1px solid #e0e0e0" : null };
    background: ${ p => p.active ? "#fafafa" : null };
    box-shadow: ${ p => p.active ? "0 1px 4px 0 rgba(32,32,32,0.05)" : null };

    border-radius: 3px;
    padding: 8px 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    color: #666666;
    cursor: pointer;
`;

const Btn = styled.button`
    font-size: 14px;
    color: #666666;
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
`;

export {
    Wrapper,
    Num,
    Btn
}