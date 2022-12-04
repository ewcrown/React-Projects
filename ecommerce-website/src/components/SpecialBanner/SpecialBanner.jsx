import banner from '../../images/ring-img.jpg'

const SpecialBanner = () => {
  return (
    <>
    <section className="py-12">
        <div className="container mx-auto">
            <div className="grid grid-cols-2 gap-10 px-5 py-10 items-center shadow-xl">
                <div className='text-center'>
                    <h4 className='text-3xl uppercase text-yellow-400 mb-4'>Special</h4>
                    <h2 className='mb-5 uppercase text-black text-4xl'>Wedding Ring</h2>
                    <a href="#" className="cursor-pointer transition-all hover:text-yellow-500 hover:border-yellow-500 border-black border inline-block py-2 px-8 uppercase text-black text-xs font-bold">Buy Now</a>
                </div>
                <img src={banner} alt="" srcSet="" />
            </div>
        </div>
    </section>
    </>
  )
}

export default SpecialBanner