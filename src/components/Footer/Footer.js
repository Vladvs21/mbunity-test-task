import styled from "styled-components";

import { Color } from '../../values/colors'

export const FooterCon = styled.footer`
    width: 100%;

    background: ${Color.color_black};

    padding: 80px 0 60px;

    display: flex;
    flex-direction: column;
    gap: 45px;
    align-items: center;

    .footer__logo {
        font-family: Inter;
        font-size: 36px;
        font-weight: 800;
        line-height: 44px;
        letter-spacing: 0em;
        text-align: left;
        color: ${Color.color_bg};
    }

    .footer__content {
        border-top: 1px solid ${Color.color_bg};

        padding: 30px 0 0 20px;

        display: flex;
        flex-direction: row;
        justify-content: space-between;
        gap: 60px;

        .footer__content__list {
            display: flex;
            flex-direction: column;
            gap: 16px;
            color: ${Color.color_bg};

            .footer__content__list__title {
                font-family: Poppins;
                font-size: 18px;
                font-weight: 600;
                line-height: 26px;
                letter-spacing: 0em;
                text-align: left;
            }

            .footer__content__list__item {
                position: relative;
                width: fit-content;
                font-family: Poppins;
                font-size: 16px;
                font-weight: 400;
                line-height: 24px;
                letter-spacing: 0em;
                text-align: left;
                margin: 4px 0;
                cursor: pointer;

                &::before {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    content: '';
                    width: 0;
                    height: 1px;
                    background: ${Color.color_bg};
                    transition: all .3s ease-in-out;
                }

                &:hover::before {
                    width: 100%;
                }
            }
        }

        .footer__content__joinNewsletter {
            width: fit-content;
            height: fit-content;

            padding: 14px 14px 21px;

            background: ${Color.color_footer_join_newsletter};

            border-radius: 10px;

            .footer__content__joinNewsletter__title {
                font-family: Poppins;
                font-size: 18px;
                font-weight: 600;
                line-height: 26px;
                letter-spacing: 0em;
                text-align: left;
                color: ${Color.color_bg};
            }

            .footer__content__joinNewsletter__input {
                width: 100%;

                margin: 29px 0 19px;

                display: flex;
                flex-direction: row;

                input {
                    padding: 12px 10px 10px;

                    border-radius: 4px 0 0 4px;
                    background: ${Color.color_input_dark_background};

                    outline: none !important;

                    font-family: Poppins;
                    font-size: 11px;
                    font-weight: 400;
                    line-height: 17px;
                    letter-spacing: 0em;
                    text-align: left;

                    color: ${Color.color_bg};

                    &::placeholder {
                        color: ${Color.color_input_dark_placeholder};
                    }
                }

                button {
                    width: fit-content;

                    padding: 11px 22px;

                    background: ${Color.color_black};

                    font-family: Poppins;
                    font-size: 12px;
                    font-weight: 500;
                    line-height: 18px;
                    letter-spacing: 0em;
                    text-align: left;
                    color: ${Color.color_bg};
                    border-radius: 0 4px 4px 0;

                    cursor: pointer;
                }
            }

            .footer__content__joinNewsletter__annotation {
                font-family: Manrope;
                font-size: 13px;
                font-weight: 500;
                line-height: 18px;
                letter-spacing: 0em;
                text-align: left;
                opacity: .5;
                color: ${Color.color_bg};
            }
        }
    }

    .iconText {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 25px;

        font-family: Poppins;
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
        letter-spacing: 0em;
        text-align: left;

        color: ${Color.color_bg};
        
        svg {
            width: 24px;
            height: 24px;
        }
    }

    @media only screen and (max-width: 768px) {
        padding: 20px 20px 35px;

        gap: 20px;

        .footer__logo {
            font-size: 36px;
            line-height: 44px;
        }

        .footer__content {
            width: 100%;
            padding: 30px 0 0 0;

            display: grid;
            grid-template-columns: repeat(2, 1fr);

            .footer__content__list {
                gap: 20px;

                .footer__content__list__title {
                    font-size: 16px;
                    line-height: 26px;
                }

                .footer__content__list__item {
                    font-size: 12px;
                    line-height: 18px;

                    margin: 0;
                }
            }

            .footer__content__joinNewsletter {
                grid-column: span 2;
                padding: 14px 29px 14px 14px;

                border-radius: 5px;

                .footer__content__joinNewsletter__title {
                    font-size: 16px;
                    line-height: 26px;
                }

                .footer__content__joinNewsletter__input {
                    margin: 29px 0 19px;

                    input {
                        width: 100%;
                        font-size: 11px;
                        line-height: 17px;

                        padding: 11px 10px;
                    }

                    button {
                        font-size: 11px;
                        line-height: 17px;
                    }
                }

                .footer__content__joinNewsletter__annotation {
                    font-size: 13px;
                    line-height: 18px;
                }
            }
        }

        .iconText {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 12px;

            font-size: 12px;
            line-height: 18px;
        }
    }
`