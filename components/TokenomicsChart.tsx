'use client';
import { motion } from 'framer-motion'; // Добавляем импорт motion
import dynamic from 'next/dynamic';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const Doughnut = dynamic(() => import('react-chartjs-2').then((mod) => mod.Doughnut), {
  ssr: false,
});

const TokenomicsChart = () => {
  const data = {
    labels: ['Community & Airdrop', 'Liquidity', 'NFT & DAO', 'Marketing', 'Team', 'Reserve & PlovBurn'],
    datasets: [
      {
        data: [38, 22, 10, 13, 10, 7],
        backgroundColor: ['#2563eb', '#7c3aed', '#22d3ee', '#facc15', '#4ade80', '#f87171'],
        borderColor: ['#ffffff'],
        borderWidth: 2,
        hoverOffset: 20,
      },
    ],
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[450px] mx-auto mb-8"
    >
      <div className="relative" style={{ paddingTop: '100%' }}>
        <div className="absolute inset-0">
          <Doughnut
            data={data}
            options={{
              responsive: true,
              maintainAspectRatio: false,
              plugins: {
                legend: {
                  position: 'bottom',
                  labels: {
                    color: '#4b5563',
                    font: { size: 14, weight: 500 }, // Исправлено ранее: '500' → 500
                    padding: 20,
                    boxWidth: 20,
                    usePointStyle: true,
                  },
                },
                tooltip: {
                  backgroundColor: '#1e3a8a',
                  titleFont: { size: 16 },
                  bodyFont: { size: 14 },
                  padding: 10,
                },
              },
            }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default TokenomicsChart;