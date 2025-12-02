import { Container } from './Container';

interface PagePlaceholderProps {
  title: string;
}

export const PagePlaceholder = ({ title }: PagePlaceholderProps) => {
  return (
    <div className="min-h-[60vh] bg-neutral-50 py-12">
      <Container>
        <div className="bg-white p-8 rounded-lg border border-neutral-200 shadow-sm">
          <h1 className="text-3xl font-serif font-bold text-primary-900 mb-4">{title}</h1>
          <p className="text-neutral-600">
            This content is coming in <strong>Phase 2</strong>.
          </p>
          <div className="mt-4 p-4 bg-yellow-50 text-yellow-800 text-sm rounded border border-yellow-100">
            Development Mode: Route is active.
          </div>
        </div>
      </Container>
    </div>
  );
};