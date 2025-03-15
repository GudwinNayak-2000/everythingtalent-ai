import { Award, Lightbulb, Rocket, Star, TrendingUp, UsersRound } from "lucide-react";



export type thriveItems={
    id:string;
    cardIcon:React.ElementType;
    cardTitle:string;
    cardContent:string;
}


export const thriveContent:thriveItems[]=[
    {
        id:"community-driven",
        cardIcon:UsersRound,
        cardTitle:"Community-Driven",
        cardContent:"We build strong connections and foster collaboration within our team."
    },
    {
        id:"innovation-first",
        cardIcon:Lightbulb,
        cardTitle:"Innovation First",
        cardContent:"We encourage creative thinking and novel approaches to challenges."
    },
    {
        id:"action-oriented",
        cardIcon:Rocket,
        cardTitle:"Action Oriented",
        cardContent:"We transform ideas into tangible results through decisive action."
    },
    {
        id:"continuous-growth",
        cardIcon:TrendingUp,
        cardTitle:"Continuous Growth",
        cardContent:"We build a supportive environment where everyone can thrive"
    },
    {
        id:"excellence-pursuit",
        cardIcon:Star,
        cardTitle:"Excellence Pursuit",
        cardContent:"We embrace new ideas and technologies to stay ahead of the curve"
    },
    {
        id:"shared-success",
        cardIcon:Award,
        cardTitle:"Shared Success",
        cardContent:"We embrace new ideas and technologies to stay ahead of the curve"
    }

]