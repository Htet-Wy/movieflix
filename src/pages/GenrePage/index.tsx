import { Suspense } from "react";
import Genre from "../../components/Genre";
import { Await, useLoaderData } from "react-router-dom";
import { movie } from "../../libs/definitions";
import { PageLoading } from "../../components/Loading";

const GenrePage: React.FC<{ title: string; genreId: number }> = (props) => {
  const data = useLoaderData() as movie[];

  return (
    <>
      <Suspense
        fallback={<PageLoading title={`Loading ${props.title} Movies`} />}
      >
        <Await resolve={data}>
          <Genre title={props.title} movies={data} genreId={props.genreId} />
        </Await>
      </Suspense>
    </>
  );
};

export default GenrePage;
