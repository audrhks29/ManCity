import styled from 'styled-components'
import { subColor } from './MainStyle'

export const PopupContainer = styled.div`
    width: 100%;
    background: url('../../public/images/bg.png');
    background-size: cover;
    background-repeat: no-repeat;
    position: absolute;
    bottom: 0;
    position: fixed;
    .inner{
        width: 1400px;
        margin: auto;
        padding: 30px 0;
    }
`

export const PopupInnerContainer = styled.div`
    margin: auto;
    display: flex;
    position: relative;
`
export const PopupLeftContainer = styled.div`
    width: 400px;
    img {
        width: 250px;
        height: 250px;
        display: block;
        margin: auto;
    }
`
export const PersonalDetailContainer = styled.div`
    line-height: 40px;
    display: flex;
    justify-content: space-between;
    background-color: rgba(255, 255, 255, 0.5);
    ul {
        width: 350px;
        li {
            padding: 0 20px;
            display: flex;
            font-size: 15px;
            display: flex;
            justify-content: space-between;
            span { font-weight: 600; }
        }
    }
`

export const PopupRightContainer = styled.div`
    width: 100%;
`

export const PersonalNameContainer = styled.div`
    display: flex;
    justify-content: space-between;
    .closePopup {
        position: absolute;
        right: 0;
        top: -20px;
        cursor: pointer;
        i {
            font-size: 30px;
            color: ${subColor.rgb};
        }
    }
    >span {
        font-size: 60px;
        color: ${subColor.rgb};
        line-height: 90px;
        font-weight: 700;
    }
    >strong {
        font-size: 60px;
        color: ${subColor.rgb};
        line-height: 90px;
        font-weight: 700;
    }
`

export const PlayerStatsContainer = styled.div`
    background-color: rgba(255, 255, 255, 0.5);
    padding: 30px 20px;
    height: 440px;
`

export const PopupGnbContainer = styled.div`
    ul {
        display: flex;
        border-bottom: 3px solid ${subColor.rgb};
        li {
            font-size: 30px;
            padding: 10px 20px;
            cursor: pointer;
            &.on {
                background-color: rgba(28, 44, 91, 0.8);
                color: white;
            }
        }
    }
`

export const PopupContentContainer = styled.div`
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
        table{
            border: 1px solid #000;
            text-align: center;
            font-size: 14px;
            thead {
                tr {
                    font-size: 16px;
                    font-weight: 600;
                    th { vertical-align: middle;
                        img {
                            width: 20px;
                            vertical-align: middle;
                        }
                    }
                }
            }
            tbody {
                tr { height: 30px;
                    td {
                        vertical-align: middle;
                        border: 1px solid #000;
                        img {
                            width: 20px;
                            vertical-align: middle;
                            margin-right: 15px;
                        }
                    }
                }
            }
        }
    .playerImage {
        display: flex;
        justify-content: space-around;
        width: 100%;
        li {
            display: block;
            width: 30%;
            overflow: hidden;
            img {
                height: 300px;
                display: block;
                margin: auto;
            }
        }
    }

`








