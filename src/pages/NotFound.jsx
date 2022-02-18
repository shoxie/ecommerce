import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Newsletter from "../components/Newsletter";
import Announcement from "../components/Announcement";

function NotFound() {
  return (
    <div>
      <NavBar />
      <Announcement />
      <div className="px-10 bg-[#fcf1ed] h-[80vh] flex flex-col items-center justify-center">
        <h2 className="text-4xl font-semibold">Page Not Found</h2>
        <p className="text-justify text-lg mt-4 md:w-[50vw] w-full">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything embarrassing hidden in the middle of text. All
          the Lorem Ipsum generators on the Internet tend to repeat predefined
          chunks as necessary, making this the first true generator on the
          Internet.
        </p>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
}

export default NotFound;
