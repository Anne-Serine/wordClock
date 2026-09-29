interface MinuteDotsProps {
    activeCount: number;
}

export default function MinuteDots({
    activeCount,
}: MinuteDotsProps) {
    return (
        <div 
            className="minute-dots"
            aria-label="{`${activeCount} ekstra minutter`"
        >
            {[1, 2, 3, 4].map((minute) => (
                <span 
                    key={minute}
                    className={`dot${minute <= activeCount ? " active" : " "}`}
                />
            ))}
        </div>
    );
}