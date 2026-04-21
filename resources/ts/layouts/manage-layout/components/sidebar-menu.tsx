import mq from '@/lib/breakpoints';
import styled from '@emotion/styled';
import MenuItem from './menu-item';
import {
    IoHomeOutline,
    IoPencilOutline,
    IoPencilSharp,
    IoPersonCircle,
    IoPersonCircleOutline,
    IoVideocam,
    IoVideocamOutline,
    IoWalletOutline,
} from 'react-icons/io5';
import {
    TbArticle,
    TbCameraAi,
    TbCameraShare,
    TbFlag,
    TbHome,
    TbPencil,
    TbPencilCog,
    TbSettings,
    TbUsers,
    TbUsersGroup,
    TbUsersPlus,
    TbUserSquare,
    TbWallet,
} from 'react-icons/tb';
import SeparatorMenu from './separator-menu';
const Wrapper = styled.aside(
    mq({
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        gap: 5,
    }),
);

export default function SidebarMenuCreator() {
    return (
        <Wrapper>
            <SeparatorMenu>Kelola Kreator</SeparatorMenu>
            <MenuItem icon={<TbHome size={20} />}>Beranda</MenuItem>
            <MenuItem icon={<TbWallet size={20} />}>My Balance</MenuItem>
            <MenuItem icon={<TbCameraShare size={20} />}>My Overlay</MenuItem>
            <MenuItem icon={<TbPencilCog size={20} />}>Edit Page</MenuItem>
            <MenuItem icon={<TbFlag size={20} />}>
                <span>Goals</span>
            </MenuItem>
            <SeparatorMenu>Features</SeparatorMenu>

            <MenuItem icon={<TbArticle size={20} />}>Komunitas</MenuItem>
            <MenuItem icon={<TbUsers size={20} />}>
                <span>My Supporter</span>
            </MenuItem>
            <MenuItem icon={<TbSettings size={20} />}>
                <span>Settings</span>
            </MenuItem>
        </Wrapper>
    );
}
