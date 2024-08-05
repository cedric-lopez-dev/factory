'use client'
import { HeroStrong } from '@/app/theme/main/ui/Text';
import { Hero, HeroSubTitle, HeroTitle } from '@/app/theme/main/ui/hero'
import { Inline } from '@/app/theme/main/ui/inline';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const index = () => {
    const test = () => (
        console.log("test")
    )
    return (
        <>
            <Hero>
                <HeroTitle>
                    We will help you find <br /> {"your "}
                    <HeroStrong>
                        {"Wonderful "}
                    </HeroStrong>
                    home
                </HeroTitle>
                <HeroSubTitle>
                    A great plateform to buy, sell and rent your properties without any agent or commisions.
                </HeroSubTitle>

            </Hero>
        </>
    );
};

export default index;