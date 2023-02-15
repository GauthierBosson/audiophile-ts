import Overline from "@/components/Primitives/Overline";
import Grid from "@/components/Grid";
import Navbar from "./Navbar";

function Header() {
  return (
    <header className="relative">
      <Navbar />
      <div className="bg-[url('/image-hero.jpg')] aspect-video bg-center bg-cover bg-no-repeat">
        <div className="container">
          <Grid>
            <div className="self-center col-span-5">
              <Overline>New Product</Overline>
              <h1 className="text-white">XX99 Mark II Headphones</h1>
              <p className="text-white">
                Experience natural, lifelike audio and exceptional build quality
                made for the passionate music enthusiast.
              </p>
            </div>
          </Grid>
        </div>
      </div>
    </header>
  );
}

export default Header;
