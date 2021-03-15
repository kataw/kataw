# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-15
- From: kataw15/test\__snapshot__/compiler/js/expressions/binary/autogen.md
- Path: kataw15/test\__snapshot__\compiler\js\expressions\binary\gen\rest_param_destructuring
> :: test: rest param destructuring
> :: case: a instanceof b + c
## Input

`````js
([ ... a instanceof b + c ]) => x
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "([ ... a instanceof b + c ]) => x",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
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
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 2,
                                            "start": 2,
                                            "end": 25,
                                            "ellipsis": true,
                                            "left": {
                                                "kind": 65563,
                                                "left": {
                                                    "kind": 196712,
                                                    "text": "a",
                                                    "rawText": "a",
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 6,
                                                    "end": 8
                                                },
                                                "operator": "instanceof",
                                                "right": {
                                                    "kind": 65563,
                                                    "left": {
                                                        "kind": 196712,
                                                        "text": "b",
                                                        "rawText": "b",
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 0,
                                                        "start": 19,
                                                        "end": 21
                                                    },
                                                    "operator": "+",
                                                    "right": {
                                                        "kind": 196712,
                                                        "text": "c",
                                                        "rawText": "c",
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 0,
                                                        "start": 23,
                                                        "end": 25
                                                    },
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 21,
                                                    "end": 25
                                                },
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 6,
                                                "end": 25
                                            },
                                            "right": null
                                        }
                                    ],
                                    "trailingComma": false,
                                    "multiline": false,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 2,
                                    "end": 25
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 1,
                                "end": 27
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
                            "end": 28
                        }
                    ],
                    "type": null,
                    "accessModifier": null,
                    "trailingComma": false,
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 28
                },
                "contents": {
                    "kind": 196712,
                    "text": "x",
                    "rawText": "x",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 31,
                    "end": 33
                },
                "flags": 1073741824,
                "symbol": null,
                "transformFlags": 0,
                "start": 0,
                "end": 33
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 33
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
    "end": 33
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

