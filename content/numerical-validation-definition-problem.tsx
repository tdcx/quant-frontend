export const meta = {
  slug: "numerical-validation-definition-problem",
  title: "When Numerical Validation Fails, It Is Usually a Definition Problem",
  published: "2026-01-25",
};

export default function NumericalValidationDefinitionProblem() {
  const p = "mt-3";
  const h2 = "mt-8 text-xl font-semibold tracking-tight";
  const list = "mt-3 list-disc pl-5 space-y-1";

  return (
    <>
      <h2 className={h2}>Abstract</h2>
      <p className={p}>
        Numerical validation is commonly framed as a statistical or computational
        challenge. In practice, most validation failures originate earlier -- at
        the level of definition. This note argues that numerical disagreement
        becomes problematic only when it cannot be interpreted, that tolerances
        and benchmarks often mask rather than resolve ambiguity, and that
        validation systems fail primarily by neglecting to declare explicit
        obligations. Without definition, numerical systems produce numbers, not
        knowledge.
      </p>

      <h2 className={h2}>1. Numerical Disagreement Is Not the Same as Validation Failure</h2>
      <p className={p}>
        Numerical systems disagree routinely. Different solvers, discretizations,
        data sources, execution orders, and hardware architectures yield
        different results. This is not exceptional; it is expected.
      </p>
      <p className={p}>
        Validation failure occurs only when disagreement cannot be interpreted.
      </p>
      <p className={p}>
        A difference that can be classified, bounded, and attributed is not a
        failure -- it is information. A difference that cannot be explained is
        not necessarily large, random, or unstable; it is undefined.
      </p>
      <p className={p}>
        Most validation pipelines conflate disagreement with failure and noise
        with uncertainty. As a result, numerical comparison becomes subjective:
        numbers differ, tolerances are adjusted, explanations are improvised,
        and nothing is conclusively learned.
      </p>

      <h2 className={h2}>2. Why Tolerances Do Not Resolve Ambiguity</h2>
      <p className={p}>
        Tolerances are intended to absorb numerical noise. In practice, they
        often absorb ignorance.
      </p>
      <p className={p}>
        A tolerance answers only one question: how much deviation is acceptable.
        It does not explain why deviation occurred, whether it was expected, or
        whether it violates the hypothesis under test.
      </p>
      <p className={p}>
        When a tolerance is violated, the system produces a binary outcome --
        pass or fail -- without context. When a tolerance is satisfied, the
        system remains silent. In neither case is the cause of agreement or
        disagreement examined.
      </p>
      <p className={p}>
        This leads to a familiar pattern: repeated tolerance tuning without
        convergence. The tolerance becomes a policy knob rather than a
        verification boundary.
      </p>

      <h2 className={h2}>3. Benchmarks Fail for the Same Reason</h2>
      <p className={p}>
        Benchmarks are often treated as ground truth. In reality, they are
        reference implementations with their own assumptions, defaults, and
        failure modes.
      </p>
      <p className={p}>
        When a system disagrees with a benchmark, several explanations are
        possible: the system is wrong; the benchmark is wrong; the systems are
        solving different problems; the comparison itself is ill-defined.
      </p>
      <p className={p}>
        Without an explicit declaration of what is held fixed and what is
        allowed to vary, these explanations are indistinguishable.
      </p>
      <p className={p}>
        Benchmark comparison then devolves into trust-based reasoning:
        &quot;this solver is well established,&quot; or &quot;this method is industry
        standard.&quot; These are social signals, not technical ones.
      </p>

      <h2 className={h2}>4. Validation Requires Declared Obligations</h2>
      <p className={p}>
        Validation is not about checking outputs. It is about verifying
        obligations.
      </p>
      <p className={p}>
        An obligation is a statement of what must remain invariant for numerical
        results to be comparable. Obligations may exist at multiple levels:
        model formulation, data semantics, numerical method, execution order,
        runtime environment, or hardware behavior.
      </p>
      <p className={p}>
        If an obligation is not declared, its violation cannot be detected. If
        it cannot be detected, it cannot be classified. If it cannot be
        classified, it will be ignored or rationalized.
      </p>
      <p className={p}>
        Most numerical systems fail validation not because they violate
        obligations, but because they never stated any.
      </p>

      <h2 className={h2}>5. Unclassified Failure Is Worse Than Explicit Failure</h2>
      <p className={p}>
        A system that fails loudly is debuggable. A system that fails silently is
        not.
      </p>
      <p className={p}>
        When numerical disagreement is unclassified, teams resort to informal
        explanations: floating-point noise, randomness, implementation quirks,
        or &quot;expected differences.&quot; Over time, this erodes confidence in the
        validation process itself.
      </p>
      <p className={p}>
        Worse, unclassified disagreement accumulates. Results that cannot be
        fully trusted are still compared, averaged, or promoted. The system
        continues to produce numbers, but no longer produces knowledge.
      </p>
      <p className={p}>
        Explicit failure is not a weakness. It is the precondition for learning.
      </p>

      <h2 className={h2}>6. What a Validation System Must Be Able to Say</h2>
      <p className={p}>
        At minimum, a validation system should be able to answer the following
        questions without rerunning the experiment:
      </p>
      <ul className={list}>
        <li>What hypothesis was being evaluated?</li>
        <li>What was held fixed, and what was allowed to vary?</li>
        <li>Which obligations were satisfied?</li>
        <li>Which obligations were violated?</li>
        <li>Why was this result considered valid, invalid, or inconclusive?</li>
      </ul>
      <p className={p}>
        If these questions cannot be answered from persisted artifacts alone,
        validation has already failed -- regardless of numerical agreement.
      </p>

      <h2 className={h2}>7. The Cost of Undefined Validation</h2>
      <p className={p}>
        Undefined validation scales poorly. As systems grow more complex,
        modular, and distributed, implicit assumptions proliferate faster than
        any team&apos;s ability to track them.
      </p>
      <p className={p}>
        At that point, validation becomes ceremonial. Reports are generated,
        checks are run, and outcomes are recorded -- but confidence does not
        increase.
      </p>
      <p className={p}>
        This is not a tooling problem. It is a definition problem.
      </p>

      <h2 className={h2}>Conclusion</h2>
      <p className={p}>
        Numerical validation does not fail because numbers differ. It fails
        because disagreement cannot be interpreted.
      </p>
      <p className={p}>
        Until validation systems treat definition as a first-class concern --
        through explicit obligations, declared invariants, and classifiable
        failure modes -- numerical results will remain fragile, explainable only
        by authority or hindsight.
      </p>
      <p className={p}>
        Precision without definition is not rigor. It is decoration.
      </p>
    </>
  );
}
