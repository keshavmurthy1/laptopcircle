import {
  HiDesktopComputer,
  HiChip,
  HiDatabase,
  HiCog,
  HiLightningBolt,
} from 'react-icons/hi';
import { FaApple } from 'react-icons/fa';
import { MdDisplaySettings, MdMemory } from 'react-icons/md';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  laptop: HiDesktopComputer,
  macbook: FaApple,
  display: MdDisplaySettings,
  ssd: HiChip,
  ram: MdMemory,
  data: HiDatabase,
  service: HiCog,
  speed: HiLightningBolt,
};

export function ServiceIcon({ name, className = 'h-8 w-8' }: { name: string; className?: string }) {
  const Icon = iconMap[name] || HiDesktopComputer;
  return <Icon className={className} />;
}
