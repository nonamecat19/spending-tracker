const LoginPage = () => {
    return (
        <main className='flex justify-end bg-blue-900'>
            <div className='flex flex-col justify-center items-center max-w-7xl h-screen gap-48 bg-black'>
                <div className='w-[200px] h-[200px] bg-blue-400 rounded-3xl rotate-45'>

                </div>
                <div className='w-[300px] mx-20 h-16 bg-blue-400 rounded-xl flex justify-center items-center cursor-pointer'>
                    <h1 className='text-2xl font-bold'>
                        Continue with Google
                    </h1>
                </div>
            </div>
        </main>
    )
}
export default LoginPage