import React from 'react';
import { useHistory } from 'react-router-dom';
import { HomeIcon, Icon, SidebarTab } from 'evergreen-ui';

const Navigation = () => {
    const history = useHistory();
    const createRoute = (route) => history.push(route);
    return (
        <div>
            <SidebarTab onSelect={() => createRoute('/')}>
                <Icon icon={HomeIcon} />
                Home
            </SidebarTab>
            <SidebarTab onSelect={() => createRoute('/comics')}>
                <Icon icon={HomeIcon} />
                Comics
            </SidebarTab>
        </div>
    );
};

export default Navigation;
