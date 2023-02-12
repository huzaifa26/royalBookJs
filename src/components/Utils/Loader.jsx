import { TailSpin } from 'react-loader-spinner'

export default function Loader() {
    return <div className='w-[97vw] flex justify-center'>
        <TailSpin
            height="60"
            width="60"
            color="#494949"
            ariaLabel="tail-spin-loading"
            radius="1"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
        />
    </div>
}