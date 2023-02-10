import { escapeName } from './escapeName';

describe('escapeName', () => {
    it('should escape', () => {
        expect(escapeName('')).toEqual("''");
        expect(escapeName('fooBar')).toEqual('fooBar');
        expect(escapeName('Foo Bar')).toEqual(`fooBar`);
        expect(escapeName('foo bar')).toEqual(`fooBar`);
        expect(escapeName('foo-bar')).toEqual(`fooBar`);
        expect(escapeName('foo.bar')).toEqual(`'foo.bar'`);
        expect(escapeName('foo_bar')).toEqual('fooBar');
        expect(escapeName('123foo.bar')).toEqual(`'123Foo.bar'`);
        expect(escapeName('@foo.bar')).toEqual(`'@foo.bar'`);
        expect(escapeName('$foo.bar')).toEqual(`'$foo.bar'`);
        expect(escapeName('_foo.bar')).toEqual(`'_foo.bar'`);
        expect(escapeName('123foobar')).toEqual(`'123Foobar'`);
        expect(escapeName('@foobar')).toEqual(`'@foobar'`);
        expect(escapeName('$foobar')).toEqual('$foobar');
        expect(escapeName('_foobar')).toEqual('_foobar');
    });
});
