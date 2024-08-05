'use client'
import { Crown, Heart, Move, BedDouble, Bath, Star } from 'lucide-react';
import { CardDescription, Card, CardBadge, CardContent, CardHeader, CardTitle, CardFooter, CardInfoItem, CardInfoItemText, CardItem, CardItemLabel, CardItemText, CardItems } from "@/app/theme/main/ui/Card";
import { ImgCover } from "@/app/theme/main/ui/imgCover";
import Link from "next/link";
import { ButtonRounded } from "@/app/theme/main/ui/buttonIcon";
import { Inline } from '@/app/theme/main/ui/inline';

const index = ({ item }) => {

    return (
        <Card>
            <CardHeader>
                <ImgCover src={item.Picture} alt="" />
                <CardBadge>
                    <Link href={'#'}>
                        <ButtonRounded>
                            <Heart className="fill-slate-100 dark:fill-slate-700 hover:fill-red-600 dark:hover:fill-red-600 stroke-none" />
                        </ButtonRounded>
                    </Link>
                </CardBadge>
            </CardHeader>
            <CardContent>
                <CardTitle>
                    <Link href={'#'}>
                        {item.name}
                    </Link>

                </CardTitle>
                {item.premium && (
                    <Crown size={24} className="absolute right-4 top-2" />
                )}
                <CardDescription>
                    <CardInfoItem>
                        <Move className=" stroke-primary" />
                        <CardInfoItemText>
                            8000sqf
                        </CardInfoItemText>
                    </CardInfoItem>
                    <CardInfoItem>
                        <BedDouble className="stroke-primary" />
                        <CardInfoItemText>
                            4 Beds
                        </CardInfoItemText>
                    </CardInfoItem>
                    <CardInfoItem>
                        <Bath className="stroke-primary" />
                        <CardInfoItemText>
                            2 Baths
                        </CardInfoItemText>
                    </CardInfoItem>
                </CardDescription>
                <CardFooter>
                    <CardItem>
                        <CardItemLabel>
                            Price
                        </CardItemLabel>
                        <CardItemText>
                            $5000
                        </CardItemText>
                    </CardItem>
                    <CardItem>
                        <CardItemLabel>
                            Rating
                        </CardItemLabel>
                        <Inline>
                            <Star size={18} className="fill-amber-400 stroke-none" />
                            <Star size={18} className="fill-amber-400 stroke-none" />
                            <Star size={18} className="fill-amber-400 stroke-none" />
                            <CardItemText>
                                {item.Scoring.value} {`(${item.Scoring.count})`}
                            </CardItemText>
                        </Inline>

                    </CardItem>
                </CardFooter>
            </CardContent>

        </Card>
    );
};

export default index;