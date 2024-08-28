import Sidebar from '@/components/sidebar';
import { projectDetails } from '@/utils/projectDetails';
import { useParams } from 'react-router-dom';
import {
    Carousel,
    type CarouselApi,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/app/ui/carousel"
import { useEffect, useState } from 'react';
import Modal from '@/components/modal';
import { Card, CardContent } from '@/app/ui/card';
import ProjectTagBar from '@/components/projectTag';

export default function ProjectPage () {
    const [openModals, setOpenModals] = useState<boolean[]>([]);
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);
    const [count, setCount] = useState(0);
    const { id } = useParams<{ id: string }>();
    const project = projectDetails[Number(id)];
    
    useEffect(()=> {
        setOpenModals(new Array(project.assets.length).fill(false))
    }, [project])

    useEffect(() => {
        if (!api) {
          return
        }
        setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap() + 1)
     
        api.on("select", () => {
          setCurrent(api.selectedScrollSnap() + 1)
        })
    }, [api])

    const handleImageClick = (index: number) => {
        const newOpenModals = [...openModals];
        newOpenModals[index] = true;
        setOpenModals(newOpenModals);
    };

    const handleCloseModal = (index: number) => {
        const newOpenModals = [...openModals];
        newOpenModals[index] = false;
        setOpenModals(newOpenModals);
    };
    if (!id) {
        return (
            <div>Error finding project</div>
        )
    }

    return (
        <>
            <div className="px-16 flex w-screen pb-10 pt-10 overflow-x-hidden place-content-center h-screen scrollbar">
                <Sidebar isBasic={true} logoVariant='back'/>
                <div className="w-full md:w-1/2 flex-col space-y-10">
                    <h1 className='text-2xl font-bold'>{project.title}</h1>
                    <div className='text-muted-text whitespace-normal'
                        dangerouslySetInnerHTML={{ __html: project.description }}
                    />
                    <div className="w-fit justify-self-start place-items-baseline">
                    {project.tags.map((tag) => (
                      <span key={tag}>
                        <ProjectTagBar tag={tag} />
                      </span>
                    ))}
                  </div>
                <Carousel setApi={setApi}>
                    {/* <div className="text-center text-sm text-muted-text mb-3">
                        Slide {current} of {count}
                    </div> */}
                    <CarouselPrevious />
                    <CarouselNext />
                    <CarouselContent className='mb-10'>
                    {
                        project.assets.map((asset, index) => {
                        return (
                            <CarouselItem key={asset[0]} className='md:basis-1 lg:basis-1/2 h-120'>
                                <Card className='flex h-full items-center justify-center rounded-xl'>
                                    <CardContent className="flex flex-col aspect-square space-y-6 items-center justify-center p-2">
                                        <span className='text-muted-text italic'>{asset[1]}</span>
                                        <img
                                            className="object-cover h-full"
                                            src={asset[0]}
                                            alt="loading..."
                                            onClick={() => handleImageClick(index)}
                                        />
                                    </CardContent>
                                </Card>
                            </CarouselItem>
                        )
                        })
                    }
                    </CarouselContent>
                </Carousel>
            </div>
                </div>
                {
            project.assets.map((asset, index) => {
            return (
                <Modal
                    key={index}
                    isOpen={openModals[index]}
                    onClose={() => handleCloseModal(index)}
                    imageUrl={asset[0]}
                />
            )
            })
                }
        </>
    )
}