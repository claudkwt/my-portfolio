import Sidebar from "@/components/sidebar";
import { assetType, projectDetails } from "@/utils/projectDetails";
import { useParams } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/app/ui/carousel";
import { useEffect, useState } from "react";
import Modal from "@/components/modal";
import { Card, CardContent } from "@/app/ui/card";
import ProjectTagBar from "@/components/projectTag";
import { Button } from "@/app/ui/button";
import { Dialog, DialogClose, DialogContent, DialogFooter } from "@/app/ui/dialog";
import { X } from "lucide-react";

export default function ProjectPage() {
  const [openModals, setOpenModals] = useState<boolean[]>([]);
  const { id } = useParams<{ id: string }>();
  const project = projectDetails[Number(id)];

  useEffect(() => {
    setOpenModals(new Array(project.assets.length).fill(false));
  }, [project]);

  if (!id) {
    return <div>Error finding project</div>;
  }
  const handleCloseModal = (index: number) => {
    const newOpenModals = [...openModals];
    newOpenModals[index] = false;
    setOpenModals(newOpenModals);
  };

  return (
    <>
      <div className="px-16 flex w-screen pb-10 pt-10 overflow-x-hidden place-content-center h-screen scrollbar">
        <Sidebar isBasic={true} logoVariant="back" />
        <div className="w-full md:w-1/2 flex-col space-y-10">
          <h1 className="text-2xl font-bold">{project.title}</h1>
          <div
            className="text-muted-text whitespace-normal"
            dangerouslySetInnerHTML={{ __html: project.description }}
          />
          <div className="w-full flex justify-center">
              {project.link
              ? <Button
                    className="rounded-xl"
                    variant={"destructive"}
                    onClick={()=> {
                    if (project.link){
                        window.open(project.link, "_blank")
                    }
                    }}
                >
                    {project.link ?
                    <a className="underline-0" href={project.link} target="_blank">
                        Take a Look!
                    </a>
                    : "Coming Soon"}
                </Button>
              : <></>}
          </div>
          <div className="w-fit justify-self-start place-items-baseline">
            {project.tags.map((tag) => (
              <span key={tag}>
                <ProjectTagBar tag={tag} />
              </span>
            ))}
          </div>
          {project.assets?.length > 1 ? (
            <Carousel>
              {/* <div className="text-center text-sm text-muted-text mb-3">
                                    Slide {current} of {count}
                                </div> */}
              <CarouselPrevious />
              <CarouselNext />
              <CarouselContent className="mb-10">
                {project.assets?.map((asset, index) => {
                  return (
                    <CarouselItem
                      key={asset[0]}
                      className="flex aspect-square lg:basis-1/2 h-5/6 w-full min-w-1/3 place-content-center"
                    >
                      <AssetCard
                        asset={asset}
                        index={index}
                        openModals={openModals}
                        setOpenModals={setOpenModals}
                      />
                    </CarouselItem>
                  );
                })}
              </CarouselContent>
            </Carousel>
          ) : 
          <>
              {project.assets
              ? <div className="pb-10">
                <AssetCard
                    asset={project.assets[0]}
                    index={0}
                    openModals={openModals}
                    setOpenModals={setOpenModals}
                />
                </div>
                       : <></>}
          </>
        }
          
        </div>
      </div>
      {project.assets?.map((asset, index) => {
        return (
          <div key={index}>
            {(asset[0] == assetType["Image"])
            ? <Dialog
                key={index}
                open={openModals[index]}
                onOpenChange={() => handleCloseModal(index)}
              >
                
                <DialogContent className="w-9/12 rounded-lg justify-center">
                    <img
                        className="w-dvh"
                        src={asset[1]}
                        alt="loading..."
                    />
                </DialogContent>
                </Dialog>
            : <> </>}
          </div>
        );
      })}
    </>
  );
}

type assetCardProps = {
  asset: string[];
  index: number;
  openModals: boolean[];
  setOpenModals: React.Dispatch<React.SetStateAction<boolean[]>>;
};
function AssetCard({
  asset,
  index,
  openModals,
  setOpenModals,
}: assetCardProps) {
  const handleImageClick = (index: number) => {
    const newOpenModals = [...openModals];
    newOpenModals[index] = true;
    setOpenModals(newOpenModals);
  };

  return (
    <Card className="flex h-full w-full items-center justify-center rounded-xl">
      {asset[0] == assetType["Image"] ? (
        <CardContent className="flex aspect-square flex-col space-y-6 items-center justify-center m-5">
          <span className="text-muted-text italic">
            {asset[2] ? asset[2] : ""}
          </span>
          <img
            className="object-cover h-full"
            src={asset[1]}
            alt="loading..."
            onClick={() => handleImageClick(index)}
          />
        </CardContent>
      ) : (
        <></>
      )}
      {asset[0] == assetType["Video"] ? (
        <CardContent className="flex flex-col space-y-6 items-center justify-center p-4 w-full">
          <span className="text-muted-text italic">
            {asset[2] ? asset[2] : ""}
          </span>
          {asset[1].includes("youtube.com") ? (
            <iframe
              className="aspect-video w-full"
              src={asset[1]}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          ) : (
            <video className="p-2 " controls>
              <source src={asset[1]} type="video/mp4" />
            </video>
          )}
        </CardContent>
      ) : (
        <></>
      )}
    </Card>
  );
}
