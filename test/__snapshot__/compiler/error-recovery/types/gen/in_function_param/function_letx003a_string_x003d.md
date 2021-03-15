# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-15
- From: kataw15/test\__snapshot__/compiler/error-recovery/types/autogen.md
- Path: kataw15/test\__snapshot__\compiler\error-recovery\types\gen\in_function_param
> :: test: in function param
> :: case: function let: string =
## Input

`````js
function ( function let: string = ) ;
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "function ( function let: string = ) ;",
    "filename": "",
    "statements": [
        {
            "kind": 264284,
            "name": {
                "kind": 131102,
                "text": "",
                "rawText": "",
                "flags": 1,
                "symbol": null,
                "transformFlags": 1025,
                "start": 8,
                "end": 8
            },
            "formalParameters": {
                "kind": 90,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 10,
                "end": 19
            },
            "type": null,
            "contents": {
                "kind": 91,
                "functionStatementList": {
                    "kind": 94,
                    "statements": [
                        {
                            "kind": 2097292,
                            "label": {
                                "kind": 196712,
                                "text": "let",
                                "rawText": "let",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 19,
                                "end": 23
                            },
                            "statement": {
                                "kind": 2097233,
                                "expression": {
                                    "kind": 65550,
                                    "left": {
                                        "kind": 196712,
                                        "text": "string",
                                        "rawText": "string",
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 24,
                                        "end": 31
                                    },
                                    "operator": "=",
                                    "right": {
                                        "kind": 131322,
                                        "text": "",
                                        "flags": 3,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 33,
                                        "end": 33
                                    },
                                    "flags": 1,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 24,
                                    "end": 33
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 24,
                                "end": 33
                            },
                            "isWebCompat": true,
                            "flags": 1,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 19,
                            "end": 33
                        }
                    ],
                    "multiline": false,
                    "flags": 1,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 19,
                    "end": 33
                },
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 10,
                "end": 33
            },
            "typeParameters": null,
            "flags": 1,
            "symbol": null,
            "transformFlags": 256,
            "start": 0,
            "end": 33
        },
        {
            "kind": 6291526,
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 35,
            "end": 37
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected",
            "start": 34,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 37
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

