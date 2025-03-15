import img1 from "@/assets/images/2024.webp"

export type stackingCardItems={
    id:string;
    label:string;
    year:number;
    desc:string;
    cardData:cardData[];
    image:any;
}

export type cardData={
    id:string;
    label:string;
    title:string;
}

export const stackingCardContent:stackingCardItems[]=[
    {
        id:"1",
        label:"Everything AI 2.0",
        year:2024,
        desc:"Launched Everything AI 2.0 with advanced AI-powered analytics, customizable insights, and expanded user features.",
        cardData:[
            {
                id:"1",
                label:"50K+",
                title:"Users"
            },
            {
                id:"2",
                label:"98%",
                title:"Accuracy"
            },
            {
                id:"3",
                label:"2x faster",
                title:"Processing"
            }
        ],
        image:img1
    },
    {
        id:"2",
        label:"ML Integration",
        year:2023,
        desc:"Introduced personalized machine learning models for users, enhancing prediction accuracy by 30%.Everything AI also launched its first integration with popular CRM tools, allowing seamless data sharing.",
        cardData:[
            {
                id:"1",
                label:"+30%",
                title:"Users"
            },
            {
                id:"2",
                label:"15+",
                title:"Integrations"
            },
            {
                id:"3",
                label:"25k+",
                title:"Users"
            }
        ],
        image:img1
    },
    {
        id:"3",
        label:"The Beginning",
        year:2022,
        desc:"Everything AI was officially launched! Released initial AI-powered automation features for data processing and visualization, setting a foundation for growth in intelligent data solutions.",
        cardData:[
            {
                id:"1",
                label:"10+",
                title:"Features"
            },
            {
                id:"2",
                label:"1M+",
                title:"Data Processed"
            },
            {
                id:"3",
                label:"1K+",
                title:"Clients"
            }
        ],
        image:img1
    }
]
