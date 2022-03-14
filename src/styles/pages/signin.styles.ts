import styled from 'styled-components';

import { Google } from '@styled-icons/boxicons-logos/Google';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 20px;

  gap: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: var(--background);

  .password-link {
    margin-top: 15px;
    font-size: 14px;
    color: #385185;

    &:hover { text-decoration: underline; };
  };
`;

export const Image = styled.img<any>(({ maxWidth }: any) => ({
  width: '100%',
  height: 'auto',
  maxWidth: maxWidth || 175,

  display: 'block',
}));

export const FormContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding: 25px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: var(--white);
  border: 1px solid var(--border);
`;

export const InputsContainer = styled.div`
  width: 100%;
  padding-top: 25px;

  gap: 6px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const GoogleButton = styled.button`
  width: 100%;
  max-width: 268px;

  transition: 0.2s opacity;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 14px;
  color: #385185;

  > div {
    gap: 5px;
    display: flex;
    align-items: center;
  };

  &:hover { opacity: 0.8; };
`;

export const LinkLabel = styled.span`
  font-size: 14px;
  color: #262626;

  > a {
    font-size: 14px;
    font-weight: 700;
    color: var(--blue);

    &:hover { text-decoration: underline; };
  };
`;

export const Title = styled.h1`
  padding: 10px 0 15px 0;

  font-size: 14px;
  font-weight: 600;
  text-align: center;
  
  color: #8E8E8E;
`;

// --ICONS-- //
export const GoogleIcon = styled(Google)`
  width: 18px;
  height: 18px;
  margin-top: 1.5px;

  color: #385185;
`;