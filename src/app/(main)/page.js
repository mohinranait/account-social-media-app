
import PostCard from '@/components/cards/PostCard'
import PostContainer from '@/components/cards/PostContainer';
import SuggestsCurd from '@/components/cards/suggests/SuggestsCurd'
import HomeLeftSidebar from '@/components/sidebars/HomeLeftSidebar'
import HomeRightSidebar from '@/components/sidebars/HomeRightSidebar'
import PostCreator from '@/ui/PostCreator/PostCreator';




const HomePage = () => {




  return (
    <>
      <div className='sm:px-4 3xl:container mt-4'>
        <div className='grid res9:grid-cols-3 res11:grid-cols-4 gap-5'>
          <div className='hidden res11:block col-span-1 '>
            <HomeLeftSidebar />
          </div>
          <div className='col-span-2 flex flex-col gap-5 '>
            <PostCreator />
            <div>


              <div className=' res55:mx-auto w-[calc(100vw-0px)] res55:max-w-[550px] flex flex-col gap-2 res6:gap-4 '>

                <SuggestsCurd />
                <PostContainer query={'all'} />
              </div>
            </div>
          </div>
          <div className='hidden res9:block col-span-1'>
            <HomeRightSidebar />
          </div>
        </div>
      </div>

    </>
  )
}

export default HomePage