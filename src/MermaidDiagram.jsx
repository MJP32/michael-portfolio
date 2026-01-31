import React, { useEffect, useRef, useState } from 'react';
import mermaid from 'mermaid';

// Initialize mermaid once
mermaid.initialize({
  startOnLoad: false,
  theme: 'dark',
  securityLevel: 'loose',
  fontFamily: 'Inter, system-ui, sans-serif',
  themeVariables: {
    primaryColor: '#6366f1',
    primaryTextColor: '#f8fafc',
    primaryBorderColor: '#475569',
    lineColor: '#94a3b8',
    secondaryColor: '#1e293b',
    tertiaryColor: '#0f172a',
  }
});

const MermaidDiagram = ({ chart }) => {
  const [svg, setSvg] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    const renderDiagram = async () => {
      try {
        setError(null);
        // Generate a unique ID for each render
        const id = `mermaid-${Math.random().toString(36).substr(2, 9)}`;
        // Inject common styles
        const commonStyles = `
          classDef primary fill:#4f46e5,stroke:#818cf8,stroke-width:2px,color:#ffffff;
          classDef secondary fill:#1e293b,stroke:#475569,stroke-width:2px,color:#e2e8f0;
          classDef accent fill:#059669,stroke:#34d399,stroke-width:2px,color:#ffffff;
          classDef highlight fill:#d97706,stroke:#fbbf24,stroke-width:2px,color:#ffffff;
          classDef danger fill:#dc2626,stroke:#f87171,stroke-width:2px,color:#ffffff;
          classDef database fill:#0891b2,stroke:#22d3ee,stroke-width:2px,color:#ffffff;
          classDef external fill:#334155,stroke:#94a3b8,stroke-width:2px,stroke-dasharray: 5 5,color:#cbd5e1;
        `;

        // Monitor chart type to apply styles correctly
        // classDef must be AFTER the graph/diagram declaration
        // sequenceDiagram does not support classDef in the same way
        let code = chart;
        const isSequence = /^\s*sequenceDiagram/.test(code);

        if (!isSequence) {
          code = `${chart}\n${commonStyles}`;
        } else {
          code = chart;
        }

        // mermaid.render throws if the chart is invalid
        const { svg } = await mermaid.render(id, code);
        setSvg(svg);
      } catch (err) {
        console.error('Mermaid render error:', err);
        setError('Failed to render diagram');
      }
    };

    if (chart) {
      renderDiagram();
    }
  }, [chart]);

  if (error) {
    return <div style={{ color: '#ef4444', padding: '1rem', textAlign: 'center' }}>{error}</div>;
  }

  return (
    <div
      className="mermaid-diagram"
      dangerouslySetInnerHTML={{ __html: svg }}
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '1.5rem',
        background: '#0d1117',
        borderRadius: '12px',
        overflowX: 'auto',
        border: '1px solid #30363d',
        minHeight: '200px'
      }}
    />
  );
};

export default MermaidDiagram;
