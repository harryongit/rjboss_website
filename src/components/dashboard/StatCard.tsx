

import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

interface StatCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  iconColor?: string;
}

export const StatCard = ({
  title,
  value,
  icon: Icon,
  iconColor = "text-primary",
}: StatCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <motion.div
        whileHover={{
          scale: 1.05,
          rotateX: 3,
          rotateY: -3,
          transition: { duration: 0.25 },
        }}
        className="relative group cursor-pointer"
      >
        {/* Hover Glow */}
        <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-r from-primary/30 to-primary/10 blur-xl" />

        {/* Card */}
        <Card className="relative z-10 rounded-xl shadow-md group-hover:shadow-xl transition-all duration-300 overflow-hidden">

          {/* ⭐ Bottom 30% Purple Gradient (Always visible — works perfectly) */}
          <div className="absolute inset-y-0 left-0 w-1 bg-purple-400 pointer-events-none rounded-l-full" />


          <CardContent className="p-6 relative z-10">
            <div className="flex items-center justify-between">

              {/* LEFT */}
              <div className="space-y-1">
                <p className="text-sm font-medium text-muted-foreground">{title}</p>
                <motion.p
                  className="text-3xl font-bold text-foreground"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  {value}
                </motion.p>
              </div>

              {/* ICON RIGHT */}
              <motion.div
                whileHover={{ rotate: 12, scale: 1.2 }}
                transition={{ type: "spring", stiffness: 300 }}
                className={`p-3 rounded-lg bg-primary/10 ${iconColor}`}
              >
                <Icon size={32} />
              </motion.div>

            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
};
