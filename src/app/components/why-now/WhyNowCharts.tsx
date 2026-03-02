import { motion } from 'motion/react';
import { Area, AreaChart, Cell, Line, LineChart, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { GlassCard } from '../GlassCard';

const aged60 = [
  { year: 1950, value: 205 },
  { year: 1975, value: 350 },
  { year: 2000, value: 607 },
  { year: 2025, value: 1098 },
  { year: 2050, value: 2051 },
];
const life = [
  { year: 1950, value: 46.5 },
  { year: 1970, value: 58.7 },
  { year: 1990, value: 64.2 },
  { year: 2010, value: 70.3 },
  { year: 2023, value: 73.4 },
];
const causes = [
  { name: 'Non-communicable diseases', value: 74 },
  { name: 'Communicable diseases', value: 19 },
  { name: 'Injuries', value: 7 },
];

export function WhyNowCharts() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      <motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 12 }} viewport={{ once: true }}>
        <GlassCard className="p-6 h-full">
          <h3 className="font-semibold">Global Population Aged 60+</h3>
          <p className="text-sm text-muted-foreground mb-4">Demographic acceleration from 1950–2050 projection.</p>
          <div className="h-44">
            <ResponsiveContainer>
              <AreaChart data={aged60}>
                <XAxis dataKey="year" tick={{ fontSize: 11 }} />
                <YAxis tick={{ fontSize: 11 }} />
                <Tooltip />
                <Area type="monotone" dataKey="value" stroke="#57c5d8" fill="#57c5d855" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <p className="text-xs text-muted-foreground mt-2">Source: UN DESA • Data last updated: 2024</p>
        </GlassCard>
      </motion.div>

      <motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 12 }} viewport={{ once: true }}>
        <GlassCard className="p-6 h-full">
          <h3 className="font-semibold">Global Life Expectancy</h3>
          <p className="text-sm text-muted-foreground mb-4">Steady gains since 1950 with regional variability.</p>
          <div className="h-44">
            <ResponsiveContainer>
              <LineChart data={life}>
                <XAxis dataKey="year" tick={{ fontSize: 11 }} />
                <YAxis tick={{ fontSize: 11 }} />
                <Tooltip />
                <Line dataKey="value" stroke="#6ad6cc" strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <p className="text-xs text-muted-foreground mt-2">Source: World Bank • Data last updated: 2023</p>
        </GlassCard>
      </motion.div>

      <motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 12 }} viewport={{ once: true }}>
        <GlassCard className="p-6 h-full">
          <h3 className="font-semibold">Global Deaths by Cause</h3>
          <p className="text-sm text-muted-foreground mb-4">The longevity burden is primarily chronic disease.</p>
          <div className="h-44">
            <ResponsiveContainer>
              <PieChart>
                <Pie data={causes} dataKey="value" nameKey="name" innerRadius={45} outerRadius={70}>
                  {['#57c5d8', '#9ab2c8', '#d8e4ef'].map((c) => (
                    <Cell key={c} fill={c} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <p className="text-xs text-muted-foreground mt-2">Source: WHO • Data last updated: 2022</p>
        </GlassCard>
      </motion.div>
    </div>
  );
}
