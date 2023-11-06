import Grid from "@/components/layout/Grid";
export default function PaginaLayout() {
  return (
    <div className="flex flex-col justify-center items-center h-screen ">
      <div className="w-11/12 lg:w-4/5">
        <Grid lg={8} md={4} sm={2}>
          <div className="h-24 w-full bg-violet-500">#1</div>
          <div className="h-24 w-full bg-violet-500">#2</div>
          <div className="h-24 w-full bg-violet-500">#3</div>
          <div className="h-24 w-full bg-violet-500">#4</div>
          <div className="h-24 w-full bg-blue-500">#5</div>
          <div className="h-24 w-full bg-blue-500">#6</div>
          <div className="h-24 w-full bg-blue-500">#7</div>
          <div className="h-24 w-full bg-blue-500">#8</div>
        </Grid>
      </div>
    </div>
  );
}
