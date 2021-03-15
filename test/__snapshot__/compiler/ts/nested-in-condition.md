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
    "kind": 196,
    "source": "type Foo =\n  (ThingamabobberFactory extends AbstractThingamabobberFactory ? GobbledygookProvider : CompositeGobbledygookProvider) extends\n  DoubleGobbledygookProvider\n    ? UniqueDalgametreService\n    : CompositeZamazingoResolver;\n\ntype Foo2 =\n  DoubleGobbledygookProvider extends\n  (ThingamabobberFactory extends AbstractThingamabobberFactory ? GobbledygookProvider : CompositeGobbledygookProvider)\n    ? UniqueDalgametreService\n    : CompositeZamazingoResolver;\n\ntype Foo3 =\n  (ThingamabobberFactory extends AbstractThingamabobberFactory ? GobbledygookProvider : CompositeGobbledygookProvider) extends\n  (DoubleGobbledygookProvider extends MockGobbledygookProvider ? MockThingamabobberFactory : ThingamabobberFactory)\n    ? UniqueDalgametreService\n    : CompositeZamazingoResolver;",
    "filename": "",
    "statements": [
        {
            "kind": 8417,
            "name": {
                "kind": 196712,
                "text": "Foo",
                "rawText": "Foo",
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 4,
                "end": 8
            },
            "type": {
                "kind": 8249,
                "checkType": {
                    "kind": 8369,
                    "type": {
                        "kind": 8249,
                        "checkType": {
                            "kind": 134226156,
                            "typeName": {
                                "kind": 196711,
                                "text": "ThingamabobberFactory",
                                "rawText": "ThingamabobberFactory",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 14,
                                "end": 35
                            },
                            "typeArguments": null,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 14,
                            "end": 43
                        },
                        "extendsType": {
                            "kind": 134226156,
                            "typeName": {
                                "kind": 196711,
                                "text": "AbstractThingamabobberFactory",
                                "rawText": "AbstractThingamabobberFactory",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 43,
                                "end": 73
                            },
                            "typeArguments": null,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 43,
                            "end": 75
                        },
                        "trueType": {
                            "kind": 134226156,
                            "typeName": {
                                "kind": 196711,
                                "text": "GobbledygookProvider",
                                "rawText": "GobbledygookProvider",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 75,
                                "end": 96
                            },
                            "typeArguments": null,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 75,
                            "end": 98
                        },
                        "falseType": {
                            "kind": 134226156,
                            "typeName": {
                                "kind": 196711,
                                "text": "CompositeGobbledygookProvider",
                                "rawText": "CompositeGobbledygookProvider",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 98,
                                "end": 128
                            },
                            "typeArguments": null,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 98,
                            "end": 129
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 14,
                        "end": 128
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 10,
                    "end": 129
                },
                "extendsType": {
                    "kind": 134226156,
                    "typeName": {
                        "kind": 196711,
                        "text": "DoubleGobbledygookProvider",
                        "rawText": "DoubleGobbledygookProvider",
                        "flags": 32768,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 137,
                        "end": 166
                    },
                    "typeArguments": null,
                    "flags": 32768,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 137,
                    "end": 172
                },
                "trueType": {
                    "kind": 134226156,
                    "typeName": {
                        "kind": 196711,
                        "text": "UniqueDalgametreService",
                        "rawText": "UniqueDalgametreService",
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 172,
                        "end": 196
                    },
                    "typeArguments": null,
                    "flags": 32768,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 172,
                    "end": 202
                },
                "falseType": {
                    "kind": 134226156,
                    "typeName": {
                        "kind": 196711,
                        "text": "CompositeZamazingoResolver",
                        "rawText": "CompositeZamazingoResolver",
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 202,
                        "end": 229
                    },
                    "typeArguments": null,
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 202,
                    "end": 230
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 2097152,
                "start": 10,
                "end": 229
            },
            "typeParameters": null,
            "flags": 32768,
            "intersects": false,
            "transformFlags": 2097152,
            "start": 0,
            "end": 230
        },
        {
            "kind": 8417,
            "name": {
                "kind": 196712,
                "text": "Foo2",
                "rawText": "Foo2",
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 236,
                "end": 241
            },
            "type": {
                "kind": 8249,
                "checkType": {
                    "kind": 134226156,
                    "typeName": {
                        "kind": 196711,
                        "text": "DoubleGobbledygookProvider",
                        "rawText": "DoubleGobbledygookProvider",
                        "flags": 32768,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 243,
                        "end": 272
                    },
                    "typeArguments": null,
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 243,
                    "end": 280
                },
                "extendsType": {
                    "kind": 8369,
                    "type": {
                        "kind": 8249,
                        "checkType": {
                            "kind": 134226156,
                            "typeName": {
                                "kind": 196711,
                                "text": "ThingamabobberFactory",
                                "rawText": "ThingamabobberFactory",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 284,
                                "end": 305
                            },
                            "typeArguments": null,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 284,
                            "end": 313
                        },
                        "extendsType": {
                            "kind": 134226156,
                            "typeName": {
                                "kind": 196711,
                                "text": "AbstractThingamabobberFactory",
                                "rawText": "AbstractThingamabobberFactory",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 313,
                                "end": 343
                            },
                            "typeArguments": null,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 313,
                            "end": 345
                        },
                        "trueType": {
                            "kind": 134226156,
                            "typeName": {
                                "kind": 196711,
                                "text": "GobbledygookProvider",
                                "rawText": "GobbledygookProvider",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 345,
                                "end": 366
                            },
                            "typeArguments": null,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 345,
                            "end": 368
                        },
                        "falseType": {
                            "kind": 134226156,
                            "typeName": {
                                "kind": 196711,
                                "text": "CompositeGobbledygookProvider",
                                "rawText": "CompositeGobbledygookProvider",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 368,
                                "end": 398
                            },
                            "typeArguments": null,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 368,
                            "end": 399
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 284,
                        "end": 398
                    },
                    "flags": 32768,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 280,
                    "end": 399
                },
                "trueType": {
                    "kind": 134226156,
                    "typeName": {
                        "kind": 196711,
                        "text": "UniqueDalgametreService",
                        "rawText": "UniqueDalgametreService",
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 405,
                        "end": 429
                    },
                    "typeArguments": null,
                    "flags": 32768,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 405,
                    "end": 435
                },
                "falseType": {
                    "kind": 134226156,
                    "typeName": {
                        "kind": 196711,
                        "text": "CompositeZamazingoResolver",
                        "rawText": "CompositeZamazingoResolver",
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 435,
                        "end": 462
                    },
                    "typeArguments": null,
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 435,
                    "end": 463
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 2097152,
                "start": 243,
                "end": 462
            },
            "typeParameters": null,
            "flags": 32768,
            "intersects": false,
            "transformFlags": 2097152,
            "start": 230,
            "end": 463
        },
        {
            "kind": 8417,
            "name": {
                "kind": 196712,
                "text": "Foo3",
                "rawText": "Foo3",
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 469,
                "end": 474
            },
            "type": {
                "kind": 8249,
                "checkType": {
                    "kind": 8369,
                    "type": {
                        "kind": 8249,
                        "checkType": {
                            "kind": 134226156,
                            "typeName": {
                                "kind": 196711,
                                "text": "ThingamabobberFactory",
                                "rawText": "ThingamabobberFactory",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 480,
                                "end": 501
                            },
                            "typeArguments": null,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 480,
                            "end": 509
                        },
                        "extendsType": {
                            "kind": 134226156,
                            "typeName": {
                                "kind": 196711,
                                "text": "AbstractThingamabobberFactory",
                                "rawText": "AbstractThingamabobberFactory",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 509,
                                "end": 539
                            },
                            "typeArguments": null,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 509,
                            "end": 541
                        },
                        "trueType": {
                            "kind": 134226156,
                            "typeName": {
                                "kind": 196711,
                                "text": "GobbledygookProvider",
                                "rawText": "GobbledygookProvider",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 541,
                                "end": 562
                            },
                            "typeArguments": null,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 541,
                            "end": 564
                        },
                        "falseType": {
                            "kind": 134226156,
                            "typeName": {
                                "kind": 196711,
                                "text": "CompositeGobbledygookProvider",
                                "rawText": "CompositeGobbledygookProvider",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 564,
                                "end": 594
                            },
                            "typeArguments": null,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 564,
                            "end": 595
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 480,
                        "end": 594
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 476,
                    "end": 595
                },
                "extendsType": {
                    "kind": 8369,
                    "type": {
                        "kind": 8249,
                        "checkType": {
                            "kind": 134226156,
                            "typeName": {
                                "kind": 196711,
                                "text": "DoubleGobbledygookProvider",
                                "rawText": "DoubleGobbledygookProvider",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 607,
                                "end": 633
                            },
                            "typeArguments": null,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 607,
                            "end": 641
                        },
                        "extendsType": {
                            "kind": 134226156,
                            "typeName": {
                                "kind": 196711,
                                "text": "MockGobbledygookProvider",
                                "rawText": "MockGobbledygookProvider",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 641,
                                "end": 666
                            },
                            "typeArguments": null,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 641,
                            "end": 668
                        },
                        "trueType": {
                            "kind": 134226156,
                            "typeName": {
                                "kind": 196711,
                                "text": "MockThingamabobberFactory",
                                "rawText": "MockThingamabobberFactory",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 668,
                                "end": 694
                            },
                            "typeArguments": null,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 668,
                            "end": 696
                        },
                        "falseType": {
                            "kind": 134226156,
                            "typeName": {
                                "kind": 196711,
                                "text": "ThingamabobberFactory",
                                "rawText": "ThingamabobberFactory",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 696,
                                "end": 718
                            },
                            "typeArguments": null,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 696,
                            "end": 719
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 607,
                        "end": 718
                    },
                    "flags": 32768,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 603,
                    "end": 719
                },
                "trueType": {
                    "kind": 134226156,
                    "typeName": {
                        "kind": 196711,
                        "text": "UniqueDalgametreService",
                        "rawText": "UniqueDalgametreService",
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 725,
                        "end": 749
                    },
                    "typeArguments": null,
                    "flags": 32768,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 725,
                    "end": 755
                },
                "falseType": {
                    "kind": 134226156,
                    "typeName": {
                        "kind": 196711,
                        "text": "CompositeZamazingoResolver",
                        "rawText": "CompositeZamazingoResolver",
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 755,
                        "end": 782
                    },
                    "typeArguments": null,
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 755,
                    "end": 783
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 2097152,
                "start": 476,
                "end": 782
            },
            "typeParameters": null,
            "flags": 32768,
            "intersects": false,
            "transformFlags": 2097152,
            "start": 463,
            "end": 783
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [],
    "intersects": false,
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 783
}
```

  
### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

  
### Diagnostics


```javascript

```

