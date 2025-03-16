export type StoryItem = {
    id: string;
    cardIcon: React.ElementType;
    cardTitle: string;
    cardContent: string;
};

type StoryCardProps = {
    item: StoryItem;
};
const StoryCard: React.FC<StoryCardProps> = ({ item }) => {
    const { id,cardIcon: Icon, cardTitle, cardContent } = item;
    return (
        <div id={id} className="rounded-xl border border-border hover:border-none dark:bg-gray-900/50 p-4 backdrop-blur-sm md:p-6 transition-all shadow-xl 
        duration-200 group dark:border-gray-700 hover:gradient-border hover:bg-purple-600 bg-gradient-to-br from-slate-200 
        via-[#F5F3FC] to-[#e9d5ff00] dark:from-black dark:via-slate-900 dark:to-slate-950 
         duration-300 ease-in-out
after:transition-opacity after:duration-300 
before:transition-opacity before:duration-1000
hover:before:opacity-100 hover:scale-[1.02]
after:absolute after:inset-0 after:rounded-md after:p-[2px] 
after:bg-[linear-gradient(121.31deg,#8B5CF6_-12.16%,#EC4899_48.37%,#F59E0B_112.89%)] 
after:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] 
after:[-webkit-mask-composite:destination-out] 
after:[mask-composite:exclude] 
after:opacity-0
hover:after:opacity-100
        
        
        ">
                <div className="flex flex-col space-y-2">
                    <Icon className="text-2xl text-purple-500" />
                    <div className="flex items-center gap-2">
                        <h3 className="text-lg font-medium">{cardTitle}</h3>
                    </div>
                    <p className="text-gray-600">{cardContent}</p>
                </div>
        </div>
    );
};

export default StoryCard;