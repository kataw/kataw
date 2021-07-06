# Kataw parser test case

## Input

`````js
const kochabCooieGameOnOboleUnweave = // ???
      annularCooeedSplicesWalksWayWay;

const bifornCringerMoshedPerplexSawder = // !!!
  glimseGlyphsHazardNoopsTieTie +
  averredBathersBoxroomBuggyNurl -
  anodyneCondosMalateOverateRetinol;

`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 5
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "kochabCooieGameOnOboleUnweave",
                            "rawText": "kochabCooieGameOnOboleUnweave",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 5,
                            "end": 35
                        },
                        "type": null,
                        "initializer": {
                            "kind": 134299649,
                            "text": "annularCooeedSplicesWalksWayWay",
                            "rawText": "annularCooeedSplicesWalksWayWay",
                            "flags": 97,
                            "transformFlags": 0,
                            "start": 37,
                            "end": 82
                        },
                        "flags": 16,
                        "transformFlags": 128,
                        "start": 5,
                        "end": 82
                    }
                ],
                "flags": 16777232,
                "transformFlags": 0,
                "start": 5,
                "end": 82
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 0,
            "end": 83
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 81,
                "transformFlags": 0,
                "start": 83,
                "end": 90
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "bifornCringerMoshedPerplexSawder",
                            "rawText": "bifornCringerMoshedPerplexSawder",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 90,
                            "end": 123
                        },
                        "type": null,
                        "initializer": {
                            "kind": 198,
                            "left": {
                                "kind": 134299649,
                                "text": "glimseGlyphsHazardNoopsTieTie",
                                "rawText": "glimseGlyphsHazardNoopsTieTie",
                                "flags": 97,
                                "transformFlags": 0,
                                "start": 125,
                                "end": 164
                            },
                            "operatorToken": {
                                "kind": 99634,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 164,
                                "end": 166
                            },
                            "right": {
                                "kind": 198,
                                "left": {
                                    "kind": 134299649,
                                    "text": "averredBathersBoxroomBuggyNurl",
                                    "rawText": "averredBathersBoxroomBuggyNurl",
                                    "flags": 97,
                                    "transformFlags": 0,
                                    "start": 166,
                                    "end": 199
                                },
                                "operatorToken": {
                                    "kind": 134318643,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 199,
                                    "end": 201
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "anodyneCondosMalateOverateRetinol",
                                    "rawText": "anodyneCondosMalateOverateRetinol",
                                    "flags": 97,
                                    "transformFlags": 0,
                                    "start": 201,
                                    "end": 237
                                },
                                "flags": 97,
                                "transformFlags": 0,
                                "start": 199,
                                "end": 237
                            },
                            "flags": 97,
                            "transformFlags": 0,
                            "start": 125,
                            "end": 237
                        },
                        "flags": 16,
                        "transformFlags": 128,
                        "start": 90,
                        "end": 237
                    }
                ],
                "flags": 16777232,
                "transformFlags": 0,
                "start": 90,
                "end": 237
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 83,
            "end": 238
        }
    ],
    "isModule": false,
    "source": "const kochabCooieGameOnOboleUnweave = // ???\n      annularCooeedSplicesWalksWayWay;\n\nconst bifornCringerMoshedPerplexSawder = // !!!\n  glimseGlyphsHazardNoopsTieTie +\n  averredBathersBoxroomBuggyNurl -\n  anodyneCondosMalateOverateRetinol;\n",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 239
}
```

### Printed

```javascript

const kochabCooieGameOnOboleUnweave = annularCooeedSplicesWalksWayWay;
const bifornCringerMoshedPerplexSawder =

      glimseGlyphsHazardNoopsTieTie +
      averredBathersBoxroomBuggyNurl - anodyneCondosMalateOverateRetinol
    ;

```

### Diagnostics

```javascript
✔ No errors
```

