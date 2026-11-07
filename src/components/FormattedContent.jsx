import React from 'react';

/**
 * Component to render inline text with support for **bold text** without raw asterisks.
 */
export function InlineText({ text }) {
  if (!text) return null;

  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return (
    <>
      {parts.map((part, index) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          const inner = part.slice(2, -2);
          return (
            <strong key={index} className="font-bold text-slate-900">
              {inner}
            </strong>
          );
        }
        return <React.Fragment key={index}>{part}</React.Fragment>;
      })}
    </>
  );
}

/**
 * Formats multi-line educational revision content containing:
 * - Subheadings (**Title**: or **Title**)
 * - Unordered bullet lists (- Item)
 * - Ordered numbered lists (1. Item)
 * - Chemical equations and reaction pathways (──>)
 * - Formatted paragraphs with **bold text**
 */
export default function FormattedContent({ text, className = '' }) {
  if (!text) return null;

  // Split into structural blocks separated by blank lines
  const rawBlocks = text.split(/\n\s*\n/);

  return (
    <div className={`space-y-3 text-slate-700 leading-relaxed ${className}`}>
      {rawBlocks.map((block, bIdx) => {
        const trimmed = block.trim();
        if (!trimmed) return null;

        const lines = trimmed.split('\n').map((l) => l.trim()).filter(Boolean);

        // Check if block contains list items (bullet points or numbered items)
        const hasListItems = lines.some((l) => l.startsWith('- ') || l.startsWith('* ') || /^\d+\.\s+/.test(l));

        if (hasListItems) {
          const elements = [];
          let currentList = null; // { type: 'ul' | 'ol', items: [] }

          const flushList = () => {
            if (!currentList) return;
            if (currentList.type === 'ul') {
              elements.push(
                <ul key={`ul-${elements.length}`} className="space-y-2 my-2.5 pl-1">
                  {currentList.items.map((item, iIdx) => (
                    <li key={iIdx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                      <span className="flex-1"><InlineText text={item} /></span>
                    </li>
                  ))}
                </ul>
              );
            } else {
              elements.push(
                <ol key={`ol-${elements.length}`} className="space-y-2.5 my-2.5 pl-1">
                  {currentList.items.map((item, iIdx) => (
                    <li key={iIdx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                      <span className="mt-0.5 w-5 h-5 rounded-md bg-emerald-100 text-emerald-800 text-[11px] font-black flex items-center justify-center shrink-0 border border-emerald-300/60 shadow-2xs">
                        {item.num}
                      </span>
                      <span className="flex-1 pt-0.5"><InlineText text={item.text} /></span>
                    </li>
                  ))}
                </ol>
              );
            }
            currentList = null;
          };

          lines.forEach((line) => {
            if (line.startsWith('- ') || line.startsWith('* ')) {
              if (currentList && currentList.type !== 'ul') flushList();
              if (!currentList) currentList = { type: 'ul', items: [] };
              currentList.items.push(line.replace(/^[-*]\s+/, ''));
            } else if (/^\d+\.\s+/.test(line)) {
              if (currentList && currentList.type !== 'ol') flushList();
              if (!currentList) currentList = { type: 'ol', items: [] };
              const m = line.match(/^(\d+)\.\s+(.*)$/);
              currentList.items.push({ num: m ? m[1] : '', text: m ? m[2] : line });
            } else {
              flushList();

              // Subheading line
              if (line.startsWith('**') && (line.endsWith('**') || line.endsWith('**:'))) {
                const headingText = line.replace(/^\*\*|\*\*[:.]?$/g, '').trim();
                elements.push(
                  <div key={`h-${elements.length}`} className="pt-2 pb-1">
                    <h6 className="font-bold text-slate-900 text-xs sm:text-sm flex items-center gap-2">
                      <span className="w-1.5 h-3.5 bg-emerald-500 rounded-full inline-block" />
                      <span>{headingText}</span>
                    </h6>
                  </div>
                );
              } else if (line.includes('──>') || (line.includes(' = ') && (line.includes('+') || line.includes('-')))) {
                // Chemical or mathematical reaction pathway
                elements.push(
                  <div
                    key={`eq-${elements.length}`}
                    className="my-2 px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200/80 font-mono text-xs sm:text-sm text-slate-800 overflow-x-auto shadow-2xs font-semibold"
                  >
                    <InlineText text={line} />
                  </div>
                );
              } else {
                elements.push(
                  <p key={`p-${elements.length}`} className="text-xs sm:text-sm text-slate-700 leading-relaxed my-1">
                    <InlineText text={line} />
                  </p>
                );
              }
            }
          });
          flushList();

          return <div key={bIdx} className="space-y-1">{elements}</div>;
        }

        // Single line subheading
        if (lines.length === 1 && lines[0].startsWith('**') && (lines[0].endsWith('**') || lines[0].endsWith('**:'))) {
          const headingText = lines[0].replace(/^\*\*|\*\*[:.]?$/g, '').trim();
          return (
            <div key={bIdx} className="pt-2 pb-1">
              <h6 className="font-bold text-slate-900 text-xs sm:text-sm flex items-center gap-2">
                <span className="w-1.5 h-3.5 bg-emerald-500 rounded-full inline-block" />
                <span>{headingText}</span>
              </h6>
            </div>
          );
        }

        // Single line chemical / math equation
        if (
          lines.length === 1 &&
          (lines[0].includes('──>') || (lines[0].includes(' = ') && (lines[0].includes('+') || lines[0].includes('-'))))
        ) {
          return (
            <div
              key={bIdx}
              className="my-2.5 px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200/80 font-mono text-xs sm:text-sm text-slate-800 overflow-x-auto shadow-2xs font-semibold"
            >
              <InlineText text={lines[0]} />
            </div>
          );
        }

        // Standard paragraph
        return (
          <p key={bIdx} className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            {lines.map((line, lIdx) => (
              <React.Fragment key={lIdx}>
                {lIdx > 0 && ' '}
                <InlineText text={line} />
              </React.Fragment>
            ))}
          </p>
        );
      })}
    </div>
  );
}
