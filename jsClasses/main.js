class HospitalEmployee {
  constructor(name) {
    this._name = name;
    this._remainingVacationDays = 20;
  }

  get name() {
    return this._name;
  }

  get remainingVacationDays() {
    return this._remainingVacationDays;
  }

  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }

  static generatePassword() {
    const pass = Math.floor(Math.random() * 1000);
    return pass
  }
}

class Nurse extends HospitalEmployee {
  constructor(name, certifications) {
    super(name);
    this._certifications = certifications;
  }
  get certifications(){
    return this._certifications;
  }
  addCertification(newCertification){
    this._certifications.push(newCertification);
  }
}

const nurseOlynyk = new Nurse('Olynyk', ['Trauma', 'Pediatrics'])

nurseOlynyk.takeVacationDays(5);

console.log(nurseOlynyk.remainingVacationDays);

nurseOlynyk.addCertification('Genetics');

console.log(nurseOlynyk.certifications);

