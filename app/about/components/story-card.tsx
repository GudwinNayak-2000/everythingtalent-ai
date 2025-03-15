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
        via-[#F5F3FC] to-[#e9d5ff00] dark:from-black dark:via-slate-900 dark:to-slate-950 hover:scale-[101%]">
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