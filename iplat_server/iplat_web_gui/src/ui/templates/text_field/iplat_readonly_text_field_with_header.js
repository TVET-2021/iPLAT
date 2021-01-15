import React from 'react';
import IPlatContent from "../../component/text/iplat_content";
import IPlatTextField from "../../component/text_field/iplat_text_field";
import IPlatLimitSentence from "../../component/text/iplat_limit_sentence";
import {COLORS} from "../../component/resources/iplat_colors";

function IPlatReadOnlyTextFieldWithHeader(props){
    return(
        <ul style={{
            listStyleType:"none",
            padding: "0px 0px",
        }}>
            <li style={{
                marginBottom:"10px"
            }}>
                <IPlatContent
                    Title={props.Title}
                    FontColor={COLORS.TEXT}
                />
            </li>

            <li style={{
                marginTop:"10px"
            }}>
                <IPlatTextField
                    Type={"text"}
                    Value={props.Value}
                    IsReadOnly

                    W={"480px"}
                    H={"50px"}

                    BgColor={"#333640"}
                    FontSize={props.FontSize}

                    HandleChange={props.HandleChange}
                />
            </li>
        </ul>
    );
}

export default IPlatReadOnlyTextFieldWithHeader;
