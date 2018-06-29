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

export default Heading;