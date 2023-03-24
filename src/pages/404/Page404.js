import styled from 'styled-components'

import { Color } from '../../values/colors'

export const Page404Con = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    .page404__text {
        font-family: Poppins;
        font-size: 18px;
        font-weight: 500;
        line-height: 27px;
        letter-spacing: 0em;
        text-align: left;
        color: ${Color.color_text_light};

        p:first-child {
            font-family: Poppins;
            font-size: 40px;
            font-weight: 500;
            line-height: 60px;
            letter-spacing: 0em;
            text-align: left;
            color: ${Color.color_black};
        }

        .page404__btn {
            width: fit-content;
            padding: 15px 48px;
            background: ${Color.color_black};
            border-radius: 10px;
            margin-top: 60px;

            a {
                color: ${Color.color_bg};
                text-decoration: none;
            }
        }
    }

    .page404__error {
        font-family: Poppins;
        font-size: 400px;
        font-weight: 700;
        line-height: 600px;
        letter-spacing: 0em;
        text-align: left;
        color: ${Color.color_text_light};
    }

    @media only screen and (max-width: 768px) {
        flex-direction: column-reverse;
        box-sizing: border-box;

        .page404__text {
            font-size: 14px;
            line-height: 21px;
            text-align: center;

            p:first-child {
                font-size: 24px;
                line-height: 36px;
                text-align: center;
            }

            .page404__btn {
                width: 100%;
                padding: 10px 0px;
                border-radius: 5px;
                margin-top: 60px;
                margin-bottom: 40px;
            }
        }

        .page404__error {
            font-size: 150px;
            line-height: 225px;
            text-align: center;
        }
    }
`