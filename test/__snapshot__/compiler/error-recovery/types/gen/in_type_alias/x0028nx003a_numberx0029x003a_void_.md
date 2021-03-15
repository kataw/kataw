# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-15
- From: kataw15/test\__snapshot__/compiler/error-recovery/types/autogen.md
- Path: kataw15/test\__snapshot__\compiler\error-recovery\types\gen\in_type_alias
> :: test: in type alias
> :: case: (n: number): void;
## Input

`````js
type (n: number): void; = x extends (n: number): void;
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "type (n: number): void; = x extends (n: number): void;",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 1073807915,
                "expression": {
                    "kind": 196712,
                    "text": "type",
                    "rawText": "type",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 4
                },
                "typeArguments": null,
                "argumentList": {
                    "kind": 81929,
                    "elements": [
                        {
                            "kind": 16473,
                            "ellipsis": false,
                            "binding": {
                                "kind": 4325406,
                                "text": "n",
                                "rawText": "n",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 6,
                                "end": 7
                            },
                            "isOptional": false,
                            "type": {
                                "kind": 4202657,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 2097152,
                                "start": 8,
                                "end": 15
                            },
                            "initializer": null,
                            "decorators": null,
                            "accessModifier": null,
                            "isReadOnly": false,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1,
                            "start": 6,
                            "end": 15
                        }
                    ],
                    "type": {
                        "kind": 4202742,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 2097152,
                        "start": 17,
                        "end": 22
                    },
                    "accessModifier": null,
                    "trailingComma": false,
                    "flags": 1,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 7,
                    "end": 22
                },
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 4,
                "end": 22
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 23
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 196712,
                "text": "x",
                "rawText": "x",
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 25,
                "end": 27
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 25,
            "end": 27
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 81929,
                "elements": [
                    {
                        "kind": 16473,
                        "ellipsis": false,
                        "binding": {
                            "kind": 16473,
                            "ellipsis": false,
                            "binding": {
                                "kind": 196712,
                                "text": "n",
                                "rawText": "n",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 37,
                                "end": 38
                            },
                            "isOptional": false,
                            "type": {
                                "kind": 4202657,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 2097152,
                                "start": 39,
                                "end": 46
                            },
                            "initializer": null,
                            "decorators": null,
                            "accessModifier": null,
                            "isReadOnly": false,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1,
                            "start": 35,
                            "end": 46
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
                        "start": 35,
                        "end": 53
                    }
                ],
                "type": {
                    "kind": 4202742,
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 2097152,
                    "start": 48,
                    "end": 53
                },
                "accessModifier": null,
                "trailingComma": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 35,
                "end": 53
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 35,
            "end": 54
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "'=>' expected.",
            "start": 53,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 54
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

