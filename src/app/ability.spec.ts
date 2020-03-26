import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { SquacApiService } from './squacapi.service';
import { HttpClient } from '@angular/common/http';
import { AbilityModule } from '@casl/angular';
import { ability, defineAbilitiesFor } from './ability';
import { Ability } from '@casl/ability';
import { User } from './auth/user';


describe('Ability', () => {
  let testAbility : Ability;

  let testUser : User = new User(
    "email",
    "firstName",
    "lastName",
    false,
    "organization",
    []
  );

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AbilityModule],
      providers: [
        {provide: Ability, useValue: ability},
      ]
    });
    testAbility = TestBed.inject(Ability);
  });


  it('should allow read by default', () => {
    expect(testAbility.can("read", "Dashboard")).toEqual(true);
  });

  it('should allow admin to manage all', () => {
    const adminUser = new User(
      "email",
      "firstName",
      "lastName",
      true,
      "organization",
      []
    );
    testAbility.update(defineAbilitiesFor(adminUser));
    expect(testAbility.can('manage', 'all')).toEqual(true);
  });

  it('should not allow without permission to cud', ()=>{
    testUser.groups = ["viewer"];

    testAbility.update(defineAbilitiesFor(testUser));
    expect(testAbility.can('update', 'Dashboard')).toEqual(false);
    expect(testAbility.can('read', 'Dashboard')).toEqual(true);
  });

  it('should allow for multiple groups', ()=>{
    testUser.groups = ["viewer", "contributor"];

    testAbility.update(defineAbilitiesFor(testUser));

    expect(testAbility.can('update', 'Measurement')).toEqual(true);
    expect(testAbility.can('update', 'Widget')).toEqual(false);
  });

});