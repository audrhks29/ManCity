import styled from 'styled-components'

export const PlayerTable = styled.table`
    border: 1px solid #000;
    text-align: center;
    font-size: 14px;
    tbody {
        tr {
            :nth-child(1) {
                text-align: left;
            }
        }
    }
`;