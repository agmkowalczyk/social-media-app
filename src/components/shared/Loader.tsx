const Loader = () => {
  return (
    <div className='flex-center w-full'>
      <img
        src={`${import.meta.env.VITE_BASE_URL}/assets/icons/loader.svg`}
        alt='loader'
        width={24}
        height={24}
      />
    </div>
  )
}

export default Loader
