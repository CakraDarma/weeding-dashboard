import Image from "next/image";
import Layout from "../components/layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

const Home = () => {
  return (
    <Layout>
      <div className="2xl:w-[80%]">
        <div className="flex items-center gap-x-5">
          <Image
            src={"/sample-img.png"}
            alt="img"
            width={0}
            height={0}
            sizes="70vw"
            className="w-auto h-auto"
          />
          <div className="flex flex-col">
            <h2 className="text-3xl font-normal">Dara & Arifin Weddings</h2>
            <div className="flex items-center gap-x-2">
              <p className="text-sm font-semibold">Event start: 13 Aug 2024</p>
              <span className="text-xs bg-[#C9FDC9] text-primary font-medium px-3 py-1 rounded-sm">
                Plan: Lite
              </span>
            </div>
          </div>
        </div>

        <div className="gap-x-10 mt-10 grid grid-cols-2">
          <Card className="col-span-1">
            <CardHeader>
              <CardTitle>Shared Album</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex w-full max-w-md items-center space-x-2">
                <div className="w-full flex-row flex items-center relative">
                  <Input type="email" defaultValue={"fotoslide.com/nu38hy"} />
                  <span className="text-xs absolute right-3 text-green-700">
                    Copy
                  </span>
                </div>
                <Button type="submit" className="text-xs">
                  OPEN
                </Button>
              </div>
              <p className="mt-5 text-xs text-muted">
                The digital album lets your guests upload new photos or view
                existing ones. Share it with your guests via a direct link or
                using its unique QR code (print it or display it digitally).
              </p>

              <div className="flex gap-x-5 mt-10">
                <div className="flex flex-col space-y-3 items-center h-full">
                  <div className="">
                    <Image
                      src={"/barcode.png"}
                      alt="barcode"
                      width={100}
                      height={100}
                    />
                    <span className="underline text-sm invisible">as</span>
                  </div>
                  <Button className="text-[12px]">DOWNLOAD QR CODE</Button>
                </div>
                <div className="flex flex-col text-center space-y-3 items-center h-full ">
                  <div className="bg-gray-100 p-4 mb-1">
                    <Image
                      src={"/barcode.png"}
                      alt="barcode"
                      width={100}
                      height={100}
                      className="w-16 h-16"
                    />
                    <span className="underline text-sm">Edit Card</span>
                  </div>

                  <Button className="text-[12px]" variant={"outline"}>
                    DOWNLOAD QR CARD
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="col-span-1">
            <CardHeader>
              <CardTitle>Slide Show</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex w-full max-w-md items-center space-x-2">
                <div className="w-full flex-row flex items-center relative">
                  <Input type="email" defaultValue={"fotoslide.com/nu38hy"} />
                  <span className="text-xs absolute right-3 text-green-700">
                    Copy
                  </span>
                </div>
                <Button type="submit" className="text-xs">
                  OPEN
                </Button>
              </div>
              <p className="mt-5 text-xs text-muted">
                Every upload to your digital album automatically appears on your
                SlideShow. Connect it to video projectors, TVs, or anywhere your
                guests can easily find it.
              </p>

              <div className="mt-10">
                <div className="bg-black rounded-md p-5 text-white flex flex-col items-center text-center space-y-4">
                  <p>Scan to view or Add photos!</p>
                  <Image
                    src={"/barcode.png"}
                    alt="barcode"
                    width={100}
                    height={100}
                  />
                </div>

                <div className="flex items-center justify-between mt-5">
                  <div className="flex items-center gap-x-5">
                    <p className="text-xs">Display On</p>
                    <div className="flex items-center gap-x-2">
                      <Image
                        src={"/projector.svg"}
                        alt="icon"
                        width={30}
                        height={20}
                      />
                      <Image
                        src={"/pc.svg"}
                        alt="icon"
                        width={30}
                        height={20}
                      />
                      <Image
                        src={"/laptop.svg"}
                        alt="icon"
                        width={30}
                        height={20}
                      />
                    </div>
                  </div>

                  <Link
                    href={"/"}
                    className="text-xs text-primary underline font-medium"
                  >
                    How to do it?
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Home;