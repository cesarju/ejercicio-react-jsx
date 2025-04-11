import { useColorMode } from "../components/ui/color-mode";
import { Avatar, Button, Card, For, HStack, Stack } from "@chakra-ui/react";
import React from "react";

const About = () => {
  const { toggleColorMode } = useColorMode();

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Acerca de Nosotros</h1>

      <HStack>
        <Button colorPalette="purple">Click me</Button>
        <Button>Click me</Button>
      </HStack>

      <Button variant="outline" onClick={toggleColorMode}>
        Toggle Mode
      </Button>

      <Stack gap="4" direction="row" wrap="wrap">
        <For each={["subtle", "outline", "elevated"]}>
          {(variant) => (
            <Card.Root width="320px" variant={variant} key={variant}>
              <Card.Body gap="2">
                <Avatar.Root size="lg" shape="rounded">
                  <Avatar.Image src="https://picsum.photos/200/300" />
                  <Avatar.Fallback name="Nue Camp" />
                </Avatar.Root>
                <Card.Title mb="2">Nue Camp</Card.Title>
                <Card.Description>
                  This is the card body. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit.
                </Card.Description>
              </Card.Body>
              <Card.Footer justifyContent="flex-start">
                <Button variant="outline">View</Button>
                <Button>Join</Button>
              </Card.Footer>
            </Card.Root>
          )}
        </For>
      </Stack>
      <p>
        Bienvenidos a nuestra página dedicada a ayudar a los animalitos perdidos
        y en adopción. Nuestro objetivo es brindarles una segunda oportunidad a
        aquellos que más lo necesitan.
      </p>
      <p>
        Aquí podrás encontrar información sobre mascotas que buscan un hogar
        lleno de amor, así como también reportar animalitos perdidos para ayudar
        a reunirlos con sus familias.
      </p>
      <p>
        Además, aceptamos donaciones para continuar con nuestra labor de
        rescate, cuidado y bienestar de los animales. Cada aporte cuenta y hace
        una gran diferencia.
      </p>
      <h2>¿Cómo puedes ayudar?</h2>
      <ul>
        <li>Adoptando una mascota que necesita un hogar.</li>
        <li>Reportando animales perdidos o encontrados.</li>
        <li>Realizando una donación para apoyar nuestra causa.</li>
      </ul>
      <p>
        ¡Gracias por ser parte de esta misión y por ayudar a construir un mundo
        mejor para nuestros amigos de cuatro patas!
      </p>
    </div>
  );
};

export default About;
