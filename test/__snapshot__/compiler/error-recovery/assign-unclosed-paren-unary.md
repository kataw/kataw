# Kataw parser test case

## Input

`````js
++(!

++!{(

  !{(
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "++(!\n\n++!{(\n\n  !{(",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 65715,
                "operator": "++",
                "operand": {
                    "kind": 66224,
                    "expression": {
                        "kind": 65774,
                        "operator": "!",
                        "operand": {
                            "kind": 65715,
                            "operator": "++",
                            "operand": {
                                "kind": 65774,
                                "operator": "!",
                                "operand": {
                                    "kind": 1073807915,
                                    "expression": {
                                        "kind": 98984,
                                        "propertyList": {
                                            "kind": 65722,
                                            "properties": [],
                                            "trailingComma": false,
                                            "multiline": false,
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 10,
                                            "end": 10
                                        },
                                        "flags": 1,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 9,
                                        "end": 10
                                    },
                                    "typeArguments": null,
                                    "argumentList": {
                                        "kind": 3,
                                        "elements": [
                                            {
                                                "kind": 65774,
                                                "operator": "!",
                                                "operand": {
                                                    "kind": 1073807915,
                                                    "expression": {
                                                        "kind": 98984,
                                                        "propertyList": {
                                                            "kind": 65722,
                                                            "properties": [],
                                                            "trailingComma": false,
                                                            "multiline": false,
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 0,
                                                            "start": 17,
                                                            "end": 17
                                                        },
                                                        "flags": 1,
                                                        "symbol": null,
                                                        "transformFlags": 0,
                                                        "start": 16,
                                                        "end": 17
                                                    },
                                                    "typeArguments": null,
                                                    "argumentList": {
                                                        "kind": 3,
                                                        "elements": [],
                                                        "trailingComma": false,
                                                        "transformFlags": 0,
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "start": 18,
                                                        "end": 18
                                                    },
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 17,
                                                    "end": 18
                                                },
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 11,
                                                "end": 18
                                            }
                                        ],
                                        "trailingComma": false,
                                        "transformFlags": 0,
                                        "flags": 0,
                                        "symbol": null,
                                        "start": 16,
                                        "end": 18
                                    },
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 10,
                                    "end": 18
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 8,
                                "end": 18
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 4,
                            "end": 18
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 3,
                        "end": 18
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 2,
                    "end": 18
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 0,
                "end": 18
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 18
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "'}' expected.",
            "start": 10,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'}' expected.",
            "start": 17,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 18
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

