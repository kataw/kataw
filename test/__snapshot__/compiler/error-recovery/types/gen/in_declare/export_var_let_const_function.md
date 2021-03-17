# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-17
- From: kataw/test/__snapshot__/compiler/error-recovery/types/autogen.md
- Path: kataw/test/__snapshot__/compiler/error-recovery/types/gen/in_declare
> :: test: in declare
> :: case: export var let const function
## Input

`````js
declare export var let const function
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "declare export var let const function",
    "filename": "",
    "statements": [
        {
            "kind": 76,
            "declaration": {
                "kind": 2097397,
                "declarationList": {
                    "kind": 244,
                    "declarations": [
                        {
                            "kind": 16627,
                            "binding": {
                                "kind": 131102,
                                "text": "let",
                                "rawText": "let",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 1025,
                                "start": 18,
                                "end": 22
                            },
                            "exclamation": false,
                            "type": null,
                            "initializer": null,
                            "flags": 18,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 0,
                            "end": 22
                        }
                    ],
                    "flags": 1,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 18,
                    "end": 22
                },
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 14,
                "end": 22
            },
            "namedExports": null,
            "exportFromClause": null,
            "fromClause": null,
            "isTypeOnly": false,
            "flags": 402653185,
            "symbol": null,
            "transformFlags": 0,
            "start": 7,
            "end": 22
        },
        {
            "kind": 142,
            "binding": {
                "kind": 31,
                "lexicals": [],
                "flags": 40,
                "symbol": null,
                "transformFlags": 0,
                "start": 22,
                "end": 28
            },
            "flags": 41,
            "symbol": null,
            "transformFlags": 769,
            "start": 22,
            "end": 28
        },
        {
            "kind": 264284,
            "name": {
                "kind": 131102,
                "text": "",
                "rawText": "",
                "flags": 0,
                "symbol": null,
                "transformFlags": 1025,
                "start": 37,
                "end": 37
            },
            "formalParameters": {
                "kind": 90,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 37,
                "end": 37
            },
            "type": null,
            "contents": null,
            "typeParameters": null,
            "flags": 41,
            "symbol": null,
            "transformFlags": 2097152,
            "start": 28,
            "end": 37
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 29,
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

