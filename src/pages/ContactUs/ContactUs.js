import styled from 'styled-components'

import { Color } from '../../values/colors'

export const ContactUsCon = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    margin: 30px auto 50px;

    .contactUs__title {
        font-family: Poppins;
        font-size: 40px;
        font-weight: 700;
        line-height: 60px;
        letter-spacing: 0em;
        text-align: left;
        color: ${Color.color_black};
    }

    .contactUs__subtitle {
        font-family: Poppins;
        font-size: 18px;
        font-weight: 500;
        line-height: 27px;
        letter-spacing: 0em;
        text-align: center;
        color: ${Color.color_contact_us_title_subtitle};

        margin: 10px 0 50px;
    }

    .contactUs__content {
        width: 100%;

        background: ${Color.color_bg};
        box-shadow: 0px 0px 60px 30px #00000008;
        border-radius: 10px;

        padding: 10px;

        display: flex;
        flex-direction: row;

        overflow: hidden;

        .contactUs__content__contactInfo {
            max-width: 40%;
            background: ${Color.color_black};
            border-radius: 10px;

            padding: 40px 0 36px 40px;

            display: flex;
            flex-direction: column;
            justify-content: space-between;

            position: relative;
            overflow: hidden;

            .contactUs__content__contactInfo__title {
                font-family: Poppins;
                font-size: 28px;
                font-weight: 600;
                line-height: 42px;
                letter-spacing: 0em;
                text-align: left;
                color: ${Color.color_bg};
            }

            .contactUs__content__contactInfo__subtitle {
                font-family: Poppins;
                font-size: 18px;
                font-weight: 400;
                line-height: 27px;
                letter-spacing: 0em;
                text-align: left;
                color: ${Color.color_contact_us_content_contact_subtitle};

                margin-top: 6px;
            }

            .contactUs__content__contactInfo__iconText__container {
                display: flex;
                flex-direction: column;
                gap: 50px;

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
            }

            .contactUs__content__contactInfo__social {
                display: flex;
                flex-direction: row;
                gap: 24px;

                .contactUs__content__contactInfo__social__single {
                    width: 30px;
                    height: 30px;
                    border-radius: 50%;
                    background: ${Color.color_social_media_circle};
                    transition: all .3s ease-in-out;
                    cursor: pointer;

                    display: flex;
                    justify-content: center;
                    align-items: center;

                    svg {
                        width: 15px;
                        height: 15px;

                        path {
                            fill: ${Color.color_bg};
                            transition: all .3s ease-in-out;
                        }
                    }

                    &:hover {
                        background: ${Color.color_bg};

                        path {
                            fill: ${Color.color_black};
                        }
                    }
                }
            }

            .contactUs__content__contactInfo__circle__big {
                position: absolute;

                width: 269px;
                height: 269px;
                border-radius: 50%;

                right: -89px;
                bottom: -86px;

                background: ${Color.color_circle_big};
            }

            .contactUs__content__contactInfo__circle__small {
                position: absolute;
                
                width: 138px;
                height: 138px;
                border-radius: 50%;

                right: 70px;
                bottom: 71px;

                background: ${Color.color_circle_fade};
                opacity: .5;
            }
        }

        .contactUs__content__form {
            position: relative;
            padding: 50px 50px 150px 50px;

            display: flex;
            flex-direction: column;
            align-items: flex-end;
            gap: 45px;

            .contactUs__content__form__row {
                width: 100%;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                gap: 40px;

                & > div {
                    width: 100%;

                    display: flex;
                    flex-direction: column;

                    input {
                        padding: 12px 0;

                        outline: none !important;

                        border-bottom: 1px solid ${Color.color_text_light};

                        color: ${Color.color_black};

                        /* &: + label {
                            color: ${Color.color_text_header_inactive};
                        } */
                    }

                    label {
                        font-family: Poppins;
                        font-size: 12px;
                        font-weight: 500;
                        line-height: 20px;
                        letter-spacing: 0em;
                        text-align: left;
                        color: ${Color.color_black};
                    }
                }
            }

            .contactUs__content__form__select {
                width: 100%;

                .contactUs__content__form__select__title {
                    font-family: Poppins;
                    font-size: 14px;
                    font-weight: 600;
                    line-height: 20px;
                    letter-spacing: 0em;
                    text-align: left;
                    color: ${Color.color_black};

                    margin-bottom: 15px;
                }

                .contactUs__content__form__select__content {
                    display: flex;
                    flex-direction: row;
                    gap: 20px;

                    & > div {
                        display: flex;
                        flex-direction: row;
                        align-items: center;

                        input {
                            position: relative;
                            appearance: none;
                            background: ${Color.color_select};
                            width: 13px;
                            height: 13px;
                            border-radius: 50%;
                            transition: all .3s ease-in-out;

                            &:checked {
                                background: ${Color.color_black};

                                &::after {
                                    content: '\\2714';
                                    position: absolute;
                                    color: ${Color.color_bg};
                                    top: 50%;
                                    left: 50%;
                                    transform: translate(-50%, -50%) scale(.8);
                                }
                            }
                        }

                        label {
                            font-family: Poppins;
                            font-size: 12px;
                            font-weight: 400;
                            line-height: 20px;
                            letter-spacing: 0em;
                            text-align: left;
                            color: ${Color.color_black};
                            margin-left: 10px;
                        }
                    }
                }
            }

            .contactUs__content__form__submit {
                font-family: Poppins;
                font-size: 16px;
                font-weight: 500;
                line-height: 24px;
                letter-spacing: 0em;
                text-align: center;
                color: ${Color.color_bg};

                padding: 15px 48px;
                background: ${Color.color_black};
                border-radius: 5px;

                cursor: pointer;
            }

            .contactUs__content__form__icon {
                position: absolute;

                bottom: -48px;
                right: 133px;
            }
        }
    }

    @media only screen and (max-width: 768px) {
        margin: 30px auto 50px;

        .contactUs__title {
            font-size: 24px;
            line-height: 36px;
        }

        .contactUs__subtitle {
            max-width: 60%;
            font-size: 14px;
            line-height: 21px;

            margin: 10px 0 20px;
        }

        .contactUs__content {
            flex-direction: column;
            border-radius: 5px;

            padding: 5px;

            .contactUs__content__contactInfo {
                max-width: 100%;
                border-radius: 5px;

                padding: 15px 50px 25px 50px;

                .contactUs__content__contactInfo__title {
                    font-size: 20px;
                    line-height: 30px;
                    text-align: center;
                }

                .contactUs__content__contactInfo__subtitle {
                    font-size: 11px;
                    line-height: 17px;

                    margin-bottom: 12px;
                    text-align: center;
                }

                .contactUs__content__contactInfo__iconText__container {
                    gap: 15px;

                    .iconText {
                        flex-direction: column;
                        gap: 10px;

                        font-size: 12px;
                        line-height: 18px;
                        text-align: center;
                    }
                }

                .contactUs__content__contactInfo__social {
                    justify-content: center;
                    margin-top: 58px;
                }

                .contactUs__content__contactInfo__circle__big {
                    width: 192px;
                    height: 192px;

                    right: -112px;
                    bottom: -90px;
                }

                .contactUs__content__contactInfo__circle__small {
                    width: 54px;
                    height: 54px;

                    right: 26px;
                    bottom: 52px;
                }
            }

            .contactUs__content__form {
                padding: 30px 20px 65px 20px;

                gap: 20px;

                .contactUs__content__form__row {
                    flex-direction: column;
                    gap: 20px;

                    & > div {

                        input {
                            font-size: 14px;
                            line-height: 20px;

                            padding: 4px 0 11px;
                        }

                        label {
                            font-size: 12px;
                            line-height: 20px;
                        }
                    }
                }

                .contactUs__content__form__select {

                    .contactUs__content__form__select__title {
                        font-size: 14px;
                        line-height: 20px;

                        margin-bottom: 10px;
                    }

                    .contactUs__content__form__select__content {
                        display: grid;
                        grid-template-columns: repeat(2, 1fr);
                        row-gap: 20px;
                        column-gap: 14px;

                        & > div {

                            label {
                                font-size: 12px;
                                line-height: 20px;
                            }
                        }
                    }
                }

                .contactUs__content__form__submit {
                    width: 100%;
                    padding: 10px 0;
                    border-radius: 3px;

                    font-size: 13px;
                    line-height: 19px;
                }

                .contactUs__content__form__icon {
                    width: 105px;
                    bottom: -20px;
                    right: 133px;
                }
            }
        }
    }
`