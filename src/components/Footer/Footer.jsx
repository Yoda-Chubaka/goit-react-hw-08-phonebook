import { Box, Container, Link, Typography } from "@mui/material";
import { boxFooterStyle } from "./StyleFooter";

const Footer = () => {
    return (
        <Box component="footer" sx={boxFooterStyle}>
            <Container maxWidth="sm">
                <Typography variant="body2" color="inherit" align="center" sx={{ mt: 2, mb: 2 }}>
                    {'By '}
                    <Link color="inherit" href="#">
                        Anastasiia Polishchuk
                    </Link>{' '}
                    {new Date().getFullYear()}
                    {'.'}
                </Typography>
            </Container>
        </Box>
    )
};

export default Footer;