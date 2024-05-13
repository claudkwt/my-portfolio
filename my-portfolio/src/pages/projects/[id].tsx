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
        <div className="px-16 flex w-screen pb-10 overflow-x-hidden place-content-center h-screen">
            <Sidebar isBasic={true}/>
            <div className="w-full md:w-1/2 flex-col pt-10 space-y-10">
                <h1 className='text-2xl font-bold'>{project.title}</h1>
                <div className='text-muted-text font-light'>
                    {project.description}
                </div>
                <div className="w-fit justify-self-start place-items-baseline">
                {project.tags.map((tag) => (
                  <span key={tag}>
                    <ProjectTagBar tag={tag} />
                  </span>
                ))}
              </div>
                <div className="text-center text-sm text-muted-text">
                    Slide {current} of {count}
                </div>
                <Carousel  setApi={setApi}>
                    
                    <CarouselPrevious />
                    <CarouselNext />
                    <CarouselContent className="">
                    {
                        project.assets.map((img, index) => {
                        return (
                            <CarouselItem key={img}>
                                <Card>
                                    <CardContent className="flex aspect-square items-center justify-center p-2">
                                        <img
                                            className="object-cover"
                                            src={img}
                                            alt="loading..."
                                            onClick={() => handleImageClick(index)} 
                                        />
                                    </CardContent>
                                </Card>
                                <Modal 
                                    key={index}
                                    isOpen={openModals[index]} 
                                    onClose={() => handleCloseModal(index)}
                                    imageUrl={img} 
                                />
                            </CarouselItem>
                        )
                        })
                    }
                    </CarouselContent>
                </Carousel>
            </div>
        </div>
    )
}