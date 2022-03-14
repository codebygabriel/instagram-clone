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
  GoogleButton,
  Image,
  LinkLabel,
  GoogleIcon,
} from '../styles/pages/signin.styles';

export default function SignIn() {
  const { signInWithGoogle, signInWidthCredentials } = useAuth();

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const [isLoading, setIsLoading] = useState<boolean>(false);

  function handleGetFieldsValues() {
    const getEmail = emailRef.current?.value;
    const getPassword = passwordRef.current?.value;

    return { getEmail, getPassword };
  };

  function handleValidateFields() {
    const fieldsValues = handleGetFieldsValues();

    if (!fieldsValues?.getEmail?.length || !fieldsValues?.getPassword?.length) {
      alert('Invalid username, email or password.');

      return false;
    };

    return true;
  };

  async function handleSignInWidthCredentials() {
    const fieldsValues = handleGetFieldsValues();
    const isFieldsValid = handleValidateFields();

    if (!isFieldsValid) return;

    setIsLoading(true);

    const SIGN_IN_WITH_CREDENTIALS = await signInWidthCredentials({
      email: fieldsValues?.getEmail,
      password: fieldsValues?.getPassword,
    });

    if (!SIGN_IN_WITH_CREDENTIALS) {
      alert('Invalid username, email or password.');

      setIsLoading(false);

      return;
    };

    alert('successfully signed.');

    setIsLoading(false);

    Router.push('/');
  };

  return (
    <Container>
      <Head>
        <title>Instagram | Sign In</title>
      </Head>

      <FormContainer>
        <Image
          src={InstagramLogoImg}
          alt="InstagramLogo"
        />

        <InputsContainer>
          <Input
            ref={emailRef}
            type="email"
            placeholder="Username or email"
          />

          <Input
            ref={passwordRef}
            type="password"
            placeholder="Password"
          />
        </InputsContainer>

        <Button
          label="Sign In"
          isLoading={isLoading}
          style={{ marginTop: 15 }}
          onClick={handleSignInWidthCredentials}
        />

        <Separator label="Or" />

        <GoogleButton onClick={signInWithGoogle}>
          <div>
            <GoogleIcon />

            Sign in with Google
          </div>
        </GoogleButton>

        <Link href="/recovery-password">
          <a className="password-link">Forgot password?</a>
        </Link>
      </FormContainer>

      <FormContainer>
        <LinkLabel>
          Don't have an account? <Link href="/signup"><a>Sign up</a></Link>
        </LinkLabel>
      </FormContainer>
    </Container>
  );
};