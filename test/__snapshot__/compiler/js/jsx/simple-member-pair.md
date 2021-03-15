# Kataw parser test case

## Options

`````js
{ jsx: true }
`````

## Input

`````js
<milky-way.solar-system></milky-way.solar-system>
`````

## Output

### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "<milky-way.solar-system></milky-way.solar-system>",
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
                                "text": "solar",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 8192,
                                "start": 11,
                                "end": 16
                            },
                            "expression": {
                                "kind": 129,
                                "text": "milky-way",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 8192,
                                "start": 1,
                                "end": 10
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 8192,
                            "start": 1,
                            "end": 16
                        },
                        "attributes": {
                            "kind": 123,
                            "attributesList": [],
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 8192,
                            "start": 16,
                            "end": 16
                        },
                        "typeArguments": null,
                        "flags": 1,
                        "intersects": false,
                        "transformFlags": 8192,
                        "start": 0,
                        "end": 16
                    },
                    "operator": "-",
                    "right": {
                        "kind": 196712,
                        "text": "system",
                        "rawText": "system",
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 17,
                        "end": 23
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 23
                },
                "operator": ">",
                "right": {
                    "kind": 83976,
                    "typeParameters": {
                        "kind": 134226153,
                        "typeParameterList": [],
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 25,
                        "end": 25
                    },
                    "arrowParameters": {
                        "kind": 131322,
                        "text": "",
                        "flags": 3,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 25,
                        "end": 25
                    },
                    "contents": {
                        "kind": 65563,
                        "left": {
                            "kind": 65563,
                            "left": {
                                "kind": 65563,
                                "left": {
                                    "kind": 65563,
                                    "left": {
                                        "kind": 131322,
                                        "text": "",
                                        "flags": 3,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 25,
                                        "end": 25
                                    },
                                    "operator": "/",
                                    "right": {
                                        "kind": 196712,
                                        "text": "milky",
                                        "rawText": "milky",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 26,
                                        "end": 31
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 25,
                                    "end": 31
                                },
                                "operator": "-",
                                "right": {
                                    "kind": 67175096,
                                    "member": {
                                        "kind": 196712,
                                        "text": "way",
                                        "rawText": "way",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 32,
                                        "end": 35
                                    },
                                    "expression": {
                                        "kind": 196711,
                                        "text": "solar",
                                        "rawText": "solar",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 36,
                                        "end": 41
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 35,
                                    "end": 41,
                                    "period": {
                                        "kind": 255,
                                        "pos": 35,
                                        "end": 36
                                    }
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 25,
                                "end": 41
                            },
                            "operator": "-",
                            "right": {
                                "kind": 196712,
                                "text": "system",
                                "rawText": "system",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 42,
                                "end": 48
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 25,
                            "end": 48
                        },
                        "operator": ">",
                        "right": {
                            "kind": 131322,
                            "text": "",
                            "flags": 3,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 49,
                            "end": 49
                        },
                        "flags": 1,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 25,
                        "end": 49
                    },
                    "flags": 1,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 24,
                    "end": 49
                },
                "flags": 1,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 49
            },
            "flags": 0,
            "intersects": false,
            "transformFlags": 0,
            "start": 0,
            "end": 49
        }
    ],
    "isModule": true,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "'>' expected.",
            "start": 25,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected",
            "start": 48,
            "length": 0
        }
    ],
    "intersects": false,
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 49
}
```

  
### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

  
### Diagnostics


```javascript

```

