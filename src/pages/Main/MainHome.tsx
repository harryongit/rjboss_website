import { useState } from 'react';
import HeaderLogo from '@/pages/Main/HomeSections/HeaderLogo';
import WelcomeBanner from '@/pages/Main/HomeSections/WelcomeBanner';
import LuckyNumberCard from '@/pages/Main/HomeSections/LuckyNumberCard';
import FinalAnkSection from '@/pages/Main/HomeSections/FinalAnkSection';
import LiveResults from '@/pages/Main/HomeSections/LiveResults';
import AllMarkets from '@/pages/Main/HomeSections/AllMarkets';
import HindiInfo from '@/pages/Main/HomeSections/HindiInfo';
import NoticeSection from '@/pages/Main/HomeSections/NoticeSection';

import KeywordsCard from '@/pages/Main/HomeSections/KeywordsCard';
import WeeklyPattiChart from '@/pages/Main/HomeSections/WeeklyPattiChart';
import WeeklyLineChart from '@/pages/Main/HomeSections/WeeklyLineChart';
import WeeklyJodiChart from '@/pages/Main/HomeSections/WeeklyJodiChart';
import FreeGameZone from '@/pages/Main/HomeSections/FreeGameZone';
import IntroductionSection from '@/pages/Main/HomeSections/IntroductionSection';
import FAQSection from '@/pages/Main/HomeSections/FAQSection';
import HindiFAQ from '@/pages/Main/HomeSections/HindiFAQ';
import FooterSection from '@/pages/Main/HomeSections/FooterSection';
import FloatingRefreshButton from '@/pages/Main/HomeSections/FloatingRefreshButton';

const SattaMatkaWebsite = () => {
  const [refreshTime, setRefreshTime] = useState(new Date().toLocaleTimeString());

  const handleRefresh = () => {
    setRefreshTime(new Date().toLocaleTimeString());
  };

  const finalAnk = [
    { market: "KALYAN MORNING", ank: "0" },
    { market: "MILAN MORNING", ank: "2" },
    { market: "SRIDEVI", ank: "0" },
    { market: "MAIN BAZAR MORNING", ank: "6" },
    { market: "MADHURI", ank: "6" },
    { market: "TIME BAZAR", ank: "6" },
    { market: "MILAN DAY", ank: "0" },
    { market: "KALYAN", ank: "6" },
    { market: "SRIDEVI NIGHT", ank: "4" },
    { market: "MILAN NIGHT", ank: "2" },
    { market: "RAJDHANI NIGHT", ank: "8" },
    { market: "MAIN BAZAR", ank: "8" },
  ];

  const liveMarkets = [
    { name: "MAIN SRIDEVI DAY", result: "234-96-123", time: "01:05 PM - 02:05 PM", status: "Open" },
    { name: "NEW TIME BAZAR", result: "347-40-190", time: "01:00 PM - 02:00 PM", status: "Open" },
    { name: "RAJDHANI MORNING", result: "157-33-670", time: "11:25 AM - 12:55 PM", status: "Closed" },
    { name: "BOMBAY RAJSHREE DAY", result: "590-4", time: "01:15 PM - 03:15 PM", status: "Open" },
  ];

  const allMarkets = [
    { name: "KALYAN MORNING", result: "359-7", time: "11:15 AM - 12:15 PM" },
    { name: "MILAN MORNING", result: "137-15-456", time: "10:30 AM - 11:30 AM" },
    { name: "SRIDEVI", result: "579-14-347", time: "11:35 AM - 12:35 PM" },
    { name: "MAIN BAZAR MORNING", result: "669-17-160", time: "11:15 AM - 12:15 PM" },
    { name: "MADHURI", result: "359-71-588", time: "11:45 AM - 12:45 PM" },
    { name: "PADMAVATHI", result: "128-19-144", time: "11:40 AM - 12:40 PM" },
    { name: "RAJDHANI MORNING", result: "157-33-670", time: "11:25 AM - 12:55 PM" },
    { name: "SRIDEVI MORNING", result: "118-00-127", time: "10:00 AM - 11:00 AM" },
    { name: "MAHARANI", result: "260-8", time: "12:15 PM - 02:15 PM" },
    { name: "KARNATAKA DAY", result: "568-95-690", time: "10:00 AM - 11:00 AM" },
    { name: "TIME BAZAR MORNING", result: "370-03-120", time: "11:10 AM - 12:10 PM" },
    { name: "MAIN SRIDEVI DAY", result: "234-96-123", time: "01:05 PM - 02:05 PM" },
    { name: "TIME BAZAR", result: "680-44-130", time: "01:00 PM - 02:00 PM" },
    { name: "TARA MUMBAI DAY", result: "112-47-340", time: "01:35 PM - 03:00 PM" },
    { name: "PRABHAT", result: "479-01-245", time: "01:30 PM - 03:00 PM" },
    { name: "DIAMOND", result: "479-09-270", time: "01:30 PM - 03:00 PM" },
    { name: "TIME BAZAR DAY", result: "800-86-114", time: "02:45 PM - 04:45 PM" },
    { name: "MILAN DAY", result: "479-05-267", time: "03:00 PM - 05:00 PM" },
    { name: "MAIN BAZAR DAY", result: "136-07-115", time: "03:35 PM - 05:35 PM" },
    { name: "PUNA BAZAR", result: "568-99-234", time: "01:30 PM - 03:30 PM" },
    { name: "NEW TIME BAZAR", result: "347-40-190", time: "01:00 PM - 02:00 PM" },
    { name: "KALYAN", result: "560-17-250", time: "03:45 PM - 05:45 PM" },
    { name: "SRIDEVI NIGHT", result: "347-43-256", time: "07:15 PM - 08:15 PM" },
    { name: "DIAMOND NIGHT", result: "450-94-158", time: "08:00 PM - 09:00 PM" },
    { name: "MADHURI NIGHT", result: "359-74-257", time: "06:45 PM - 07:45 PM" },
    { name: "NIGHT TIME BAZAR", result: "177-56-259", time: "08:40 PM - 10:40 PM" },
    { name: "TARA MUMBAI NIGHT", result: "178-69-289", time: "08:30 PM - 10:30 PM" },
    { name: "MILAN NIGHT", result: "468-88-189", time: "09:05 PM - 11:05 PM" },
    { name: "RAJDHANI NIGHT", result: "239-45-177", time: "09:35 PM - 11:45 PM" },
    { name: "MAIN BAZAR", result: "366-59-577", time: "10:00 PM - 12:10 AM" },
    { name: "SRIDEVI DAY", result: "550-02-679", time: "01:35 PM - 02:35 PM" },
    { name: "MAIN SRIDEVI", result: "377-70-479", time: "11:45 AM - 12:45 PM" },
    { name: "MAHARANI DAY", result: "357-51-399", time: "05:15 PM - 07:15 PM" },
    { name: "PAREL DAY", result: "237-29-559", time: "02:00 PM - 04:00 PM" },
    { name: "BOMBAY DAY", result: "477-80-226", time: "02:10 PM - 03:10 PM" },
    { name: "SAHARA", result: "239-49-559", time: "01:30 PM - 02:30 PM" },
    { name: "MUMBAI MORNING", result: "569-08-125", time: "01:40 PM - 02:40 PM" },
    { name: "KALYAN NIGHT", result: "480-27-890", time: "09:30 PM - 11:30 PM" },
    { name: "PRABHAT NIGHT", result: "238-37-340", time: "08:30 PM - 10:30 PM" },
    { name: "MADHUR DAY", result: "455-43-300", time: "01:30 PM - 02:30 PM" },
    { name: "MADHUR NIGHT", result: "240-62-679", time: "08:30 PM - 10:30 PM" },
    { name: "OLD MAIN MUMBAI", result: "356-37-359", time: "09:35 PM - 11:35 PM" },
    { name: "MAIN MUMBAI RK", result: "146-16-367", time: "09:30 PM - 11:50 AM" },
    { name: "ROSE BAZAR NIGHT", result: "358-69-577", time: "10:00 PM - 12:02 AM" },
    { name: "KAALI", result: "489-19-450", time: "11:20 PM - 01:35 AM" },
  ];
  const keywords = [
    "KALYAN MATKA",
    "MATKA RESULT",
    "KALYAN MATKA TIPS",
    "SATTA MATKA",
    "MATKA.COM",
    "SMBoss MATKA 143",
    "MAIN MATKA",
    "WORLD ME SABSE FAST SATTA MATKA RESULT",
  ];
  const weeklyPatti = [
    { number: "1", values: "137-489-560-146" },
    { number: "2", values: "156-679-570-138" },
    { number: "3", values: "670-139-148-355" },
    { number: "4", values: "257-149-699-455" },
    { number: "5", values: "357-113-258-140" },
    { number: "6", values: "367-169-556-259" },
    { number: "7", values: "368-458-890-133" },
    { number: "8", values: "378-134-567-125" },
    { number: "9", values: "478-559-469-126" },
    { number: "0", values: "578-136-550-145" },
  ];
  const freeGames = [
    {
      name: "MILAN MORNING",
      number: "1-6-3-8",
      boldNumbers: "470-358-346-468-558",
      smallNumbers: "13-18-63-68-31-36-81-86",
    },
    {
      name: "KALYAN MORNING",
      number: "4-9-1-6",
      boldNumbers: "257-270-227-114-367-257",
      smallNumbers: "41-46-91-96-14-19-64-69",
    },
    {
      name: "PUNA BAZAR",
      number: "1-5-9",
      boldNumbers: "128-245-159-258-135-289",
      smallNumbers: "13-18-53-58-93-98",
    },
    {
      name: "SRIDEVI NIGHT",
      number: "2-3-8-0",
      boldNumbers: "129-148-134-370",
      smallNumbers: "22-27-33-38-88-83-00-05",
    },
  ];
  const weeklyLineData = [
    { day: "Mon.", number: "1-6-2-7", span: 1 },
    { day: "Tue.", number: "4-9-5-0", span: 1 },
    { day: "Wed.", number: "2-7-3-8", span: 1 },
    { day: "Thu.", number: "1-6-5-0", span: 1 },
    { day: "Fri.", number: "3-8-4-9", span: 1 },
    { day: "Sat.", number: "4-9-5-0", span: 1 },
    { day: "Sun.", number: "1-6-3-8", span: 2 }, // col-span-2
  ];
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 via-white to-rose-50">
      <div className="max-w-md mx-auto">
        <HeaderLogo />

        <div className="p-3 space-y-3">
          <WelcomeBanner />
          <LuckyNumberCard />
          <FinalAnkSection finalAnk={finalAnk} handleRefresh={handleRefresh} />
          <LiveResults liveMarkets={liveMarkets} refreshTime={refreshTime} handleRefresh={handleRefresh} />
          <NoticeSection />
        
          <KeywordsCard />
          <AllMarkets allMarkets={allMarkets} handleRefresh={handleRefresh} />
          <HindiInfo />
          
          <WeeklyPattiChart weeklyPatti={weeklyPatti} />
          <WeeklyLineChart weeklyLineData={weeklyLineData} />
          <WeeklyJodiChart />
          <FreeGameZone freeGames={freeGames} />
          <IntroductionSection />
          <FAQSection />
          <HindiFAQ />
          <FooterSection />
        </div>

        <FloatingRefreshButton handleRefresh={handleRefresh} />
      </div>
    </div>
  );
};

export default SattaMatkaWebsite;