/**
 * This component invokes the procedure directly on the server,
 * without going through the HTTP endpoint.
 */
import { api } from 'trpc-api/server-invoker';

export async function ServerInvokedGreeting() {
  const data = await api.greeting.query({
    text: 'i never hit an api endpoint',
  });

  return (
    <div>
      {data}
      <form
        action={async () => {
          'use server';
          api.greeting.revalidate();
        }}
      >
        <button type="submit">Revalidate invoked</button>
      </form>
    </div>
  );
}
