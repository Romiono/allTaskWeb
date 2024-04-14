import {useState} from 'react'
import './App.css'
import {useForm} from "react-hook-form";

function App() {
    const {
        register,
        handleSubmit,
        getValues,
        formState: {errors},
    } = useForm();
    const onSubmit = () => {
        console.log(getValues());
    }
    return (
        <div className={'flex flex-col justify-center items-center w-full h-dvh gap-3'}>
            <h1 className={'text-3xl'}>Форма</h1>
            <div className="card w-96 bg-neutral-700 shadow-xl">
                <div className="card-body p-2">
                    <form onSubmit={handleSubmit(onSubmit)} className={'flex flex-col items-center gap-2 w-full'}>
                        <label className="input input-bordered flex items-center gap-2 w-full bg-neutral-800">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"
                                 className="w-4 h-4 opacity-70">
                                <path
                                    d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z"/>
                                <path
                                    d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z"/>
                            </svg>
                            <input {...register('email')} type="text" className="grow" placeholder="Email"/>
                        </label>
                        <label className="input input-bordered flex items-center gap-2 w-full bg-neutral-800">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                <path fill="currentColor"
                                      d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24c1.12.37 2.33.57 3.57.57c.55 0 1 .45 1 1V20c0 .55-.45 1-1 1c-9.39 0-17-7.61-17-17c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1c0 1.25.2 2.45.57 3.57c.11.35.03.74-.25 1.02z"/>
                            </svg>
                            <input {...register('number')} type='text' className="grow" placeholder={'Номер'}/>
                        </label>
                        <label className="input input-bordered flex items-center gap-2 w-full bg-neutral-800">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"
                                 className="w-4 h-4 opacity-70">
                                <path
                                    d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z"/>
                            </svg>
                            <input {...register('username')} type="text" className="grow" placeholder="Username"/>
                        </label>
                        <label className="input input-bordered flex items-center gap-2 w-full bg-neutral-800">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"
                                 className="w-4 h-4 opacity-70">
                                <path fillRule="evenodd"
                                      d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                                      clipRule="evenodd"/>
                            </svg>
                            <input {...register('password')} type="password" className="grow" placeholder="password"/>
                        </label>
                        <label className="input input-bordered flex items-center gap-2 w-full bg-neutral-800">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M21 6v2H3V6zM3 18h9v-2H3zm0-5h18v-2H3z"/>
                            </svg>
                            <input {...register('text')} type='text' className="grow" placeholder='Какой-то текст'/>
                        </label>
                        <div
                            className='flex justify-start items-center gap-4 w-full p-1 px-4 bg-neutral-800 rounded-md'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32">
                                <path fill="currentColor"
                                      d="M22 3v2h3.563l-3.375 3.406A6.962 6.962 0 0 0 18 7c-1.87 0-3.616.74-4.938 2.063a6.94 6.94 0 0 0 .001 9.875c.87.87 1.906 1.495 3.062 1.812c.114-.087.242-.178.344-.28a3.45 3.45 0 0 0 .874-1.532a4.906 4.906 0 0 1-2.875-1.407C13.524 16.588 13 15.336 13 14s.525-2.586 1.47-3.53C15.412 9.523 16.664 9 18 9s2.587.525 3.53 1.47A4.956 4.956 0 0 1 23 14c0 .865-.245 1.67-.656 2.406c.096.516.156 1.058.156 1.594c0 .498-.042.99-.125 1.47c.2-.163.378-.348.563-.532C24.26 17.614 25 15.87 25 14c0-1.53-.504-2.984-1.406-4.188L27 6.438V10h2V3zm-6.125 8.25c-.114.087-.242.178-.344.28c-.432.434-.714.96-.874 1.533c1.09.14 2.085.616 2.875 1.406c.945.943 1.47 2.195 1.47 3.53s-.525 2.586-1.47 3.53C16.588 22.477 15.336 23 14 23s-2.587-.525-3.53-1.47A4.948 4.948 0 0 1 9 18c0-.865.245-1.67.656-2.406A8.789 8.789 0 0 1 9.5 14c0-.498.042-.99.125-1.47c-.2.163-.377.348-.563.533C7.742 14.384 7 16.13 7 18c0 1.53.504 2.984 1.406 4.188L6.72 23.875l-2-2l-1.44 1.406l2 2l-2 2l1.44 1.44l2-2l2 2l1.405-1.44l-2-2l1.688-1.686A6.932 6.932 0 0 0 14 25c1.87 0 3.616-.74 4.938-2.063C20.26 21.616 21 19.87 21 18s-.74-3.614-2.063-4.938c-.87-.87-1.906-1.495-3.062-1.812"/>
                            </svg>
                            <p className='grow-0 text-neutral-400'>Выберите ваш пол:</p>
                            <div className="form-control">
                                <label className="label cursor-pointer">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em"
                                         viewBox="0 0 256 256">
                                        <path fill="currentColor"
                                              d="M216 28h-48a12 12 0 0 0 0 24h19l-32.72 32.74a84 84 0 1 0 17 17L204 69v19a12 12 0 0 0 24 0V40a12 12 0 0 0-12-12m-69.59 166.46a60 60 0 1 1 0-84.87a60.1 60.1 0 0 1 0 84.87"/>
                                    </svg>
                                    <input {...register('gender')} type="radio" name="radio-10" className="radio checked:bg-sky-500" checked
                                           value={'male'}/>
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label cursor-pointer">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em"
                                         viewBox="0 0 256 256">
                                        <path fill="currentColor"
                                              d="M212 96a84 84 0 1 0-96 83.13V196H88a12 12 0 0 0 0 24h28v20a12 12 0 0 0 24 0v-20h28a12 12 0 0 0 0-24h-28v-16.87A84.12 84.12 0 0 0 212 96M68 96a60 60 0 1 1 60 60a60.07 60.07 0 0 1-60-60"/>
                                    </svg>
                                    <input {...register('gender')} type="radio" name="radio-10" className="radio checked:bg-pink-500" checked
                                           value={'female'}/>
                                </label>
                            </div>
                        </div>
                        <div className='flex justify-start items-center gap-4 w-full'>
                            <select {...register('language')} multiple={true} className="select select-bordered w-full bg-neutral-800 ">
                                <option value="Python">Python</option>
                                <option value="JavaScript">JavaScript</option>
                                <option value="Java">Java</option>
                                <option value="C#">C#</option>
                                <option value="C++">C++</option>
                                <option value="Ruby">Ruby</option>
                                <option value="Go">Go</option>
                                <option value="Swift">Swift</option>
                                <option value="Kotlin">Kotlin</option>
                                <option value="TypeScript">TypeScript</option>
                            </select>
                        </div>
                        <button  className={'btn btn-success btn-outline w-full'}>Отправить</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default App
