# Kataw parser test case

## Input

`````js
type T<U extends object = { x: number }> = Array<U>;
`````

## Output

### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "type T<U extends object = { x: number }> = Array<U>;",
    "filename": "",
    "statements": [
        {
            "kind": 8417,
            "name": {
                "kind": 196712,
                "text": "T",
                "rawText": "T",
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 4,
                "end": 6
            },
            "type": {
                "kind": 134226156,
                "typeName": {
                    "kind": 196711,
                    "text": "Array",
                    "rawText": "Array",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 42,
                    "end": 48
                },
                "typeArguments": {
                    "kind": 8419,
                    "typeArgumentsList": [
                        {
                            "kind": 134226156,
                            "typeName": {
                                "kind": 196711,
                                "text": "U",
                                "rawText": "U",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 49,
                                "end": 50
                            },
                            "typeArguments": null,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 49,
                            "end": 51
                        }
                    ],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 49,
                    "end": 50
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 2097152,
                "start": 42,
                "end": 52
            },
            "typeParameters": {
                "kind": 134226153,
                "typeParameterList": [
                    {
                        "kind": 134226152,
                        "name": {
                            "kind": 196711,
                            "text": "U",
                            "rawText": "U",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 7,
                            "end": 8
                        },
                        "constraint": {
                            "kind": 4202663,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 16,
                            "end": 23
                        },
                        "defaultType": {
                            "kind": 536879334,
                            "objectTypeMembers": {
                                "kind": 536871081,
                                "members": [
                                    {
                                        "kind": 8380,
                                        "name": {
                                            "kind": 196711,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 27,
                                            "end": 29
                                        },
                                        "isOptional": false,
                                        "accessModifier": null,
                                        "type": {
                                            "kind": 4202657,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "start": 30,
                                            "end": 37
                                        },
                                        "isStatic": false,
                                        "isReadOnly": false,
                                        "initializer": null,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "start": 27,
                                        "end": 37
                                    }
                                ],
                                "multiline": false,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 27,
                                "end": 39
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 25,
                            "end": 39
                        },
                        "expression": null,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 7,
                        "end": 39
                    }
                ],
                "flags": 0,
                "intersects": false,
                "transformFlags": 2097152,
                "start": 7,
                "end": 39
            },
            "flags": 0,
            "intersects": false,
            "transformFlags": 2097152,
            "start": 0,
            "end": 52
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
    "end": 52
}
```

  
### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

  
### Diagnostics


```javascript

```

