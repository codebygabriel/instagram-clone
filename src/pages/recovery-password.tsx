import { useRef, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Router from 'next/router';
import { useAuth } from '../hooks/useAuth';

import InstagramLogoImg from '../assets/images/instagram.png';

import Input from '../components/Input';
import { Button } from '../components/Button';

import { Container, FormContainer, LinkLabel, Image, Title } from '../styles/pages/signin.styles';

export default function RecoveryPassword() {
  const { recoveryPassword } = useAuth();

  const emailRef = useRef<HTMLInputElement>(null);

  const [isLoading, setIsLoading] = useState<boolean>(false);

  function handleGetFieldsValues() {
    const getEmail = emailRef.current?.value;

    return { getEmail };
  };

  function handleValidateFields() {
    const fieldsValues = handleGetFieldsValues();

    if (!fieldsValues?.getEmail?.length) {
      alert('Invalid email.');

      return false;
    };

    return true;
  };

  async function handleRecoveryPassword() {
    const fieldsValues = handleGetFieldsValues();
    const isFieldsValid = handleValidateFields();

    if (!isFieldsValid) return;

    setIsLoading(true);

    const RECOVERY_PASSWORD = await recoveryPassword({ email: fieldsValues?.getEmail });

    if (!RECOVERY_PASSWORD) {
      alert('Email not found.');

      setIsLoading(false);

      return;
    };

    alert('Email successfully sended.');

    setIsLoading(false);

    Router.push('/signin');
  };

  return (
    <Container>
      <Head>
        <title>Instagram | Recovery Password</title>
      </Head>

      <FormContainer>
        <Image
          src={InstagramLogoImg}
          alt="InstagramLogo"
        />

        <Title>{"Enter your email and we'll send you a link to get back into your account."}</Title>

        <Input
          ref={emailRef}
          placeholder="Email"
        />

        <Button
          label="Recovery Password"
          isLoading={isLoading}
          style={{ marginTop: 15 }}
          onClick={handleRecoveryPassword}
        />
      </FormContainer>

      <FormContainer>
        <LinkLabel>
          Have an account? <Link href="/signin"><a>Sign in</a></Link>
        </LinkLabel>
      </FormContainer>
    </Container>
  );
};