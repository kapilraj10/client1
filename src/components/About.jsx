import React from 'react'

const About = () => {
    return (
        <section className='relative w-full bg-white'>
            <div className='mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24'>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                    {/* left-image */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-start">
                        <div className="relative">
                            <img 
                                src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=1400&auto=format&fit=crop"
                                alt="Books, pencils, and glasses"
                                className='h-[420px] sm:h-[520px] lg:h-[560px] w-full object-cover rounded-[30px]' 
                            />
                            {/* quote pill */}
                            <div className="absolute -bottom-8 left-6">
                                <div className="flex items-center gap-3 rounded-[28px] bg-white px-5 py-3 shadow-[0_24px_40px_-16px_rgba(124,58,237,0.35)] ring-1 ring-violet-100">
                                    <span className='grid place-items-center h-10 rounded-full bg-violet-100'>
                                        <span className='h-10 w-10 rounded-full bg-violet-400' />
                                    </span>
                                    <div className='text-[13px] leading-4 text-slate-700 pr-1'>
                                        <p>Some text or some</p>
                                        <p>numbers that we can</p>
                                        <p>Quote here</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* circle image */}
                        <div className="sm:pt-2">
                            <div className="mx-auto w-60 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full overflow-hidden ring-1 ring-black/5 shadow-lg">
                                <img
                                    src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=1200&auto=format&fit=crop"
                                    alt="Smiling kid with glash and bow tie"
                                    className='h-full w-full object-cover' 
                                />
                            </div>
                            {/* rounded robot image */}
                            <div className="mt-8 rounded-[28px] overflow-hidden ring-black/5 shadow-xl">
                                <img
                                    src="https://i.postimg.cc/cLbrHBjW/NAO6-Humanoid-Robot.jpg"
                                    alt="Robot"
                                    className='h-[250px] w-full object-cover' 
                                />
                            </div>
                        </div>
                    </div>
                    {/* right-content */}
                    <div className="max-w-2xl">
                        <p className='text-[12px] font-semibold tracking-widest uppercase text-violet-400'>
                            About Us
                        </p>
                        <h2 className='mt-2 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1]'>
                            Who are{" "}
                            <span className='text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600'>
                                we
                            </span>
                        </h2>
                        <div className='mt-6 space-y-4 text-[15px] sm:text-[16px] leading-7 text-slate-700'>
                            <p>
                                We're a group of engineers and educators from Pulchowk Campus who got
                                tired of classrooms being all theory and no practice. For us, education
                                isn't something you just read, it's something you make.
                            </p>
                            <p>
                                For the last two years, we've been out in classrooms, labs, and even
                                playgrounds with over 3,000 students across all 7 provinces—building
                                things, breaking things, and discovering what truly excites them to
                                learn. Along the way, we created our own kits and digital tools to
                                streamline learning, and even built a syllabus that works for students
                                instead of the textbook.
                            </p>
                            <p>
                                Now, we run classes that feel less like lectures and more like open maker
                                spaces. Students grasp STEAM fundamentals hands-on, watch theories play
                                out in real life, and build real problem-solving skills.
                            </p>
                        </div>
                        {/* founder  */}
                        <div className='mt-5'>
                            <p className='font-semibold text-violet-700'>
                                <a href="/founder" className='hover:underline underline-offset-4 transition-all duration-200'>
                                    Sakar Pathak (Er. Kumar from TWN)
                                </a>
                            </p>
                            <p className='text-slate-500 text-sm'>CEO, Makit Labs</p>
                        </div>
                        <div className='mt-7'>
                            <a
                                href="/about-more"
                                className='inline-flex items-center gap-2 rounded-full border border-violet-300 px-5 py-3 text-[14px] font-semibold text-violet-700 hover:bg-violet-50 transition-all duration-300 group'
                            >
                                Known more about us
                                <svg
                                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About