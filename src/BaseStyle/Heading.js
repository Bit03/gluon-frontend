import styled from 'styled-components';

const Heading = styled.h1`
    color: ${p => p.color ? p.color : '#3b3b3b'};
    font-size: ${p => p.size ? p.size + "px" : "32px"};
`;

Heading.h2 = styled.h2`
    color: ${p => p.color ? p.color : '#3b3b3b'};
    font-size: ${p => p.size ? p.size + "px" : "20px"};
    font-weight: ${p => p.bold ? "bold" : null};
    margin: ${p => p.margin ? p.margin : null};
    padding: ${p => p.padding ? p.padding : null};
`;

Heading.h3 = styled.h3`
    color: ${p => p.color ? p.color : '#3b3b3b'};
    font-size: ${p => p.size ? p.size + "px" : "18px"};
    margin-bottom: ${p => p.mbottom ? p.mbottom + 'px' : '#3b3b3b'};
`;

Heading.h4 = styled.h4`
    color: ${p => p.color ? p.color : '#3b3b3b'};
    font-size: ${p => p.size ? p.size + "px" : "16px"};
`;

Heading.item = styled.h2`
    font-size: 20px;
    color: #3B3B3B;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
`;

Heading.digest = Heading.h2.extend`
    margin: ${p => p.margin ? p.margin : null};
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
`;

export default Heading;