import React, {Fragment} from 'react';
import {Box} from 'theme-ui';
import RcDrawer from 'rc-drawer';

export default function Drawer({
                                   className,
                                   children,
                                   closeButton,
                                   closeButtonStyle,
                                   drawerHandler,
                                   toggleHandler,
                                   open,
                                   width,
                                   placement,
                                   drawerStyle,
                                   closeBtnStyle,
                                   ...props
                               }) {
    return (
        <Fragment>
            <RcDrawer
                width={width}
                placement={placement}
                handler={false}
                duration={"0.4s"}
                level={null}
                open={open}
                onClose={toggleHandler}
                {...props}
                className={`drawer ${className || ""}`.trim()}>{closeButton && (
                <Box sx={closeBtnStyle} onClick={toggleHandler} as={"div"}>{closeButton}</Box>)}
                <Box sx={drawerStyle}>{children}</Box>
            </RcDrawer>
            <Box onClick={toggleHandler} className={"drawer__handler"}
                 style={{display: "inline-block"}}>{drawerHandler}</Box>
        </Fragment>
    );
};

Drawer.defaultProps = {
    width: '320px',
    placement: 'left',
};