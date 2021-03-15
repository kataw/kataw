# Kataw parser test case

## Input

`````js
wrap({.9:a, 0x84:b, 0b1:c, 0o27:d, 1e234:e});
`````

## Output

### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "wrap({.9:a, 0x84:b, 0b1:c, 0o27:d, 1e234:e});",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 1073807915,
                "expression": {
                    "kind": 196712,
                    "text": "wrap",
                    "rawText": "wrap",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 4
                },
                "typeArguments": null,
                "argumentList": {
                    "kind": 3,
                    "elements": [
                        {
                            "kind": 98984,
                            "propertyList": {
                                "kind": 65722,
                                "properties": [
                                    {
                                        "kind": 65721,
                                        "left": {
                                            "kind": 4261540,
                                            "text": 0.9,
                                            "rawText": ".9",
                                            "flags": 2048,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 6,
                                            "end": 8
                                        },
                                        "right": {
                                            "kind": 196712,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 9,
                                            "end": 10
                                        },
                                        "accessModifier": null,
                                        "decorators": null,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 6,
                                        "end": 10
                                    },
                                    {
                                        "kind": 65721,
                                        "left": {
                                            "kind": 4261540,
                                            "text": 132,
                                            "rawText": "0x84",
                                            "flags": 512,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 11,
                                            "end": 16
                                        },
                                        "right": {
                                            "kind": 196712,
                                            "text": "b",
                                            "rawText": "b",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 17,
                                            "end": 18
                                        },
                                        "accessModifier": null,
                                        "decorators": null,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 11,
                                        "end": 18
                                    },
                                    {
                                        "kind": 65721,
                                        "left": {
                                            "kind": 4261540,
                                            "text": 1,
                                            "rawText": "0b1",
                                            "flags": 256,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 19,
                                            "end": 23
                                        },
                                        "right": {
                                            "kind": 196712,
                                            "text": "c",
                                            "rawText": "c",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 24,
                                            "end": 25
                                        },
                                        "accessModifier": null,
                                        "decorators": null,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 19,
                                        "end": 25
                                    },
                                    {
                                        "kind": 65721,
                                        "left": {
                                            "kind": 4261540,
                                            "text": 23,
                                            "rawText": "0o27",
                                            "flags": 1024,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 26,
                                            "end": 31
                                        },
                                        "right": {
                                            "kind": 196712,
                                            "text": "d",
                                            "rawText": "d",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 32,
                                            "end": 33
                                        },
                                        "accessModifier": null,
                                        "decorators": null,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 26,
                                        "end": 33
                                    },
                                    {
                                        "kind": 65721,
                                        "left": {
                                            "kind": 4261540,
                                            "text": 1e+234,
                                            "rawText": "1e234",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 34,
                                            "end": 40
                                        },
                                        "right": {
                                            "kind": 196712,
                                            "text": "e",
                                            "rawText": "e",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 41,
                                            "end": 42
                                        },
                                        "accessModifier": null,
                                        "decorators": null,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 34,
                                        "end": 42
                                    }
                                ],
                                "trailingComma": false,
                                "multiline": false,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 6,
                                "end": 42
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 5,
                            "end": 43
                        }
                    ],
                    "trailingComma": false,
                    "transformFlags": 0,
                    "flags": 0,
                    "intersects": false,
                    "start": 6,
                    "end": 44
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 4,
                "end": 44
            },
            "flags": 0,
            "intersects": false,
            "transformFlags": 0,
            "start": 0,
            "end": 45
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
    "end": 45
}
```

  
### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

  
### Diagnostics


```javascript

```

