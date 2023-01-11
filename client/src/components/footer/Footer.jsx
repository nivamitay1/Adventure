import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

function Copyright(props) {
  return (
    <Typography variant="body2" color="white" align="center" {...props}>
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const footers = [
  {
    title: "Me",
    description: ["Linkedin", "Portfolio", "Contacts", "GitHub"],
  },
  {
    title: "Other Projects",
    description: ["ShoppingNV", "Weather Forecast", "Tic Tac Toe", "Chat App"],
  },
  {
    title: "Resources",
    description: [
      "Resource",
      "Resource name",
      "Another resource",
      "Final resource",
    ],
  },
  {
    title: "Legal",
    description: ["Privacy policy", "Terms of use"],
  },
];

export default function Footer() {
  return (
    <Box sx={{ backgroundColor: "#91c4cf", mt: 25, py: [3, 6] }}>
      <Container component="footer">
        <Grid container spacing={4} justifyContent="center">
          {footers.map((footer) => (
            <Grid item xs={6} sm={3} key={footer.title}>
              <Typography variant="h6" color="white" gutterBottom>
                {footer.title}
              </Typography>
              <List>
                {footer.description.map((item) => (
                  <ListItem key={item} disablePadding>
                    <Link
                      href="#"
                      variant="subtitle1"
                      color="#ffffffcc"
                      underline="hover"
                    >
                      {item}
                    </Link>
                  </ListItem>
                ))}
              </List>
            </Grid>
          ))}
        </Grid>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </Box>
  );
}
