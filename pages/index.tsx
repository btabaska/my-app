import { Grid, GridItem } from "@chakra-ui/react";
import Card from "../components/card";

const Home = ({ NASAPhotos }) => {
  return (
    <Grid templateColumns="repeat(3, 1fr)" gap={6}>
      {NASAPhotos.map((photo, id) => {
        return (
          <GridItem w="100%" h="300">
            <Card
              image={photo.url}
              title={photo.title}
              subtitle={photo.copyright}
              description={photo.date}
              roundImage={false}
              id={id}
            />
          </GridItem>
        );
      })}
    </Grid>
  );
};

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(
    `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=9`
  );
  const NASAPhotos = await res.json();
  console.log(NASAPhotos);

  // Pass data to the page via props
  return { props: { NASAPhotos } };
}

export default Home;
