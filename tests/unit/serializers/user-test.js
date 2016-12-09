import { expect } from 'chai'
import { describeModule, it } from 'ember-mocha'
import User from 'intercom-test-assignment/models/user'
import usersFixture from 'intercom-test-assignment/mirage/fixtures/users'


let m
User.modelName = 'user'



describeModule(
  'serializer:user',
  'Unit | Serializer | user',
  {
    // Specify the other units that are required for this test.
    // needs: ['serializer:user']
  },
  function () {



    // Replace this with your real tests.
    it('normalizeQueryResponse: should process payload', function () {
      const serializer = this.subject()

      const result = serializer.normalizeQueryResponse(null, User, usersFixture, null, 'query')

      m = "Result should be a hash"
      expect(result, m).a('object')

      m = "Result should contain a data property with an array"
      expect(result.data, m).a('array')

      m = "Data should be a JSON document"
      expect(result.data, m).eql([
        {id: "12", type: "user", relationships: {}, attributes: {latitude: 52.986375,   name: "Christina McArdle",  longitude: -6.043701}},
        {id: "1",  type: "user", relationships: {}, attributes: {latitude: 51.92893,    name: "Alice Cahill",       longitude: -10.27699}},
        {id: "2",  type: "user", relationships: {}, attributes: {latitude: 51.8856167,  name: "Ian McArdle",        longitude: -10.4240951}},
        {id: "3",  type: "user", relationships: {}, attributes: {latitude: 52.3191841,  name: "Jack Enright",       longitude: -8.5072391}},
        {id: "28", type: "user", relationships: {}, attributes: {latitude: 53.807778,   name: "Charlie Halligan",   longitude: -7.714444}},
        {id: "7",  type: "user", relationships: {}, attributes: {latitude: 53.4692815,  name: "Frank Kehoe",        longitude: -9.436036}},
        {id: "8",  type: "user", relationships: {}, attributes: {latitude: 54.0894797,  name: "Eoin Ahearn",        longitude: -6.18671}},
        {id: "26", type: "user", relationships: {}, attributes: {latitude: 53.038056,   name: "Stephen McArdle",    longitude: -7.653889}},
        {id: "27", type: "user", relationships: {}, attributes: {latitude: 54.1225,     name: "Enid Gallagher",     longitude: -8.143333}},
        {id: "6",  type: "user", relationships: {}, attributes: {latitude: 53.1229599,  name: "Theresa Enright",    longitude: -6.2705202}},
        {id: "9",  type: "user", relationships: {}, attributes: {latitude: 52.2559432,  name: "Jack Dempsey",       longitude: -7.1048927}},
        {id: "10", type: "user", relationships: {}, attributes: {latitude: 52.240382,   name: "Georgina Gallagher", longitude: -6.972413}},
        {id: "4",  type: "user", relationships: {}, attributes: {latitude: 53.2451022,  name: "Ian Kehoe",          longitude: -6.238335}},
        {id: "5",  type: "user", relationships: {}, attributes: {latitude: 53.1302756,  name: "Nora Dempsey",       longitude: -6.2397222}},
        {id: "11", type: "user", relationships: {}, attributes: {latitude: 53.008769,   name: "Richard Finnegan",   longitude: -6.1056711}},
        {id: "31", type: "user", relationships: {}, attributes: {latitude: 53.1489345,  name: "Alan Behan",         longitude: -6.8422408}},
        {id: "13", type: "user", relationships: {}, attributes: {latitude: 53,          name: "Olive Ahearn",       longitude: -7}},
        {id: "14", type: "user", relationships: {}, attributes: {latitude: 51.999447,   name: "Helen Cahill",       longitude: -9.742744}},
        {id: "15", type: "user", relationships: {}, attributes: {latitude: 52.966,      name: "Michael Ahearn",     longitude: -6.463}},
        {id: "16", type: "user", relationships: {}, attributes: {latitude: 52.366037,   name: "Ian Larkin",         longitude: -8.179118}},
        {id: "17", type: "user", relationships: {}, attributes: {latitude: 54.180238,   name: "Patricia Cahill",    longitude: -5.920898}},
        {id: "39", type: "user", relationships: {}, attributes: {latitude: 53.0033946,  name: "Lisa Ahearn",        longitude: -6.3877505}},
        {id: "18", type: "user", relationships: {}, attributes: {latitude: 52.228056,   name: "Bob Larkin",         longitude: -7.915833}},
        {id: "24", type: "user", relationships: {}, attributes: {latitude: 54.133333,   name: "Rose Enright",       longitude: -6.433333}},
        {id: "19", type: "user", relationships: {}, attributes: {latitude: 55.033,      name: "Enid Cahill",        longitude: -8.112}},
        {id: "20", type: "user", relationships: {}, attributes: {latitude: 53.521111,   name: "Enid Enright",       longitude: -9.831111}},
        {id: "21", type: "user", relationships: {}, attributes: {latitude: 51.802,      name: "David Ahearn",       longitude: -9.442}},
        {id: "22", type: "user", relationships: {}, attributes: {latitude: 54.374208,   name: "Charlie McArdle",    longitude: -8.371639}},
        {id: "29", type: "user", relationships: {}, attributes: {latitude: 53.74452,    name: "Oliver Ahearn",      longitude: -7.11167}},
        {id: "30", type: "user", relationships: {}, attributes: {latitude: 53.761389,   name: "Nick Enright",       longitude: -7.2875}},
        {id: "23", type: "user", relationships: {}, attributes: {latitude: 54.080556,   name: "Eoin Gallagher",     longitude: -6.361944}},
        {id: "25", type: "user", relationships: {}, attributes: {latitude: 52.833502,   name: "David Behan",        longitude: -8.522366}},
      ])
    })
  }
)
