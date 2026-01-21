export const meta = {
  slug: "failure-first-replay-contracts",
  title: "Failure-First Replay Contracts for Numerical Experiments",
  published: "2026-01-21",
};

export default function FailureFirstReplayContracts() {
  const p = "mt-3";
  const h2 = "mt-8 text-xl font-semibold tracking-tight";

  return (
    <>
      <p className="mt-0">
        Replayability is not about reproducing identical numbers. It is about
        making replay failure detectable, attributable, classifiable, and
        impossible to ignore.
      </p>
      <p className={p}>
        Numerical experiments rarely fail replay because randomness exists. They
        fail because the system never declared what was obligated to remain
        fixed. When replayability is treated as a contract rather than a
        best-effort aspiration, silent drift becomes an explicit experimental
        outcome rather than an unexamined defect.
      </p>

      <h2 className={h2}>Replay Drift Is Rarely About Randomness</h2>
      <p className={p}>
        Replay failure is commonly attributed to stochasticity, but this
        explanation is incomplete and often incorrect. When randomness is
        explicitly declared, seeded, and governed, it is rarely the dominant
        source of replay breakdown.
      </p>
      <p className={p}>
        The dominant causes are structural. Code changes can alter behavior
        without changing interfaces. Data loaders may be mutable even while
        identifiers remain stable. Numerical engines evolve as defaults drift
        across versions. Execution semantics shift with environment differences.
        Components may silently fall back when unavailable, replacing behavior
        without signaling. These are not stochastic effects; they are
        uncommitted degrees of freedom.
      </p>
      <p className={p}>
        Replay fails because nothing asserted what must not change. In the
        absence of explicit commitments, drift becomes ambiguous. Ambiguity
        prevents classification. Unclassified replay failure is treated as
        noise, ignored, or explained away. In this state, replayability remains
        a hope rather than a property.
      </p>

      <h2 className={h2}>Why Seeds and Parameters Are Insufficient</h2>
      <p className={p}>
        Seeds and parameters constrain randomness, but they do not constrain
        experiments.
      </p>
      <p className={p}>
        A seed without a declared randomization policy is ambiguous. A parameter
        set without a bound model specification is incomplete. A model
        definition without a frozen engine configuration is unstable. Each
        artifact answers a local question while leaving global behavior
        unconstrained.
      </p>
      <p className={p}>
        As a result, common failure patterns persist even when seeds and
        parameters remain unchanged. Solver defaults change tolerance behavior.
        Data schemas evolve while identifiers remain stable. Hypothesis
        implementations are refactored without semantic intent. Dependency
        upgrades modify numerical ordering or execution paths. The experiment
        &quot;replays,&quot; the numbers differ, and no artifact can explain why.
      </p>
      <p className={p}>
        This is not a failure of discipline. It is a failure of definition. The
        system never stated what replay was obligated to preserve.
      </p>

      <h2 className={h2}>Replayability as a Contract</h2>
      <p className={p}>
        Replayability requires a reframing. It is not a best-effort property but
        a contract with enforceable obligations and explicit failure modes. The
        goal of replay is not numeric identity. The goal of replay is obligation
        verification.
      </p>
      <p className={p}>
        A replay contract is an explicit, persisted set of commitments that
        binds a numerical experiment to the hypothesis being evaluated, the
        model specification, the data context, the numerical engine behavior,
        the randomization policy, and the execution environment within a
        declared scope.
      </p>
      <p className={p}>
        This contract is validated at execution, re-validated at persistence,
        re-checked at replay, and enforced at lifecycle transitions. Failure to
        satisfy the contract is a first-class experimental outcome, not an
        execution error. Replayability is no longer judged by whether numbers
        match, but by whether declared commitments were satisfied.
      </p>

      <h2 className={h2}>Contract Boundary and Drift Semantics</h2>
      <p className={p}>
        A replay contract must define its scope explicitly. Inside the contract
        boundary, drift constitutes a classified replay failure. Outside the
        contract boundary, drift is permitted and does not invalidate replay.
      </p>
      <p className={p}>
        Replay contracts do not attempt to eliminate all drift. They draw a
        boundary between obligated stability and permitted variability.
      </p>

      <h2 className={h2}>Required Commitments in a Replay Contract</h2>
      <p className={p}>
        A replay contract is only meaningful if its obligations are explicit. At
        a minimum, it must commit to an immutable hypothesis source snapshot,
        including a content-addressed identifier; a model specification snapshot
        covering parameters, regimes, constraints, and explicit model
        versioning; and a market or data context snapshot with dataset
        identifiers, time ranges, schema declarations, and content fingerprints.
      </p>
      <p className={p}>
        It must also include a numerical engine snapshot that fixes engine type,
        discretization scheme, solver options, fully expanded defaults, and
        configuration schema versions. A declared randomization policy is
        required, covering seed values, stream partitioning, and
        parallelization semantics. Finally, a bounded environment snapshot must
        specify the language runtime, dependency versions, and platform
        metadata.
      </p>
      <p className={p}>
        This list enumerates obligations, not exhaustiveness. Anything not
        declared is explicitly outside the replay guarantee.
      </p>

      <h2 className={h2}>Failure-First Enforcement Across the Lifecycle</h2>
      <p className={p}>
        Failure-first enforcement is the defining principle. Replay failure is
        not an exception, is not auto-corrected, is persisted, and is
        classified.
      </p>
      <p className={p}>
        At execution time, all mandatory commitments must exist. Missing
        commitments block execution; an experiment without a complete replay
        contract is not runnable. At persistence, the contract is re-validated.
        If incomplete or inconsistent, the result is persisted with a
        REPLAY_FAILED state. Numerical outputs may exist, but replay status is
        explicit.
      </p>
      <p className={p}>
        Independent validation re-checks contract integrity without executing
        the experiment. Hashes, fingerprints, and declared configurations are
        verified as evidence artifacts. Only replay-satisfied results may
        advance to frozen states, validation campaigns, or long-term retention.
        Non-replayable results cannot be silently promoted. Replayability is
        guarded across transitions, not checked once.
      </p>

      <h2 className={h2}>Minimal Replay Failure Example</h2>
      <p className={p}>
        An experiment executes with a complete replay contract: the hypothesis
        source hash is recorded, parameters are unchanged, seeds are unchanged,
        and the engine configuration is fully explicit. The result persists
        successfully.
      </p>
      <p className={p}>
        Later, the hypothesis source is modified. Semantic intent is unchanged,
        but formatting and structure differ. A replay attempt occurs. Parameters
        match, seeds match, engine configuration matches, but the hypothesis
        source hash mismatches. Replay is refused.
      </p>
      <p className={p}>
        The outcome is classified as REPLAY_FAILED : SOURCE_HASH_MISMATCH. No
        numbers are compared. No tolerance discussion occurs. The failure is
        attributable, persisted, and auditable. Replayability failed for
        exactly one reason: a violated commitment.
      </p>

      <h2 className={h2}>What Replay Contracts Make Possible</h2>
      <p className={p}>
        Because replay failure is explicit and classified, the system can
        reason about numerical disagreement without ambiguity, compare engines
        without normalization or suppression, audit results months later using
        stored evidence only, run validation campaigns with traceable
        provenance, and freeze models with defensible lineage.
      </p>
      <p className={p}>These are not promises. They follow directly from constraint.</p>

      <h2 className={h2}>What Replay Contracts Do Not Guarantee</h2>
      <p className={p}>
        Replay contracts do not guarantee bitwise floating-point identity, BLAS,
        SIMD, or GPU determinism, external service stability, language parity,
        or OS-level reproducibility. Replay contracts constrain what must not
        drift; they do not eliminate drift entirely.
      </p>

      <h2 className={h2}>Conclusion</h2>
      <p className={p}>
        Replayability fails when obligations are implicit. Randomness is rarely
        the cause. Silence is.
      </p>
      <p className={p}>
        Replayability is not about reproducing identical numbers. It is about
        making replay failure detectable, classifiable, and impossible to
        ignore. Failure-first replay contracts replace silence with commitments.
      </p>
    </>
  );
}
