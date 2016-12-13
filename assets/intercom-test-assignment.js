"use strict";

/* jshint ignore:start */



/* jshint ignore:end */

define('intercom-test-assignment/adapters/application', ['exports', 'ember-data/adapter', 'ember-network/fetch', 'intercom-test-assignment/utils/wrap-promise'], function (exports, _emberDataAdapter, _emberNetworkFetch, _intercomTestAssignmentUtilsWrapPromise) {
  exports['default'] = _emberDataAdapter['default'].extend({

    // ----- Overridden methods -----
    query: function query(store, type, _ref /*, recordArray*/) {
      var url = _ref.url;

      return (0, _intercomTestAssignmentUtilsWrapPromise['default'])((0, _emberNetworkFetch['default'])(url)).then(function (responseObj) {
        return responseObj.json();
      });
    }
  });
});
define('intercom-test-assignment/adapters/user', ['exports', 'ember-data/adapter', 'ember-network/fetch', 'intercom-test-assignment/utils/wrap-promise'], function (exports, _emberDataAdapter, _emberNetworkFetch, _intercomTestAssignmentUtilsWrapPromise) {
  exports['default'] = _emberDataAdapter['default'].extend({

    // ----- Overridden methods -----
    query: function query(store, type, _ref /*, recordArray*/) {
      var url = _ref.url;

      return (0, _intercomTestAssignmentUtilsWrapPromise['default'])((0, _emberNetworkFetch['default'])(url)).then(function (responseObj) {
        return responseObj.text();
      });
    }
  });
});
define('intercom-test-assignment/app', ['exports', 'ember', 'intercom-test-assignment/resolver', 'ember-load-initializers', 'intercom-test-assignment/config/environment', 'npm:lodash'], function (exports, _ember, _intercomTestAssignmentResolver, _emberLoadInitializers, _intercomTestAssignmentConfigEnvironment, _npmLodash) {

  var App = undefined;

  // Browserify needs this

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _intercomTestAssignmentConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _intercomTestAssignmentConfigEnvironment['default'].podModulePrefix,
    Resolver: _intercomTestAssignmentResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _intercomTestAssignmentConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});
define('intercom-test-assignment/components/array-path-layer', ['exports', 'ember-leaflet/components/array-path-layer'], function (exports, _emberLeafletComponentsArrayPathLayer) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberLeafletComponentsArrayPathLayer['default'];
    }
  });
});
define('intercom-test-assignment/components/base-layer', ['exports', 'ember-leaflet/components/base-layer'], function (exports, _emberLeafletComponentsBaseLayer) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberLeafletComponentsBaseLayer['default'];
    }
  });
});
define('intercom-test-assignment/components/circle-layer', ['exports', 'ember-leaflet/components/circle-layer'], function (exports, _emberLeafletComponentsCircleLayer) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberLeafletComponentsCircleLayer['default'];
    }
  });
});
define('intercom-test-assignment/components/circle-marker-layer', ['exports', 'ember-leaflet/components/circle-marker-layer'], function (exports, _emberLeafletComponentsCircleMarkerLayer) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberLeafletComponentsCircleMarkerLayer['default'];
    }
  });
});
define('intercom-test-assignment/components/container-layer', ['exports', 'ember-leaflet/components/container-layer'], function (exports, _emberLeafletComponentsContainerLayer) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberLeafletComponentsContainerLayer['default'];
    }
  });
});
define('intercom-test-assignment/components/div-overlay-layer', ['exports', 'ember-leaflet/components/div-overlay-layer'], function (exports, _emberLeafletComponentsDivOverlayLayer) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberLeafletComponentsDivOverlayLayer['default'];
    }
  });
});
define('intercom-test-assignment/components/ember-wormhole', ['exports', 'ember-wormhole/components/ember-wormhole'], function (exports, _emberWormholeComponentsEmberWormhole) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberWormholeComponentsEmberWormhole['default'];
    }
  });
});
define('intercom-test-assignment/components/geojson-layer', ['exports', 'ember-leaflet/components/geojson-layer'], function (exports, _emberLeafletComponentsGeojsonLayer) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberLeafletComponentsGeojsonLayer['default'];
    }
  });
});
define('intercom-test-assignment/components/image-layer', ['exports', 'ember-leaflet/components/image-layer'], function (exports, _emberLeafletComponentsImageLayer) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberLeafletComponentsImageLayer['default'];
    }
  });
});
define('intercom-test-assignment/components/leaflet-map', ['exports', 'ember-leaflet/components/leaflet-map'], function (exports, _emberLeafletComponentsLeafletMap) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberLeafletComponentsLeafletMap['default'];
    }
  });
});
define('intercom-test-assignment/components/link-to', ['exports', 'ember-cli-staticboot/components/link-to'], function (exports, _emberCliStaticbootComponentsLinkTo) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliStaticbootComponentsLinkTo['default'];
    }
  });
});
define('intercom-test-assignment/components/markdown-to-html', ['exports', 'ember-cli-showdown/components/markdown-to-html'], function (exports, _emberCliShowdownComponentsMarkdownToHtml) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliShowdownComponentsMarkdownToHtml['default'];
    }
  });
});
define('intercom-test-assignment/components/marker-layer', ['exports', 'ember-leaflet/components/marker-layer'], function (exports, _emberLeafletComponentsMarkerLayer) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberLeafletComponentsMarkerLayer['default'];
    }
  });
});
define('intercom-test-assignment/components/path-layer', ['exports', 'ember-leaflet/components/path-layer'], function (exports, _emberLeafletComponentsPathLayer) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberLeafletComponentsPathLayer['default'];
    }
  });
});
define('intercom-test-assignment/components/point-path-layer', ['exports', 'ember-leaflet/components/point-path-layer'], function (exports, _emberLeafletComponentsPointPathLayer) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberLeafletComponentsPointPathLayer['default'];
    }
  });
});
define('intercom-test-assignment/components/polygon-layer', ['exports', 'ember-leaflet/components/polygon-layer'], function (exports, _emberLeafletComponentsPolygonLayer) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberLeafletComponentsPolygonLayer['default'];
    }
  });
});
define('intercom-test-assignment/components/polyline-layer', ['exports', 'ember-leaflet/components/polyline-layer'], function (exports, _emberLeafletComponentsPolylineLayer) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberLeafletComponentsPolylineLayer['default'];
    }
  });
});
define('intercom-test-assignment/components/popup-layer', ['exports', 'ember-leaflet/components/popup-layer'], function (exports, _emberLeafletComponentsPopupLayer) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberLeafletComponentsPopupLayer['default'];
    }
  });
});
define('intercom-test-assignment/components/tile-layer', ['exports', 'ember-leaflet/components/tile-layer'], function (exports, _emberLeafletComponentsTileLayer) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberLeafletComponentsTileLayer['default'];
    }
  });
});
define('intercom-test-assignment/components/tooltip-layer', ['exports', 'ember-leaflet/components/tooltip-layer'], function (exports, _emberLeafletComponentsTooltipLayer) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberLeafletComponentsTooltipLayer['default'];
    }
  });
});
define('intercom-test-assignment/components/wms-tile-layer', ['exports', 'ember-leaflet/components/wms-tile-layer'], function (exports, _emberLeafletComponentsWmsTileLayer) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberLeafletComponentsWmsTileLayer['default'];
    }
  });
});
define('intercom-test-assignment/helpers/and', ['exports', 'ember', 'ember-truth-helpers/helpers/and'], function (exports, _ember, _emberTruthHelpersHelpersAnd) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersAnd.andHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersAnd.andHelper);
  }

  exports['default'] = forExport;
});
define('intercom-test-assignment/helpers/app-version', ['exports', 'ember', 'intercom-test-assignment/config/environment'], function (exports, _ember, _intercomTestAssignmentConfigEnvironment) {
  exports.appVersion = appVersion;
  var version = _intercomTestAssignmentConfigEnvironment['default'].APP.version;

  function appVersion() {
    return version;
  }

  exports['default'] = _ember['default'].Helper.helper(appVersion);
});
define('intercom-test-assignment/helpers/append', ['exports', 'ember-composable-helpers/helpers/append'], function (exports, _emberComposableHelpersHelpersAppend) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersAppend['default'];
    }
  });
  Object.defineProperty(exports, 'append', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersAppend.append;
    }
  });
});
define('intercom-test-assignment/helpers/array', ['exports', 'ember-helper'], function (exports, _emberHelper) {
  exports.array = array;

  function array(params /*, hash*/) {
    return params;
  }

  exports['default'] = (0, _emberHelper.helper)(array);
});
define('intercom-test-assignment/helpers/camelize', ['exports', 'ember-composable-helpers/helpers/camelize'], function (exports, _emberComposableHelpersHelpersCamelize) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersCamelize['default'];
    }
  });
  Object.defineProperty(exports, 'camelize', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersCamelize.camelize;
    }
  });
});
define('intercom-test-assignment/helpers/capitalize', ['exports', 'ember-composable-helpers/helpers/capitalize'], function (exports, _emberComposableHelpersHelpersCapitalize) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersCapitalize['default'];
    }
  });
  Object.defineProperty(exports, 'capitalize', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersCapitalize.capitalize;
    }
  });
});
define('intercom-test-assignment/helpers/chunk', ['exports', 'ember-composable-helpers/helpers/chunk'], function (exports, _emberComposableHelpersHelpersChunk) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersChunk['default'];
    }
  });
  Object.defineProperty(exports, 'chunk', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersChunk.chunk;
    }
  });
});
define('intercom-test-assignment/helpers/classify', ['exports', 'ember-composable-helpers/helpers/classify'], function (exports, _emberComposableHelpersHelpersClassify) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersClassify['default'];
    }
  });
  Object.defineProperty(exports, 'classify', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersClassify.classify;
    }
  });
});
define('intercom-test-assignment/helpers/compact', ['exports', 'ember-composable-helpers/helpers/compact'], function (exports, _emberComposableHelpersHelpersCompact) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersCompact['default'];
    }
  });
  Object.defineProperty(exports, 'compact', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersCompact.compact;
    }
  });
});
define('intercom-test-assignment/helpers/compute', ['exports', 'ember-composable-helpers/helpers/compute'], function (exports, _emberComposableHelpersHelpersCompute) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersCompute['default'];
    }
  });
  Object.defineProperty(exports, 'compute', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersCompute.compute;
    }
  });
});
define('intercom-test-assignment/helpers/contains', ['exports', 'ember-composable-helpers/helpers/contains'], function (exports, _emberComposableHelpersHelpersContains) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersContains['default'];
    }
  });
  Object.defineProperty(exports, 'contains', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersContains.contains;
    }
  });
});
define('intercom-test-assignment/helpers/dasherize', ['exports', 'ember-composable-helpers/helpers/dasherize'], function (exports, _emberComposableHelpersHelpersDasherize) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersDasherize['default'];
    }
  });
  Object.defineProperty(exports, 'dasherize', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersDasherize.dasherize;
    }
  });
});
define('intercom-test-assignment/helpers/dec', ['exports', 'ember-composable-helpers/helpers/dec'], function (exports, _emberComposableHelpersHelpersDec) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersDec['default'];
    }
  });
  Object.defineProperty(exports, 'dec', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersDec.dec;
    }
  });
});
define('intercom-test-assignment/helpers/div-icon', ['exports', 'ember-leaflet/helpers/div-icon'], function (exports, _emberLeafletHelpersDivIcon) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberLeafletHelpersDivIcon['default'];
    }
  });
  Object.defineProperty(exports, 'divIcon', {
    enumerable: true,
    get: function get() {
      return _emberLeafletHelpersDivIcon.divIcon;
    }
  });
});
define('intercom-test-assignment/helpers/drop', ['exports', 'ember-composable-helpers/helpers/drop'], function (exports, _emberComposableHelpersHelpersDrop) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersDrop['default'];
    }
  });
  Object.defineProperty(exports, 'drop', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersDrop.drop;
    }
  });
});
define('intercom-test-assignment/helpers/eq', ['exports', 'ember', 'ember-truth-helpers/helpers/equal'], function (exports, _ember, _emberTruthHelpersHelpersEqual) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersEqual.equalHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersEqual.equalHelper);
  }

  exports['default'] = forExport;
});
define('intercom-test-assignment/helpers/filter-by', ['exports', 'ember-composable-helpers/helpers/filter-by'], function (exports, _emberComposableHelpersHelpersFilterBy) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersFilterBy['default'];
    }
  });
  Object.defineProperty(exports, 'filterBy', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersFilterBy.filterBy;
    }
  });
});
define('intercom-test-assignment/helpers/filter', ['exports', 'ember-composable-helpers/helpers/filter'], function (exports, _emberComposableHelpersHelpersFilter) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersFilter['default'];
    }
  });
  Object.defineProperty(exports, 'filter', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersFilter.filter;
    }
  });
});
define('intercom-test-assignment/helpers/find-by', ['exports', 'ember-composable-helpers/helpers/find-by'], function (exports, _emberComposableHelpersHelpersFindBy) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersFindBy['default'];
    }
  });
  Object.defineProperty(exports, 'findBy', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersFindBy.findBy;
    }
  });
});
define('intercom-test-assignment/helpers/flatten', ['exports', 'ember-composable-helpers/helpers/flatten'], function (exports, _emberComposableHelpersHelpersFlatten) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersFlatten['default'];
    }
  });
  Object.defineProperty(exports, 'flatten', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersFlatten.flatten;
    }
  });
});
define('intercom-test-assignment/helpers/fr-markdown-file', ['exports', 'ember-fr-markdown-file/helpers/fr-markdown-file'], function (exports, _emberFrMarkdownFileHelpersFrMarkdownFile) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFrMarkdownFileHelpersFrMarkdownFile['default'];
    }
  });
  Object.defineProperty(exports, 'frMarkdownFile', {
    enumerable: true,
    get: function get() {
      return _emberFrMarkdownFileHelpersFrMarkdownFile.frMarkdownFile;
    }
  });
});
define('intercom-test-assignment/helpers/group-by', ['exports', 'ember-composable-helpers/helpers/group-by'], function (exports, _emberComposableHelpersHelpersGroupBy) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersGroupBy['default'];
    }
  });
  Object.defineProperty(exports, 'groupBy', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersGroupBy.groupBy;
    }
  });
});
define('intercom-test-assignment/helpers/gt', ['exports', 'ember', 'ember-truth-helpers/helpers/gt'], function (exports, _ember, _emberTruthHelpersHelpersGt) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersGt.gtHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersGt.gtHelper);
  }

  exports['default'] = forExport;
});
define('intercom-test-assignment/helpers/gte', ['exports', 'ember', 'ember-truth-helpers/helpers/gte'], function (exports, _ember, _emberTruthHelpersHelpersGte) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersGte.gteHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersGte.gteHelper);
  }

  exports['default'] = forExport;
});
define('intercom-test-assignment/helpers/has-next', ['exports', 'ember-composable-helpers/helpers/has-next'], function (exports, _emberComposableHelpersHelpersHasNext) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersHasNext['default'];
    }
  });
  Object.defineProperty(exports, 'hasNext', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersHasNext.hasNext;
    }
  });
});
define('intercom-test-assignment/helpers/has-previous', ['exports', 'ember-composable-helpers/helpers/has-previous'], function (exports, _emberComposableHelpersHelpersHasPrevious) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersHasPrevious['default'];
    }
  });
  Object.defineProperty(exports, 'hasPrevious', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersHasPrevious.hasPrevious;
    }
  });
});
define('intercom-test-assignment/helpers/html-safe', ['exports', 'ember-composable-helpers/helpers/html-safe'], function (exports, _emberComposableHelpersHelpersHtmlSafe) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersHtmlSafe['default'];
    }
  });
  Object.defineProperty(exports, 'htmlSafe', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersHtmlSafe.htmlSafe;
    }
  });
});
define('intercom-test-assignment/helpers/icon', ['exports', 'ember-leaflet/helpers/icon'], function (exports, _emberLeafletHelpersIcon) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberLeafletHelpersIcon['default'];
    }
  });
  Object.defineProperty(exports, 'icon', {
    enumerable: true,
    get: function get() {
      return _emberLeafletHelpersIcon.icon;
    }
  });
});
define('intercom-test-assignment/helpers/inc', ['exports', 'ember-composable-helpers/helpers/inc'], function (exports, _emberComposableHelpersHelpersInc) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersInc['default'];
    }
  });
  Object.defineProperty(exports, 'inc', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersInc.inc;
    }
  });
});
define('intercom-test-assignment/helpers/intersect', ['exports', 'ember-composable-helpers/helpers/intersect'], function (exports, _emberComposableHelpersHelpersIntersect) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersIntersect['default'];
    }
  });
  Object.defineProperty(exports, 'intersect', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersIntersect.intersect;
    }
  });
});
define('intercom-test-assignment/helpers/invoke', ['exports', 'ember-composable-helpers/helpers/invoke'], function (exports, _emberComposableHelpersHelpersInvoke) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersInvoke['default'];
    }
  });
  Object.defineProperty(exports, 'invoke', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersInvoke.invoke;
    }
  });
});
define('intercom-test-assignment/helpers/is-array', ['exports', 'ember', 'ember-truth-helpers/helpers/is-array'], function (exports, _ember, _emberTruthHelpersHelpersIsArray) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersIsArray.isArrayHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersIsArray.isArrayHelper);
  }

  exports['default'] = forExport;
});
define('intercom-test-assignment/helpers/join', ['exports', 'ember-composable-helpers/helpers/join'], function (exports, _emberComposableHelpersHelpersJoin) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersJoin['default'];
    }
  });
  Object.defineProperty(exports, 'join', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersJoin.join;
    }
  });
});
define('intercom-test-assignment/helpers/lat-lng-bounds', ['exports', 'ember-leaflet/helpers/lat-lng-bounds'], function (exports, _emberLeafletHelpersLatLngBounds) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberLeafletHelpersLatLngBounds['default'];
    }
  });
  Object.defineProperty(exports, 'latLngBounds', {
    enumerable: true,
    get: function get() {
      return _emberLeafletHelpersLatLngBounds.latLngBounds;
    }
  });
});
define('intercom-test-assignment/helpers/lt', ['exports', 'ember', 'ember-truth-helpers/helpers/lt'], function (exports, _ember, _emberTruthHelpersHelpersLt) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersLt.ltHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersLt.ltHelper);
  }

  exports['default'] = forExport;
});
define('intercom-test-assignment/helpers/lte', ['exports', 'ember', 'ember-truth-helpers/helpers/lte'], function (exports, _ember, _emberTruthHelpersHelpersLte) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersLte.lteHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersLte.lteHelper);
  }

  exports['default'] = forExport;
});
define('intercom-test-assignment/helpers/map-by', ['exports', 'ember-composable-helpers/helpers/map-by'], function (exports, _emberComposableHelpersHelpersMapBy) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersMapBy['default'];
    }
  });
  Object.defineProperty(exports, 'mapBy', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersMapBy.mapBy;
    }
  });
});
define('intercom-test-assignment/helpers/map', ['exports', 'ember-composable-helpers/helpers/map'], function (exports, _emberComposableHelpersHelpersMap) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersMap['default'];
    }
  });
  Object.defineProperty(exports, 'map', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersMap.map;
    }
  });
});
define('intercom-test-assignment/helpers/multiply', ['exports', 'ember-helper'], function (exports, _emberHelper) {
  var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

  exports.multiply = multiply;

  function multiply(_ref /*, hash*/) {
    var _ref2 = _slicedToArray(_ref, 2);

    var a = _ref2[0];
    var b = _ref2[1];

    return a * b;
  }

  exports['default'] = (0, _emberHelper.helper)(multiply);
});
define('intercom-test-assignment/helpers/next', ['exports', 'ember-composable-helpers/helpers/next'], function (exports, _emberComposableHelpersHelpersNext) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersNext['default'];
    }
  });
  Object.defineProperty(exports, 'next', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersNext.next;
    }
  });
});
define('intercom-test-assignment/helpers/not-eq', ['exports', 'ember', 'ember-truth-helpers/helpers/not-equal'], function (exports, _ember, _emberTruthHelpersHelpersNotEqual) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersNotEqual.notEqualHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersNotEqual.notEqualHelper);
  }

  exports['default'] = forExport;
});
define('intercom-test-assignment/helpers/not', ['exports', 'ember', 'ember-truth-helpers/helpers/not'], function (exports, _ember, _emberTruthHelpersHelpersNot) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersNot.notHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersNot.notHelper);
  }

  exports['default'] = forExport;
});
define('intercom-test-assignment/helpers/object-at', ['exports', 'ember-composable-helpers/helpers/object-at'], function (exports, _emberComposableHelpersHelpersObjectAt) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersObjectAt['default'];
    }
  });
  Object.defineProperty(exports, 'objectAt', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersObjectAt.objectAt;
    }
  });
});
define('intercom-test-assignment/helpers/optional', ['exports', 'ember-composable-helpers/helpers/optional'], function (exports, _emberComposableHelpersHelpersOptional) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersOptional['default'];
    }
  });
  Object.defineProperty(exports, 'optional', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersOptional.optional;
    }
  });
});
define('intercom-test-assignment/helpers/or', ['exports', 'ember', 'ember-truth-helpers/helpers/or'], function (exports, _ember, _emberTruthHelpersHelpersOr) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersOr.orHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersOr.orHelper);
  }

  exports['default'] = forExport;
});
define('intercom-test-assignment/helpers/pipe-action', ['exports', 'ember-composable-helpers/helpers/pipe-action'], function (exports, _emberComposableHelpersHelpersPipeAction) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersPipeAction['default'];
    }
  });
});
define('intercom-test-assignment/helpers/pipe', ['exports', 'ember-composable-helpers/helpers/pipe'], function (exports, _emberComposableHelpersHelpersPipe) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersPipe['default'];
    }
  });
  Object.defineProperty(exports, 'pipe', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersPipe.pipe;
    }
  });
});
define('intercom-test-assignment/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _emberInflectorLibHelpersPluralize) {
  exports['default'] = _emberInflectorLibHelpersPluralize['default'];
});
define('intercom-test-assignment/helpers/point', ['exports', 'ember-leaflet/helpers/point'], function (exports, _emberLeafletHelpersPoint) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberLeafletHelpersPoint['default'];
    }
  });
  Object.defineProperty(exports, 'point', {
    enumerable: true,
    get: function get() {
      return _emberLeafletHelpersPoint.point;
    }
  });
});
define('intercom-test-assignment/helpers/previous', ['exports', 'ember-composable-helpers/helpers/previous'], function (exports, _emberComposableHelpersHelpersPrevious) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersPrevious['default'];
    }
  });
  Object.defineProperty(exports, 'previous', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersPrevious.previous;
    }
  });
});
define('intercom-test-assignment/helpers/queue', ['exports', 'ember-composable-helpers/helpers/queue'], function (exports, _emberComposableHelpersHelpersQueue) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersQueue['default'];
    }
  });
  Object.defineProperty(exports, 'queue', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersQueue.queue;
    }
  });
});
define('intercom-test-assignment/helpers/range', ['exports', 'ember-composable-helpers/helpers/range'], function (exports, _emberComposableHelpersHelpersRange) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersRange['default'];
    }
  });
  Object.defineProperty(exports, 'range', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersRange.range;
    }
  });
});
define('intercom-test-assignment/helpers/reduce', ['exports', 'ember-composable-helpers/helpers/reduce'], function (exports, _emberComposableHelpersHelpersReduce) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersReduce['default'];
    }
  });
  Object.defineProperty(exports, 'reduce', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersReduce.reduce;
    }
  });
});
define('intercom-test-assignment/helpers/reject-by', ['exports', 'ember-composable-helpers/helpers/reject-by'], function (exports, _emberComposableHelpersHelpersRejectBy) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersRejectBy['default'];
    }
  });
  Object.defineProperty(exports, 'rejectBy', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersRejectBy.rejectBy;
    }
  });
});
define('intercom-test-assignment/helpers/repeat', ['exports', 'ember-composable-helpers/helpers/repeat'], function (exports, _emberComposableHelpersHelpersRepeat) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersRepeat['default'];
    }
  });
  Object.defineProperty(exports, 'repeat', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersRepeat.repeat;
    }
  });
});
define('intercom-test-assignment/helpers/reverse', ['exports', 'ember-composable-helpers/helpers/reverse'], function (exports, _emberComposableHelpersHelpersReverse) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersReverse['default'];
    }
  });
  Object.defineProperty(exports, 'reverse', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersReverse.reverse;
    }
  });
});
define('intercom-test-assignment/helpers/round', ['exports', 'ember-helper', 'npm:lodash'], function (exports, _emberHelper, _npmLodash) {
  var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

  exports.round = round;

  function round(_ref /*, hash*/) {
    var _ref2 = _slicedToArray(_ref, 2);

    var value = _ref2[0];
    var _ref2$1 = _ref2[1];
    var precision = _ref2$1 === undefined ? 0 : _ref2$1;

    return _npmLodash['default'].round(value, precision);
  }

  exports['default'] = (0, _emberHelper.helper)(round);
});
define('intercom-test-assignment/helpers/shuffle', ['exports', 'ember-composable-helpers/helpers/shuffle'], function (exports, _emberComposableHelpersHelpersShuffle) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersShuffle['default'];
    }
  });
  Object.defineProperty(exports, 'shuffle', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersShuffle.shuffle;
    }
  });
});
define('intercom-test-assignment/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _emberInflectorLibHelpersSingularize) {
  exports['default'] = _emberInflectorLibHelpersSingularize['default'];
});
define('intercom-test-assignment/helpers/slice', ['exports', 'ember-composable-helpers/helpers/slice'], function (exports, _emberComposableHelpersHelpersSlice) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersSlice['default'];
    }
  });
  Object.defineProperty(exports, 'slice', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersSlice.slice;
    }
  });
});
define('intercom-test-assignment/helpers/sort-by', ['exports', 'ember-composable-helpers/helpers/sort-by'], function (exports, _emberComposableHelpersHelpersSortBy) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersSortBy['default'];
    }
  });
  Object.defineProperty(exports, 'sortBy', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersSortBy.sortBy;
    }
  });
});
define('intercom-test-assignment/helpers/take', ['exports', 'ember-composable-helpers/helpers/take'], function (exports, _emberComposableHelpersHelpersTake) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersTake['default'];
    }
  });
  Object.defineProperty(exports, 'take', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersTake.take;
    }
  });
});
define('intercom-test-assignment/helpers/titleize', ['exports', 'ember-composable-helpers/helpers/titleize'], function (exports, _emberComposableHelpersHelpersTitleize) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersTitleize['default'];
    }
  });
  Object.defineProperty(exports, 'titleize', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersTitleize.titleize;
    }
  });
});
define('intercom-test-assignment/helpers/toggle-action', ['exports', 'ember-composable-helpers/helpers/toggle-action'], function (exports, _emberComposableHelpersHelpersToggleAction) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersToggleAction['default'];
    }
  });
});
define('intercom-test-assignment/helpers/toggle', ['exports', 'ember-composable-helpers/helpers/toggle'], function (exports, _emberComposableHelpersHelpersToggle) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersToggle['default'];
    }
  });
  Object.defineProperty(exports, 'toggle', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersToggle.toggle;
    }
  });
});
define('intercom-test-assignment/helpers/truncate', ['exports', 'ember-composable-helpers/helpers/truncate'], function (exports, _emberComposableHelpersHelpersTruncate) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersTruncate['default'];
    }
  });
  Object.defineProperty(exports, 'truncate', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersTruncate.truncate;
    }
  });
});
define('intercom-test-assignment/helpers/underscore', ['exports', 'ember-composable-helpers/helpers/underscore'], function (exports, _emberComposableHelpersHelpersUnderscore) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersUnderscore['default'];
    }
  });
  Object.defineProperty(exports, 'underscore', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersUnderscore.underscore;
    }
  });
});
define('intercom-test-assignment/helpers/union', ['exports', 'ember-composable-helpers/helpers/union'], function (exports, _emberComposableHelpersHelpersUnion) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersUnion['default'];
    }
  });
  Object.defineProperty(exports, 'union', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersUnion.union;
    }
  });
});
define('intercom-test-assignment/helpers/w', ['exports', 'ember-composable-helpers/helpers/w'], function (exports, _emberComposableHelpersHelpersW) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersW['default'];
    }
  });
  Object.defineProperty(exports, 'w', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersW.w;
    }
  });
});
define('intercom-test-assignment/helpers/without', ['exports', 'ember-composable-helpers/helpers/without'], function (exports, _emberComposableHelpersHelpersWithout) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersWithout['default'];
    }
  });
  Object.defineProperty(exports, 'without', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersWithout.without;
    }
  });
});
define('intercom-test-assignment/helpers/xor', ['exports', 'ember', 'ember-truth-helpers/helpers/xor'], function (exports, _ember, _emberTruthHelpersHelpersXor) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersXor.xorHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersXor.xorHelper);
  }

  exports['default'] = forExport;
});
define('intercom-test-assignment/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'intercom-test-assignment/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _intercomTestAssignmentConfigEnvironment) {
  var _config$APP = _intercomTestAssignmentConfigEnvironment['default'].APP;
  var name = _config$APP.name;
  var version = _config$APP.version;
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(name, version)
  };
});
define('intercom-test-assignment/initializers/container-debug-adapter', ['exports', 'ember-resolver/container-debug-adapter'], function (exports, _emberResolverContainerDebugAdapter) {
  exports['default'] = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _emberResolverContainerDebugAdapter['default']);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('intercom-test-assignment/initializers/data-adapter', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `data-adapter` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'data-adapter',
    before: 'store',
    initialize: _ember['default'].K
  };
});
define('intercom-test-assignment/initializers/ember-cli-mirage', ['exports', 'ember-cli-mirage/utils/read-modules', 'intercom-test-assignment/config/environment', 'intercom-test-assignment/mirage/config', 'ember-cli-mirage/server', 'lodash/object/assign'], function (exports, _emberCliMirageUtilsReadModules, _intercomTestAssignmentConfigEnvironment, _intercomTestAssignmentMirageConfig, _emberCliMirageServer, _lodashObjectAssign) {
  exports.startMirage = startMirage;
  exports['default'] = {
    name: 'ember-cli-mirage',
    initialize: function initialize(application) {
      if (arguments.length > 1) {
        // Ember < 2.1
        var container = arguments[0],
            application = arguments[1];
      }

      if (_shouldUseMirage(_intercomTestAssignmentConfigEnvironment['default'].environment, _intercomTestAssignmentConfigEnvironment['default']['ember-cli-mirage'])) {
        startMirage(_intercomTestAssignmentConfigEnvironment['default']);
      }
    }
  };

  function startMirage() {
    var env = arguments.length <= 0 || arguments[0] === undefined ? _intercomTestAssignmentConfigEnvironment['default'] : arguments[0];

    var environment = env.environment;
    var modules = (0, _emberCliMirageUtilsReadModules['default'])(env.modulePrefix);
    var options = (0, _lodashObjectAssign['default'])(modules, { environment: environment, baseConfig: _intercomTestAssignmentMirageConfig['default'], testConfig: _intercomTestAssignmentMirageConfig.testConfig });

    return new _emberCliMirageServer['default'](options);
  }

  function _shouldUseMirage(env, addonConfig) {
    var userDeclaredEnabled = typeof addonConfig.enabled !== 'undefined';
    var defaultEnabled = _defaultEnabled(env, addonConfig);

    return userDeclaredEnabled ? addonConfig.enabled : defaultEnabled;
  }

  /*
    Returns a boolean specifying the default behavior for whether
    to initialize Mirage.
  */
  function _defaultEnabled(env, addonConfig) {
    var usingInDev = env === 'development' && !addonConfig.usingProxy;
    var usingInTest = env === 'test';

    return usingInDev || usingInTest;
  }
});
define('intercom-test-assignment/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data/-private/core'], function (exports, _emberDataSetupContainer, _emberDataPrivateCore) {

  /*
  
    This code initializes Ember-Data onto an Ember application.
  
    If an Ember.js developer defines a subclass of DS.Store on their application,
    as `App.StoreService` (or via a module system that resolves to `service:store`)
    this code will automatically instantiate it and make it available on the
    router.
  
    Additionally, after an application's controllers have been injected, they will
    each have the store made available to them.
  
    For example, imagine an Ember.js application with the following classes:
  
    App.StoreService = DS.Store.extend({
      adapter: 'custom'
    });
  
    App.PostsController = Ember.Controller.extend({
      // ...
    });
  
    When the application is initialized, `App.ApplicationStore` will automatically be
    instantiated, and the instance of `App.PostsController` will have its `store`
    property set to that instance.
  
    Note that this code will only be run if the `ember-application` package is
    loaded. If Ember Data is being used in an environment other than a
    typical application (e.g., node.js where only `ember-runtime` is available),
    this code will be ignored.
  */

  exports['default'] = {
    name: 'ember-data',
    initialize: _emberDataSetupContainer['default']
  };
});
define('intercom-test-assignment/initializers/export-application-global', ['exports', 'ember', 'intercom-test-assignment/config/environment'], function (exports, _ember, _intercomTestAssignmentConfigEnvironment) {
  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_intercomTestAssignmentConfigEnvironment['default'].exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _intercomTestAssignmentConfigEnvironment['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember['default'].String.classify(_intercomTestAssignmentConfigEnvironment['default'].modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('intercom-test-assignment/initializers/injectStore', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `injectStore` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'injectStore',
    before: 'store',
    initialize: _ember['default'].K
  };
});
define('intercom-test-assignment/initializers/leaflet-assets', ['exports', 'intercom-test-assignment/config/environment', 'ember-leaflet/L'], function (exports, _intercomTestAssignmentConfigEnvironment, _emberLeafletL) {
  exports.initialize = initialize;

  function initialize() /* container, application */{
    _emberLeafletL['default'].Icon.Default.imagePath = (_intercomTestAssignmentConfigEnvironment['default'].rootURL || _intercomTestAssignmentConfigEnvironment['default'].baseURL || '/') + 'assets/images/';
  }

  exports['default'] = {
    name: 'leaflet-assets',
    initialize: initialize
  };
});
define('intercom-test-assignment/initializers/nprogress', ['exports', 'ember-cli-nprogress/initializers/nprogress'], function (exports, _emberCliNprogressInitializersNprogress) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliNprogressInitializersNprogress['default'];
    }
  });
  Object.defineProperty(exports, 'initialize', {
    enumerable: true,
    get: function get() {
      return _emberCliNprogressInitializersNprogress.initialize;
    }
  });
});
define('intercom-test-assignment/initializers/store', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `store` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'store',
    after: 'ember-data',
    initialize: _ember['default'].K
  };
});
define('intercom-test-assignment/initializers/transforms', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `transforms` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'transforms',
    before: 'store',
    initialize: _ember['default'].K
  };
});
define('intercom-test-assignment/initializers/truth-helpers', ['exports', 'ember', 'ember-truth-helpers/utils/register-helper', 'ember-truth-helpers/helpers/and', 'ember-truth-helpers/helpers/or', 'ember-truth-helpers/helpers/equal', 'ember-truth-helpers/helpers/not', 'ember-truth-helpers/helpers/is-array', 'ember-truth-helpers/helpers/not-equal', 'ember-truth-helpers/helpers/gt', 'ember-truth-helpers/helpers/gte', 'ember-truth-helpers/helpers/lt', 'ember-truth-helpers/helpers/lte'], function (exports, _ember, _emberTruthHelpersUtilsRegisterHelper, _emberTruthHelpersHelpersAnd, _emberTruthHelpersHelpersOr, _emberTruthHelpersHelpersEqual, _emberTruthHelpersHelpersNot, _emberTruthHelpersHelpersIsArray, _emberTruthHelpersHelpersNotEqual, _emberTruthHelpersHelpersGt, _emberTruthHelpersHelpersGte, _emberTruthHelpersHelpersLt, _emberTruthHelpersHelpersLte) {
  exports.initialize = initialize;

  function initialize() /* container, application */{

    // Do not register helpers from Ember 1.13 onwards, starting from 1.13 they
    // will be auto-discovered.
    if (_ember['default'].Helper) {
      return;
    }

    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('and', _emberTruthHelpersHelpersAnd.andHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('or', _emberTruthHelpersHelpersOr.orHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('eq', _emberTruthHelpersHelpersEqual.equalHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('not', _emberTruthHelpersHelpersNot.notHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('is-array', _emberTruthHelpersHelpersIsArray.isArrayHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('not-eq', _emberTruthHelpersHelpersNotEqual.notEqualHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('gt', _emberTruthHelpersHelpersGt.gtHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('gte', _emberTruthHelpersHelpersGte.gteHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('lt', _emberTruthHelpersHelpersLt.ltHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('lte', _emberTruthHelpersHelpersLte.lteHelper);
  }

  exports['default'] = {
    name: 'truth-helpers',
    initialize: initialize
  };
});
define("intercom-test-assignment/instance-initializers/browser/clear-double-boot", ["exports"], function (exports) {
  /*globals Ember*/

  // When using `ember fastboot --serve-assets` the application output will
  // already be rendered to the DOM when the actual JavaScript loads. Ember
  // does not automatically clear its `rootElement` so this leads to the
  // "double" applications being visible at once (only the "bottom" one is
  // running via JS and is interactive).
  //
  // This removes any pre-rendered ember-view elements, so that the booting
  // application will replace the pre-rendered output

  exports["default"] = {
    name: "clear-double-boot",

    initialize: function initialize(instance) {
      var originalDidCreateRootView = instance.didCreateRootView;

      instance.didCreateRootView = function () {
        var elements = document.querySelectorAll(instance.rootElement + ' .ember-view');
        for (var i = 0; i < elements.length; i++) {
          var element = elements[i];
          element.parentNode.removeChild(element);
        }

        originalDidCreateRootView.apply(instance, arguments);
      };
    }
  };
});
define("intercom-test-assignment/instance-initializers/ember-data", ["exports", "ember-data/-private/instance-initializers/initialize-store-service"], function (exports, _emberDataPrivateInstanceInitializersInitializeStoreService) {
  exports["default"] = {
    name: "ember-data",
    initialize: _emberDataPrivateInstanceInitializersInitializeStoreService["default"]
  };
});
define('intercom-test-assignment/locations/none', ['exports', 'ember'], function (exports, _ember) {
  var computed = _ember['default'].computed;
  var reads = _ember['default'].computed.reads;
  var service = _ember['default'].inject.service;
  var get = _ember['default'].get;
  var getOwner = _ember['default'].getOwner;
  exports['default'] = _ember['default'].NoneLocation.extend({
    implementation: 'fastboot',
    fastboot: service(),

    _fastbootHeadersEnabled: computed(function () {
      var config = getOwner(this).resolveRegistration('config:environment');
      return !!get(config, 'fastboot.fastbootHeaders');
    }),

    _redirectCode: computed(function () {
      var TEMPORARY_REDIRECT_CODE = 307;
      var config = getOwner(this).resolveRegistration('config:environment');
      return get(config, 'fastboot.redirectCode') || TEMPORARY_REDIRECT_CODE;
    }),

    _response: reads('fastboot.response'),
    _request: reads('fastboot.request'),

    setURL: function setURL(path) {
      if (get(this, 'fastboot.isFastBoot')) {
        var currentPath = get(this, 'path');
        var isInitialPath = !currentPath || currentPath.length === 0;
        var isTransitioning = currentPath !== path;
        var response = get(this, '_response');

        if (isTransitioning && !isInitialPath) {
          var protocol = get(this, '_request.protocol');
          var host = get(this, '_request.host');
          var redirectURL = protocol + '://' + host + path;

          response.statusCode = this.get('_redirectCode');
          response.headers.set('location', redirectURL);
        }

        // for testing and debugging
        if (get(this, '_fastbootHeadersEnabled')) {
          response.headers.set('x-fastboot-path', path);
        }
      }

      this._super.apply(this, arguments);
    }
  });
});
define('intercom-test-assignment/macros/to-number', ['exports', 'ember-computed'], function (exports, _emberComputed) {
  exports['default'] = toNumberMacro;

  function toNumberMacro(stringPropertyName) {
    var base = arguments.length <= 1 || arguments[1] === undefined ? 10 : arguments[1];

    return (0, _emberComputed['default'])(stringPropertyName, function () {
      var value = this.get(stringPropertyName);
      return parseInt(value, base);
    });
  }
});
define('intercom-test-assignment/mirage/config', ['exports', 'intercom-test-assignment/mirage/fixtures/users', 'intercom-test-assignment/mirage/fixtures/cities'], function (exports, _intercomTestAssignmentMirageFixturesUsers, _intercomTestAssignmentMirageFixturesCities) {
  exports['default'] = function () {

    this.passthrough('/write-coverage');

    // These comments are here to help you get started. Feel free to delete them.

    /*
      Config (with defaults).
       Note: these only affect routes defined *after* them!
    */

    // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
    // this.namespace = '';    // make this `api`, for example, if your API is namespaced
    // this.timing = 400;      // delay for each request, automatically set to 0 during testing

    /*
      Shorthand cheatsheet:
       this.get('/posts');
      this.post('/posts');
      this.get('/posts/:id');
      this.put('/posts/:id'); // or this.patch
      this.del('/posts/:id');
       http://www.ember-cli-mirage.com/docs/v0.2.x/shorthands/
    */
    var usersURL = 'https://cdn.rawgit.com/brianw/19896c50afa89ad4dec3/raw/6c11047887a03483c50017c1d451667fd62a53ca/gistfile1.txt';
    var citiesURL = 'https://cdn.rawgit.com/lolmaus/d78a75f903b176a488a0e6533e65ca8b/raw/a7919fa7c9b3359a975bdd56a917d26060f7c7fe/cities.json';

    this.get(usersURL, function () {
      return _intercomTestAssignmentMirageFixturesUsers['default'];
    });
    this.get(citiesURL, function () {
      return _intercomTestAssignmentMirageFixturesCities['default'];
    });
  };
});
define("intercom-test-assignment/mirage/fixtures/cities", ["exports"], function (exports) {
  exports["default"] = {
    "data": [{ "id": "dublin", "type": "cities", "attributes": { "name": "Dublin", "latitude": 53.3393, "longitude": -6.2576841 } }, { "id": "cork", "type": "cities", "attributes": { "name": "Cork", "latitude": 51.8968917, "longitude": -8.4863157 } }, { "id": "castlebar", "type": "cities", "attributes": { "name": "Castlebar", "latitude": 53.8550014, "longitude": -9.287926 } }, { "id": "athlone", "type": "cities", "attributes": { "name": "Athlone", "latitude": 53.4239331, "longitude": -7.9406898 } }]
  };
});
define('intercom-test-assignment/mirage/fixtures/users', ['exports'], function (exports) {
  var usersStr = '{"latitude": "52.986375", "user_id": 12, "name": "Christina McArdle", "longitude": "-6.043701"}\n{"latitude": "51.92893", "user_id": 1, "name": "Alice Cahill", "longitude": "-10.27699"}\n{"latitude": "51.8856167", "user_id": 2, "name": "Ian McArdle", "longitude": "-10.4240951"}\n{"latitude": "52.3191841", "user_id": 3, "name": "Jack Enright", "longitude": "-8.5072391"}\n{"latitude": "53.807778", "user_id": 28, "name": "Charlie Halligan", "longitude": "-7.714444"}\n{"latitude": "53.4692815", "user_id": 7, "name": "Frank Kehoe", "longitude": "-9.436036"}\n{"latitude": "54.0894797", "user_id": 8, "name": "Eoin Ahearn", "longitude": "-6.18671"}\n{"latitude": "53.038056", "user_id": 26, "name": "Stephen McArdle", "longitude": "-7.653889"}\n{"latitude": "54.1225", "user_id": 27, "name": "Enid Gallagher", "longitude": "-8.143333"}\n{"latitude": "53.1229599", "user_id": 6, "name": "Theresa Enright", "longitude": "-6.2705202"}\n{"latitude": "52.2559432", "user_id": 9, "name": "Jack Dempsey", "longitude": "-7.1048927"}\n{"latitude": "52.240382", "user_id": 10, "name": "Georgina Gallagher", "longitude": "-6.972413"}\n{"latitude": "53.2451022", "user_id": 4, "name": "Ian Kehoe", "longitude": "-6.238335"}\n{"latitude": "53.1302756", "user_id": 5, "name": "Nora Dempsey", "longitude": "-6.2397222"}\n{"latitude": "53.008769", "user_id": 11, "name": "Richard Finnegan", "longitude": "-6.1056711"}\n{"latitude": "53.1489345", "user_id": 31, "name": "Alan Behan", "longitude": "-6.8422408"}\n{"latitude": "53", "user_id": 13, "name": "Olive Ahearn", "longitude": "-7"}\n{"latitude": "51.999447", "user_id": 14, "name": "Helen Cahill", "longitude": "-9.742744"}\n{"latitude": "52.966", "user_id": 15, "name": "Michael Ahearn", "longitude": "-6.463"}\n{"latitude": "52.366037", "user_id": 16, "name": "Ian Larkin", "longitude": "-8.179118"}\n{"latitude": "54.180238", "user_id": 17, "name": "Patricia Cahill", "longitude": "-5.920898"}\n{"latitude": "53.0033946", "user_id": 39, "name": "Lisa Ahearn", "longitude": "-6.3877505"}\n{"latitude": "52.228056", "user_id": 18, "name": "Bob Larkin", "longitude": "-7.915833"}\n{"latitude": "54.133333", "user_id": 24, "name": "Rose Enright", "longitude": "-6.433333"}\n{"latitude": "55.033", "user_id": 19, "name": "Enid Cahill", "longitude": "-8.112"}\n{"latitude": "53.521111", "user_id": 20, "name": "Enid Enright", "longitude": "-9.831111"}\n{"latitude": "51.802", "user_id": 21, "name": "David Ahearn", "longitude": "-9.442"}\n{"latitude": "54.374208", "user_id": 22, "name": "Charlie McArdle", "longitude": "-8.371639"}\n{"latitude": "53.74452", "user_id": 29, "name": "Oliver Ahearn", "longitude": "-7.11167"}\n{"latitude": "53.761389", "user_id": 30, "name": "Nick Enright", "longitude": "-7.2875"}\n{"latitude": "54.080556", "user_id": 23, "name": "Eoin Gallagher", "longitude": "-6.361944"}\n{"latitude": "52.833502", "user_id": 25, "name": "David Behan", "longitude": "-8.522366"}';

  exports['default'] = usersStr;
  var usersFixtureCount = usersStr.split('\n').filter(function (str) {
    return str.trim().length;
  }) // Remove blank lines
  .length;
  exports.usersFixtureCount = usersFixtureCount;
});
define("intercom-test-assignment/mirage/scenarios/default", ["exports"], function (exports) {
  exports["default"] = function () /* server */{

    /*
      Seed your development database using your factories.
      This data will not be loaded in your tests.
       Make sure to define a factory for each model you want to create.
    */

    // server.createList('post', 10);
  };
});
define('intercom-test-assignment/mirage/serializers/application', ['exports', 'ember-cli-mirage'], function (exports, _emberCliMirage) {
  exports['default'] = _emberCliMirage.JSONAPISerializer.extend({});
});
define('intercom-test-assignment/models/city', ['exports', 'ember-data/model', 'ember-data/attr'], function (exports, _emberDataModel, _emberDataAttr) {
  exports['default'] = _emberDataModel['default'].extend({

    // ----- Attributes -----
    name: (0, _emberDataAttr['default'])('string'),
    latitude: (0, _emberDataAttr['default'])('number'),
    longitude: (0, _emberDataAttr['default'])('number')
  });
});
define('intercom-test-assignment/models/user-city-junction', ['exports', 'ember-data/model', 'ember-data/relationships', 'ember-computed', 'ember-computed-decorators'], function (exports, _emberDataModel, _emberDataRelationships, _emberComputed, _emberComputedDecorators) {
  function _createDecoratedObject(descriptors) { var target = {}; for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = true; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } } if (descriptor.initializer) { descriptor.value = descriptor.initializer.call(target); } Object.defineProperty(target, key, descriptor); } return target; }

  var abs = Math.abs;
  var atan2 = Math.atan2;
  var cos = Math.cos;
  var PI = Math.PI;
  var pow = Math.pow;
  var sin = Math.sin;
  var sqrt = Math.sqrt;
  exports['default'] = _emberDataModel['default'].extend(_createDecoratedObject([{
    key: 'user',

    // ----- Relationships -----
    initializer: function initializer() {
      return (0, _emberDataRelationships.belongsTo)('user');
    }
  }, {
    key: 'city',
    initializer: function initializer() {
      return (0, _emberDataRelationships.belongsTo)('city');
    }
  }, {
    key: 'earthMeanRadiusKm',

    // ----- Static properties -----
    initializer: function initializer() {
      return 6371;
    }
  }, {
    key: 'name',

    // ----- Computed properties -----
    initializer: function initializer() {
      return (0, _emberComputed.reads)('user.name');
    }
  }, {
    key: 'latitude',
    initializer: function initializer() {
      return (0, _emberComputed.reads)('user.latitude');
    }
  }, {
    key: 'longitude',
    initializer: function initializer() {
      return (0, _emberComputed.reads)('user.longitude');
    }
  }, {
    key: 'cityLatitude',
    initializer: function initializer() {
      return (0, _emberComputed.reads)('city.latitude');
    }
  }, {
    key: 'cityLongitude',
    initializer: function initializer() {
      return (0, _emberComputed.reads)('city.longitude');
    }
  }, {
    key: 'distanceKm',
    decorators: [(0, _emberComputedDecorators['default'])('latitude', 'longitude', 'cityLatitude', 'cityLongitude', 'earthMeanRadiusKm')],
    value: function distanceKm(userLatitude, userLongitude, cityLatitude, cityLongitude, radius) {
      var phi1 = userLatitude * PI / 180;
      var lambda1 = userLongitude * PI / 180;
      var phi2 = cityLatitude * PI / 180;
      var lambda2 = cityLongitude * PI / 180;

      var deltaLambda = abs(lambda1 > lambda2 ? lambda1 - lambda2 : lambda2 - lambda1);

      // special case of the Vincenty formula https://en.wikipedia.org/wiki/Great-circle_distance
      var angleRad = atan2(sqrt(pow(cos(phi2) * sin(deltaLambda), 2) + pow(cos(phi1) * sin(phi2) - sin(phi1) * cos(phi2) * cos(deltaLambda), 2)), sin(phi1) * sin(phi2) + cos(phi1) * cos(phi2) * cos(deltaLambda));

      return angleRad * radius;
    }
  }]));
});

// import attr from 'ember-data/attr'
define('intercom-test-assignment/models/user', ['exports', 'ember-data/model', 'ember-data/attr', 'intercom-test-assignment/macros/to-number'], function (exports, _emberDataModel, _emberDataAttr, _intercomTestAssignmentMacrosToNumber) {
  exports['default'] = _emberDataModel['default'].extend({

    // ----- Attributes -----
    name: (0, _emberDataAttr['default'])('string'),
    latitude: (0, _emberDataAttr['default'])('number'),
    longitude: (0, _emberDataAttr['default'])('number'),

    // ----- Computed properties -----
    numericId: (0, _intercomTestAssignmentMacrosToNumber['default'])('id')
  });
});
define('intercom-test-assignment/pods/city/controller', ['exports', 'ember-controller', 'ember-computed-decorators', 'ember-service/inject'], function (exports, _emberController, _emberComputedDecorators, _emberServiceInject) {
  function _createDecoratedObject(descriptors) { var target = {}; for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = true; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } } if (descriptor.initializer) { descriptor.value = descriptor.initializer.call(target); } Object.defineProperty(target, key, descriptor); } return target; }

  exports['default'] = _emberController['default'].extend(_createDecoratedObject([{
    key: 'fastboot',

    // ----- Services -----
    initializer: function initializer() {
      return (0, _emberServiceInject['default'])();
    }
  }, {
    key: 'distanceLimitKm',

    // ----- Overridden properties -----

    // ----- Static properties -----
    initializer: function initializer() {
      return 100;
    }
  }, {
    key: 'maxDistanceLimitKm',
    decorators: [(0, _emberComputedDecorators['default'])('model.userCityJunctions.@each.distanceKm')],
    value: function maxDistanceLimitKm(userCityJunctions) {
      return 1 + userCityJunctions.sortBy('distanceKm').get('lastObject.distanceKm');
    }
  }, {
    key: 'actions',

    // ----- Overridden Methods -----

    // ----- Custom Methods -----

    // ----- Events and observers -----

    // ----- Tasks -----

    // ----- Actions -----
    initializer: function initializer() {
      return {
        changeCityAction: function changeCityAction(cityId) {
          this.transitionToRoute('city', cityId);
        }
      };
    }
  }]));
});

// ----- Computed properties -----
define('intercom-test-assignment/pods/city/route', ['exports', 'ember-route', 'rsvp'], function (exports, _emberRoute, _rsvp) {
  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  exports['default'] = _emberRoute['default'].extend({

    // ----- Services -----

    // ----- Overridden properties -----

    // ----- Static properties -----

    // ----- Computed properties -----

    // ----- Overridden Methods -----
    model: function model() {
      var _this = this;

      var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

      var cityId = _ref.cityId;
      var _ref$usersURL = _ref.usersURL;
      var usersURL = _ref$usersURL === undefined ? 'https://cdn.rawgit.com/brianw/19896c50afa89ad4dec3/raw/6c11047887a03483c50017c1d451667fd62a53ca/gistfile1.txt' : _ref$usersURL;
      var _ref$citiesURL = _ref.citiesURL;
      var citiesURL = _ref$citiesURL === undefined ? 'https://cdn.rawgit.com/lolmaus/d78a75f903b176a488a0e6533e65ca8b/raw/a7919fa7c9b3359a975bdd56a917d26060f7c7fe/cities.json' : _ref$citiesURL;

      var store = this.get('store');

      return _rsvp['default'].hash({
        users: store.query('user', { url: usersURL }),
        cities: store.query('city', { url: citiesURL })
      }).then(function (model) {
        return _rsvp['default'].hash(_extends({}, model, {
          currentCity: model.cities.findBy('id', cityId)
        }));
      }).then(function (model) {
        return _rsvp['default'].hash(_extends({}, model, {
          userCityJunctions: _this._populateJunctions({
            currentCity: model.currentCity,
            users: model.users
          })
        }));
      });
    },

    // ----- Custom Methods -----
    _populateJunctions: function _populateJunctions(_ref2) {
      var currentCity = _ref2.currentCity;
      var users = _ref2.users;

      var store = this.get('store');

      var payload = {
        data: users.map(function (user) {
          return {
            id: user.id + '-' + currentCity.id,
            type: 'user-city-junction',
            relationships: {
              user: { data: { id: user.id, type: 'user' } },
              city: { data: { id: currentCity.id, type: 'city' } }
            }
          };
        })
      };

      return store.push(payload);
    }

  });
});
// ----- Events and observers -----

// ----- Tasks -----

// ----- Actions -----
// actions: {
// }
define("intercom-test-assignment/pods/city/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "fn7s7pbz", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"route-city\"],[\"flush-element\"],[\"text\",\"\\n\\n  \"],[\"append\",[\"helper\",[\"hero-header\"],null,[[\"currentCity\",\"userCityJunctions\",\"distanceLimitKm\"],[[\"get\",[\"model\",\"currentCity\"]],[\"get\",[\"model\",\"userCityJunctions\"]],[\"get\",[\"distanceLimitKm\"]]]]],false],[\"text\",\"\\n\\n\\n  \"],[\"open-element\",\"main\",[]],[\"static-attr\",\"class\",\"route-city-main\"],[\"flush-element\"],[\"text\",\"\\n\\n    \"],[\"open-element\",\"section\",[]],[\"static-attr\",\"class\",\"route-city-main-section _ui\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"append\",[\"helper\",[\"cities-chooser\"],null,[[\"class\",\"cities\",\"currentCity\",\"changeCityAction\"],[\"route-city-citiesChooser\",[\"get\",[\"model\",\"cities\"]],[\"get\",[\"model\",\"currentCity\"]],[\"helper\",[\"action\"],[[\"get\",[null]],\"changeCityAction\"],null]]]],false],[\"text\",\"\\n\\n\"],[\"block\",[\"with\"],[[\"helper\",[\"sort-by\"],[\"user.numericId\",[\"get\",[\"model\",\"userCityJunctions\"]]],null]],null,1],[\"text\",\"    \"],[\"close-element\"],[\"text\",\"\\n\\n\\n\\n    \"],[\"open-element\",\"section\",[]],[\"static-attr\",\"class\",\"route-city-main-section _desc\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"h2\",[]],[\"flush-element\"],[\"text\",\"The assignment\"],[\"close-element\"],[\"text\",\"\\n\\n      \"],[\"open-element\",\"input\",[]],[\"static-attr\",\"id\",\"route-city-assignmentToggler\"],[\"static-attr\",\"type\",\"checkbox\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"label\",[]],[\"static-attr\",\"for\",\"route-city-assignmentToggler\"],[\"flush-element\"],[\"text\",\"Expand\"],[\"close-element\"],[\"text\",\"\\n\\n      \"],[\"append\",[\"helper\",[\"markdown-to-html\"],[[\"helper\",[\"fr-markdown-file\"],[\"assignment\"],null]],[[\"class\"],[\"route-city-assignment\"]]],false],[\"text\",\"\\n\\n      \"],[\"append\",[\"helper\",[\"markdown-to-html\"],[[\"helper\",[\"fr-markdown-file\"],[\"description\"],null]],null],false],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n\\n  \"],[\"close-element\"],[\"text\",\"\\n\\n  \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"https://github.com/lolmaus/intercom-test-assignment\"],[\"static-attr\",\"class\",\"route-city-fork\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"img\",[]],[\"static-attr\",\"src\",\"https://camo.githubusercontent.com/a6677b08c955af8400f44c6298f40e7d19cc5b2d/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f677261795f3664366436642e706e67\"],[\"static-attr\",\"alt\",\"Fork me on GitHub\"],[\"static-attr\",\"data-canonical-src\",\"https://s3.amazonaws.com/github/ribbons/forkme_right_gray_6d6d6d.png\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"close-element\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"            \"],[\"append\",[\"helper\",[\"input\"],null,[[\"class\",\"type\",\"min\",\"max\",\"value\"],[\"route-city-distance-slider\",\"range\",0,[\"get\",[\"maxDistanceLimitKm\"]],[\"get\",[\"distanceLimitKm\"]]]]],false],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"route-city-distance\"],[\"flush-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"route-city-distance-preLabel\"],[\"flush-element\"],[\"text\",\"\\n            Distance limit:\\n          \"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"block\",[\"unless\"],[[\"get\",[\"fastboot\",\"isFastBoot\"]]],null,0],[\"text\",\"\\n          \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"route-city-distance-label\"],[\"flush-element\"],[\"text\",\"\\n            \"],[\"append\",[\"unknown\",[\"distanceLimitKm\"]],false],[\"text\",\" km\\n          \"],[\"close-element\"],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n\\n        \"],[\"append\",[\"helper\",[\"user-list\"],null,[[\"class\",\"users\",\"cityName\",\"distanceLimitKm\"],[\"route-city-userList\",[\"get\",[\"userCityJunctions\"]],[\"get\",[\"model\",\"currentCity\",\"name\"]],[\"get\",[\"distanceLimitKm\"]]]]],false],[\"text\",\"\\n\"]],\"locals\":[\"userCityJunctions\"]}],\"hasPartials\":false}", "meta": { "moduleName": "intercom-test-assignment/pods/city/template.hbs" } });
});
define('intercom-test-assignment/pods/components/cities-chooser/component', ['exports', 'ember-component', 'ember-service/inject'], function (exports, _emberComponent, _emberServiceInject) {
  exports['default'] = _emberComponent['default'].extend({

    // ----- Arguments -----
    cities: undefined,
    currentCity: undefined,
    changeCityAction: undefined,

    // ----- Services -----
    fastboot: (0, _emberServiceInject['default'])(),

    // ----- Overridden properties -----
    classNames: ['citiesChooser']

  });
});
// ----- Static properties -----

// ----- Computed properties -----

// ----- Overridden Methods -----

// ----- Custom Methods -----

// ----- Events and observers -----

// ----- Tasks -----

// ----- Actions -----
// actions: {
// }
define("intercom-test-assignment/pods/components/cities-chooser/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "5WprRE19", "block": "{\"statements\":[[\"block\",[\"if\"],[[\"get\",[\"fastboot\",\"isFastBoot\"]]],null,2,1],[\"text\",\"\\n\"],[\"open-element\",\"span\",[]],[\"flush-element\"],[\"text\",\"\\n\"],[\"text\",\"\\n  \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"citiesChooser-latitude\"],[\"flush-element\"],[\"append\",[\"unknown\",[\"currentCity\",\"latitude\"]],false],[\"close-element\"],[\"text\",\",\\n  \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"citiesChooser-longitude\"],[\"flush-element\"],[\"append\",[\"unknown\",[\"currentCity\",\"longitude\"]],false],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"      \"],[\"open-element\",\"option\",[]],[\"dynamic-attr\",\"value\",[\"unknown\",[\"city\",\"id\"]],null],[\"dynamic-attr\",\"selected\",[\"helper\",[\"eq\"],[[\"get\",[\"city\"]],[\"get\",[\"currentCity\"]]],null],null],[\"flush-element\"],[\"text\",\"\\n        \"],[\"append\",[\"unknown\",[\"city\",\"name\"]],false],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[\"city\"]},{\"statements\":[[\"text\",\"  \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"citiesChooser-label\"],[\"flush-element\"],[\"text\",\"\\n    Select city:\\n  \"],[\"close-element\"],[\"text\",\"\\n\\n  \"],[\"open-element\",\"select\",[]],[\"static-attr\",\"class\",\"citiesChooser-select\"],[\"dynamic-attr\",\"onchange\",[\"helper\",[\"action\"],[[\"get\",[null]],[\"get\",[\"changeCityAction\"]]],[[\"value\"],[\"target.value\"]]],null],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"each\"],[[\"get\",[\"cities\"]]],null,0],[\"text\",\"  \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"  \"],[\"open-element\",\"strong\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"currentCity\",\"name\"]],false],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "intercom-test-assignment/pods/components/cities-chooser/template.hbs" } });
});
define('intercom-test-assignment/pods/components/hero-header/component', ['exports', 'ember-component', 'ember-service/inject'], function (exports, _emberComponent, _emberServiceInject) {
  exports['default'] = _emberComponent['default'].extend({

    // ----- Arguments -----
    currentCity: undefined,
    userCityJunctions: undefined,
    distanceLimitKm: undefined,

    // ----- Services -----
    fastboot: (0, _emberServiceInject['default'])(),

    // ----- Overridden properties -----
    classNames: ['heroHeader']

  });
});
// ----- Static properties -----

// ----- Computed properties -----

// ----- Overridden Methods -----

// ----- Custom Methods -----

// ----- Events and observers -----

// ----- Tasks -----

// ----- Actions -----
// actions: {
// }
define("intercom-test-assignment/pods/components/hero-header/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "JjGWXJyY", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"heroHeader-content\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"h2\",[]],[\"static-attr\",\"class\",\"heroHeader-title _left\"],[\"flush-element\"],[\"text\",\"\\n    Test\\n    \"],[\"open-element\",\"br\",[]],[\"static-attr\",\"class\",\"heroHeader-title-lineBreak\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n    assignment\\n    \"],[\"open-element\",\"br\",[]],[\"static-attr\",\"class\",\"heroHeader-title-lineBreak\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n    for\\n    \"],[\"open-element\",\"br\",[]],[\"static-attr\",\"class\",\"heroHeader-title-lineBreak\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n    Intercom\\n  \"],[\"close-element\"],[\"text\",\"\\n\\n  \"],[\"open-element\",\"h2\",[]],[\"static-attr\",\"class\",\"heroHeader-title _right\"],[\"flush-element\"],[\"text\",\"\\n    built with ❤\"],[\"open-element\",\"br\",[]],[\"static-attr\",\"class\",\"heroHeader-title-lineBreak\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n    by Andrey\"],[\"open-element\",\"br\",[]],[\"static-attr\",\"class\",\"heroHeader-title-lineBreak\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n    Mikhaylov\"],[\"open-element\",\"br\",[]],[\"static-attr\",\"class\",\"heroHeader-title-lineBreak\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n    (\"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"http://lolma.us/en/\"],[\"flush-element\"],[\"text\",\"lolmaus\"],[\"close-element\"],[\"text\",\")\\n  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"block\",[\"unless\"],[[\"get\",[\"fastboot\",\"isFastBoot\"]]],null,4]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"          \"],[\"open-element\",\"h3\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"u\",\"name\"]],false],[\"close-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"div\",[]],[\"flush-element\"],[\"text\",\"Distance to \"],[\"append\",[\"unknown\",[\"currentCity\",\"name\"]],false],[\"text\",\": \"],[\"append\",[\"helper\",[\"round\"],[[\"get\",[\"u\",\"distanceKm\"]],1],null],false],[\"text\",\" km\"],[\"close-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"div\",[]],[\"flush-element\"],[\"text\",\"Is in range: \"],[\"append\",[\"helper\",[\"if\"],[[\"helper\",[\"lte\"],[[\"get\",[\"u\",\"distanceKm\"]],[\"get\",[\"distanceLimitKm\"]]],null],\"yes\",\"no\"],null],false],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"block\",[\"popup-layer\"],null,[[\"popupOpen\"],[[\"helper\",[\"readonly\"],[[\"get\",[\"u\",\"isOpen\"]]],null]]],0]],\"locals\":[]},{\"statements\":[[\"block\",[\"marker-layer\"],null,[[\"lat\",\"lng\",\"opacity\",\"alt\",\"title\"],[[\"get\",[\"u\",\"latitude\"]],[\"get\",[\"u\",\"longitude\"]],[\"helper\",[\"if\"],[[\"helper\",[\"lte\"],[[\"get\",[\"u\",\"distanceKm\"]],[\"get\",[\"distanceLimitKm\"]]],null],1,0.3],null],[\"helper\",[\"concat\"],[[\"get\",[\"u\",\"name\"]],\" (\",[\"helper\",[\"round\"],[[\"get\",[\"u\",\"distanceKm\"]],1],null],\" km to \",[\"get\",[\"currentCity\",\"name\"]],\")\"],null],[\"helper\",[\"concat\"],[[\"get\",[\"u\",\"name\"]],\" (\",[\"helper\",[\"round\"],[[\"get\",[\"u\",\"distanceKm\"]],1],null],\" km to \",[\"get\",[\"currentCity\",\"name\"]],\")\"],null]]],1]],\"locals\":[\"u\"]},{\"statements\":[[\"text\",\"    \"],[\"append\",[\"helper\",[\"tile-layer\"],null,[[\"url\"],[\"http://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png\"]]],false],[\"text\",\"\\n\\n    \"],[\"append\",[\"helper\",[\"circle-layer\"],null,[[\"location\",\"radius\",\"clickable\"],[[\"helper\",[\"array\"],[[\"get\",[\"currentCity\",\"latitude\"]],[\"get\",[\"currentCity\",\"longitude\"]]],null],[\"helper\",[\"multiply\"],[[\"get\",[\"distanceLimitKm\"]],1000],null],false]]],false],[\"text\",\"\\n\\n\"],[\"block\",[\"each\"],[[\"get\",[\"userCityJunctions\"]]],null,2]],\"locals\":[]},{\"statements\":[[\"block\",[\"leaflet-map\"],null,[[\"class\",\"lat\",\"lng\",\"zoom\",\"scrollWheelZoom\"],[\"heroHeader-map\",53.186288,-7.970581,6,false]],3]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "intercom-test-assignment/pods/components/hero-header/template.hbs" } });
});
define('intercom-test-assignment/pods/components/user-list-item/component', ['exports', 'ember-component', 'ember-awesome-macros/lte'], function (exports, _emberComponent, _emberAwesomeMacrosLte) {
  exports['default'] = _emberComponent['default'].extend({

    // ----- Arguments -----
    user: undefined,
    distanceLimitKm: undefined,
    labels: false,

    // ----- Services -----

    // ----- Overridden properties -----
    classNameBindings: [':userListItem', 'isInRange:-inRange', 'labels:-labels'],

    // ----- Static properties -----
    isInRange: (0, _emberAwesomeMacrosLte['default'])('user.distanceKm', 'distanceLimitKm')

  });
});
// ----- Computed properties -----

// ----- Overridden Methods -----

// ----- Custom Methods -----

// ----- Events and observers -----

// ----- Tasks -----

// ----- Actions -----
// actions: {
// }
define("intercom-test-assignment/pods/components/user-list-item/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "U3h9r1Uj", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"userListItem-element _name\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"userListItem-element-value\"],[\"flush-element\"],[\"append\",[\"unknown\",[\"user\",\"name\"]],false],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"userListItem-element _id\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"userListItem-element-label\"],[\"flush-element\"],[\"text\",\"ID: \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"userListItem-element-value\"],[\"flush-element\"],[\"append\",[\"unknown\",[\"user\",\"user\",\"id\"]],false],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"userListItem-element _latitude\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"userListItem-element-label\"],[\"flush-element\"],[\"text\",\"Latitude: \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"userListItem-element-value\"],[\"flush-element\"],[\"append\",[\"unknown\",[\"user\",\"latitude\"]],false],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"userListItem-element _longitude\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"userListItem-element-label\"],[\"flush-element\"],[\"text\",\"Longitude: \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"userListItem-element-value\"],[\"flush-element\"],[\"append\",[\"unknown\",[\"user\",\"longitude\"]],false],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"userListItem-element _distance\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"get\",[\"labels\"]]],null,1,0],[\"close-element\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"    \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"userListItem-element-label\"],[\"flush-element\"],[\"text\",\"Distance: \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"userListItem-element-value\"],[\"flush-element\"],[\"append\",[\"helper\",[\"round\"],[[\"get\",[\"user\",\"distanceKm\"]],2],null],false],[\"text\",\" km\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"    \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"userListItem-element-value\"],[\"flush-element\"],[\"append\",[\"unknown\",[\"user\",\"distanceKm\"]],false],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "intercom-test-assignment/pods/components/user-list-item/template.hbs" } });
});
define('intercom-test-assignment/pods/components/user-list/component', ['exports', 'ember-component', 'ember-computed-decorators', 'ember-metal/get'], function (exports, _emberComponent, _emberComputedDecorators, _emberMetalGet) {
  function _createDecoratedObject(descriptors) { var target = {}; for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = true; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } } if (descriptor.initializer) { descriptor.value = descriptor.initializer.call(target); } Object.defineProperty(target, key, descriptor); } return target; }

  exports['default'] = _emberComponent['default'].extend(_createDecoratedObject([{
    key: 'users',

    // ----- Arguments -----
    initializer: function initializer() {
      return undefined;
    }
  }, {
    key: 'cityName',
    initializer: function initializer() {
      return undefined;
    }
  }, {
    key: 'distanceLimitKm',
    initializer: function initializer() {
      return undefined;
    }
  }, {
    key: 'classNames',

    // ----- Services -----

    // ----- Overridden properties -----
    initializer: function initializer() {
      return ['userList'];
    }
  }, {
    key: 'usersInRange',
    decorators: [(0, _emberComputedDecorators['default'])('users.@each.distanceKm', 'distanceLimitKm')],
    value: function usersInRange(users, distanceLimitKm) {
      return users.filter(function (user) {
        return (0, _emberMetalGet['default'])(user, 'distanceKm') <= distanceLimitKm;
      });
    }
  }]));
});

// ----- Static properties -----

// ----- Computed properties -----

// ----- Overridden Methods -----

// ----- Custom Methods -----

// ----- Events and observers -----

// ----- Tasks -----

// ----- Actions -----
// actions: {
// }
define("intercom-test-assignment/pods/components/user-list/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "AZ/Hm3uU", "block": "{\"statements\":[[\"open-element\",\"h2\",[]],[\"static-attr\",\"class\",\"userList-title\"],[\"flush-element\"],[\"text\",\"\\n  Lucky customers (\"],[\"append\",[\"unknown\",[\"usersInRange\",\"length\"]],false],[\"text\",\" / \"],[\"append\",[\"unknown\",[\"users\",\"length\"]],false],[\"text\",\"):\\n  \"],[\"append\",[\"helper\",[\"if\"],[[\"helper\",[\"eq\"],[[\"get\",[\"users\",\"length\"]],[\"get\",[\"usersInRange\",\"length\"]]],null],\"Rock'n'roll! 🍻\"],null],false],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"append\",[\"helper\",[\"user-list-item\"],null,[[\"class\",\"labels\",\"user\"],[\"userList-tableHeader\",true,[\"helper\",[\"hash\"],null,[[\"user\",\"name\",\"latitude\",\"longitude\",\"distanceKm\"],[[\"helper\",[\"hash\"],null,[[\"id\"],[\"ID\"]]],\"Name\",\"Latitude\",\"Longitude\",\"Distance\"]]]]]],false],[\"text\",\"\\n\\n\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"userList-items\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"each\"],[[\"get\",[\"users\"]]],null,0],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"dynamic-attr\",\"class\",[\"concat\",[\"userList-item _empty \",[\"helper\",[\"if\"],[[\"get\",[\"usersInRange\",\"length\"]],\"\",\"-inRange\"],null]]]],[\"flush-element\"],[\"text\",\"\\n    No customers are this close to \"],[\"append\",[\"unknown\",[\"cityName\"]],false],[\"text\",\". Don't drink alone!\\n  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"    \"],[\"append\",[\"helper\",[\"user-list-item\"],null,[[\"class\",\"user\",\"distanceLimitKm\"],[\"userList-item\",[\"get\",[\"user\"]],[\"get\",[\"distanceLimitKm\"]]]]],false],[\"text\",\"\\n\"]],\"locals\":[\"user\"]}],\"hasPartials\":false}", "meta": { "moduleName": "intercom-test-assignment/pods/components/user-list/template.hbs" } });
});
define('intercom-test-assignment/pods/index/route', ['exports', 'ember-route'], function (exports, _emberRoute) {
  exports['default'] = _emberRoute['default'].extend({

    // ----- Services -----

    // ----- Overridden properties -----

    // ----- Static properties -----

    // ----- Computed properties -----

    // ----- Overridden Methods -----
    redirect: function redirect() {
      this.transitionTo('city', 'dublin');
    }

  });
});
// ----- Custom Methods -----

// ----- Events and observers -----

// ----- Tasks -----

// ----- Actions -----
// actions: {
// }
define('intercom-test-assignment/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  exports['default'] = _emberResolver['default'];
});
define('intercom-test-assignment/router', ['exports', 'ember', 'intercom-test-assignment/config/environment', 'ember-cli-nprogress'], function (exports, _ember, _intercomTestAssignmentConfigEnvironment, _emberCliNprogress) {

  var Router = _ember['default'].Router.extend({

    // ----- Overridden properties -----
    location: _intercomTestAssignmentConfigEnvironment['default'].locationType,
    rootURL: _intercomTestAssignmentConfigEnvironment['default'].rootURL,

    // ----- Custom properties -----
    initialLoadingComplete: false,

    // ----- Overridden methods -----
    willTransition: function willTransition() {
      if (this.get('initialLoadingComplete')) _emberCliNprogress['default'].start();

      this._super.apply(this, arguments);
    },

    didTransition: function didTransition() {
      this._super.apply(this, arguments);

      if (this.get('initialLoadingComplete')) _emberCliNprogress['default'].done();else this.set('initialLoadingComplete', true);
    }
  });

  Router.map(function () {
    this.route('city', { path: ':cityId' });
  });

  exports['default'] = Router;
});
define('intercom-test-assignment/serializers/application', ['exports', 'ember-data/serializers/json-api'], function (exports, _emberDataSerializersJsonApi) {
  exports['default'] = _emberDataSerializersJsonApi['default'].extend({});
});
define('intercom-test-assignment/serializers/user', ['exports', 'ember-data/serializers/json'], function (exports, _emberDataSerializersJson) {
  exports['default'] = _emberDataSerializersJson['default'].extend({

    // ----- Overridden properties -----
    primaryKey: 'user_id',

    // ----- Overridden methods -----
    normalizeQueryResponse: function normalizeQueryResponse(store, primaryModelClass, payload, id, requestType) {
      var users = payload.split('\n').filter(function (str) {
        return str.trim().length;
      }) // Remove blank lines
      .map(JSON.parse);

      return this._super(store, primaryModelClass, users, id, requestType);
    }

  });
});
define('intercom-test-assignment/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _emberAjaxServicesAjax) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberAjaxServicesAjax['default'];
    }
  });
});
define('intercom-test-assignment/services/fastboot', ['exports', 'ember'], function (exports, _ember) {
  var deprecate = _ember['default'].deprecate;
  var computed = _ember['default'].computed;
  var get = _ember['default'].get;
  var deprecatingAlias = computed.deprecatingAlias;
  var readOnly = computed.readOnly;

  var RequestObject = _ember['default'].Object.extend({
    init: function init() {
      this._super.apply(this, arguments);

      var request = this.request;
      delete this.request;

      this.cookies = request.cookies;
      this.headers = request.headers;
      this.queryParams = request.queryParams;
      this.path = request.path;
      this.protocol = request.protocol;
      this._host = function () {
        return request.host();
      };
    },

    host: computed(function () {
      return this._host();
    })
  });

  var Shoebox = _ember['default'].Object.extend({
    put: function put(key, value) {
      _ember['default'].assert('shoebox.put is only invoked from the FastBoot rendered application', this.get('fastboot.isFastBoot'));
      _ember['default'].assert('the provided key is a string', typeof key === 'string');

      var fastbootInfo = this.get('fastboot._fastbootInfo');
      if (!fastbootInfo.shoebox) {
        fastbootInfo.shoebox = {};
      }

      fastbootInfo.shoebox[key] = value;
    },

    retrieve: function retrieve(key) {
      if (this.get('fastboot.isFastBoot')) {
        var shoebox = this.get('fastboot._fastbootInfo.shoebox');
        if (!shoebox) {
          return;
        }

        return shoebox[key];
      }

      var shoeboxItem = this.get(key);
      if (shoeboxItem) {
        return shoeboxItem;
      }

      var el = document.querySelector('#shoebox-' + key);
      if (!el) {
        return;
      }
      var valueString = el.textContent;
      if (!valueString) {
        return;
      }

      shoeboxItem = JSON.parse(valueString);
      this.set(key, shoeboxItem);

      return shoeboxItem;
    }
  });

  exports['default'] = _ember['default'].Service.extend({
    cookies: deprecatingAlias('request.cookies', { id: 'fastboot.cookies-to-request', until: '0.9.9' }),
    headers: deprecatingAlias('request.headers', { id: 'fastboot.headers-to-request', until: '0.9.9' }),

    init: function init() {
      this._super.apply(this, arguments);

      var shoebox = Shoebox.create({ fastboot: this });
      this.set('shoebox', shoebox);
    },

    host: computed(function () {
      deprecate('Usage of fastboot service\'s `host` property is deprecated.  Please use `request.host` instead.', false, { id: 'fastboot.host-to-request', until: '0.9.9' });

      return this._fastbootInfo.request.host();
    }),

    response: readOnly('_fastbootInfo.response'),
    metadata: readOnly('_fastbootInfo.metadata'),

    request: computed(function () {
      if (!get(this, 'isFastBoot')) return null;
      return RequestObject.create({ request: get(this, '_fastbootInfo.request') });
    }),

    isFastBoot: computed(function () {
      return typeof FastBoot !== 'undefined';
    }),

    deferRendering: function deferRendering(promise) {
      _ember['default'].assert('deferRendering requires a promise or thennable object', typeof promise.then === 'function');
      this._fastbootInfo.deferRendering(promise);
    }
  });
});
/* global FastBoot */
define('intercom-test-assignment/tests/mirage/mirage/config.lint-test', ['exports'], function (exports) {
  describe('ESLint - mirage/config.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('intercom-test-assignment/tests/mirage/mirage/fixtures/cities.lint-test', ['exports'], function (exports) {
  describe('ESLint - mirage/fixtures/cities.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('intercom-test-assignment/tests/mirage/mirage/fixtures/users.lint-test', ['exports'], function (exports) {
  describe('ESLint - mirage/fixtures/users.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('intercom-test-assignment/tests/mirage/mirage/scenarios/default.lint-test', ['exports'], function (exports) {
  describe('ESLint - mirage/scenarios/default.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('intercom-test-assignment/tests/mirage/mirage/serializers/application.lint-test', ['exports'], function (exports) {
  describe('ESLint - mirage/serializers/application.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('intercom-test-assignment/utils/titleize', ['exports', 'ember-composable-helpers/utils/titleize'], function (exports, _emberComposableHelpersUtilsTitleize) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersUtilsTitleize['default'];
    }
  });
});
define('intercom-test-assignment/utils/wrap-promise', ['exports', 'rsvp'], function (exports, _rsvp) {
  exports['default'] = wrapPromise;

  function wrapPromise(promise) {
    return new _rsvp['default'].Promise(function (resolve, reject) {
      return promise.then(resolve, reject);
    });
  }
});
/* jshint ignore:start */



/* jshint ignore:end */

/* jshint ignore:start */

define('intercom-test-assignment/config/environment', ['ember'], function(Ember) {
  var prefix = 'intercom-test-assignment';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

/* jshint ignore:end */

/* jshint ignore:start */

if (!runningTests) {
  require("intercom-test-assignment/app")["default"].create({"name":"intercom-test-assignment","version":"0.0.0+b284239e"});
}

define('~fastboot/app-factory', ['intercom-test-assignment/app', 'intercom-test-assignment/config/environment'], function(App, config) {
  App = App['default'];
  config = config['default'];

  return {
    'default': function() {
      return App.create(config.APP);
    }
  };
});


/* jshint ignore:end */
//# sourceMappingURL=intercom-test-assignment.map
