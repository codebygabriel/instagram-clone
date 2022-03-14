import { useRef, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Router from 'next/router';
import { useAuth } from '../hooks/useAuth';

import InstagramLogoImg from '../assets/images/instagram.png';

import Input from '../components/Input';
import { Button } from '../components/Button';
import { Separator } from '../components/Separator';

import {
  Container,
  FormContainer,
  InputsContainer,
  Image,
  LinkLabel,
  GoogleButton,
  GoogleIcon,
} from '../styles/pages/signin.styles';

export default function SignUp() {
  const { createAccount, signInWithGoogle } = useAuth();

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const usernameRef = useRef<HTMLInputElement>(null);

  const [isLoading, setIsLoading] = useState<boolean>(false);

  function handleGetFieldsValues() {
    const getEmail = emailRef.current?.value;
    const getPassword = passwordRef.current?.value;
    const getUsername = usernameRef.current?.value;

    return { getEmail, getPassword, getUsername };
  };

  function handleValidateFields() {
    const fieldsValues = handleGetFieldsValues();

    if (!fieldsValues?.getEmail?.length || !fieldsValues?.getPassword?.length || !fieldsValues?.getUsername?.length) {
      alert('Invalid username, email or password.');

      return false;
    };

    return true;
  };

  async function handleCreateAccount() {
    const fieldsValues = handleGetFieldsValues();
    const isFieldsValid = handleValidateFields();

    if (!isFieldsValid) return;

    setIsLoading(true);

    const CREATE_ACCOUNT = await createAccount({
      email: fieldsValues?.getEmail,
      username: fieldsValues?.getUsername,
      password: fieldsValues?.getPassword,
    });

    if (!CREATE_ACCOUNT) {
      alert('Username or email is already in use.');

      setIsLoading(false);

      return;
    };

    alert('Account successfully created.');

    setIsLoading(false);

    Router.push('/signin');
  };

  return (
    <Container>
      <Head>
        <link>Instagram | Sign Up</link>
      </Head>

      <FormContainer>
        <Image
          src={InstagramLogoImg}
          alt="InstagramLogo"
        />

        <InputsContainer>
          <Input
            ref={usernameRef}
            placeholder="Username"
          />

          <Input
            ref={emailRef}
            type="email"
            placeholder="Email"
          />

          <Input
            ref={passwordRef}
            type="password"
            placeholder="Password"
          />
        </InputsContainer>

        <Button
          label="Sign Up"
          isLoading={isLoading}
          style={{ marginTop: 15 }}
          onClick={handleCreateAccount}
        />

        <Separator label="Or" />

        <GoogleButton onClick={signInWithGoogle}>
          <div>
            <GoogleIcon />

            Sign in with Google
          </div>
        </GoogleButton>
      </FormContainer>

      <FormContainer>
        <LinkLabel>
          Have an account? <Link href="/signin"><a>Sign in</a></Link>
        </LinkLabel>
      </FormContainer>
    </Container>
  );
};