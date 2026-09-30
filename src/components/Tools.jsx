import {
  BookOpen,
  Columns3,
  Code2,
  FileText,
  GitBranch,
  KanbanSquare,
  MessageSquare,
  PenTool,
  Presentation,
  Video,
  Workflow,
  Circle,
} from 'lucide-react';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import { tools } from '../data/resume';

const icons = {
  kanban: KanbanSquare,
  book: BookOpen,
  columns: Columns3,
  figma: PenTool,
  git: GitBranch,
  chat: MessageSquare,
  video: Video,
  board: Presentation,
  note: FileText,
  record: Circle,
  code: Code2,
  pipeline: Workflow,
};

export default function Tools() {
  return (
    <section id="tools" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          title="Tools & technologies"
          description="What I use to plan, track and work with teams, including across time zones."
        />

        <ul className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {tools.map((tool, i) => {
            const Icon = icons[tool.icon] ?? Code2;
            return (
              <Reveal as="li" key={tool.name} delay={(i % 4) * 70} className="card card-hover p-5 text-center">
                <Icon size={24} className="mx-auto text-a" />
                <p className="mt-3 font-display text-sm font-bold text-fg">{tool.name}</p>
                <p className="mt-1 text-xs text-fg-3">{tool.use}</p>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
