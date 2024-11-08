import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi'
import { Link } from 'react-router-dom'

import { Input } from '../../components/Input'
import { PageNav } from '../../components/PageNav'
import { Button } from '../../components/Button'


const inputData = [
  { placeholder: "Nome", type: "text", icon: FiUser },
  { placeholder: "E-mail", type: "text", icon: FiMail },
  { placeholder: "Senha atual", type: "password", icon: FiLock },
  { placeholder: "Nova senha", type: "password", icon: FiLock },
]

import { Container, Form, Avatar } from "./styles";

export function Profile() {
  return (
    <Container>
      <PageNav />

      <Form>
        <Avatar>
          <img
            src="https://github.com/AlineMirian.png"
            alt="Foto do usuário"
          />
          <label htmlFor="avatar">
            <FiCamera />

            <input
              id="avatar"
              type="file"
            />
          </label>
        </Avatar>

        {inputData.map((input, index) => (
          <Input
            key={index}
            placeholder={input.placeholder}
            type={input.type}
            icon={input.icon}
          />
        ))}


        <Button title="Salvar" />
      </Form>
    </Container>
  )
}