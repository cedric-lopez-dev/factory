import CardReverse from '@/app/theme/main/cardReverse'
import { Section } from '@/app/theme/main/ui/section';

const index = () => {
    return (
        <div className='bg-slate-900'>
            <Section>
                <div className="grid gap-14 grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
                    <CardReverse>
                        <p className='text-slate-50 md:text-2xl text-3xl font-semibold'>100 000</p>
                        <p className='text-slate-50 font-light'>référencés</p>
                    </CardReverse>
                    <CardReverse>
                        <p className='text-slate-50 md:text-2xl text-3xl font-semibold'>100 000</p>
                        <p className='text-slate-50 font-light'>référencés</p>
                    </CardReverse>
                    <CardReverse>
                        <p className='text-slate-50 md:text-2xl text-3xl font-semibold'>100 000</p>
                        <p className='text-slate-50 font-light'>référencés</p>
                    </CardReverse>
                </div>
            </Section>
        </div>
    );
};

export default index;