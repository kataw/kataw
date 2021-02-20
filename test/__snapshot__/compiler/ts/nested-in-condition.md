# Kataw parser test case

## Input

`````js
type Foo =
  (ThingamabobberFactory extends AbstractThingamabobberFactory ? GobbledygookProvider : CompositeGobbledygookProvider) extends
  DoubleGobbledygookProvider
    ? UniqueDalgametreService
    : CompositeZamazingoResolver;

type Foo2 =
  DoubleGobbledygookProvider extends
  (ThingamabobberFactory extends AbstractThingamabobberFactory ? GobbledygookProvider : CompositeGobbledygookProvider)
    ? UniqueDalgametreService
    : CompositeZamazingoResolver;

type Foo3 =
  (ThingamabobberFactory extends AbstractThingamabobberFactory ? GobbledygookProvider : CompositeGobbledygookProvider) extends
  (DoubleGobbledygookProvider extends MockGobbledygookProvider ? MockThingamabobberFactory : ThingamabobberFactory)
    ? UniqueDalgametreService
    : CompositeZamazingoResolver;
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 149,
    "source": "type Foo =\n  (ThingamabobberFactory extends AbstractThingamabobberFactory ? GobbledygookProvider : CompositeGobbledygookProvider) extends\n  DoubleGobbledygookProvider\n    ? UniqueDalgametreService\n    : CompositeZamazingoResolver;\n\ntype Foo2 =\n  DoubleGobbledygookProvider extends\n  (ThingamabobberFactory extends AbstractThingamabobberFactory ? GobbledygookProvider : CompositeGobbledygookProvider)\n    ? UniqueDalgametreService\n    : CompositeZamazingoResolver;\n\ntype Foo3 =\n  (ThingamabobberFactory extends AbstractThingamabobberFactory ? GobbledygookProvider : CompositeGobbledygookProvider) extends\n  (DoubleGobbledygookProvider extends MockGobbledygookProvider ? MockThingamabobberFactory : ThingamabobberFactory)\n    ? UniqueDalgametreService\n    : CompositeZamazingoResolver;",
    "filename": "",
    "moduleBody": {
        "kind": 150,
        "statements": [
            {
                "kind": 225,
                "name": {
                    "kind": 196712,
                    "text": "Foo",
                    "rawText": "Foo",
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 4,
                    "end": 8
                },
                "type": {
                    "kind": 57,
                    "checkType": {
                        "kind": 177,
                        "type": {
                            "kind": 57,
                            "checkType": {
                                "kind": 236,
                                "typeName": {
                                    "kind": 196711,
                                    "text": "ThingamabobberFactory",
                                    "rawText": "ThingamabobberFactory",
                                    "flags": 65536,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 14,
                                    "end": 35
                                },
                                "typeArguments": null,
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "parent": null,
                                "emitNode": null,
                                "start": 14,
                                "end": 43
                            },
                            "extendsType": {
                                "kind": 236,
                                "typeName": {
                                    "kind": 196711,
                                    "text": "AbstractThingamabobberFactory",
                                    "rawText": "AbstractThingamabobberFactory",
                                    "flags": 65536,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 43,
                                    "end": 73
                                },
                                "typeArguments": null,
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "parent": null,
                                "emitNode": null,
                                "start": 43,
                                "end": 75
                            },
                            "trueType": {
                                "kind": 236,
                                "typeName": {
                                    "kind": 196711,
                                    "text": "GobbledygookProvider",
                                    "rawText": "GobbledygookProvider",
                                    "flags": 65536,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 75,
                                    "end": 96
                                },
                                "typeArguments": null,
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "parent": null,
                                "emitNode": null,
                                "start": 75,
                                "end": 98
                            },
                            "falseType": {
                                "kind": 236,
                                "typeName": {
                                    "kind": 196711,
                                    "text": "CompositeGobbledygookProvider",
                                    "rawText": "CompositeGobbledygookProvider",
                                    "flags": 65536,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 98,
                                    "end": 128
                                },
                                "typeArguments": null,
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "parent": null,
                                "emitNode": null,
                                "start": 98,
                                "end": 129
                            },
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "parent": null,
                            "emitNode": null,
                            "start": 14,
                            "end": 128
                        },
                        "flags": 65536,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "parent": null,
                        "emitNode": null,
                        "start": 10,
                        "end": 129
                    },
                    "extendsType": {
                        "kind": 236,
                        "typeName": {
                            "kind": 196711,
                            "text": "DoubleGobbledygookProvider",
                            "rawText": "DoubleGobbledygookProvider",
                            "flags": 81920,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 137,
                            "end": 166
                        },
                        "typeArguments": null,
                        "flags": 81920,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "parent": null,
                        "emitNode": null,
                        "start": 137,
                        "end": 172
                    },
                    "trueType": {
                        "kind": 236,
                        "typeName": {
                            "kind": 196711,
                            "text": "UniqueDalgametreService",
                            "rawText": "UniqueDalgametreService",
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 172,
                            "end": 196
                        },
                        "typeArguments": null,
                        "flags": 81920,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "parent": null,
                        "emitNode": null,
                        "start": 172,
                        "end": 202
                    },
                    "falseType": {
                        "kind": 236,
                        "typeName": {
                            "kind": 196711,
                            "text": "CompositeZamazingoResolver",
                            "rawText": "CompositeZamazingoResolver",
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 202,
                            "end": 229
                        },
                        "typeArguments": null,
                        "flags": 65536,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "parent": null,
                        "emitNode": null,
                        "start": 202,
                        "end": 230
                    },
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "parent": null,
                    "emitNode": null,
                    "start": 10,
                    "end": 229
                },
                "typeParameters": null,
                "flags": 81920,
                "intersects": false,
                "transformFlags": 2097152,
                "parent": null,
                "emitNode": null,
                "start": 0,
                "end": 230
            },
            {
                "kind": 225,
                "name": {
                    "kind": 196712,
                    "text": "Foo2",
                    "rawText": "Foo2",
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 236,
                    "end": 241
                },
                "type": {
                    "kind": 57,
                    "checkType": {
                        "kind": 236,
                        "typeName": {
                            "kind": 196711,
                            "text": "DoubleGobbledygookProvider",
                            "rawText": "DoubleGobbledygookProvider",
                            "flags": 81920,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 243,
                            "end": 272
                        },
                        "typeArguments": null,
                        "flags": 65536,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "parent": null,
                        "emitNode": null,
                        "start": 243,
                        "end": 280
                    },
                    "extendsType": {
                        "kind": 177,
                        "type": {
                            "kind": 57,
                            "checkType": {
                                "kind": 236,
                                "typeName": {
                                    "kind": 196711,
                                    "text": "ThingamabobberFactory",
                                    "rawText": "ThingamabobberFactory",
                                    "flags": 65536,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 284,
                                    "end": 305
                                },
                                "typeArguments": null,
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "parent": null,
                                "emitNode": null,
                                "start": 284,
                                "end": 313
                            },
                            "extendsType": {
                                "kind": 236,
                                "typeName": {
                                    "kind": 196711,
                                    "text": "AbstractThingamabobberFactory",
                                    "rawText": "AbstractThingamabobberFactory",
                                    "flags": 65536,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 313,
                                    "end": 343
                                },
                                "typeArguments": null,
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "parent": null,
                                "emitNode": null,
                                "start": 313,
                                "end": 345
                            },
                            "trueType": {
                                "kind": 236,
                                "typeName": {
                                    "kind": 196711,
                                    "text": "GobbledygookProvider",
                                    "rawText": "GobbledygookProvider",
                                    "flags": 65536,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 345,
                                    "end": 366
                                },
                                "typeArguments": null,
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "parent": null,
                                "emitNode": null,
                                "start": 345,
                                "end": 368
                            },
                            "falseType": {
                                "kind": 236,
                                "typeName": {
                                    "kind": 196711,
                                    "text": "CompositeGobbledygookProvider",
                                    "rawText": "CompositeGobbledygookProvider",
                                    "flags": 65536,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 368,
                                    "end": 398
                                },
                                "typeArguments": null,
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "parent": null,
                                "emitNode": null,
                                "start": 368,
                                "end": 399
                            },
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "parent": null,
                            "emitNode": null,
                            "start": 284,
                            "end": 398
                        },
                        "flags": 81920,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "parent": null,
                        "emitNode": null,
                        "start": 280,
                        "end": 399
                    },
                    "trueType": {
                        "kind": 236,
                        "typeName": {
                            "kind": 196711,
                            "text": "UniqueDalgametreService",
                            "rawText": "UniqueDalgametreService",
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 405,
                            "end": 429
                        },
                        "typeArguments": null,
                        "flags": 81920,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "parent": null,
                        "emitNode": null,
                        "start": 405,
                        "end": 435
                    },
                    "falseType": {
                        "kind": 236,
                        "typeName": {
                            "kind": 196711,
                            "text": "CompositeZamazingoResolver",
                            "rawText": "CompositeZamazingoResolver",
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 435,
                            "end": 462
                        },
                        "typeArguments": null,
                        "flags": 65536,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "parent": null,
                        "emitNode": null,
                        "start": 435,
                        "end": 463
                    },
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "parent": null,
                    "emitNode": null,
                    "start": 243,
                    "end": 462
                },
                "typeParameters": null,
                "flags": 81920,
                "intersects": false,
                "transformFlags": 2097152,
                "parent": null,
                "emitNode": null,
                "start": 230,
                "end": 463
            },
            {
                "kind": 225,
                "name": {
                    "kind": 196712,
                    "text": "Foo3",
                    "rawText": "Foo3",
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 469,
                    "end": 474
                },
                "type": {
                    "kind": 57,
                    "checkType": {
                        "kind": 177,
                        "type": {
                            "kind": 57,
                            "checkType": {
                                "kind": 236,
                                "typeName": {
                                    "kind": 196711,
                                    "text": "ThingamabobberFactory",
                                    "rawText": "ThingamabobberFactory",
                                    "flags": 65536,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 480,
                                    "end": 501
                                },
                                "typeArguments": null,
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "parent": null,
                                "emitNode": null,
                                "start": 480,
                                "end": 509
                            },
                            "extendsType": {
                                "kind": 236,
                                "typeName": {
                                    "kind": 196711,
                                    "text": "AbstractThingamabobberFactory",
                                    "rawText": "AbstractThingamabobberFactory",
                                    "flags": 65536,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 509,
                                    "end": 539
                                },
                                "typeArguments": null,
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "parent": null,
                                "emitNode": null,
                                "start": 509,
                                "end": 541
                            },
                            "trueType": {
                                "kind": 236,
                                "typeName": {
                                    "kind": 196711,
                                    "text": "GobbledygookProvider",
                                    "rawText": "GobbledygookProvider",
                                    "flags": 65536,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 541,
                                    "end": 562
                                },
                                "typeArguments": null,
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "parent": null,
                                "emitNode": null,
                                "start": 541,
                                "end": 564
                            },
                            "falseType": {
                                "kind": 236,
                                "typeName": {
                                    "kind": 196711,
                                    "text": "CompositeGobbledygookProvider",
                                    "rawText": "CompositeGobbledygookProvider",
                                    "flags": 65536,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 564,
                                    "end": 594
                                },
                                "typeArguments": null,
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "parent": null,
                                "emitNode": null,
                                "start": 564,
                                "end": 595
                            },
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "parent": null,
                            "emitNode": null,
                            "start": 480,
                            "end": 594
                        },
                        "flags": 65536,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "parent": null,
                        "emitNode": null,
                        "start": 476,
                        "end": 595
                    },
                    "extendsType": {
                        "kind": 177,
                        "type": {
                            "kind": 57,
                            "checkType": {
                                "kind": 236,
                                "typeName": {
                                    "kind": 196711,
                                    "text": "DoubleGobbledygookProvider",
                                    "rawText": "DoubleGobbledygookProvider",
                                    "flags": 65536,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 607,
                                    "end": 633
                                },
                                "typeArguments": null,
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "parent": null,
                                "emitNode": null,
                                "start": 607,
                                "end": 641
                            },
                            "extendsType": {
                                "kind": 236,
                                "typeName": {
                                    "kind": 196711,
                                    "text": "MockGobbledygookProvider",
                                    "rawText": "MockGobbledygookProvider",
                                    "flags": 65536,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 641,
                                    "end": 666
                                },
                                "typeArguments": null,
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "parent": null,
                                "emitNode": null,
                                "start": 641,
                                "end": 668
                            },
                            "trueType": {
                                "kind": 236,
                                "typeName": {
                                    "kind": 196711,
                                    "text": "MockThingamabobberFactory",
                                    "rawText": "MockThingamabobberFactory",
                                    "flags": 65536,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 668,
                                    "end": 694
                                },
                                "typeArguments": null,
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "parent": null,
                                "emitNode": null,
                                "start": 668,
                                "end": 696
                            },
                            "falseType": {
                                "kind": 236,
                                "typeName": {
                                    "kind": 196711,
                                    "text": "ThingamabobberFactory",
                                    "rawText": "ThingamabobberFactory",
                                    "flags": 65536,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 696,
                                    "end": 718
                                },
                                "typeArguments": null,
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "parent": null,
                                "emitNode": null,
                                "start": 696,
                                "end": 719
                            },
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "parent": null,
                            "emitNode": null,
                            "start": 607,
                            "end": 718
                        },
                        "flags": 81920,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "parent": null,
                        "emitNode": null,
                        "start": 603,
                        "end": 719
                    },
                    "trueType": {
                        "kind": 236,
                        "typeName": {
                            "kind": 196711,
                            "text": "UniqueDalgametreService",
                            "rawText": "UniqueDalgametreService",
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 725,
                            "end": 749
                        },
                        "typeArguments": null,
                        "flags": 81920,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "parent": null,
                        "emitNode": null,
                        "start": 725,
                        "end": 755
                    },
                    "falseType": {
                        "kind": 236,
                        "typeName": {
                            "kind": 196711,
                            "text": "CompositeZamazingoResolver",
                            "rawText": "CompositeZamazingoResolver",
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 755,
                            "end": 782
                        },
                        "typeArguments": null,
                        "flags": 65536,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "parent": null,
                        "emitNode": null,
                        "start": 755,
                        "end": 783
                    },
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "parent": null,
                    "emitNode": null,
                    "start": 476,
                    "end": 782
                },
                "typeParameters": null,
                "flags": 81920,
                "intersects": false,
                "transformFlags": 2097152,
                "parent": null,
                "emitNode": null,
                "start": 463,
                "end": 783
            }
        ],
        "transformFlags": 0,
        "flags": 65536,
        "intersects": false,
        "parent": null,
        "emitNode": null,
        "start": 0,
        "end": 783
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "parent": null,
    "emitNode": null,
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 783
}
```

### Printed


```javascript

type Foo = (ThingamabobberFactory extends AbstractThingamabobberFactory ? GobbledygookProvider : CompositeGobbledygookProvider) extends DoubleGobbledygookProvider ? UniqueDalgametreService : CompositeZamazingoResolver;

type Foo2 = DoubleGobbledygookProvider extends (ThingamabobberFactory extends AbstractThingamabobberFactory ? GobbledygookProvider : CompositeGobbledygookProvider) ? UniqueDalgametreService : CompositeZamazingoResolver;

type Foo3 = (ThingamabobberFactory extends AbstractThingamabobberFactory ? GobbledygookProvider : CompositeGobbledygookProvider) extends (DoubleGobbledygookProvider extends MockGobbledygookProvider ? MockThingamabobberFactory : ThingamabobberFactory) ? UniqueDalgametreService : CompositeZamazingoResolver;

```

### Diagnostics


```javascript
@{x2714}@ No errors
```

