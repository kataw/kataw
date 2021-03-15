# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-15
- From: kataw15/test\__snapshot__/compiler/error-recovery/types/autogen.md
- Path: kataw15/test\__snapshot__\compiler\error-recovery\types\gen\export_assign
> :: test: export assign
> :: case: function let: string =
## Input

`````js
export function let: string = = function let: string =
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "export function let: string = = function let: string =",
    "filename": "",
    "statements": [
        {
            "kind": 76,
            "declaration": {
                "kind": 264284,
                "name": {
                    "kind": 131102,
                    "text": "let",
                    "rawText": "let",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 1025,
                    "start": 15,
                    "end": 19
                },
                "formalParameters": {
                    "kind": 90,
                    "formalParameterList": [],
                    "trailingComma": false,
                    "flags": 1,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 19,
                    "end": 19
                },
                "type": {
                    "kind": 4202702,
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 2097152,
                    "start": 20,
                    "end": 27
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
                        "start": 29,
                        "end": 29
                    },
                    "flags": 1,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 27,
                    "end": 29
                },
                "typeParameters": null,
                "flags": 1,
                "symbol": null,
                "transformFlags": 256,
                "start": 6,
                "end": 29
            },
            "namedExports": null,
            "exportFromClause": null,
            "fromClause": null,
            "isTypeOnly": false,
            "flags": 1,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 29
        },
        {
            "kind": 264284,
            "name": {
                "kind": 131102,
                "text": "let",
                "rawText": "let",
                "flags": 0,
                "symbol": null,
                "transformFlags": 1025,
                "start": 40,
                "end": 44
            },
            "formalParameters": {
                "kind": 90,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 44,
                "end": 44
            },
            "type": {
                "kind": 4202702,
                "flags": 0,
                "symbol": null,
                "transformFlags": 2097152,
                "start": 45,
                "end": 52
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
                    "start": 54,
                    "end": 54
                },
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 52,
                "end": 54
            },
            "typeParameters": null,
            "flags": 1,
            "symbol": null,
            "transformFlags": 256,
            "start": 31,
            "end": 54
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "'}' expected.",
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

