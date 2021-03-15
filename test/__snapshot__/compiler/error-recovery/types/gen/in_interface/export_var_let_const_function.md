# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-15
- From: kataw15/test\__snapshot__/compiler/error-recovery/types/autogen.md
- Path: kataw15/test\__snapshot__\compiler\error-recovery\types\gen\in_interface
> :: test: in interface
> :: case: export var let const function
## Input

`````js
interface export var let const function {}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "interface export var let const function {}",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 196712,
                "text": "interface",
                "rawText": "interface",
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 0,
                "end": 9
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 9
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
                                "start": 20,
                                "end": 24
                            },
                            "exclamation": false,
                            "type": null,
                            "initializer": null,
                            "flags": 20,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 0,
                            "end": 24
                        }
                    ],
                    "flags": 1,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 20,
                    "end": 24
                },
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 16,
                "end": 24
            },
            "namedExports": null,
            "exportFromClause": null,
            "fromClause": null,
            "isTypeOnly": false,
            "flags": 1,
            "symbol": null,
            "transformFlags": 0,
            "start": 9,
            "end": 24
        },
        {
            "kind": 142,
            "isConst": true,
            "binding": {
                "kind": 31,
                "bindingList": [],
                "flags": 8,
                "symbol": null,
                "transformFlags": 0,
                "start": 30,
                "end": 30
            },
            "flags": 9,
            "symbol": null,
            "transformFlags": 769,
            "start": 24,
            "end": 30
        },
        {
            "kind": 264284,
            "name": {
                "kind": 131102,
                "text": "",
                "rawText": "",
                "flags": 1,
                "symbol": null,
                "transformFlags": 1025,
                "start": 39,
                "end": 39
            },
            "formalParameters": {
                "kind": 90,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 39,
                "end": 39
            },
            "type": null,
            "contents": {
                "kind": 91,
                "functionStatementList": {
                    "kind": 94,
                    "statements": [],
                    "multiline": false,
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 41,
                    "end": 41
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 39,
                "end": 42
            },
            "typeParameters": null,
            "flags": 1,
            "symbol": null,
            "transformFlags": 256,
            "start": 30,
            "end": 42
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 10,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "',' expected.",
            "start": 25,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 31,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected",
            "start": 40,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 42
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

