# Kataw parser test case

## Input

`````js
result = { __proto__: x, __proto__: y } = value;

result = ({ __proto__: x, __proto__: y } = value);
`````

## Output

### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "result = { __proto__: x, __proto__: y } = value;\n\nresult = ({ __proto__: x, __proto__: y } = value);",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 65550,
                "left": {
                    "kind": 196712,
                    "text": "result",
                    "rawText": "result",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 6
                },
                "operator": "=",
                "right": {
                    "kind": 65550,
                    "left": {
                        "kind": 98984,
                        "propertyList": {
                            "kind": 65722,
                            "properties": [
                                {
                                    "kind": 65721,
                                    "left": {
                                        "kind": 196711,
                                        "text": "__proto__",
                                        "rawText": "__proto__",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 10,
                                        "end": 20
                                    },
                                    "right": {
                                        "kind": 196712,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 21,
                                        "end": 23
                                    },
                                    "accessModifier": null,
                                    "decorators": null,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 10,
                                    "end": 23
                                },
                                {
                                    "kind": 65721,
                                    "left": {
                                        "kind": 196711,
                                        "text": "__proto__",
                                        "rawText": "__proto__",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 24,
                                        "end": 34
                                    },
                                    "right": {
                                        "kind": 196712,
                                        "text": "y",
                                        "rawText": "y",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 35,
                                        "end": 37
                                    },
                                    "accessModifier": null,
                                    "decorators": null,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 24,
                                    "end": 37
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 10,
                            "end": 37
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 8,
                        "end": 39
                    },
                    "operator": "=",
                    "right": {
                        "kind": 196712,
                        "text": "value",
                        "rawText": "value",
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 41,
                        "end": 47
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 8,
                    "end": 47
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 47
            },
            "flags": 0,
            "intersects": false,
            "transformFlags": 0,
            "start": 0,
            "end": 48
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 65550,
                "left": {
                    "kind": 196712,
                    "text": "result",
                    "rawText": "result",
                    "flags": 32768,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 48,
                    "end": 56
                },
                "operator": "=",
                "right": {
                    "kind": 66224,
                    "expression": {
                        "kind": 65550,
                        "left": {
                            "kind": 98984,
                            "propertyList": {
                                "kind": 65722,
                                "properties": [
                                    {
                                        "kind": 65721,
                                        "left": {
                                            "kind": 196711,
                                            "text": "__proto__",
                                            "rawText": "__proto__",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 61,
                                            "end": 71
                                        },
                                        "right": {
                                            "kind": 196712,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 72,
                                            "end": 74
                                        },
                                        "accessModifier": null,
                                        "decorators": null,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 61,
                                        "end": 74
                                    },
                                    {
                                        "kind": 65721,
                                        "left": {
                                            "kind": 196711,
                                            "text": "__proto__",
                                            "rawText": "__proto__",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 75,
                                            "end": 85
                                        },
                                        "right": {
                                            "kind": 196712,
                                            "text": "y",
                                            "rawText": "y",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 86,
                                            "end": 88
                                        },
                                        "accessModifier": null,
                                        "decorators": null,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 75,
                                        "end": 88
                                    }
                                ],
                                "trailingComma": false,
                                "multiline": false,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 61,
                                "end": 88
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 60,
                            "end": 90
                        },
                        "operator": "=",
                        "right": {
                            "kind": 196712,
                            "text": "value",
                            "rawText": "value",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 92,
                            "end": 98
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 58,
                        "end": 98
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 58,
                    "end": 99
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 48,
                "end": 99
            },
            "flags": 0,
            "intersects": false,
            "transformFlags": 0,
            "start": 48,
            "end": 100
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
    "end": 100
}
```

  
### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

  
### Diagnostics


```javascript

```

