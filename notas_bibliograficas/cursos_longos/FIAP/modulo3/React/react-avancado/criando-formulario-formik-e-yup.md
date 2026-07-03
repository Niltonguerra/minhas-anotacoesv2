---
Date: 2026-06-08T18:44:00
tags:
  - fiap/modulo03/react
repositório:
---


# Notas conectadas:


# Resumo da nota:
no máximo 350 caracteres no resumo.
exemplo de tamanho:
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
# Tópicos:

comando para criar o sumário automaticamente: 
table of contents: Create table of contents


# Explicação dos tópicos:

usando formik com styled component:
![[Pasted image 20260608185028.png]]

exemplo de formulário criado com formik e yup:
 
```
import { Formik, Field, ErrorMessage, Form } from 'formik'
import { loginSchema } from '@/schemas/loginSchema'

export function LoginForm() {
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={loginSchema}
      onSubmit={(values) => console.log(values)}
    >
      <Form>
        <div>
          <label htmlFor="email">E-mail</label>
          <Field id="email" name="email" type="text" />
          <ErrorMessage name="email" component="span" />
        </div>

        <div>
          <label htmlFor="password">Senha</label>
          <Field id="password" name="password" type="password" />
          <ErrorMessage name="password" component="span" />
        </div>

        <button type="submit">Entrar</button>
      </Form>
    </Formik>
  )
}
```


