
import { LiquidMetal, liquidMetalPresets } from "@paper-design/shaders-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

interface LiquidMetalHeroProps {
  badge?: string;
  title: string;
  subtitle: string;
  primaryCtaLabel: string;
  secondaryCtaLabel?: string;
  onPrimaryCtaClick: () => void;
  onSecondaryCtaClick?: () => void;
  features?: string[];
}

export default function LiquidMetalHero({
  badge,
  title,
  subtitle,
  primaryCtaLabel,
  secondaryCtaLabel,
  onPrimaryCtaClick,
  onSecondaryCtaClick,
  features = [],
}: LiquidMetalHeroProps) {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black px-5 py-16 text-white">
      <LiquidMetal
        {...liquidMetalPresets[2]}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
          opacity: 0.85,
        }}
      />

      <div className="pointer-events-none absolute inset-0 z-[1] bg-black/40" />

      <motion.div
        className="relative z-10 mx-auto w-full max-w-6xl space-y-8 text-center"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {badge && (
          <Badge className="border border-white/20 bg-white/10 px-4 py-2 text-white">
            {badge}
          </Badge>
        )}

        <div className="space-y-6">
          <h1 className="text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-8xl">
            {title}
          </h1>
          <p className="mx-auto max-w-3xl text-base leading-relaxed text-white/80 sm:text-xl">
            {subtitle}
          </p>
        </div>

        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Button
            size="lg"
            onClick={onPrimaryCtaClick}
            className="h-14 rounded-xl bg-white px-8 text-black hover:bg-white/90"
          >
            {primaryCtaLabel}
          </Button>

          {secondaryCtaLabel && onSecondaryCtaClick && (
            <Button
              size="lg"
              variant="outline"
              onClick={onSecondaryCtaClick}
              className="h-14 rounded-xl border-white/30 bg-white/5 px-8 text-white hover:bg-white/15"
            >
              {secondaryCtaLabel}
            </Button>
          )}
        </div>

        {features.length > 0 && (
          <Card className="border-white/15 bg-white/10 p-6 text-white backdrop-blur-xl sm:p-8">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center justify-center gap-3 text-base font-medium sm:text-lg"
                >
                  <span className="h-2 w-2 rounded-full bg-white shadow-[0_0_12px_white]" />
                  {feature}
                </div>
              ))}
            </div>
          </Card>
        )}
      </motion.div>
    </section>
  );
}