import styled from "styled-components";
import { Color } from '../../values/colors'

export const MenuCon = styled.div`
    width: fit-content;

    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 60px;

    .menu__pages {
        display: flex;
        flex-direction: row;
        gap: 47px;

        .menu__pages__item {
            width: fit-content;
            position: relative;
            font-family: Roboto;
            font-size: 16px;
            font-weight: 400;
            line-height: 19px;
            letter-spacing: 0em;
            text-align: left;
            color: ${Color.color_text_header_inactive};
            text-decoration: none !important;
            cursor: pointer;
            background: transparent;

            &.dropdown::after {
                display: inline-block;
                content: '\\276F';
                top: 50%;
                transform: rotate(90deg);
                margin-left: 7px;
            }

            &::before {
                position: absolute;
                bottom: 0;
                left: 0;
                content: '';
                width: 0;
                height: 1px;
                background: ${Color.color_black};
                transition: all .3s ease-in-out;
            }

            &:hover::before {
                width: 100%;
            }

            &.active {
                font-weight: 600;
                color: ${Color.color_black};
            }
        }
        
        .menu__pages__item__dropdown {
            display: flex;
            flex-direction: column;
            gap: 25px;
        }
    }

    .menu__actions {
        display: flex;
        flex-direction: row;
        gap: 36px;

        .menu__actions__icon {
            width: 31px;
            height: 31px;

            display: flex;
            justify-content: center;
            align-items: center;

            border-radius: 50%;
            border: 1px solid ${Color.color_black};

            background: transparent;

            cursor: pointer;
            transition: all .3s ease-in-out;

            &:hover,
            &.active {
                background: ${Color.color_contact_us_content_contact_subtitle};
            }

            svg {
                width: 18px;
                height: 18px;
            }
        }
    }

    .menu__toggleIcon {
        display: none;
        width: fit-content;
        height: fit-content;

        background: transparent;
    }

    @media only screen and (max-width: 768px) {
        .menu__pages,
        .menu__actions {
            display: none;
        }

        .menu__toggleIcon {
            display: block;
        }
    }
`