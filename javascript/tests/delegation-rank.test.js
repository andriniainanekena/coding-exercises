import { describe, it } from "mocha";
import { expect } from "chai";
import { getLastDelegation } from "../src/delegation-rank.js";

describe("Cérémonie d'ouverture - getLastDelegation", function () {
  describe("Cas de base", function () {
    it("retourne '' si la délégation est vide", function () {
      expect(getLastDelegation([])).to.equal('');
    });

    it("Retourne 'Estonia' pour le cas d'exemple complexe", function () {
      const input = [
        'Chili 101 2',
        'Estonia 58 1',
        'Romania 102 3',
        'Ecuador 103 4',
        'Madagascar 104 5',
        'Oman 50 1',
        'Nicaragua 51 3',
        'Yemen 53 4'
      ];
      expect(getLastDelegation(input)).to.equal('Estonia');
    });

    it("Retourne 'Romania' si une seule entrée", function () {
      expect(getLastDelegation(['Romania 102 4'])).to.equal('Romania');
    });

    it("Retourne 'Nicaragua' si elle a le meilleur ratio", function () {
      const input = ['Chili 101 2', 'Nicaragua 51 3'];
      expect(getLastDelegation(input)).to.equal('Nicaragua');
    });
  });

  describe("Cas avancés et erreurs", function () {
    it("retourne '' si l'entrée n'est pas un tableau", function () {
      expect(getLastDelegation(null)).to.equal('');
      expect(getLastDelegation("Chili 101 2")).to.equal('');
    });

    it("Gère les ratios égaux, retourne le premier trouvé", function () {
      const input = ['A 100 2', 'B 200 4'];
      expect(getLastDelegation(input)).to.equal('A');
    });

    it("Gère les distances et vitesses non entières", function () {
      const input = ['France 100.5 2.5', 'Italy 99.9 2.3'];
      expect(getLastDelegation(input)).to.equal('France');
    });
  });
});

