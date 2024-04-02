import React from "react";
import {
  Body,
  Container,
  Head,
  Html,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";

const EmailTemplate = ({username, code}) => {
  const baseUrl = process.env.VERCEL_URL
  return (
    <Html>
      <Head />
      <Preview>Pavicon reset your password</Preview>
      <Body style={main}>
        <Container style={container}>
          {/*<Img
            src={`${baseUrl}/static/logo.png`}
            width="40"
            height="33"
            alt="Pavicon"
        />*/}
          <Section>
            <Text style={text}>Hey {username} !</Text>
            <Text style={text}>
              Someone recently requested a password change for your Pavicon
              account. To  reset your password, enter the verification code on the unrecognized device.
            </Text>
             <Text>
              {code}
             </Text>
            <Text style={text}>
              If you don't want to change your password or didn't
              request this, just ignore and delete this message.
            </Text>
            <Text style={text}>
              To keep your account secure, please don't forward this email
              to anyone. See our Help Center for{" "}
              <Link style={anchor} href={baseUrl}>
                more security tips.
              </Link>
            </Text>
            <Text style={text}>Thanks,</Text>
            <Text style={text}>Pavicon Team</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};


export default EmailTemplate;

const main = {
  backgroundColor: "#ffffff",
  padding: "16px 16px",
};

const container = {
  backgroundColor: "#ffffff",
  padding: "45px",
};

const text = {
  fontSize: "16px",
  fontFamily:
    "'Open Sans', 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif",
  fontWeight: "300",
  color: "#404040",
  lineHeight: "26px",
};



const button = {
  backgroundColor: "#007ee6",
  borderRadius: "4px",
  color: "#fff",
  fontFamily: "'Open Sans', 'Helvetica Neue', Arial",
  fontSize: "15px",
  textDecoration: "none",
  textAlign: "center",
  display: "block",
  width: "210px",
  padding: "14px 7px",
};

const anchor = {
  textDecoration: "underline",
};
