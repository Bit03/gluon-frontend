import styled from 'styled-components';

const Heading = styled.h1`
    color: ${p => p.color ? p.color : '#3b3b3b'};
    font-size: ${p => p.size ? p.size : "32px"};
`;

Heading.h2 = styled.h2`
    color: ${p => p.color ? p.color : '#3b3b3b'};
    font-size: ${p => p.size ? p.size : "20px"};
`;

Heading.h3 = styled.h3`
    color: ${p => p.color ? p.color : '#3b3b3b'};
    font-size: ${p => p.size ? p.size : "18px"};
    margin-bottom: ${p => p.mbottom ? p.mbottom + 'px' : '#3b3b3b'};
`;

Heading.h4 = styled.h4`
    color: ${p => p.color ? p.color : '#3b3b3b'};
    font-size: ${p => p.size ? p.size : "16px"};
`;
Heading.item = styled.h2`
    font-size: 20px;
    color: #3B3B3B;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
`;

export default Heading;