# Kataw parser test case

## Options

`````js
{ jsx: true }
`````

## Input

`````js
<SolarSystem.Earth.America.USA.California.mountain-view></SolarSystem.Earth.America.USA.California.mountain-view>
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "<SolarSystem.Earth.America.USA.California.mountain-view></SolarSystem.Earth.America.USA.California.mountain-view>",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 65563,
                "left": {
                    "kind": 65563,
                    "left": {
                        "kind": 69766,
                        "tagName": {
                            "kind": 67109000,
                            "member": {
                                "kind": 129,
                                "text": "mountain",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 8192,
                                "start": 42,
                                "end": 50
                            },
                            "expression": {
                                "kind": 67109000,
                                "member": {
                                    "kind": 129,
                                    "text": "California",
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 8192,
                                    "start": 31,
                                    "end": 41
                                },
                                "expression": {
                                    "kind": 67109000,
                                    "member": {
                                        "kind": 129,
                                        "text": "USA",
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 8192,
                                        "start": 27,
                                        "end": 30
                                    },
                                    "expression": {
                                        "kind": 67109000,
                                        "member": {
                                            "kind": 129,
                                            "text": "America",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 8192,
                                            "start": 19,
                                            "end": 26
                                        },
                                        "expression": {
                                            "kind": 67109000,
                                            "member": {
                                                "kind": 129,
                                                "text": "Earth",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 8192,
                                                "start": 13,
                                                "end": 18
                                            },
                                            "expression": {
                                                "kind": 129,
                                                "text": "SolarSystem",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 8192,
                                                "start": 1,
                                                "end": 12
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 8192,
                                            "start": 1,
                                            "end": 18
                                        },
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 8192,
                                        "start": 1,
                                        "end": 26
                                    },
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 8192,
                                    "start": 1,
                                    "end": 30
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 8192,
                                "start": 1,
                                "end": 41
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 8192,
                            "start": 1,
                            "end": 50
                        },
                        "attributes": {
                            "kind": 123,
                            "attributesList": [],
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 8192,
                            "start": 50,
                            "end": 50
                        },
                        "typeArguments": null,
                        "flags": 1,
                        "symbol": null,
                        "transformFlags": 8192,
                        "start": 0,
                        "end": 50
                    },
                    "operator": "-",
                    "right": {
                        "kind": 196712,
                        "text": "view",
                        "rawText": "view",
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 51,
                        "end": 55
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 55
                },
                "operator": ">",
                "right": {
                    "kind": 83976,
                    "typeParameters": {
                        "kind": 134226153,
                        "typeParameterList": [],
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 2097152,
                        "start": 57,
                        "end": 57
                    },
                    "parameters": {
                        "kind": 131322,
                        "text": "",
                        "flags": 3,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 57,
                        "end": 57
                    },
                    "contents": {
                        "kind": 65563,
                        "left": {
                            "kind": 65563,
                            "left": {
                                "kind": 65563,
                                "left": {
                                    "kind": 131322,
                                    "text": "",
                                    "flags": 3,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 57,
                                    "end": 57
                                },
                                "operator": "/",
                                "right": {
                                    "kind": 67175096,
                                    "member": {
                                        "kind": 67175096,
                                        "member": {
                                            "kind": 67175096,
                                            "member": {
                                                "kind": 67175096,
                                                "member": {
                                                    "kind": 67175096,
                                                    "member": {
                                                        "kind": 196712,
                                                        "text": "SolarSystem",
                                                        "rawText": "SolarSystem",
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 0,
                                                        "start": 58,
                                                        "end": 69
                                                    },
                                                    "expression": {
                                                        "kind": 196711,
                                                        "text": "Earth",
                                                        "rawText": "Earth",
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 0,
                                                        "start": 70,
                                                        "end": 75
                                                    },
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 69,
                                                    "end": 75,
                                                    "period": {
                                                        "kind": 255,
                                                        "pos": 69,
                                                        "end": 70
                                                    }
                                                },
                                                "expression": {
                                                    "kind": 196711,
                                                    "text": "America",
                                                    "rawText": "America",
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 76,
                                                    "end": 83
                                                },
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 75,
                                                "end": 83,
                                                "period": {
                                                    "kind": 255,
                                                    "pos": 75,
                                                    "end": 76
                                                }
                                            },
                                            "expression": {
                                                "kind": 196711,
                                                "text": "USA",
                                                "rawText": "USA",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 84,
                                                "end": 87
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 83,
                                            "end": 87,
                                            "period": {
                                                "kind": 255,
                                                "pos": 83,
                                                "end": 84
                                            }
                                        },
                                        "expression": {
                                            "kind": 196711,
                                            "text": "California",
                                            "rawText": "California",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 88,
                                            "end": 98
                                        },
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 87,
                                        "end": 98,
                                        "period": {
                                            "kind": 255,
                                            "pos": 87,
                                            "end": 88
                                        }
                                    },
                                    "expression": {
                                        "kind": 196711,
                                        "text": "mountain",
                                        "rawText": "mountain",
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 99,
                                        "end": 107
                                    },
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 98,
                                    "end": 107,
                                    "period": {
                                        "kind": 255,
                                        "pos": 98,
                                        "end": 99
                                    }
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 57,
                                "end": 107
                            },
                            "operator": "-",
                            "right": {
                                "kind": 196712,
                                "text": "view",
                                "rawText": "view",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 108,
                                "end": 112
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 57,
                            "end": 112
                        },
                        "operator": ">",
                        "right": {
                            "kind": 131322,
                            "text": "",
                            "flags": 3,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 113,
                            "end": 113
                        },
                        "flags": 1,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 57,
                        "end": 113
                    },
                    "flags": 1073741825,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 56,
                    "end": 113
                },
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 0,
                "end": 113
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 113
        }
    ],
    "isModule": true,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "'>' expected.",
            "start": 57,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected",
            "start": 112,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 113
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

