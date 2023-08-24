import styled from 'styled-components'
import { mainColor, subColor } from './MainStyle';

export const InnerContainer = styled.div`
    width: 1400px;
    margin: auto;
    padding: 30px 0;
    h2 {
            color: ${mainColor.rgb};
            font-size: 50px;
            font-weight: 700;
        }
`;

export const PlayerContainer = styled.ul`
    display: flex;
    flex-wrap: wrap;
    li {
        width: 260px;
        text-align: center;
        display: flex;
        flex-direction: column;
        margin: 20px 10px 0 10px;
        box-sizing: border-box;
        margin-top: 20px;
        box-shadow: 0 3px 6px rgba(28, 44, 91, 0.5), 0 3px 6px rgba(28, 44, 91, 0.23);
        position: relative;
        cursor: pointer;

        &::after {
            content: attr(data-id);
            position: absolute;
            right: 10px;
            font-size: 60px;
            font-weight: 700;
            line-height: 60px;
            letter-spacing: -5px;
            text-shadow: 0 0 4px black;
            color: white;
        }

        &:hover::after {
            color: ${subColor.rgb};
            text-shadow: none;
        }

        &:hover {
            strong {
                color: ${subColor.rgb};
                text-shadow: none;
            }

            span {
                background: ${subColor.rgb};
                color: white;
            }
        }

        img {
            display: block;
            width: 200px;
            margin: auto;
            margin-top: 20px;
        }

        span {
            font-size: 30px;
            height: 60px;
            font-weight: 600;
            line-height: 60px;
            background-color: #fff;
        }
    }
`;

