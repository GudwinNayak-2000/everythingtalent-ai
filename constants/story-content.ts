import { Brain,Users,GraduationCap,Rocket} from "lucide-react";
import React from "react";



export type storyItems = {
    id:string;
    cardIcon:React.ElementType;
    cardTitle:string;
    cardContent:string;
}

export const storyContent : storyItems[]=[
    {
        id:"ai-powered",
        cardIcon:Brain,
        cardTitle:"AI-Powered",
        cardContent:"Advanced AI/ML algorithms for precise matching"
    },
    {
        id:"human-centric",
        cardIcon:Users,
        cardTitle:"Human-Centric",
        cardContent:"Built by recruiters, for recruiters"
    },
    {
        id:"skill-assessment",
        cardIcon:GraduationCap,
        cardTitle:"Skill Assessment",
        cardContent:"Comprehensive skill evaluation system"
    },
    {
        id:"future-ready",
        cardIcon:Rocket,
        cardTitle:"Future-Ready",
        cardContent:"Constantly evolving with industry needs"
    }
]