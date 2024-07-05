import React, { useState, useEffect } from 'react';
import Hamster from '../icons/Hamster';
import { binanceLogo, dailyCipher, dailyCombo, dailyReward, dollarCoin, hamsterCoin, mainCharacter } from '../images';
import Info from '../icons/Info';
import Settings from '../icons/Settings';
import Mine from '../icons/Mine';
import Friends from '../icons/Friends';
import Coins from '../icons/Coins';
export default function Land(){
    const levelNames = [
        "Bronze",    // From 0 to 4999 coins
        "Silver",    // From 5000 coins to 24,999 coins
        "Gold",      // From 25,000 coins to 99,999 coins
        "Platinum",  // From 100,000 coins to 999,999 coins
        "Diamond",   // From 1,000,000 coins to 2,000,000 coins
        "Epic",      // From 2,000,000 coins to 10,000,000 coins
        "Legendary", // From 10,000,000 coins to 50,000,000 coins
        "Master",    // From 50,000,000 coins to 100,000,000 coins
        "GrandMaster", // From 100,000,000 coins to 1,000,000,000 coins
        "Lord"       // From 1,000,000,000 coins to ∞
      ];
    
      const levelMinPoints = [
        0,        // Bronze
        5000,     // Silver
        25000,    // Gold
        100000,   // Platinum
        1000000,  // Diamond
        2000000,  // Epic
        10000000, // Legendary
        50000000, // Master
        100000000,// GrandMaster
        1000000000// Lord
      ];
    
      const [levelIndex, setLevelIndex] = useState(6);
      const [points, setPoints] = useState(0);
      const [energy, setEnergy] = useState(1000);
      const [clicks, setClicks] = useState<{ id: number, x: number, y: number }[]>([]);
      const pointsToAdd = 11;
      const profitPerHour = 126420;
    
      const [dailyRewardTimeLeft, setDailyRewardTimeLeft] = useState("");
      const [dailyCipherTimeLeft, setDailyCipherTimeLeft] = useState("");
      const [dailyComboTimeLeft, setDailyComboTimeLeft] = useState("");
    
      const calculateTimeLeft = (targetHour: number) => {
        const now = new Date();
        const target = new Date(now);
        target.setUTCHours(targetHour, 0, 0, 0);
    
        if (now.getUTCHours() >= targetHour) {
          target.setUTCDate(target.getUTCDate() + 1);
        }
    
        const diff = target.getTime() - now.getTime();
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    
        const paddedHours = hours.toString().padStart(2, '0');
        const paddedMinutes = minutes.toString().padStart(2, '0');
    
        return `${paddedHours}:${paddedMinutes}`;
      };
    
      useEffect(() => {
        const updateCountdowns = () => {
          setDailyRewardTimeLeft(calculateTimeLeft(0));
          setDailyCipherTimeLeft(calculateTimeLeft(19));
          setDailyComboTimeLeft(calculateTimeLeft(12));
        };
    
        updateCountdowns();
        const interval = setInterval(updateCountdowns, 60000); // Update every minute
    
        return () => clearInterval(interval);
      }, []);
    
      const handleCardClick = (e: React.MouseEvent<HTMLDivElement>) => {
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        card.style.transform = `perspective(1000px) rotateX(${-y / 10}deg) rotateY(${x / 10}deg)`;
        setTimeout(() => {
          card.style.transform = '';
        }, 100);
    
        setPoints(points + pointsToAdd);
        setClicks([...clicks, { id: Date.now(), x: e.pageX, y: e.pageY }]);
      };
    
      const handleAnimationEnd = (id: number) => {
        setClicks((prevClicks) => prevClicks.filter(click => click.id !== id));
      };
    
      const calculateProgress = () => {
        if (levelIndex >= levelNames.length - 1) {
          return 100;
        }
        const currentLevelMin = levelMinPoints[levelIndex];
        const nextLevelMin = levelMinPoints[levelIndex + 1];
        const progress = ((points - currentLevelMin) / (nextLevelMin - currentLevelMin)) * 100;
        return Math.min(progress, 100);
      };
    
      useEffect(() => {
        const currentLevelMin = levelMinPoints[levelIndex];
        const nextLevelMin = levelMinPoints[levelIndex + 1];
        if (points >= nextLevelMin && levelIndex < levelNames.length - 1) {
          setLevelIndex(levelIndex + 1);
        } else if (points < currentLevelMin && levelIndex > 0) {
          setLevelIndex(levelIndex - 1);
        }
      }, [points, levelIndex, levelMinPoints, levelNames.length]);
    
      const formatProfitPerHour = (profit: number) => {
        if (profit >= 1000000000) return `+${(profit / 1000000000).toFixed(2)}B`;
        if (profit >= 1000000) return `+${(profit / 1000000).toFixed(2)}M`;
        if (profit >= 1000) return `+${(profit / 1000).toFixed(2)}K`;
        return `+${profit}`;
      };
    
      useEffect(() => {
        const pointsPerSecond = Math.floor(profitPerHour / 3600);
        const interval = setInterval(() => {
          setPoints(prevPoints => prevPoints + pointsPerSecond);
        }, 1000);
        return () => clearInterval(interval);
      }, [profitPerHour]);
    
    return(
        <main className="pt-[30px]">
            <div className="px-4 mt-4 flex justify-center">
                <div className="px-4 py-2 flex items-center space-x-2">
                <img src={dollarCoin} alt="Dollar Coin" className="w-10 h-10" />
                <p className="text-4xl text-white">{points.toLocaleString()}</p>
                </div>
            </div>
            <div className="px-4 mt-4 flex justify-center">
                <div
                className="w-80 h-80 p-4 rounded-full circle-outer"
                onClick={handleCardClick}
                >
                <div className="w-full h-full rounded-full circle-inner">
                    <img src={mainCharacter} alt="Main Character" className="w-full h-full" />
                </div>
                </div>
            </div>
            <div className='w-full h-fit px-[10%] flex justify-between items-center text-xl font-[600] pt-[25px]'>
                <span className='flex items-center justify-center h-fit w-fit '>
                <span className="material-symbols-outlined text-[gold]">
                    bolt
                </span>
                    {`${energy}/${energy}`}
                </span>
                <span>
                <span className="material-symbols-outlined">
                rocket_launch
                </span> Boost
                </span>
            </div> 
        </main>
    )
}