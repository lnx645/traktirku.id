import mq from "@/lib/breakpoints";
import styled from "@emotion/styled";

const Wrapper = styled.div(mq({
    display:['flex',"none","none","flex"],
    fontSize:11,
    fontWeight:600,
    color:'#000000A6',
    marginBottom:0,
    marginTop: 10,
}))


export default function SeparatorMenu({children}:{children?:string}) {
    return (
        <Wrapper>
            <span>{children || "Separator Menu"}</span>
        </Wrapper>
    );
}
