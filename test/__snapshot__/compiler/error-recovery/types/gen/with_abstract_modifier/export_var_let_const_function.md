# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-17
- From: kataw/test/__snapshot__/compiler/error-recovery/types/autogen.md
- Path: kataw/test/__snapshot__/compiler/error-recovery/types/gen/with_abstract_modifier
> :: test: with abstract modifier
> :: case: export var let const function
## Input

`````js
absrtact export var let const function
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "absrtact export var let const function",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 196712,
                "text": "absrtact",
                "rawText": "absrtact",
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 0,
                "end": 8
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 8
        },
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
                                "start": 19,
                                "end": 23
                            },
                            "exclamation": false,
                            "type": null,
                            "initializer": null,
                            "flags": 19,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 0,
                            "end": 23
                        }
                    ],
                    "flags": 1,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 19,
                    "end": 23
                },
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 15,
                "end": 23
            },
            "namedExports": null,
            "exportFromClause": null,
            "fromClause": null,
            "isTypeOnly": false,
            "flags": 1,
            "symbol": null,
            "transformFlags": 0,
            "start": 8,
            "end": 23
        },
        {
            "kind": 142,
            "binding": {
                "kind": 31,
                "lexicals": [],
                "flags": 40,
                "symbol": null,
                "transformFlags": 0,
                "start": 23,
                "end": 29
            },
            "flags": 41,
            "symbol": null,
            "transformFlags": 769,
            "start": 23,
            "end": 29
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
                "start": 38,
                "end": 38
            },
            "formalParameters": {
                "kind": 90,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 38,
                "end": 38
            },
            "type": null,
            "contents": null,
            "typeParameters": null,
            "flags": 41,
            "symbol": null,
            "transformFlags": 2097152,
            "start": 29,
            "end": 38
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 30,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 38
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

