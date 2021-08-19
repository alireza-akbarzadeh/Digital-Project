/** @jsx jsx */
import {jsx, Box, Container, Image, Text} from 'theme-ui';
import {Link} from 'components/link';
import data from './footer.data';
import FooterLogo from 'assets/logo.svg';
import ScrollToTop from "react-scroll-to-top";

export default function Footer() {
    return (
        <>
            <footer sx={styles.footer}>
                <Container>
                    <Box sx={styles.footer.footerBottomArea}>
                        <Link path="/">
                            <Image src={FooterLogo} alt={"Logo"}/>
                        </Link>
                    </Box>
                    <Box sx={styles.footer.menus}>
                        <nav>
                            {data.menuItem.map((item, i) => (
                                <Link sx={styles.footer.link} label={item.label} path={item.path} key={i}/>
                            ))}
                        </nav>

                    </Box>
                    <Box sx={styles.footer.Alireza}>Design and Create by <strong>Alireza Akbarzadeh</strong> All Right
                        reserved _ {new Date().getFullYear()}</Box>
                </Container>
            </footer>
            <ScrollToTop color={"#ea3a60"} smooth/>
        </>
    );
}

const styles = {
    footer: {
        footerBottomArea: {
            borderTop: '1px solid',
            borderTopColor: 'border_color',
            display: 'flex',
            pt: [7, null, 8],
            pb: ['40px', null, '100px'],
            textAlign: 'center',
            flexDirection: 'column',
        },
        Alireza: {
            textAlign: 'center',
            color: '#ea3a60'
        },
        menus: {
            mt: [3, 4],
            mb: 2,
            nav: {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexWrap: 'wrap',
            },
        },

        link: {
            fontSize: [1, '15px'],
            color: 'text',
            fontWeight: '400',
            mb: 2,
            cursor: 'pointer',
            transition: 'all 0.35s',
            display: 'block',
            textDecoration: 'none',
            lineHeight: [1.5, null, 1.8],
            px: [2, null, 4],
            ':hover': {
                color: 'primary',
            },
        },
        copyright: {
            fontSize: [1, '15px'],
            width: '100%',
        },
    },
};
