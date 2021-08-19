import React from 'react';
import {Flex, Box, IconButton} from 'theme-ui';

export default function List({items = [], parentStyle, childStyle}) {
    return (
        <Box sx={{listStyleType: "none", padding: 0, margin: 0, ...parentStyle}} as={"ul"}>
            {items.map((item, i) => (
                <Flex key={i} sx={{...childStyle}} as={"li"} className={item.isAvailable ? "open" : "close"}>
                    <IconButton sx={styles.listIcon} aria-label={"list icon"}>
                        {item.icon}
                    </IconButton>
                    {item.text}
                </Flex>
            ))}
        </Box>
    );
}

const styles = {
    listIcon: {
        width: ['25px', '35px'],
        height: 'auto',
        color: 'primary',
        padding: 0,
        fontSize: [3, 5],
        ml: '-1px',
        flexShrink: 0,
        justifyContent: 'flex-start',
        mt: '2px',
    },
};
