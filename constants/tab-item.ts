import Ambition from "@/assets/images/ambition.jpg"
import Satisfaction from "@/assets/images/some1.avif"
import Integrity from "@/assets/images/integrity.webp"
import Vigilance from "@/assets/images/security.jpg"


export type TabItem = {
    image: any;
    id: string;
    label: string;
    title?: string;
    content: string;
    list?: string[];
  };
  
  export const tabItems: TabItem[] = [
    {
      id: "ambition",
      image: Ambition,
      label: "Ambition",
      title: "Connecting Talent and Opportunity",
      content:
        "Hiring doesn't have to be a painful guessing game. We're bridging the gap between recruiters and software engineers through our platform, where talent and opportunity finally meet, creating the perfect match.",
      list: [
        "Connect skilled developers with ideal roles",
        "Streamline tech recruitment process",
        "Create optimal candidate-company matches",
      ],
    },
    {
      id: "satisfaction",
      image: Satisfaction,
      label: "Satisfaction",
      title: "Partnering for Success",
      content: "Your success is our mission, and we're here to fuel it every step of the way by becoming your partner in achieving hiring excellence. For us, your success isn't just a goal; it's the spark that drives the future of tech and innovation!",
      list:[
        "Dedicated partnership for hiring success",
        "Fuel company growth through talent",
        "Drive tech innovation through matching"
      ]
    },
    {
      id: "integrity",
      image: Integrity,
      label: "Integrity",
      title:"Building Trust in Hiring",
      content: "We believe that trust is the foundation of every great hire. That's why we make it our mission to prioritize clarity and trust at every step of the journey.",
      list:[
        "Build hiring confidence through transparency",
        "Prioritize trust in recruitment process",
        "Foster honest candidate-employer relationships"
      ]
    },
    {
      id: "vigilance",
      image: Vigilance,
      label: "Vigilance",
      title:"Security-Driven Solutions",
      content: "Confidence starts with security, and we are committed to enhancing your experience. Your security is woven into every part of our platform so you can drive forward without a second thought.",
      list:[
        "Prioritize end-to-end platform security",
        "Ensure protected recruitment experience",
        "Build confidence through data protection"
      ]
    },
  ];
  