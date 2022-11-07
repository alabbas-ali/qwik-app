import { component$, useStore } from '@builder.io/qwik';

/**
 * it looks like a react App component
 * Use a function component and jsx.
 * $ represents a lazy loaded boundary.
 */
export default component$(() => {
    const state = useStore({
        count: 5,
    });

    return (
      <>
        <button onClick$={() => state.count++}>
          {state.count}
        </button>
      </>
    );
});

/**
 * Eveything is lazy loaded, 
 * Including thinks like event handlers that close over state of the application
 * How dose this work?
 * how dose this chank of code nows the state of the application if it ia lazy loaded?
 */
