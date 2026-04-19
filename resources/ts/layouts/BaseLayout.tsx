import { ReactNode } from 'react';
import { AppThemeProvider } from '@/provider/AppThemeProvider';

type BaseLayoutProps = {
    children: ReactNode;
};
const BaseLayout = (props: BaseLayoutProps) => {
    return <AppThemeProvider>{props.children}</AppThemeProvider>;
};

export default BaseLayout;
