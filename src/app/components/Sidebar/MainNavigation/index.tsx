import {
  BarChart,
  CheckSquare,
  Flag,
  HomeIcon,
  SquareStack,
  Users,
} from 'lucide-react'
import { NavItem } from './NavItem'

export function MainNavigation() {
  return (
    <nav className="space-y-0.5">
      <NavItem title="Home" icon={HomeIcon} />
      <NavItem title="Dashborad" icon={BarChart} />
      <NavItem title="Project" icon={SquareStack} />
      <NavItem title="Tasks" icon={CheckSquare} />
      <NavItem title="Reporting" icon={Flag} />
      <NavItem title="Users" icon={Users} />
    </nav>
  )
}
