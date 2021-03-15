# Kataw parser test case

## Options

`````js
{ jsx: false, disableWebCompat: true, module: true }
`````

## Input

`````js
f = ([[,] = g()]) => {};
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "f = ([[,] = g()]) => {};",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 65550,
                "left": {
                    "kind": 196712,
                    "text": "f",
                    "rawText": "f",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 1
                },
                "operator": "=",
                "right": {
                    "kind": 83976,
                    "typeParameters": null,
                    "arrowParameters": {
                        "kind": 81929,
                        "elements": [
                            {
                                "kind": 16473,
                                "ellipsis": false,
                                "binding": {
                                    "kind": 33554437,
                                    "elementList": {
                                        "kind": 29,
                                        "elements": [
                                            {
                                                "kind": 16412,
                                                "left": {
                                                    "kind": 33554437,
                                                    "elementList": {
                                                        "kind": 29,
                                                        "elements": [
                                                            {
                                                                "kind": 4276394,
                                                                "flags": 0,
                                                                "symbol": null,
                                                                "transformFlags": 0,
                                                                "start": 7,
                                                                "end": 7
                                                            }
                                                        ],
                                                        "trailingComma": true,
                                                        "multiline": false,
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 0,
                                                        "start": 7,
                                                        "end": 8
                                                    },
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 6,
                                                    "end": 9
                                                },
                                                "right": {
                                                    "kind": 1073807915,
                                                    "expression": {
                                                        "kind": 196712,
                                                        "text": "g",
                                                        "rawText": "g",
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 0,
                                                        "start": 11,
                                                        "end": 13
                                                    },
                                                    "typeArguments": null,
                                                    "argumentList": {
                                                        "kind": 3,
                                                        "elements": [],
                                                        "trailingComma": false,
                                                        "transformFlags": 0,
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "start": 15,
                                                        "end": 15
                                                    },
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 13,
                                                    "end": 15
                                                },
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 6,
                                                "end": 15
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": false,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 6,
                                        "end": 15
                                    },
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 5,
                                    "end": 16
                                },
                                "isOptional": false,
                                "type": null,
                                "initializer": null,
                                "decorators": null,
                                "accessModifier": null,
                                "isReadOnly": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 1,
                                "start": 3,
                                "end": 17
                            }
                        ],
                        "type": null,
                        "accessModifier": null,
                        "trailingComma": false,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 3,
                        "end": 17
                    },
                    "contents": {
                        "kind": 91,
                        "functionStatementList": {
                            "kind": 94,
                            "statements": [],
                            "multiline": false,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 22,
                            "end": 22
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 20,
                        "end": 23
                    },
                    "flags": 1073741824,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 3,
                    "end": 23
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 0,
                "end": 23
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 24
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 24
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

