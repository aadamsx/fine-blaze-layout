Tinytest.add('Unit - FineBlazeLayout._regionsToData', function(test) {
  var data = FineBlazeLayout._regionsToData({aa: 10, bb: "hello"});
  test.equal(data.aa(), 10);
  test.equal(data.bb(), "hello");
});

Tinytest.addAsync('Unit - FineBlazeLayout._updateRegions', function(test, done) {
  var aa = null;
  var bb = null;

  var data = FineBlazeLayout._regionsToData({aa: 10, bb: "hello"});
  var c1 = Tracker.autorun(function(c) {
    aa = data.aa();
  });

  var c2 = Tracker.autorun(function(c) {
    bb = data.bb();
  });

  FineBlazeLayout._updateRegions({aa: 20});

  Meteor.setTimeout(function() {
    test.equal(aa, 20);
    test.equal(bb, "hello");
    done();
  }, 100);
});
