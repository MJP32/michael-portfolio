import { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import MermaidDiagram from './MermaidDiagram';

const colors = {
  bgPrimary: '#0f172a',
  bgSecondary: '#1e293b',
  bgCard: '#334155',
  textPrimary: '#f8fafc',
  textSecondary: '#94a3b8',
  accent: '#10b981',
  accentSecondary: '#059669',
  border: '#475569'
};

const styles = {
  container: {
    minHeight: '100%',
    backgroundColor: colors.bgPrimary,
    padding: '1.5rem',
    color: colors.textPrimary
  },
  header: {
    backgroundColor: colors.bgSecondary,
    borderLeft: '6px solid #10b981',
    borderRadius: '16px',
    padding: '1.5rem',
    marginBottom: '1.5rem'
  },
  backButton: {
    backgroundColor: colors.bgCard,
    color: colors.textPrimary,
    padding: '0.5rem 1rem',
    borderRadius: '8px',
    border: 'none',
    cursor: 'pointer',
    fontWeight: '500',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    transition: 'all 0.2s',
    fontSize: '0.9rem'
  },
  title: {
    fontSize: '1.75rem',
    fontWeight: '700',
    background: 'linear-gradient(135deg, #10b981, #059669, #047857)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    margin: '1rem 0 0.5rem'
  },
  subtitle: {
    color: colors.textSecondary,
    fontSize: '0.95rem',
    lineHeight: '1.6'
  },
  tabContainer: {
    display: 'flex',
    gap: '0.5rem',
    marginBottom: '1.5rem',
    borderBottom: `2px solid ${colors.border}`,
    overflowX: 'auto',
    paddingBottom: '0'
  },
  tab: (isActive) => ({
    padding: '0.75rem 1.25rem',
    fontWeight: '600',
    fontSize: '0.9rem',
    cursor: 'pointer',
    border: 'none',
    borderRadius: '8px 8px 0 0',
    transition: 'all 0.2s',
    whiteSpace: 'nowrap',
    backgroundColor: isActive ? 'rgba(16, 185, 129, 0.2)' : 'transparent',
    color: isActive ? '#10b981' : colors.textSecondary,
    borderBottom: isActive ? '3px solid #10b981' : '3px solid transparent',
    marginBottom: '-2px'
  }),
  card: {
    backgroundColor: colors.bgSecondary,
    borderRadius: '12px',
    padding: '1.5rem',
    marginBottom: '1.5rem',
    border: `1px solid ${colors.border}`
  },
  cardTitle: {
    fontSize: '1.25rem',
    fontWeight: '700',
    color: colors.textPrimary,
    marginBottom: '1rem',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '1rem'
  },
  listItem: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '0.5rem',
    marginBottom: '0.75rem',
    color: colors.textSecondary,
    fontSize: '0.9rem',
    lineHeight: '1.5'
  },
  bullet: (color) => ({
    color: color || '#10b981',
    marginTop: '0.25rem',
    flexShrink: 0
  }),
  badge: (color) => ({
    display: 'inline-block',
    padding: '0.25rem 0.75rem',
    borderRadius: '9999px',
    fontSize: '0.75rem',
    fontWeight: '600',
    backgroundColor: `${color}20`,
    color: color,
    marginRight: '0.5rem',
    marginBottom: '0.5rem'
  }),
  codeBlock: {
    backgroundColor: '#0d1117',
    borderRadius: '8px',
    padding: '1rem',
    fontFamily: 'monospace',
    fontSize: '0.8rem',
    overflowX: 'auto',
    color: '#e6edf3',
    border: '1px solid #30363d',
    lineHeight: '1.6'
  },
  metric: {
    backgroundColor: colors.bgCard,
    borderRadius: '12px',
    padding: '1.25rem',
    textAlign: 'center',
    border: `1px solid ${colors.border}`
  },
  metricValue: {
    fontSize: '2rem',
    fontWeight: '700',
    background: 'linear-gradient(135deg, #10b981, #059669)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text'
  },
  metricLabel: {
    fontSize: '0.85rem',
    color: colors.textSecondary,
    marginTop: '0.25rem'
  },
  diagramBox: {
    backgroundColor: colors.bgCard,
    borderRadius: '8px',
    padding: '1rem',
    textAlign: 'center',
    border: `2px solid ${colors.border}`,
    margin: '0.5rem'
  },
  formula: {
    backgroundColor: '#1e293b',
    padding: '1rem',
    borderRadius: '8px',
    fontFamily: 'monospace',
    fontSize: '1rem',
    textAlign: 'center',
    color: '#10b981',
    border: '1px solid #10b981',
    margin: '1rem 0'
  }
};

export default function VarCvar({ onBack }) {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: '📋 Overview' },
    { id: 'methodology', label: '📐 Methodology' },
    { id: 'diagram', label: '🏗️ System Diagram' },
    { id: 'implementation', label: '⚙️ Implementation' },
    { id: 'results', label: '📊 Results' },
    { id: 'interview', label: '🎯 Interview Q&A' },
    { id: 'technical', label: '💻 Technical Q&A' }
  ];

  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.header}>
        <button onClick={onBack} style={styles.backButton}>
          <span>←</span>
          <span>Back to Projects</span>
        </button>
        <h1 style={styles.title}>📈 VaR/CVaR Risk Management System</h1>
        <p style={styles.subtitle}>
          Enterprise-grade Value at Risk and Conditional Value at Risk calculation system with Monte Carlo simulations,
          stress testing, real-time analytics, and portfolio optimization capabilities.
        </p>
      </div>

      {/* Tabs */}
      <div style={styles.tabContainer}>
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={styles.tab(activeTab === tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Overview Tab */}
      {activeTab === 'overview' && (
        <div>
          <div style={styles.card}>
            <h2 style={styles.cardTitle}>
              <span>📝</span> What is VaR/CVaR?
            </h2>
            <div style={styles.grid}>
              <div>
                <h3 style={{ color: '#10b981', fontWeight: '600', marginBottom: '0.75rem' }}>📊 Value at Risk (VaR)</h3>
                <div style={styles.listItem}>
                  <span style={styles.bullet('#10b981')}>•</span>
                  <span><strong>Definition:</strong> Maximum expected loss at a given confidence level</span>
                </div>
                <div style={styles.listItem}>
                  <span style={styles.bullet('#10b981')}>•</span>
                  <span><strong>Example:</strong> 95% VaR of $1M means 5% chance of losing more than $1M</span>
                </div>
                <div style={styles.listItem}>
                  <span style={styles.bullet('#10b981')}>•</span>
                  <span><strong>Use Case:</strong> Regulatory capital requirements, risk limits</span>
                </div>
                <div style={styles.formula}>VaR₉₅ = μ - 1.645σ</div>
              </div>
              <div>
                <h3 style={{ color: '#3b82f6', fontWeight: '600', marginBottom: '0.75rem' }}>📈 Conditional VaR (CVaR)</h3>
                <div style={styles.listItem}>
                  <span style={styles.bullet('#3b82f6')}>•</span>
                  <span><strong>Definition:</strong> Expected loss given that loss exceeds VaR</span>
                </div>
                <div style={styles.listItem}>
                  <span style={styles.bullet('#3b82f6')}>•</span>
                  <span><strong>Also Known As:</strong> Expected Shortfall (ES), Average VaR</span>
                </div>
                <div style={styles.listItem}>
                  <span style={styles.bullet('#3b82f6')}>•</span>
                  <span><strong>Advantage:</strong> Captures tail risk better than VaR</span>
                </div>
                <div style={styles.formula}>CVaR₉₅ = E[Loss | Loss {'>'} VaR₉₅]</div>
              </div>
            </div>
          </div>

          <div style={styles.card}>
            <h2 style={styles.cardTitle}>
              <span>🏗️</span> System Architecture
            </h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
              <div style={{ ...styles.diagramBox, borderColor: '#3b82f6', flex: '1', minWidth: '150px' }}>
                <div style={{ fontSize: '1.5rem' }}>📊</div>
                <div style={{ fontWeight: '600', color: '#3b82f6' }}>Market Data</div>
                <div style={{ fontSize: '0.75rem', color: colors.textSecondary }}>Real-time Feeds</div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', color: colors.textSecondary }}>→</div>
              <div style={{ ...styles.diagramBox, borderColor: '#10b981', flex: '1', minWidth: '150px' }}>
                <div style={{ fontSize: '1.5rem' }}>🎲</div>
                <div style={{ fontWeight: '600', color: '#10b981' }}>Monte Carlo</div>
                <div style={{ fontSize: '0.75rem', color: colors.textSecondary }}>10K Simulations</div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', color: colors.textSecondary }}>→</div>
              <div style={{ ...styles.diagramBox, borderColor: '#8b5cf6', flex: '1', minWidth: '150px' }}>
                <div style={{ fontSize: '1.5rem' }}>⚡</div>
                <div style={{ fontWeight: '600', color: '#8b5cf6' }}>Risk Engine</div>
                <div style={{ fontSize: '0.75rem', color: colors.textSecondary }}>VaR/CVaR Calc</div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', color: colors.textSecondary }}>→</div>
              <div style={{ ...styles.diagramBox, borderColor: '#f59e0b', flex: '1', minWidth: '150px' }}>
                <div style={{ fontSize: '1.5rem' }}>📄</div>
                <div style={{ fontWeight: '600', color: '#f59e0b' }}>Reports</div>
                <div style={{ fontSize: '0.75rem', color: colors.textSecondary }}>PDF/Excel</div>
              </div>
            </div>
          </div>

          <div style={styles.card}>
            <h2 style={styles.cardTitle}>
              <span>👨‍💻</span> My Contributions
            </h2>
            <div style={{ marginBottom: '1rem', padding: '1rem', backgroundColor: colors.bgCard, borderRadius: '8px', borderLeft: '4px solid #10b981' }}>
              <div style={{ color: colors.textSecondary, fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                <strong style={{ color: colors.textPrimary }}>Role:</strong> Senior Java Developer (Contract) | <strong style={{ color: colors.textPrimary }}>Duration:</strong> Jan 2021 – Jul 2023
              </div>
            </div>
            <div style={styles.grid}>
              <div>
                {[
                  'Architected enterprise risk calculation platform processing real-time market data with Java 15, Spring Boot, AWS, and Kubernetes',
                  'Redesigned VaR/CVaR risk calculation engine, optimizing execution time from 4 hours to 45 minutes',
                  'Built high-performance data pipelines using functional programming, processing 10M+ data points per minute'
                ].map((item, i) => (
                  <div key={i} style={styles.listItem}>
                    <span style={styles.bullet('#10b981')}>✓</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div>
                {[
                  'Designed AWS cloud infrastructure for scalable workloads, cutting costs by 40% while improving performance',
                  'Integrated RabbitMQ messaging for asynchronous workflows, achieving 5x throughput during peak hours',
                  'Supported $2B+ daily risk decisions with real-time analytics'
                ].map((item, i) => (
                  <div key={i} style={styles.listItem}>
                    <span style={styles.bullet('#10b981')}>✓</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div style={styles.card}>
            <h2 style={styles.cardTitle}>
              <span>🛠️</span> Technology Stack
            </h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {['Java 15', 'Spring Boot', 'AWS (EC2, S3, RDS, Lambda)', 'Kubernetes', 'RabbitMQ', 'Oracle', 'Redis', 'Prometheus', 'Grafana'].map(tech => (
                <span key={tech} style={styles.badge('#10b981')}>{tech}</span>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Methodology Tab */}
      {activeTab === 'methodology' && (
        <div>
          <div style={styles.card}>
            <h2 style={styles.cardTitle}>
              <span>📐</span> Calculation Methods
            </h2>
            <div style={styles.grid}>
              {[
                { name: 'Historical Simulation', icon: '📜', desc: 'Uses actual historical returns to estimate risk', color: '#3b82f6' },
                { name: 'Parametric (Variance-Covariance)', icon: '📊', desc: 'Assumes normal distribution of returns', color: '#10b981' },
                { name: 'Monte Carlo Simulation', icon: '🎲', desc: 'Generates random scenarios for complex portfolios', color: '#8b5cf6' },
                { name: 'Stress Testing', icon: '⚠️', desc: 'Evaluates portfolio under extreme scenarios', color: '#ef4444' }
              ].map(item => (
                <div key={item.name} style={{ ...styles.diagramBox, borderColor: item.color }}>
                  <div style={{ fontSize: '1.5rem' }}>{item.icon}</div>
                  <div style={{ fontWeight: '600', color: item.color }}>{item.name}</div>
                  <div style={{ fontSize: '0.8rem', color: colors.textSecondary }}>{item.desc}</div>
                </div>
              ))}
            </div>
          </div>

          <div style={styles.card}>
            <h2 style={styles.cardTitle}>
              <span>🎲</span> Monte Carlo Process
            </h2>
            <p style={{ ...styles.subtitle, marginBottom: '1rem' }}>
              The Monte Carlo simulation generates thousands of potential future scenarios to estimate the distribution of portfolio returns.
            </p>
            <div style={styles.grid}>
              <div style={{ ...styles.diagramBox, borderColor: '#3b82f6' }}>
                <div style={{ fontSize: '1.5rem' }}>1️⃣</div>
                <div style={{ fontWeight: '600', color: '#3b82f6', marginBottom: '0.5rem' }}>Generate Scenarios</div>
                <div style={{ fontSize: '0.85rem', color: colors.textSecondary }}>10,000 random price paths using Geometric Brownian Motion</div>
              </div>
              <div style={{ ...styles.diagramBox, borderColor: '#10b981' }}>
                <div style={{ fontSize: '1.5rem' }}>2️⃣</div>
                <div style={{ fontWeight: '600', color: '#10b981', marginBottom: '0.5rem' }}>Calculate P&L</div>
                <div style={{ fontSize: '0.85rem', color: colors.textSecondary }}>Compute portfolio value for each scenario</div>
              </div>
              <div style={{ ...styles.diagramBox, borderColor: '#8b5cf6' }}>
                <div style={{ fontSize: '1.5rem' }}>3️⃣</div>
                <div style={{ fontWeight: '600', color: '#8b5cf6', marginBottom: '0.5rem' }}>Sort Returns</div>
                <div style={{ fontSize: '0.85rem', color: colors.textSecondary }}>Order P&L from worst to best</div>
              </div>
              <div style={{ ...styles.diagramBox, borderColor: '#f59e0b' }}>
                <div style={{ fontSize: '1.5rem' }}>4️⃣</div>
                <div style={{ fontWeight: '600', color: '#f59e0b', marginBottom: '0.5rem' }}>Extract Percentile</div>
                <div style={{ fontSize: '0.85rem', color: colors.textSecondary }}>VaR₉₅ = 500th worst loss out of 10,000</div>
              </div>
            </div>
          </div>

          <div style={styles.card}>
            <h2 style={styles.cardTitle}>
              <span>⚠️</span> Stress Scenarios
            </h2>
            <div style={styles.grid}>
              {[
                { name: '2008 Financial Crisis', drop: '-40%', desc: 'Lehman Brothers collapse', color: '#ef4444' },
                { name: 'COVID-19 Crash', drop: '-35%', desc: 'March 2020 market panic', color: '#f59e0b' },
                { name: 'Interest Rate Shock', drop: '+300bps', desc: 'Sudden rate increase', color: '#8b5cf6' },
                { name: 'Currency Crisis', drop: '-25%', desc: 'Major FX devaluation', color: '#3b82f6' }
              ].map(scenario => (
                <div key={scenario.name} style={{ ...styles.diagramBox, borderColor: scenario.color }}>
                  <div style={{ fontSize: '1.5rem', fontWeight: '700', color: scenario.color }}>{scenario.drop}</div>
                  <div style={{ fontWeight: '600', color: colors.textPrimary }}>{scenario.name}</div>
                  <div style={{ fontSize: '0.8rem', color: colors.textSecondary }}>{scenario.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* System Diagram Tab */}
      {activeTab === 'diagram' && (
        <div>
          <div style={styles.card}>
            <h2 style={styles.cardTitle}>
              <span>🏗️</span> VaR/CVaR System Architecture
            </h2>
            <MermaidDiagram chart={`
flowchart TB
    subgraph Sources["📊 Data Sources"]
        BBG[Bloomberg]:::external
        RTRS[Reuters]:::external
        Internal[Internal Positions]:::external
        Hist[Historical DB]:::database
    end

    subgraph Kafka["📫 Kafka Topics"]
        Price[Price Topic]:::highlight
        Pos[Position Topic]:::highlight
        Vol[Volatility Topic]:::highlight
    end

    subgraph Engine["⚡ Risk Engine"]
        Gen[Scenario Generator]:::primary
        Chol[Cholesky Transform]:::primary
        PortVal[Portfolio Valuation]:::primary
        Calc[VaR Calculator]:::accent
        Stress[Stress Testing]:::accent
    end

    subgraph Store["💾 Storage"]
        Redis[(Redis)]:::database
        PG[(Postgres)]:::database
    end

    subgraph Output["📊 Output"]
        Alert[Alerts]:::danger
        Report[Reports]:::secondary
        Dash[Dashboard]:::secondary
    end

    BBG --> Price
    RTRS --> Price
    Internal --> Pos
    Hist --> Vol

    Price --> Gen
    Pos --> Gen
    Vol --> Gen

    Gen --> Chol --> PortVal --> Calc
    Calc --> Stress

    Calc --> Redis
    Stress --> PG

    Calc --> Alert
    Calc --> Report
    Redis --> Dash
    PG --> Dash
`} />
          </div>

          <div style={styles.card}>
            <h2 style={styles.cardTitle}>
              <span>☁️</span> AWS Cloud Architecture
            </h2>
            <MermaidDiagram chart={`
flowchart TB
    subgraph Edge["🌐 Edge Layer"]
        Internet[Internet]:::external
        Route53[Route 53]:::external
        WAF[AWS WAF]:::external
        CF[CloudFront]:::external
    end

    subgraph VPC["☁️ AWS VPC"]
        ALB[Load Balancer]:::secondary
        EKS[EKS Cluster]:::primary
        MSK[MSK Kafka]:::highlight
        Cache[ElastiCache]:::database
        RDS[RDS Aurora]:::database
    end

    Internet --> Route53 --> WAF --> CF --> ALB
    ALB --> EKS
    EKS --> MSK
    EKS --> Cache
    EKS --> RDS
`} />
          </div>
        </div>
      )}

      {/* Implementation Tab */}
      {activeTab === 'implementation' && (
        <div>
          <div style={styles.card}>
            <h2 style={styles.cardTitle}>
              <span>🎲</span> Monte Carlo Simulation Engine
            </h2>
            <SyntaxHighlighter
              language="java"
              style={oneDark}
              customStyle={{
                borderRadius: '8px',
                fontSize: '0.85rem',
                margin: 0
              }}
            >
              {`// Monte Carlo VaR Calculator
@Service
public class MonteCarloVarCalculator {
    private static final int SIMULATIONS = 10_000;
    private static final double CONFIDENCE = 0.95;

    public VarResult calculateVaR(Portfolio portfolio, int holdingPeriod) {
        double[] simulatedReturns = new double[SIMULATIONS];

        // Generate correlated random scenarios
        double[][] correlatedShocks = generateCorrelatedShocks(
            portfolio.getAssets().size(), SIMULATIONS
        );

        for (int i = 0; i < SIMULATIONS; i++) {
            double portfolioReturn = 0.0;
            for (int j = 0; j < portfolio.getAssets().size(); j++) {
                Asset asset = portfolio.getAssets().get(j);
                double shock = correlatedShocks[j][i];
                double assetReturn = asset.getMean() * holdingPeriod
                    + asset.getVolatility() * Math.sqrt(holdingPeriod) * shock;
                portfolioReturn += asset.getWeight() * assetReturn;
            }
            simulatedReturns[i] = portfolioReturn;
        }

        Arrays.sort(simulatedReturns);
        int varIndex = (int) ((1 - CONFIDENCE) * SIMULATIONS);

        double var = -simulatedReturns[varIndex] * portfolio.getValue();
        double cvar = calculateCVaR(simulatedReturns, varIndex, portfolio.getValue());

        return new VarResult(var, cvar, CONFIDENCE);
    }
}`}
            </SyntaxHighlighter>
          </div>

          <div style={styles.card}>
            <h2 style={styles.cardTitle}>
              <span>📊</span> Real-Time Risk Aggregation
            </h2>
            <SyntaxHighlighter
              language="java"
              style={oneDark}
              customStyle={{
                borderRadius: '8px',
                fontSize: '0.85rem',
                margin: 0
              }}
            >
              {`// Kafka-based Real-Time Risk Aggregator
@KafkaListener(topics = "portfolio.updates")
public void processPortfolioUpdate(PortfolioEvent event) {
    // Recalculate VaR for updated portfolio
    VarResult varResult = varCalculator.calculateVaR(
        event.getPortfolio(),
        HOLDING_PERIOD_DAYS
    );

    // Check against risk limits
    RiskLimit limit = limitService.getLimitForPortfolio(event.getPortfolioId());
    if (varResult.getVar() > limit.getMaxVar()) {
        alertService.triggerBreachAlert(
            event.getPortfolioId(),
            varResult,
            limit
        );
    }

    // Publish results
    kafkaTemplate.send("risk.var.calculated",
        event.getPortfolioId(),
        varResult
    );

    // Update real-time dashboard
    websocketService.pushToClients(
        "/topic/risk/" + event.getPortfolioId(),
        varResult
    );
}`}
            </SyntaxHighlighter>
          </div>

          <div style={styles.card}>
            <h2 style={styles.cardTitle}>
              <span>🔢</span> Correlation Matrix Computation
            </h2>
            <SyntaxHighlighter
              language="java"
              style={oneDark}
              customStyle={{
                borderRadius: '8px',
                fontSize: '0.85rem',
                margin: 0
              }}
            >
              {`// Cholesky Decomposition for Correlated Scenarios
public double[][] generateCorrelatedShocks(int assets, int scenarios) {
    // Get historical correlation matrix
    double[][] correlationMatrix = marketDataService
        .getCorrelationMatrix(assets);

    // Cholesky decomposition: Σ = L * L^T
    double[][] choleskyL = choleskyDecomposition(correlationMatrix);

    // Generate independent standard normal random numbers
    double[][] independentShocks = new double[assets][scenarios];
    for (int i = 0; i < assets; i++) {
        for (int j = 0; j < scenarios; j++) {
            independentShocks[i][j] = random.nextGaussian();
        }
    }

    // Transform to correlated shocks: Z_corr = L * Z_indep
    double[][] correlatedShocks = new double[assets][scenarios];
    for (int s = 0; s < scenarios; s++) {
        for (int i = 0; i < assets; i++) {
            correlatedShocks[i][s] = 0;
            for (int j = 0; j <= i; j++) {
                correlatedShocks[i][s] += choleskyL[i][j]
                    * independentShocks[j][s];
            }
        }
    }
    return correlatedShocks;
}`}
            </SyntaxHighlighter>
          </div>
        </div>
      )}

      {/* Results Tab */}
      {activeTab === 'results' && (
        <div>
          <div style={styles.card}>
            <h2 style={styles.cardTitle}>
              <span>📊</span> Performance Metrics
            </h2>
            <div style={styles.grid}>
              {[
                { value: '4h → 45m', label: 'Calculation Time Reduction' },
                { value: '10M+', label: 'Data Points per Minute' },
                { value: '5x', label: 'Peak Throughput Increase' },
                { value: '$2B+', label: 'Daily Risk Decisions' },
                { value: '40%', label: 'AWS Cost Reduction' },
                { value: 'Real-time', label: 'Market Data Processing' }
              ].map(metric => (
                <div key={metric.label} style={styles.metric}>
                  <div style={styles.metricValue}>{metric.value}</div>
                  <div style={styles.metricLabel}>{metric.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div style={styles.card}>
            <h2 style={styles.cardTitle}>
              <span>✅</span> Achievements
            </h2>
            <div style={styles.grid}>
              <div>
                <h3 style={{ color: '#10b981', fontWeight: '600', marginBottom: '0.75rem' }}>Technical Excellence</h3>
                {[
                  'Parallel Monte Carlo on Apache Spark',
                  'GPU acceleration for matrix operations',
                  'Real-time streaming with Kafka',
                  'Sub-second VaR recalculation',
                  'Automatic model backtesting'
                ].map((item, i) => (
                  <div key={i} style={styles.listItem}>
                    <span style={styles.bullet('#10b981')}>✓</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div>
                <h3 style={{ color: '#3b82f6', fontWeight: '600', marginBottom: '0.75rem' }}>Business Impact</h3>
                {[
                  'Basel III/IV regulatory compliance',
                  'Reduced capital requirements by 15%',
                  'Improved risk-adjusted returns',
                  'Automated limit monitoring',
                  'Executive risk dashboards'
                ].map((item, i) => (
                  <div key={i} style={styles.listItem}>
                    <span style={styles.bullet('#3b82f6')}>✓</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div style={styles.card}>
            <h2 style={styles.cardTitle}>
              <span>📈</span> Sample Risk Report
            </h2>
            <div style={styles.grid}>
              {[
                { metric: 'VaR (95%, 1-day)', value: '$2.5M', color: '#10b981' },
                { metric: 'CVaR (95%, 1-day)', value: '$3.8M', color: '#3b82f6' },
                { metric: 'VaR (99%, 1-day)', value: '$4.2M', color: '#8b5cf6' },
                { metric: 'Stress Test (2008)', value: '$12.1M', color: '#ef4444' }
              ].map(item => (
                <div key={item.metric} style={{ ...styles.diagramBox, borderColor: item.color }}>
                  <div style={{ fontSize: '1.5rem', fontWeight: '700', color: item.color }}>{item.value}</div>
                  <div style={{ fontWeight: '600', color: colors.textPrimary }}>{item.metric}</div>
                </div>
              ))}
            </div>
          </div>

          <div style={styles.card}>
            <h2 style={styles.cardTitle}>
              <span>📚</span> Regulatory Compliance
            </h2>
            <div style={styles.grid}>
              {[
                { name: 'Basel III', desc: 'Market risk capital requirements', icon: '🏛️', color: '#3b82f6' },
                { name: 'FRTB', desc: 'Fundamental Review of Trading Book', icon: '📋', color: '#10b981' },
                { name: 'Dodd-Frank', desc: 'US regulatory reporting', icon: '🇺🇸', color: '#ef4444' },
                { name: 'MiFID II', desc: 'EU trading transparency', icon: '🇪🇺', color: '#f59e0b' }
              ].map(item => (
                <div key={item.name} style={{ ...styles.diagramBox, borderColor: item.color }}>
                  <div style={{ fontSize: '1.5rem' }}>{item.icon}</div>
                  <div style={{ fontWeight: '600', color: item.color }}>{item.name}</div>
                  <div style={{ fontSize: '0.8rem', color: colors.textSecondary }}>{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Interview Q&A Tab */}
      {activeTab === 'interview' && (
        <div>
          <div style={styles.card}>
            <h2 style={styles.cardTitle}>
              <span>🎯</span> VaR/CVaR Fundamentals
            </h2>
            {[
              {
                q: 'What is Value at Risk (VaR) and how do you interpret it?',
                a: 'VaR measures the maximum potential loss at a given confidence level over a specific time horizon. For example, a 1-day 95% VaR of $1M means there\'s a 5% probability of losing more than $1M in one day. It\'s used for risk limits, capital allocation, and regulatory reporting.'
              },
              {
                q: 'What is CVaR and why is it considered better than VaR?',
                a: 'CVaR (Conditional VaR), also called Expected Shortfall, measures the expected loss given that the loss exceeds VaR. Unlike VaR which only tells you the threshold, CVaR captures tail risk by averaging losses in the worst scenarios. It\'s also a coherent risk measure (satisfies subadditivity).'
              },
              {
                q: 'What are the limitations of VaR?',
                a: 'VaR limitations include: it doesn\'t capture tail risk beyond the threshold, assumes normal market conditions, can give false sense of security, is not subadditive (portfolio VaR can exceed sum of component VaRs), and historical data may not predict future crises.'
              },
              {
                q: 'Explain the difference between parametric, historical, and Monte Carlo VaR.',
                a: 'Parametric VaR assumes returns follow a normal distribution and uses mean/variance. Historical VaR uses actual past returns without distribution assumptions. Monte Carlo generates thousands of random scenarios based on assumed processes. Each has tradeoffs in speed, accuracy, and flexibility.'
              },
              {
                q: 'What is backtesting in VaR and why is it important?',
                a: 'Backtesting compares predicted VaR against actual P&L to validate model accuracy. If actual losses exceed VaR more often than expected (e.g., >5% for 95% VaR), the model underestimates risk. Regulators require backtesting under Basel framework with traffic light zones.'
              }
            ].map((item, i) => (
              <div key={i} style={{ marginBottom: '1.5rem', paddingBottom: '1.5rem', borderBottom: i < 4 ? `1px solid ${colors.border}` : 'none' }}>
                <div style={{ color: '#10b981', fontWeight: '600', marginBottom: '0.5rem', display: 'flex', gap: '0.5rem' }}>
                  <span>Q{i + 1}:</span>
                  <span>{item.q}</span>
                </div>
                <div style={{ color: colors.textSecondary, paddingLeft: '1.5rem', lineHeight: '1.6' }}>
                  <strong style={{ color: '#3b82f6' }}>A:</strong> {item.a}
                </div>
              </div>
            ))}
          </div>

          <div style={styles.card}>
            <h2 style={styles.cardTitle}>
              <span>🎲</span> Monte Carlo Simulation Questions
            </h2>
            {[
              {
                q: 'How does Monte Carlo simulation work for VaR calculation?',
                a: 'Monte Carlo generates thousands of random scenarios by: 1) Modeling asset returns using stochastic processes (e.g., GBM), 2) Sampling correlated random numbers using Cholesky decomposition, 3) Calculating portfolio P&L for each scenario, 4) Sorting results and finding the percentile corresponding to the confidence level.'
              },
              {
                q: 'What is Cholesky decomposition and why is it used?',
                a: 'Cholesky decomposition factorizes a positive-definite correlation matrix Σ into L×L^T where L is lower triangular. It\'s used to transform independent random variables into correlated ones: if Z is independent standard normal, then L×Z has the desired correlation structure.'
              },
              {
                q: 'How many simulations are needed for accurate VaR?',
                a: 'Typically 10,000+ simulations for stable 95% VaR estimates. For 99% VaR, you need more (50,000+) since you\'re estimating a tail quantile with fewer data points. The standard error decreases with sqrt(n), so 4x simulations halves the error.'
              },
              {
                q: 'How do you handle computational performance for real-time VaR?',
                a: 'Techniques include: GPU acceleration for matrix operations, parallel processing across scenarios, variance reduction (antithetic variates, control variates), pre-computing scenario shocks, incremental updates for small portfolio changes, and caching intermediate results.'
              }
            ].map((item, i) => (
              <div key={i} style={{ marginBottom: '1.5rem', paddingBottom: '1.5rem', borderBottom: i < 3 ? `1px solid ${colors.border}` : 'none' }}>
                <div style={{ color: '#8b5cf6', fontWeight: '600', marginBottom: '0.5rem', display: 'flex', gap: '0.5rem' }}>
                  <span>Q{i + 1}:</span>
                  <span>{item.q}</span>
                </div>
                <div style={{ color: colors.textSecondary, paddingLeft: '1.5rem', lineHeight: '1.6' }}>
                  <strong style={{ color: '#3b82f6' }}>A:</strong> {item.a}
                </div>
              </div>
            ))}
          </div>

          <div style={styles.card}>
            <h2 style={styles.cardTitle}>
              <span>📊</span> Regulatory & Stress Testing Questions
            </h2>
            {[
              {
                q: 'What is Basel III and how does it relate to VaR?',
                a: 'Basel III is a regulatory framework requiring banks to hold capital against market risk. It mandates 99% 10-day VaR with a multiplier (3-4x) for capital calculation. FRTB (Basel IV) introduced Expected Shortfall and more granular risk factor requirements.'
              },
              {
                q: 'What is stress testing and how does it complement VaR?',
                a: 'Stress testing evaluates portfolio performance under extreme but plausible scenarios (e.g., 2008 crisis, rate shocks). Unlike VaR which uses historical/statistical data, stress tests examine specific adverse events. Regulators require both for comprehensive risk assessment.'
              },
              {
                q: 'How do you design effective stress scenarios?',
                a: 'Effective scenarios include: historical crises (2008, COVID), hypothetical events (major bank failure, geopolitical crisis), sensitivity tests (parallel rate shifts, equity drops), and reverse stress tests (find scenarios that would cause specific loss levels).'
              }
            ].map((item, i) => (
              <div key={i} style={{ marginBottom: '1.5rem', paddingBottom: '1.5rem', borderBottom: i < 2 ? `1px solid ${colors.border}` : 'none' }}>
                <div style={{ color: '#ef4444', fontWeight: '600', marginBottom: '0.5rem', display: 'flex', gap: '0.5rem' }}>
                  <span>Q{i + 1}:</span>
                  <span>{item.q}</span>
                </div>
                <div style={{ color: colors.textSecondary, paddingLeft: '1.5rem', lineHeight: '1.6' }}>
                  <strong style={{ color: '#3b82f6' }}>A:</strong> {item.a}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Technical Q&A Tab */}
      {activeTab === 'technical' && (
        <div>
          <div style={styles.card}>
            <h2 style={styles.cardTitle}>
              <span>☕</span> Java & Performance Questions
            </h2>
            {[
              {
                q: 'How do you optimize matrix operations in Java for risk calculations?',
                a: 'Use specialized libraries like EJML, ND4J, or Apache Commons Math. Leverage BLAS/LAPACK native bindings for hardware acceleration. For large matrices, use blocked algorithms for cache efficiency. Consider GPU acceleration with CUDA bindings. Parallelize independent calculations with Fork/Join or parallel streams.'
              },
              {
                q: 'What is the difference between parallel streams and ExecutorService?',
                a: 'Parallel streams use the common ForkJoinPool, good for CPU-bound tasks with uniform work. ExecutorService gives more control: custom thread pools, different pool types (fixed, cached), task queuing strategies. For I/O-bound work (database calls), use separate ExecutorService to avoid blocking the common pool.'
              },
              {
                q: 'How do you handle large datasets that don\'t fit in memory?',
                a: 'Use memory-mapped files (MappedByteBuffer) for sequential access. Stream processing with Apache Spark for distributed computation. Chunked processing with database cursors. Off-heap storage with libraries like Chronicle. Consider sampling techniques for Monte Carlo when full data isn\'t needed.'
              },
              {
                q: 'Explain CompletableFuture and how you\'d use it for async risk calculations.',
                a: 'CompletableFuture enables non-blocking async programming with chaining (thenApply, thenCompose) and combining (allOf, anyOf). For risk: calculate VaR for each portfolio async, combine results when all complete. Use custom executors for compute-heavy tasks. Handle exceptions with exceptionally() or handle().'
              },
              {
                q: 'How would you implement caching for expensive risk calculations?',
                a: 'Use Caffeine or Guava Cache with appropriate eviction policies (LRU, time-based). Cache key = (portfolio hash, calculation date, parameters). Consider Redis for distributed caching across nodes. Implement cache warming on startup. Use write-through for persistence. Monitor hit rates and tune size accordingly.'
              }
            ].map((item, i) => (
              <div key={i} style={{ marginBottom: '1.5rem', paddingBottom: '1.5rem', borderBottom: i < 4 ? `1px solid ${colors.border}` : 'none' }}>
                <div style={{ color: '#ec4899', fontWeight: '600', marginBottom: '0.5rem', display: 'flex', gap: '0.5rem' }}>
                  <span>Q{i + 1}:</span>
                  <span>{item.q}</span>
                </div>
                <div style={{ color: colors.textSecondary, paddingLeft: '1.5rem', lineHeight: '1.6' }}>
                  <strong style={{ color: '#10b981' }}>A:</strong> {item.a}
                </div>
              </div>
            ))}
          </div>

          <div style={styles.card}>
            <h2 style={styles.cardTitle}>
              <span>🗄️</span> Database & Data Questions
            </h2>
            {[
              {
                q: 'How would you store time-series market data efficiently?',
                a: 'Use TimescaleDB (PostgreSQL extension) or InfluxDB for time-series optimization. Partition by time (daily/weekly chunks). Use columnar compression for historical data. Indexes on (symbol, timestamp). Downsample old data (1-min → hourly → daily). Separate hot (recent) from cold (historical) storage.'
              },
              {
                q: 'What is the N+1 query problem and how do you avoid it?',
                a: 'N+1 occurs when fetching a list (1 query) then loading related entities individually (N queries). Solutions: use JOIN FETCH in JPA/Hibernate, batch fetching (@BatchSize), entity graphs, or DTOs with custom queries. Monitor with query logging. In risk systems, prefetch all portfolio positions in one query.'
              },
              {
                q: 'How do you ensure data consistency between real-time and batch calculations?',
                a: 'Use event sourcing with Kafka as source of truth. Batch and real-time consume from same topics. Implement exactly-once semantics with idempotent consumers. Version your calculation results. Reconciliation jobs compare outputs. Use database transactions for atomic updates of related data.'
              },
              {
                q: 'Explain ACID properties and when you might relax them.',
                a: 'ACID: Atomicity (all-or-nothing), Consistency (valid state), Isolation (concurrent transactions don\'t interfere), Durability (committed = permanent). For high-throughput, might use eventual consistency (async replication), optimistic locking instead of serializable isolation, or NoSQL for specific use cases while keeping ACID for critical financial transactions.'
              }
            ].map((item, i) => (
              <div key={i} style={{ marginBottom: '1.5rem', paddingBottom: '1.5rem', borderBottom: i < 3 ? `1px solid ${colors.border}` : 'none' }}>
                <div style={{ color: '#06b6d4', fontWeight: '600', marginBottom: '0.5rem', display: 'flex', gap: '0.5rem' }}>
                  <span>Q{i + 1}:</span>
                  <span>{item.q}</span>
                </div>
                <div style={{ color: colors.textSecondary, paddingLeft: '1.5rem', lineHeight: '1.6' }}>
                  <strong style={{ color: '#10b981' }}>A:</strong> {item.a}
                </div>
              </div>
            ))}
          </div>

          <div style={styles.card}>
            <h2 style={styles.cardTitle}>
              <span>📡</span> Messaging & Streaming Questions
            </h2>
            {[
              {
                q: 'Why use Kafka for real-time risk calculations?',
                a: 'Kafka provides: durable event log (replay for reprocessing), high throughput (millions of messages/sec), ordering within partitions (per-portfolio ordering), consumer groups for parallel processing, exactly-once semantics, and stream processing with Kafka Streams. Perfect for event-driven risk updates.'
              },
              {
                q: 'How do you handle late-arriving market data in streaming calculations?',
                a: 'Use watermarks to track event time progress. Implement windowing with allowed lateness. Side outputs for late data processing. Kafka Streams allows grace periods for window operations. Design idempotent updates so reprocessing is safe. Alert on excessive lateness indicating data quality issues.'
              },
              {
                q: 'What is the difference between Kafka Streams and Apache Spark Streaming?',
                a: 'Kafka Streams is a library (no cluster needed), exactly-once within Kafka ecosystem, true record-at-a-time processing. Spark Streaming is a framework requiring cluster management, micro-batch model, better for complex analytics and ML. Kafka Streams for low-latency, Spark for heavy computation and batch/stream unification.'
              },
              {
                q: 'How do you ensure exactly-once processing in a streaming pipeline?',
                a: 'Kafka transactions with transactional producers (atomic writes to multiple partitions). Idempotent producers (retry-safe). Consumer with read_committed isolation. Kafka Streams provides exactly-once via processing.guarantee=exactly_once_v2. For external systems, use idempotent writes with deduplication keys.'
              }
            ].map((item, i) => (
              <div key={i} style={{ marginBottom: '1.5rem', paddingBottom: '1.5rem', borderBottom: i < 3 ? `1px solid ${colors.border}` : 'none' }}>
                <div style={{ color: '#f59e0b', fontWeight: '600', marginBottom: '0.5rem', display: 'flex', gap: '0.5rem' }}>
                  <span>Q{i + 1}:</span>
                  <span>{item.q}</span>
                </div>
                <div style={{ color: colors.textSecondary, paddingLeft: '1.5rem', lineHeight: '1.6' }}>
                  <strong style={{ color: '#10b981' }}>A:</strong> {item.a}
                </div>
              </div>
            ))}
          </div>

          <div style={styles.card}>
            <h2 style={styles.cardTitle}>
              <span>🔧</span> Design Patterns Questions
            </h2>
            {[
              {
                q: 'How does the Strategy pattern apply to different VaR calculation methods?',
                a: 'Define a VarCalculator interface with calculate(Portfolio) method. Implement HistoricalVarCalculator, ParametricVarCalculator, MonteCarloVarCalculator. Client code uses the interface, easily switching strategies via configuration or runtime selection. Enables A/B testing of different models.'
              },
              {
                q: 'Explain the Builder pattern for complex risk calculation configurations.',
                a: 'RiskCalculationConfig.builder().confidenceLevel(0.95).holdingPeriod(10).simulations(10000).correlationMatrix(matrix).build(). Benefits: readable code for many parameters, immutable result object, validation during build(), optional parameters with defaults. Essential for complex financial calculations with many inputs.'
              },
              {
                q: 'How would you implement the Observer pattern for real-time risk alerts?',
                a: 'RiskMonitor (subject) notifies RiskAlertObservers when thresholds are breached. Observers: EmailNotifier, DashboardUpdater, PagerDutyIntegration. Use weak references to prevent memory leaks. In Spring, use ApplicationEventPublisher. Consider async notification to not block calculation thread.'
              },
              {
                q: 'What is the Template Method pattern and where would you use it?',
                a: 'Abstract class defines algorithm skeleton, subclasses override specific steps. Example: AbstractRiskReport with final generateReport() calling abstract methods: loadData(), calculate(), format(). Ensures consistent workflow while allowing customization. Used for different report types sharing common structure.'
              }
            ].map((item, i) => (
              <div key={i} style={{ marginBottom: '1.5rem', paddingBottom: '1.5rem', borderBottom: i < 3 ? `1px solid ${colors.border}` : 'none' }}>
                <div style={{ color: '#a855f7', fontWeight: '600', marginBottom: '0.5rem', display: 'flex', gap: '0.5rem' }}>
                  <span>Q{i + 1}:</span>
                  <span>{item.q}</span>
                </div>
                <div style={{ color: colors.textSecondary, paddingLeft: '1.5rem', lineHeight: '1.6' }}>
                  <strong style={{ color: '#10b981' }}>A:</strong> {item.a}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
