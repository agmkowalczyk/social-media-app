import { useState } from 'react'
import { Input } from '@/components/ui/input'
import GridPostList from '@/components/shared/GridPostList'
import SearchResults from '@/components/shared/SearchResults'

const Explore = () => {
  const [searchValue, setSearchValue] = useState('')

  // const posts = []

  // const shouldShouSearchResults = searchValue !== ''
  // const shoudShowPosts =
  //   !shouldShouSearchResults &&
  //   posts.pages.every((page) => page.documents.length === 0)

  return (
    <div className='explore-contaner'>
      <div className='explore-inner_container'>
        <h2 className='h3-bold md:h2-bold w-full'>Search Posts</h2>
        <div className='flex gap-1 px-4 w-full rounded-lg bg-dark-4'>
          <img
            src='./assets/icons/search.svg'
            alt='search'
            width={24}
            height={24}
          />
          <Input
            type='text'
            placeholder='Search'
            className='explore-search'
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </div>

        <div className='flex-between w-full max-w-5xl mt-16 mb-7'>
          <h3 className='body-bold md:h3-bold'>Popular Today</h3>

          <div className='flex-center gap-3 bg-dark-3 rounded-xl px-4 py-2 cursor-pointer'>
            <p className='small-medium md:base-medium text-light-2'>All</p>
            <img
              src='./assets/icons/filter.svg'
              alt='filter'
              width={20}
              height={20}
            />
          </div>
        </div>

        {/* <div className='flex flex-wrap gap-9 w-full max-w-5xl'>
          {shouldShouSearchResults ? (
            <SearchResults />
          ) : shoudShowPosts ? (
            <p className='text-light-4 mt-10 text-center w-full'>
              End of posts
            </p>
          ) : (
            posts.pages.map((page, idx) => (
              <GridPostList key={`page=${idx}`} posts={page.documents} />
            ))
          )}
        </div> */}
      </div>
    </div>
  )
}

export default Explore
