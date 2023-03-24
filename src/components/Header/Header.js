import styled from "styled-components";
import { Color } from "../../values/colors";

export const HeaderCon = styled.header`
    width: 100%;
    
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    padding: 40px 0;

    .logo {
        font-family: Inter;
        font-size: 24px;
        font-weight: 800;
        line-height: 29px;
        letter-spacing: 0em;
        text-align: left;
        color: ${Color.color_black};
    }

    @media only screen and (max-width: 768px) {
        padding: 28px 20px;
        box-sizing: border-box;

        .logo {
            font-size: 18px;
            line-height: 22px;
        }
    }
`