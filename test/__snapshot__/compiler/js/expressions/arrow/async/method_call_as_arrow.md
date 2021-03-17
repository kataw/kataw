# Kataw parser test case

## Input

`````js
({ident: [foo, bar].join("")}) => x
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "({ident: [foo, bar].join(\"\")}) => x",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 83976,
                "typeParameters": null,
                "parameters": {
                    "kind": 81929,
                    "elements": [
                        {
                            "kind": 16473,
                            "ellipsis": false,
                            "binding": {
                                "kind": 33554598,
                                "propertyList": {
                                    "kind": 33,
                                    "properties": [
                                        {
                                            "kind": 16412,
                                            "left": {
                                                "kind": 4325406,
                                                "text": "ident",
                                                "rawText": "ident",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 2,
                                                "end": 7
                                            },
                                            "right": {
                                                "kind": 1073807915,
                                                "expression": {
                                                    "kind": 67175096,
                                                    "member": {
                                                        "kind": 98822,
                                                        "elementList": {
                                                            "kind": 65605,
                                                            "elements": [
                                                                {
                                                                    "kind": 196712,
                                                                    "text": "foo",
                                                                    "rawText": "foo",
                                                                    "flags": 0,
                                                                    "symbol": null,
                                                                    "transformFlags": 0,
                                                                    "start": 10,
                                                                    "end": 13
                                                                },
                                                                {
                                                                    "kind": 196712,
                                                                    "text": "bar",
                                                                    "rawText": "bar",
                                                                    "flags": 0,
                                                                    "symbol": null,
                                                                    "transformFlags": 0,
                                                                    "start": 14,
                                                                    "end": 18
                                                                }
                                                            ],
                                                            "trailingComma": false,
                                                            "multiline": false,
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
                                                        "end": 19
                                                    },
                                                    "expression": {
                                                        "kind": 196711,
                                                        "text": "join",
                                                        "rawText": "join",
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 0,
                                                        "start": 20,
                                                        "end": 24
                                                    },
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 19,
                                                    "end": 24,
                                                    "period": {
                                                        "kind": 255,
                                                        "pos": 19,
                                                        "end": 20
                                                    }
                                                },
                                                "typeArguments": null,
                                                "argumentList": {
                                                    "kind": 3,
                                                    "elements": [
                                                        {
                                                            "kind": 4261583,
                                                            "text": "",
                                                            "rawText": "",
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 0,
                                                            "start": 25,
                                                            "end": 27
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "transformFlags": 0,
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "start": 27,
                                                    "end": 28
                                                },
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 24,
                                                "end": 28
                                            },
                                            "accessModifier": null,
                                            "decorators": null,
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 2,
                                            "end": 28
                                        }
                                    ],
                                    "trailingComma": false,
                                    "multiline": false,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 2,
                                    "end": 28
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 1,
                                "end": 29
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
                            "start": 0,
                            "end": 30
                        }
                    ],
                    "type": null,
                    "accessModifier": null,
                    "trailingComma": false,
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 30
                },
                "contents": {
                    "kind": 196712,
                    "text": "x",
                    "rawText": "x",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 33,
                    "end": 35
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 0,
                "end": 35
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 35
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
    "end": 35
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

