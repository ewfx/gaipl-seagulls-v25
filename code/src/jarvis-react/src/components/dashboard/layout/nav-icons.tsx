import { House } from '@phosphor-icons/react/dist/ssr/House';
import type { Icon } from '@phosphor-icons/react/dist/lib/types';
import { ChartPie as ChartPieIcon } from '@phosphor-icons/react/dist/ssr/ChartPie';
import { GearSix as GearSixIcon } from '@phosphor-icons/react/dist/ssr/GearSix';
import { PlugsConnected as PlugsConnectedIcon } from '@phosphor-icons/react/dist/ssr/PlugsConnected';
import { User as UserIcon } from '@phosphor-icons/react/dist/ssr/User';
import { Users as UsersIcon } from '@phosphor-icons/react/dist/ssr/Users';
import { XSquare } from '@phosphor-icons/react/dist/ssr/XSquare';
import { ChartBar } from '@phosphor-icons/react/dist/ssr/ChartBar';
import {Heart} from '@phosphor-icons/react/dist/ssr/Heart';
import { Suitcase } from '@phosphor-icons/react/dist/ssr/Suitcase';

export const navIcons = {
  'chart-pie': ChartPieIcon,
  'gear-six': GearSixIcon,
  'plugs-connected': PlugsConnectedIcon,
  'x-square': XSquare,
  'home': House,
  'metrics': ChartBar,
  'health': Heart,
  'portfolio' : Suitcase,
  user: UserIcon,
  users: UsersIcon,
} as Record<string, Icon>;
