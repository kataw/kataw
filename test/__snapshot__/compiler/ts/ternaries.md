# Kataw parser test case

## Input

`````js
foo = (callNode.parent?.type === AST_NODE_TYPES.ChainExpression
  ? callNode.parent.parent
  : callNode.parent
).TSESTree!.BinaryExpression;

foo = (callNode.parent?.type === AST_NODE_TYPES.ChainExpression
  ? callNode.parent.parent
  : callNode.parent
).TSESTree!.BinaryExpression;

bifornCringerMoshedPerplexSawder = (glimseGlyphsHazardNoopsTieTie === 0 &&
kochabCooieGameOnOboleUnweave === Math.PI
  ? averredBathersBoxroomBuggyNurl
  : anodyneCondosMalateOverateRetinol
).annularCooeedSplicesWalksWayWay
  .annularCooeedSplicesWalksWayWay(annularCooeedSplicesWalksWayWay)!
  .annularCooeedSplicesWalksWayWay();

foo = (callNode.parent?.type === AST_NODE_TYPES.ChainExpression
  ? callNode.parent.parent
  : callNode.parent
).TSESTree!.BinaryExpression!;

foo = (callNode.parent?.type === AST_NODE_TYPES.ChainExpression
  ? callNode.parent.parent
  : callNode.parent
).TSESTree!.BinaryExpression!;

bifornCringerMoshedPerplexSawder = (glimseGlyphsHazardNoopsTieTie === 0 &&
kochabCooieGameOnOboleUnweave === Math.PI
  ? averredBathersBoxroomBuggyNurl
  : anodyneCondosMalateOverateRetinol
).annularCooeedSplicesWalksWayWay
  .annularCooeedSplicesWalksWayWay(annularCooeedSplicesWalksWayWay)!
  .annularCooeedSplicesWalksWayWay()!;

bifornCringerMoshedPerplexSawder =
  askTrovenaBeenaDependsRowans +
  (glimseGlyphsHazardNoopsTieTie === 0
    ? averredBathersBoxroomBuggyNurl
    : anodyneCondosMalateOverateRetinol
  ).Foo!.foo;

foo = (coooooooooooooooooooooooooooooooooooooooooooooooooooond
  ? baaaaaaaaaaaaaaaaaaaaar
  : baaaaaaaaaaaaaaaaaaaaaz)!;

foo = (coooooooooooooooooooooooooooooooooooooooooooooooooooond
  ? baaaaaaaaaaaaaaaaaaaaar
  : baaaaaaaaaaaaaaaaaaaaaz)!!!!!;
@{xa9}@ 2021 GitHub, Inc.
`````

## Output

### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "foo = (callNode.parent?.type === AST_NODE_TYPES.ChainExpression\n  ? callNode.parent.parent\n  : callNode.parent\n).TSESTree!.BinaryExpression;\n\nfoo = (callNode.parent?.type === AST_NODE_TYPES.ChainExpression\n  ? callNode.parent.parent\n  : callNode.parent\n).TSESTree!.BinaryExpression;\n\nbifornCringerMoshedPerplexSawder = (glimseGlyphsHazardNoopsTieTie === 0 &&\nkochabCooieGameOnOboleUnweave === Math.PI\n  ? averredBathersBoxroomBuggyNurl\n  : anodyneCondosMalateOverateRetinol\n).annularCooeedSplicesWalksWayWay\n  .annularCooeedSplicesWalksWayWay(annularCooeedSplicesWalksWayWay)!\n  .annularCooeedSplicesWalksWayWay();\n\nfoo = (callNode.parent?.type === AST_NODE_TYPES.ChainExpression\n  ? callNode.parent.parent\n  : callNode.parent\n).TSESTree!.BinaryExpression!;\n\nfoo = (callNode.parent?.type === AST_NODE_TYPES.ChainExpression\n  ? callNode.parent.parent\n  : callNode.parent\n).TSESTree!.BinaryExpression!;\n\nbifornCringerMoshedPerplexSawder = (glimseGlyphsHazardNoopsTieTie === 0 &&\nkochabCooieGameOnOboleUnweave === Math.PI\n  ? averredBathersBoxroomBuggyNurl\n  : anodyneCondosMalateOverateRetinol\n).annularCooeedSplicesWalksWayWay\n  .annularCooeedSplicesWalksWayWay(annularCooeedSplicesWalksWayWay)!\n  .annularCooeedSplicesWalksWayWay()!;\n\nbifornCringerMoshedPerplexSawder =\n  askTrovenaBeenaDependsRowans +\n  (glimseGlyphsHazardNoopsTieTie === 0\n    ? averredBathersBoxroomBuggyNurl\n    : anodyneCondosMalateOverateRetinol\n  ).Foo!.foo;\n\nfoo = (coooooooooooooooooooooooooooooooooooooooooooooooooooond\n  ? baaaaaaaaaaaaaaaaaaaaar\n  : baaaaaaaaaaaaaaaaaaaaaz)!;\n\nfoo = (coooooooooooooooooooooooooooooooooooooooooooooooooooond\n  ? baaaaaaaaaaaaaaaaaaaaar\n  : baaaaaaaaaaaaaaaaaaaaaz)!!!!!;\n@{xa9}@ 2021 GitHub, Inc.",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 65550,
                "left": {
                    "kind": 196712,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 3
                },
                "operator": "=",
                "right": {
                    "kind": 67175096,
                    "member": {
                        "kind": 74398,
                        "expression": {
                            "kind": 67175096,
                            "member": {
                                "kind": 66224,
                                "expression": {
                                    "kind": 65592,
                                    "shortCircuit": {
                                        "kind": 65563,
                                        "left": {
                                            "kind": 65708,
                                            "member": {
                                                "kind": 67175096,
                                                "member": {
                                                    "kind": 196712,
                                                    "text": "callNode",
                                                    "rawText": "callNode",
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 7,
                                                    "end": 15
                                                },
                                                "expression": {
                                                    "kind": 196711,
                                                    "text": "parent",
                                                    "rawText": "parent",
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 16,
                                                    "end": 22
                                                },
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 15,
                                                "end": 22,
                                                "period": {
                                                    "kind": 255,
                                                    "pos": 15,
                                                    "end": 16
                                                }
                                            },
                                            "chain": {
                                                "kind": 65707,
                                                "chain": {
                                                    "kind": 67174583,
                                                    "chain": null,
                                                    "expression": {
                                                        "kind": 196711,
                                                        "text": "type",
                                                        "rawText": "type",
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "start": 24,
                                                        "end": 28
                                                    },
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 32,
                                                    "start": 24,
                                                    "end": 28
                                                },
                                                "flags": 0,
                                                "pos": 24,
                                                "end": 28
                                            },
                                            "flags": 0,
                                            "pos": 22,
                                            "end": 28
                                        },
                                        "operator": "===",
                                        "right": {
                                            "kind": 67175096,
                                            "member": {
                                                "kind": 196712,
                                                "text": "AST_NODE_TYPES",
                                                "rawText": "AST_NODE_TYPES",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 32,
                                                "end": 47
                                            },
                                            "expression": {
                                                "kind": 196711,
                                                "text": "ChainExpression",
                                                "rawText": "ChainExpression",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 48,
                                                "end": 63
                                            },
                                            "flags": 32768,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 47,
                                            "end": 63,
                                            "period": {
                                                "kind": 255,
                                                "pos": 47,
                                                "end": 48
                                            }
                                        },
                                        "flags": 32768,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 5,
                                        "end": 63
                                    },
                                    "consequent": {
                                        "kind": 67175096,
                                        "member": {
                                            "kind": 67175096,
                                            "member": {
                                                "kind": 196712,
                                                "text": "callNode",
                                                "rawText": "callNode",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 67,
                                                "end": 76
                                            },
                                            "expression": {
                                                "kind": 196711,
                                                "text": "parent",
                                                "rawText": "parent",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 77,
                                                "end": 83
                                            },
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 76,
                                            "end": 83,
                                            "period": {
                                                "kind": 255,
                                                "pos": 76,
                                                "end": 77
                                            }
                                        },
                                        "expression": {
                                            "kind": 196711,
                                            "text": "parent",
                                            "rawText": "parent",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 84,
                                            "end": 90
                                        },
                                        "flags": 32768,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 83,
                                        "end": 90,
                                        "period": {
                                            "kind": 255,
                                            "pos": 83,
                                            "end": 84
                                        }
                                    },
                                    "alternate": {
                                        "kind": 67175096,
                                        "member": {
                                            "kind": 196712,
                                            "text": "callNode",
                                            "rawText": "callNode",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 94,
                                            "end": 103
                                        },
                                        "expression": {
                                            "kind": 196711,
                                            "text": "parent",
                                            "rawText": "parent",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 104,
                                            "end": 110
                                        },
                                        "flags": 32768,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 103,
                                        "end": 110,
                                        "period": {
                                            "kind": 255,
                                            "pos": 103,
                                            "end": 104
                                        }
                                    },
                                    "flags": 32768,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 5,
                                    "end": 110
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 5,
                                "end": 112
                            },
                            "expression": {
                                "kind": 196711,
                                "text": "TSESTree",
                                "rawText": "TSESTree",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 113,
                                "end": 121
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 112,
                            "end": 121,
                            "period": {
                                "kind": 255,
                                "pos": 112,
                                "end": 113
                            }
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 121,
                        "end": 122
                    },
                    "expression": {
                        "kind": 196711,
                        "text": "BinaryExpression",
                        "rawText": "BinaryExpression",
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 123,
                        "end": 139
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 122,
                    "end": 139,
                    "period": {
                        "kind": 255,
                        "pos": 122,
                        "end": 123
                    }
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 139
            },
            "flags": 0,
            "intersects": false,
            "transformFlags": 0,
            "start": 0,
            "end": 140
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 65550,
                "left": {
                    "kind": 196712,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 32768,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 140,
                    "end": 145
                },
                "operator": "=",
                "right": {
                    "kind": 67175096,
                    "member": {
                        "kind": 74398,
                        "expression": {
                            "kind": 67175096,
                            "member": {
                                "kind": 66224,
                                "expression": {
                                    "kind": 65592,
                                    "shortCircuit": {
                                        "kind": 65563,
                                        "left": {
                                            "kind": 65708,
                                            "member": {
                                                "kind": 67175096,
                                                "member": {
                                                    "kind": 196712,
                                                    "text": "callNode",
                                                    "rawText": "callNode",
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 149,
                                                    "end": 157
                                                },
                                                "expression": {
                                                    "kind": 196711,
                                                    "text": "parent",
                                                    "rawText": "parent",
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 158,
                                                    "end": 164
                                                },
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 157,
                                                "end": 164,
                                                "period": {
                                                    "kind": 255,
                                                    "pos": 157,
                                                    "end": 158
                                                }
                                            },
                                            "chain": {
                                                "kind": 65707,
                                                "chain": {
                                                    "kind": 67174583,
                                                    "chain": null,
                                                    "expression": {
                                                        "kind": 196711,
                                                        "text": "type",
                                                        "rawText": "type",
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "start": 166,
                                                        "end": 170
                                                    },
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 32,
                                                    "start": 166,
                                                    "end": 170
                                                },
                                                "flags": 0,
                                                "pos": 166,
                                                "end": 170
                                            },
                                            "flags": 0,
                                            "pos": 164,
                                            "end": 170
                                        },
                                        "operator": "===",
                                        "right": {
                                            "kind": 67175096,
                                            "member": {
                                                "kind": 196712,
                                                "text": "AST_NODE_TYPES",
                                                "rawText": "AST_NODE_TYPES",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 174,
                                                "end": 189
                                            },
                                            "expression": {
                                                "kind": 196711,
                                                "text": "ChainExpression",
                                                "rawText": "ChainExpression",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 190,
                                                "end": 205
                                            },
                                            "flags": 32768,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 189,
                                            "end": 205,
                                            "period": {
                                                "kind": 255,
                                                "pos": 189,
                                                "end": 190
                                            }
                                        },
                                        "flags": 32768,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 147,
                                        "end": 205
                                    },
                                    "consequent": {
                                        "kind": 67175096,
                                        "member": {
                                            "kind": 67175096,
                                            "member": {
                                                "kind": 196712,
                                                "text": "callNode",
                                                "rawText": "callNode",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 209,
                                                "end": 218
                                            },
                                            "expression": {
                                                "kind": 196711,
                                                "text": "parent",
                                                "rawText": "parent",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 219,
                                                "end": 225
                                            },
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 218,
                                            "end": 225,
                                            "period": {
                                                "kind": 255,
                                                "pos": 218,
                                                "end": 219
                                            }
                                        },
                                        "expression": {
                                            "kind": 196711,
                                            "text": "parent",
                                            "rawText": "parent",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 226,
                                            "end": 232
                                        },
                                        "flags": 32768,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 225,
                                        "end": 232,
                                        "period": {
                                            "kind": 255,
                                            "pos": 225,
                                            "end": 226
                                        }
                                    },
                                    "alternate": {
                                        "kind": 67175096,
                                        "member": {
                                            "kind": 196712,
                                            "text": "callNode",
                                            "rawText": "callNode",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 236,
                                            "end": 245
                                        },
                                        "expression": {
                                            "kind": 196711,
                                            "text": "parent",
                                            "rawText": "parent",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 246,
                                            "end": 252
                                        },
                                        "flags": 32768,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 245,
                                        "end": 252,
                                        "period": {
                                            "kind": 255,
                                            "pos": 245,
                                            "end": 246
                                        }
                                    },
                                    "flags": 32768,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 147,
                                    "end": 252
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 147,
                                "end": 254
                            },
                            "expression": {
                                "kind": 196711,
                                "text": "TSESTree",
                                "rawText": "TSESTree",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 255,
                                "end": 263
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 254,
                            "end": 263,
                            "period": {
                                "kind": 255,
                                "pos": 254,
                                "end": 255
                            }
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 263,
                        "end": 264
                    },
                    "expression": {
                        "kind": 196711,
                        "text": "BinaryExpression",
                        "rawText": "BinaryExpression",
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 265,
                        "end": 281
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 264,
                    "end": 281,
                    "period": {
                        "kind": 255,
                        "pos": 264,
                        "end": 265
                    }
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 140,
                "end": 281
            },
            "flags": 0,
            "intersects": false,
            "transformFlags": 0,
            "start": 140,
            "end": 282
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 65550,
                "left": {
                    "kind": 196712,
                    "text": "bifornCringerMoshedPerplexSawder",
                    "rawText": "bifornCringerMoshedPerplexSawder",
                    "flags": 32768,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 282,
                    "end": 316
                },
                "operator": "=",
                "right": {
                    "kind": 1073807915,
                    "expression": {
                        "kind": 67175096,
                        "member": {
                            "kind": 74398,
                            "expression": {
                                "kind": 1073807915,
                                "expression": {
                                    "kind": 67175096,
                                    "member": {
                                        "kind": 67175096,
                                        "member": {
                                            "kind": 66224,
                                            "expression": {
                                                "kind": 65592,
                                                "shortCircuit": {
                                                    "kind": 65563,
                                                    "left": {
                                                        "kind": 65563,
                                                        "left": {
                                                            "kind": 196712,
                                                            "text": "glimseGlyphsHazardNoopsTieTie",
                                                            "rawText": "glimseGlyphsHazardNoopsTieTie",
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 0,
                                                            "start": 320,
                                                            "end": 349
                                                        },
                                                        "operator": "===",
                                                        "right": {
                                                            "kind": 4261540,
                                                            "text": 0,
                                                            "rawText": "0",
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 0,
                                                            "start": 353,
                                                            "end": 355
                                                        },
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "start": 318,
                                                        "end": 355
                                                    },
                                                    "operator": "&&",
                                                    "right": {
                                                        "kind": 65563,
                                                        "left": {
                                                            "kind": 196712,
                                                            "text": "kochabCooieGameOnOboleUnweave",
                                                            "rawText": "kochabCooieGameOnOboleUnweave",
                                                            "flags": 32768,
                                                            "intersects": false,
                                                            "transformFlags": 0,
                                                            "start": 358,
                                                            "end": 388
                                                        },
                                                        "operator": "===",
                                                        "right": {
                                                            "kind": 67175096,
                                                            "member": {
                                                                "kind": 196712,
                                                                "text": "Math",
                                                                "rawText": "Math",
                                                                "flags": 0,
                                                                "intersects": false,
                                                                "transformFlags": 0,
                                                                "start": 392,
                                                                "end": 397
                                                            },
                                                            "expression": {
                                                                "kind": 196711,
                                                                "text": "PI",
                                                                "rawText": "PI",
                                                                "flags": 0,
                                                                "intersects": false,
                                                                "transformFlags": 0,
                                                                "start": 398,
                                                                "end": 400
                                                            },
                                                            "flags": 32768,
                                                            "intersects": false,
                                                            "transformFlags": 0,
                                                            "start": 397,
                                                            "end": 400,
                                                            "period": {
                                                                "kind": 255,
                                                                "pos": 397,
                                                                "end": 398
                                                            }
                                                        },
                                                        "flags": 32768,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "start": 388,
                                                        "end": 400
                                                    },
                                                    "flags": 32768,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 318,
                                                    "end": 400
                                                },
                                                "consequent": {
                                                    "kind": 196712,
                                                    "text": "averredBathersBoxroomBuggyNurl",
                                                    "rawText": "averredBathersBoxroomBuggyNurl",
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 404,
                                                    "end": 435
                                                },
                                                "alternate": {
                                                    "kind": 196712,
                                                    "text": "anodyneCondosMalateOverateRetinol",
                                                    "rawText": "anodyneCondosMalateOverateRetinol",
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 439,
                                                    "end": 473
                                                },
                                                "flags": 32768,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 318,
                                                "end": 473
                                            },
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 318,
                                            "end": 475
                                        },
                                        "expression": {
                                            "kind": 196711,
                                            "text": "annularCooeedSplicesWalksWayWay",
                                            "rawText": "annularCooeedSplicesWalksWayWay",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 476,
                                            "end": 507
                                        },
                                        "flags": 32768,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 475,
                                        "end": 507,
                                        "period": {
                                            "kind": 255,
                                            "pos": 475,
                                            "end": 476
                                        }
                                    },
                                    "expression": {
                                        "kind": 196711,
                                        "text": "annularCooeedSplicesWalksWayWay",
                                        "rawText": "annularCooeedSplicesWalksWayWay",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 511,
                                        "end": 542
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 507,
                                    "end": 542,
                                    "period": {
                                        "kind": 255,
                                        "pos": 507,
                                        "end": 511
                                    }
                                },
                                "typeArguments": null,
                                "argumentList": {
                                    "kind": 3,
                                    "elements": [
                                        {
                                            "kind": 196712,
                                            "text": "annularCooeedSplicesWalksWayWay",
                                            "rawText": "annularCooeedSplicesWalksWayWay",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 543,
                                            "end": 574
                                        }
                                    ],
                                    "trailingComma": false,
                                    "transformFlags": 0,
                                    "flags": 0,
                                    "intersects": false,
                                    "start": 574,
                                    "end": 575
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 542,
                                "end": 575
                            },
                            "flags": 32768,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 575,
                            "end": 576
                        },
                        "expression": {
                            "kind": 196711,
                            "text": "annularCooeedSplicesWalksWayWay",
                            "rawText": "annularCooeedSplicesWalksWayWay",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 580,
                            "end": 611
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 576,
                        "end": 611,
                        "period": {
                            "kind": 255,
                            "pos": 576,
                            "end": 580
                        }
                    },
                    "typeArguments": null,
                    "argumentList": {
                        "kind": 3,
                        "elements": [],
                        "trailingComma": false,
                        "transformFlags": 0,
                        "flags": 0,
                        "intersects": false,
                        "start": 613,
                        "end": 613
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 611,
                    "end": 613
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 282,
                "end": 613
            },
            "flags": 0,
            "intersects": false,
            "transformFlags": 0,
            "start": 282,
            "end": 614
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 65550,
                "left": {
                    "kind": 196712,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 32768,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 614,
                    "end": 619
                },
                "operator": "=",
                "right": {
                    "kind": 74398,
                    "expression": {
                        "kind": 67175096,
                        "member": {
                            "kind": 74398,
                            "expression": {
                                "kind": 67175096,
                                "member": {
                                    "kind": 66224,
                                    "expression": {
                                        "kind": 65592,
                                        "shortCircuit": {
                                            "kind": 65563,
                                            "left": {
                                                "kind": 65708,
                                                "member": {
                                                    "kind": 67175096,
                                                    "member": {
                                                        "kind": 196712,
                                                        "text": "callNode",
                                                        "rawText": "callNode",
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "start": 623,
                                                        "end": 631
                                                    },
                                                    "expression": {
                                                        "kind": 196711,
                                                        "text": "parent",
                                                        "rawText": "parent",
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "start": 632,
                                                        "end": 638
                                                    },
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 631,
                                                    "end": 638,
                                                    "period": {
                                                        "kind": 255,
                                                        "pos": 631,
                                                        "end": 632
                                                    }
                                                },
                                                "chain": {
                                                    "kind": 65707,
                                                    "chain": {
                                                        "kind": 67174583,
                                                        "chain": null,
                                                        "expression": {
                                                            "kind": 196711,
                                                            "text": "type",
                                                            "rawText": "type",
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 0,
                                                            "start": 640,
                                                            "end": 644
                                                        },
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 32,
                                                        "start": 640,
                                                        "end": 644
                                                    },
                                                    "flags": 0,
                                                    "pos": 640,
                                                    "end": 644
                                                },
                                                "flags": 0,
                                                "pos": 638,
                                                "end": 644
                                            },
                                            "operator": "===",
                                            "right": {
                                                "kind": 67175096,
                                                "member": {
                                                    "kind": 196712,
                                                    "text": "AST_NODE_TYPES",
                                                    "rawText": "AST_NODE_TYPES",
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 648,
                                                    "end": 663
                                                },
                                                "expression": {
                                                    "kind": 196711,
                                                    "text": "ChainExpression",
                                                    "rawText": "ChainExpression",
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 664,
                                                    "end": 679
                                                },
                                                "flags": 32768,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 663,
                                                "end": 679,
                                                "period": {
                                                    "kind": 255,
                                                    "pos": 663,
                                                    "end": 664
                                                }
                                            },
                                            "flags": 32768,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 621,
                                            "end": 679
                                        },
                                        "consequent": {
                                            "kind": 67175096,
                                            "member": {
                                                "kind": 67175096,
                                                "member": {
                                                    "kind": 196712,
                                                    "text": "callNode",
                                                    "rawText": "callNode",
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 683,
                                                    "end": 692
                                                },
                                                "expression": {
                                                    "kind": 196711,
                                                    "text": "parent",
                                                    "rawText": "parent",
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 693,
                                                    "end": 699
                                                },
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 692,
                                                "end": 699,
                                                "period": {
                                                    "kind": 255,
                                                    "pos": 692,
                                                    "end": 693
                                                }
                                            },
                                            "expression": {
                                                "kind": 196711,
                                                "text": "parent",
                                                "rawText": "parent",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 700,
                                                "end": 706
                                            },
                                            "flags": 32768,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 699,
                                            "end": 706,
                                            "period": {
                                                "kind": 255,
                                                "pos": 699,
                                                "end": 700
                                            }
                                        },
                                        "alternate": {
                                            "kind": 67175096,
                                            "member": {
                                                "kind": 196712,
                                                "text": "callNode",
                                                "rawText": "callNode",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 710,
                                                "end": 719
                                            },
                                            "expression": {
                                                "kind": 196711,
                                                "text": "parent",
                                                "rawText": "parent",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 720,
                                                "end": 726
                                            },
                                            "flags": 32768,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 719,
                                            "end": 726,
                                            "period": {
                                                "kind": 255,
                                                "pos": 719,
                                                "end": 720
                                            }
                                        },
                                        "flags": 32768,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 621,
                                        "end": 726
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 621,
                                    "end": 728
                                },
                                "expression": {
                                    "kind": 196711,
                                    "text": "TSESTree",
                                    "rawText": "TSESTree",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 729,
                                    "end": 737
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 728,
                                "end": 737,
                                "period": {
                                    "kind": 255,
                                    "pos": 728,
                                    "end": 729
                                }
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 737,
                            "end": 738
                        },
                        "expression": {
                            "kind": 196711,
                            "text": "BinaryExpression",
                            "rawText": "BinaryExpression",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 739,
                            "end": 755
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 738,
                        "end": 755,
                        "period": {
                            "kind": 255,
                            "pos": 738,
                            "end": 739
                        }
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 755,
                    "end": 756
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 614,
                "end": 756
            },
            "flags": 0,
            "intersects": false,
            "transformFlags": 0,
            "start": 614,
            "end": 757
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 65550,
                "left": {
                    "kind": 196712,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 32768,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 757,
                    "end": 762
                },
                "operator": "=",
                "right": {
                    "kind": 74398,
                    "expression": {
                        "kind": 67175096,
                        "member": {
                            "kind": 74398,
                            "expression": {
                                "kind": 67175096,
                                "member": {
                                    "kind": 66224,
                                    "expression": {
                                        "kind": 65592,
                                        "shortCircuit": {
                                            "kind": 65563,
                                            "left": {
                                                "kind": 65708,
                                                "member": {
                                                    "kind": 67175096,
                                                    "member": {
                                                        "kind": 196712,
                                                        "text": "callNode",
                                                        "rawText": "callNode",
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "start": 766,
                                                        "end": 774
                                                    },
                                                    "expression": {
                                                        "kind": 196711,
                                                        "text": "parent",
                                                        "rawText": "parent",
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "start": 775,
                                                        "end": 781
                                                    },
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 774,
                                                    "end": 781,
                                                    "period": {
                                                        "kind": 255,
                                                        "pos": 774,
                                                        "end": 775
                                                    }
                                                },
                                                "chain": {
                                                    "kind": 65707,
                                                    "chain": {
                                                        "kind": 67174583,
                                                        "chain": null,
                                                        "expression": {
                                                            "kind": 196711,
                                                            "text": "type",
                                                            "rawText": "type",
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 0,
                                                            "start": 783,
                                                            "end": 787
                                                        },
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 32,
                                                        "start": 783,
                                                        "end": 787
                                                    },
                                                    "flags": 0,
                                                    "pos": 783,
                                                    "end": 787
                                                },
                                                "flags": 0,
                                                "pos": 781,
                                                "end": 787
                                            },
                                            "operator": "===",
                                            "right": {
                                                "kind": 67175096,
                                                "member": {
                                                    "kind": 196712,
                                                    "text": "AST_NODE_TYPES",
                                                    "rawText": "AST_NODE_TYPES",
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 791,
                                                    "end": 806
                                                },
                                                "expression": {
                                                    "kind": 196711,
                                                    "text": "ChainExpression",
                                                    "rawText": "ChainExpression",
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 807,
                                                    "end": 822
                                                },
                                                "flags": 32768,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 806,
                                                "end": 822,
                                                "period": {
                                                    "kind": 255,
                                                    "pos": 806,
                                                    "end": 807
                                                }
                                            },
                                            "flags": 32768,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 764,
                                            "end": 822
                                        },
                                        "consequent": {
                                            "kind": 67175096,
                                            "member": {
                                                "kind": 67175096,
                                                "member": {
                                                    "kind": 196712,
                                                    "text": "callNode",
                                                    "rawText": "callNode",
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 826,
                                                    "end": 835
                                                },
                                                "expression": {
                                                    "kind": 196711,
                                                    "text": "parent",
                                                    "rawText": "parent",
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 836,
                                                    "end": 842
                                                },
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 835,
                                                "end": 842,
                                                "period": {
                                                    "kind": 255,
                                                    "pos": 835,
                                                    "end": 836
                                                }
                                            },
                                            "expression": {
                                                "kind": 196711,
                                                "text": "parent",
                                                "rawText": "parent",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 843,
                                                "end": 849
                                            },
                                            "flags": 32768,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 842,
                                            "end": 849,
                                            "period": {
                                                "kind": 255,
                                                "pos": 842,
                                                "end": 843
                                            }
                                        },
                                        "alternate": {
                                            "kind": 67175096,
                                            "member": {
                                                "kind": 196712,
                                                "text": "callNode",
                                                "rawText": "callNode",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 853,
                                                "end": 862
                                            },
                                            "expression": {
                                                "kind": 196711,
                                                "text": "parent",
                                                "rawText": "parent",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 863,
                                                "end": 869
                                            },
                                            "flags": 32768,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 862,
                                            "end": 869,
                                            "period": {
                                                "kind": 255,
                                                "pos": 862,
                                                "end": 863
                                            }
                                        },
                                        "flags": 32768,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 764,
                                        "end": 869
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 764,
                                    "end": 871
                                },
                                "expression": {
                                    "kind": 196711,
                                    "text": "TSESTree",
                                    "rawText": "TSESTree",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 872,
                                    "end": 880
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 871,
                                "end": 880,
                                "period": {
                                    "kind": 255,
                                    "pos": 871,
                                    "end": 872
                                }
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 880,
                            "end": 881
                        },
                        "expression": {
                            "kind": 196711,
                            "text": "BinaryExpression",
                            "rawText": "BinaryExpression",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 882,
                            "end": 898
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 881,
                        "end": 898,
                        "period": {
                            "kind": 255,
                            "pos": 881,
                            "end": 882
                        }
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 898,
                    "end": 899
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 757,
                "end": 899
            },
            "flags": 0,
            "intersects": false,
            "transformFlags": 0,
            "start": 757,
            "end": 900
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 65550,
                "left": {
                    "kind": 196712,
                    "text": "bifornCringerMoshedPerplexSawder",
                    "rawText": "bifornCringerMoshedPerplexSawder",
                    "flags": 32768,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 900,
                    "end": 934
                },
                "operator": "=",
                "right": {
                    "kind": 74398,
                    "expression": {
                        "kind": 1073807915,
                        "expression": {
                            "kind": 67175096,
                            "member": {
                                "kind": 74398,
                                "expression": {
                                    "kind": 1073807915,
                                    "expression": {
                                        "kind": 67175096,
                                        "member": {
                                            "kind": 67175096,
                                            "member": {
                                                "kind": 66224,
                                                "expression": {
                                                    "kind": 65592,
                                                    "shortCircuit": {
                                                        "kind": 65563,
                                                        "left": {
                                                            "kind": 65563,
                                                            "left": {
                                                                "kind": 196712,
                                                                "text": "glimseGlyphsHazardNoopsTieTie",
                                                                "rawText": "glimseGlyphsHazardNoopsTieTie",
                                                                "flags": 0,
                                                                "intersects": false,
                                                                "transformFlags": 0,
                                                                "start": 938,
                                                                "end": 967
                                                            },
                                                            "operator": "===",
                                                            "right": {
                                                                "kind": 4261540,
                                                                "text": 0,
                                                                "rawText": "0",
                                                                "flags": 0,
                                                                "intersects": false,
                                                                "transformFlags": 0,
                                                                "start": 971,
                                                                "end": 973
                                                            },
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 0,
                                                            "start": 936,
                                                            "end": 973
                                                        },
                                                        "operator": "&&",
                                                        "right": {
                                                            "kind": 65563,
                                                            "left": {
                                                                "kind": 196712,
                                                                "text": "kochabCooieGameOnOboleUnweave",
                                                                "rawText": "kochabCooieGameOnOboleUnweave",
                                                                "flags": 32768,
                                                                "intersects": false,
                                                                "transformFlags": 0,
                                                                "start": 976,
                                                                "end": 1006
                                                            },
                                                            "operator": "===",
                                                            "right": {
                                                                "kind": 67175096,
                                                                "member": {
                                                                    "kind": 196712,
                                                                    "text": "Math",
                                                                    "rawText": "Math",
                                                                    "flags": 0,
                                                                    "intersects": false,
                                                                    "transformFlags": 0,
                                                                    "start": 1010,
                                                                    "end": 1015
                                                                },
                                                                "expression": {
                                                                    "kind": 196711,
                                                                    "text": "PI",
                                                                    "rawText": "PI",
                                                                    "flags": 0,
                                                                    "intersects": false,
                                                                    "transformFlags": 0,
                                                                    "start": 1016,
                                                                    "end": 1018
                                                                },
                                                                "flags": 32768,
                                                                "intersects": false,
                                                                "transformFlags": 0,
                                                                "start": 1015,
                                                                "end": 1018,
                                                                "period": {
                                                                    "kind": 255,
                                                                    "pos": 1015,
                                                                    "end": 1016
                                                                }
                                                            },
                                                            "flags": 32768,
                                                            "intersects": false,
                                                            "transformFlags": 0,
                                                            "start": 1006,
                                                            "end": 1018
                                                        },
                                                        "flags": 32768,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "start": 936,
                                                        "end": 1018
                                                    },
                                                    "consequent": {
                                                        "kind": 196712,
                                                        "text": "averredBathersBoxroomBuggyNurl",
                                                        "rawText": "averredBathersBoxroomBuggyNurl",
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "start": 1022,
                                                        "end": 1053
                                                    },
                                                    "alternate": {
                                                        "kind": 196712,
                                                        "text": "anodyneCondosMalateOverateRetinol",
                                                        "rawText": "anodyneCondosMalateOverateRetinol",
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "start": 1057,
                                                        "end": 1091
                                                    },
                                                    "flags": 32768,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 936,
                                                    "end": 1091
                                                },
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 936,
                                                "end": 1093
                                            },
                                            "expression": {
                                                "kind": 196711,
                                                "text": "annularCooeedSplicesWalksWayWay",
                                                "rawText": "annularCooeedSplicesWalksWayWay",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 1094,
                                                "end": 1125
                                            },
                                            "flags": 32768,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 1093,
                                            "end": 1125,
                                            "period": {
                                                "kind": 255,
                                                "pos": 1093,
                                                "end": 1094
                                            }
                                        },
                                        "expression": {
                                            "kind": 196711,
                                            "text": "annularCooeedSplicesWalksWayWay",
                                            "rawText": "annularCooeedSplicesWalksWayWay",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 1129,
                                            "end": 1160
                                        },
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 1125,
                                        "end": 1160,
                                        "period": {
                                            "kind": 255,
                                            "pos": 1125,
                                            "end": 1129
                                        }
                                    },
                                    "typeArguments": null,
                                    "argumentList": {
                                        "kind": 3,
                                        "elements": [
                                            {
                                                "kind": 196712,
                                                "text": "annularCooeedSplicesWalksWayWay",
                                                "rawText": "annularCooeedSplicesWalksWayWay",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 1161,
                                                "end": 1192
                                            }
                                        ],
                                        "trailingComma": false,
                                        "transformFlags": 0,
                                        "flags": 0,
                                        "intersects": false,
                                        "start": 1192,
                                        "end": 1193
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 1160,
                                    "end": 1193
                                },
                                "flags": 32768,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 1193,
                                "end": 1194
                            },
                            "expression": {
                                "kind": 196711,
                                "text": "annularCooeedSplicesWalksWayWay",
                                "rawText": "annularCooeedSplicesWalksWayWay",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 1198,
                                "end": 1229
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 1194,
                            "end": 1229,
                            "period": {
                                "kind": 255,
                                "pos": 1194,
                                "end": 1198
                            }
                        },
                        "typeArguments": null,
                        "argumentList": {
                            "kind": 3,
                            "elements": [],
                            "trailingComma": false,
                            "transformFlags": 0,
                            "flags": 0,
                            "intersects": false,
                            "start": 1231,
                            "end": 1231
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 1229,
                        "end": 1231
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 1231,
                    "end": 1232
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 900,
                "end": 1232
            },
            "flags": 0,
            "intersects": false,
            "transformFlags": 0,
            "start": 900,
            "end": 1233
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 65550,
                "left": {
                    "kind": 196712,
                    "text": "bifornCringerMoshedPerplexSawder",
                    "rawText": "bifornCringerMoshedPerplexSawder",
                    "flags": 32768,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 1233,
                    "end": 1267
                },
                "operator": "=",
                "right": {
                    "kind": 65563,
                    "left": {
                        "kind": 196712,
                        "text": "askTrovenaBeenaDependsRowans",
                        "rawText": "askTrovenaBeenaDependsRowans",
                        "flags": 32768,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 1269,
                        "end": 1300
                    },
                    "operator": "+",
                    "right": {
                        "kind": 67175096,
                        "member": {
                            "kind": 74398,
                            "expression": {
                                "kind": 67175096,
                                "member": {
                                    "kind": 66224,
                                    "expression": {
                                        "kind": 65592,
                                        "shortCircuit": {
                                            "kind": 65563,
                                            "left": {
                                                "kind": 196712,
                                                "text": "glimseGlyphsHazardNoopsTieTie",
                                                "rawText": "glimseGlyphsHazardNoopsTieTie",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 1306,
                                                "end": 1335
                                            },
                                            "operator": "===",
                                            "right": {
                                                "kind": 4261540,
                                                "text": 0,
                                                "rawText": "0",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 1339,
                                                "end": 1341
                                            },
                                            "flags": 32768,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 1302,
                                            "end": 1341
                                        },
                                        "consequent": {
                                            "kind": 196712,
                                            "text": "averredBathersBoxroomBuggyNurl",
                                            "rawText": "averredBathersBoxroomBuggyNurl",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 1347,
                                            "end": 1378
                                        },
                                        "alternate": {
                                            "kind": 196712,
                                            "text": "anodyneCondosMalateOverateRetinol",
                                            "rawText": "anodyneCondosMalateOverateRetinol",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 1384,
                                            "end": 1418
                                        },
                                        "flags": 32768,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 1302,
                                        "end": 1418
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 1302,
                                    "end": 1422
                                },
                                "expression": {
                                    "kind": 196711,
                                    "text": "Foo",
                                    "rawText": "Foo",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 1423,
                                    "end": 1426
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 1422,
                                "end": 1426,
                                "period": {
                                    "kind": 255,
                                    "pos": 1422,
                                    "end": 1423
                                }
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 1426,
                            "end": 1427
                        },
                        "expression": {
                            "kind": 196711,
                            "text": "foo",
                            "rawText": "foo",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 1428,
                            "end": 1431
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 1427,
                        "end": 1431,
                        "period": {
                            "kind": 255,
                            "pos": 1427,
                            "end": 1428
                        }
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 1269,
                    "end": 1431
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 1233,
                "end": 1431
            },
            "flags": 0,
            "intersects": false,
            "transformFlags": 0,
            "start": 1233,
            "end": 1432
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 65550,
                "left": {
                    "kind": 196712,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 32768,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 1432,
                    "end": 1437
                },
                "operator": "=",
                "right": {
                    "kind": 74398,
                    "expression": {
                        "kind": 66224,
                        "expression": {
                            "kind": 65592,
                            "shortCircuit": {
                                "kind": 196712,
                                "text": "coooooooooooooooooooooooooooooooooooooooooooooooooooond",
                                "rawText": "coooooooooooooooooooooooooooooooooooooooooooooooooooond",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 1441,
                                "end": 1496
                            },
                            "consequent": {
                                "kind": 196712,
                                "text": "baaaaaaaaaaaaaaaaaaaaar",
                                "rawText": "baaaaaaaaaaaaaaaaaaaaar",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 1500,
                                "end": 1524
                            },
                            "alternate": {
                                "kind": 196712,
                                "text": "baaaaaaaaaaaaaaaaaaaaaz",
                                "rawText": "baaaaaaaaaaaaaaaaaaaaaz",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 1528,
                                "end": 1552
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 1439,
                            "end": 1552
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 1439,
                        "end": 1553
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 1553,
                    "end": 1554
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 1432,
                "end": 1554
            },
            "flags": 0,
            "intersects": false,
            "transformFlags": 0,
            "start": 1432,
            "end": 1555
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 65550,
                "left": {
                    "kind": 196712,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 32768,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 1555,
                    "end": 1560
                },
                "operator": "=",
                "right": {
                    "kind": 74398,
                    "expression": {
                        "kind": 74398,
                        "expression": {
                            "kind": 74398,
                            "expression": {
                                "kind": 74398,
                                "expression": {
                                    "kind": 74398,
                                    "expression": {
                                        "kind": 66224,
                                        "expression": {
                                            "kind": 65592,
                                            "shortCircuit": {
                                                "kind": 196712,
                                                "text": "coooooooooooooooooooooooooooooooooooooooooooooooooooond",
                                                "rawText": "coooooooooooooooooooooooooooooooooooooooooooooooooooond",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 1564,
                                                "end": 1619
                                            },
                                            "consequent": {
                                                "kind": 196712,
                                                "text": "baaaaaaaaaaaaaaaaaaaaar",
                                                "rawText": "baaaaaaaaaaaaaaaaaaaaar",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 1623,
                                                "end": 1647
                                            },
                                            "alternate": {
                                                "kind": 196712,
                                                "text": "baaaaaaaaaaaaaaaaaaaaaz",
                                                "rawText": "baaaaaaaaaaaaaaaaaaaaaz",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 1651,
                                                "end": 1675
                                            },
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 1562,
                                            "end": 1675
                                        },
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 1562,
                                        "end": 1676
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 1676,
                                    "end": 1677
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 1677,
                                "end": 1678
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 1678,
                            "end": 1679
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 1679,
                        "end": 1680
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 1680,
                    "end": 1681
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 1555,
                "end": 1681
            },
            "flags": 0,
            "intersects": false,
            "transformFlags": 0,
            "start": 1555,
            "end": 1682
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 4261540,
                "text": 2021,
                "rawText": "2021",
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 1684,
                "end": 1689
            },
            "flags": 0,
            "intersects": false,
            "transformFlags": 0,
            "start": 1684,
            "end": 1689
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 65590,
                "expressions": [
                    {
                        "kind": 196712,
                        "text": "GitHub",
                        "rawText": "GitHub",
                        "flags": 1,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 1689,
                        "end": 1696
                    },
                    {
                        "kind": 67175096,
                        "member": {
                            "kind": 196712,
                            "text": "Inc",
                            "rawText": "Inc",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 1697,
                            "end": 1701
                        },
                        "expression": {
                            "kind": 196711,
                            "text": "",
                            "rawText": "",
                            "flags": 1,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 1702,
                            "end": 1702
                        },
                        "flags": 1,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 1701,
                        "end": 1702,
                        "period": {
                            "kind": 255,
                            "pos": 1701,
                            "end": 1702
                        }
                    }
                ],
                "flags": 1,
                "intersects": false,
                "transformFlags": 0,
                "start": 1689,
                "end": 1702
            },
            "flags": 0,
            "intersects": false,
            "transformFlags": 0,
            "start": 1689,
            "end": 1702
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 0,
            "message": "Invalid character",
            "start": 1683,
            "length": 1
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 1690,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Dot property must be an identifier",
            "start": 1701,
            "length": 0
        }
    ],
    "intersects": false,
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 1702
}
```

  
### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

  
### Diagnostics


```javascript

```

