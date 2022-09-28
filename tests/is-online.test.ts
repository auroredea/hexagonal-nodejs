import { dependencies } from '../dependencies';
import { isOnline } from '../domain/is-online';

// Correspond à un port qui sera injecté statiquement
const { port } = dependencies;

// simuler l'appel externe
describe('my application', () => {
  const givenName = (name: string) => ({
    hasResponse: (promise: boolean) => {
      port.response = jest.fn(async (value) => {
        expect(value).toStrictEqual(name);
        return promise;
      });
    },
  });

  // tester avec la méthode given-when-then
  it('must say if a user is online', async () => {
    // Given
    givenName('toto').hasResponse(true);
    // When
    const result = await isOnline('toto');
    // Then
    expect(result).toEqual(true);
  });
});