import assert from 'assert'; //node
import chai, { expect } from 'chai';
import chaiAsPromised from 'chai-as-promised';

chai.should();
chai.use(chaiAsPromised);

function getError(bool) {
    if(!bool)
        throw new Error("Bad Hat Harry");

    return "bravo";
}

describe('Exemple de test', () => {

    let r = 0;
    let data = [];
    let obj = {};
    let f;

    beforeEach('init', () => {
        r = 2*3;
        data = [1, 2, 3, 4];
        obj = { firstname: "John", lastname: "Doe" };
    });

    before('create async function', () => {
        f = () => {
            return new Promise( resolve => {
                setTimeout(resolve, 2000, 'Ce message arrive un peu tard');
            });
        }
    });
    
    it('pending test');
    
    it('2x3 == 6', () => {
        // const r = 2*3;

        assert.strictEqual(r, 6);
    });

    it('2x3 != "6"', () => {
        // const r = 2*3;

        assert.notStrictEqual(r, "6");
    });

    it('2x3 == 6 with chai', () => {
        r.should.equal(6);
    });

    it('data is an array', () => {
        data.should.to.be.an('array');
    });

    it('values 1, 2, 3, 4 are in array data', () => {
        data.should.have.members([1, 2, 3, 4]);
    });

    it('data not have value 10', () => {
        data.should.not.contain(10);
    });

    it('remove value 4 in array', () => {
        data.splice(3, 1);

        data.should.have.lengthOf(3);
        data.should.not.contain(4);
    });

    it('obj have firstname == John', () => {
        obj.should.have.property('firstname').and.is.equal("John");
    })

    // https://www.chaijs.com/api/bdd/#method_throw

    it('getError(false) should throw an Exception', () => {

        expect(() => { getError(false) }).to.throw('Bad Hat Harry');
    });

    it('getError(true) should return bravo', () => {
        expect(getError(true)).to.equal('bravo');
        expect(() => getError(true)).to.not.throw();
    });

    it('test fonction asynchrone', (done) => {

        // eventually permet de tester une promise (chai-as-promised)
        // .notify(done) -> permet d'indiquer que le test est terminé
        expect(f()).is.eventually.equal('Ce message arrive un peu tard').notify(done);
    });

    it('test fonction asynchrone (async/await)', async () => {
        let message = await f();

        expect(message).to.equal('Ce message arrive un peu tard');
    });
});