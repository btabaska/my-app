import { Grid, GridItem } from "@chakra-ui/react";
import Card from "../components/card";
import { formatDate } from "../lib/formatters";
import "reset-css";

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
    `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&start_date=${formatDate(
      new Date(),
      8
    )}`
  );
  const NASAPhotos = await res.json();

  // Pass data to the page via props
  return { props: { NASAPhotos } };
}

export default Home;
