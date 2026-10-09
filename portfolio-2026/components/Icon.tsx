import { ArrowRight, ArrowUpRight, AudioLines, Blocks, Building2, ChevronDown, Cloud, CodeXml, GitBranch, Globe, Layers, Link, LockKeyhole, Mail, MapPin, PanelsTopLeft, Phone, Radio, Server, ShoppingBag, Sparkles, Users, Workflow } from "lucide-react";

const icons = {
  "arrow-right": ArrowRight,
  "arrow-up-right": ArrowUpRight,
  "audio-lines": AudioLines,
  "blocks": Blocks,
  "building-2": Building2,
  "chevron-down": ChevronDown,
  "cloud": Cloud,
  "git-branch": GitBranch,
  "github": CodeXml,
  "globe": Globe,
  "layers": Layers,
  "link": Link,
  "lock-keyhole": LockKeyhole,
  "mail": Mail,
  "map-pin": MapPin,
  "panels-top-left": PanelsTopLeft,
  "phone": Phone,
  "radio": Radio,
  "server": Server,
  "shopping-bag": ShoppingBag,
  "sparkles": Sparkles,
  "users": Users,
  "workflow": Workflow,
};

export default function Icon({ name }: { name: keyof typeof icons }) {
  const Component = icons[name];
  return <Component size={16} aria-hidden="true" />;
}
