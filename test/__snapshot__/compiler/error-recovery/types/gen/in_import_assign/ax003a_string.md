# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-15
- From: kataw15/test\__snapshot__/compiler/error-recovery/types/autogen.md
- Path: kataw15/test\__snapshot__\compiler\error-recovery\types\gen\in_import_assign
> :: test: in import assign
> :: case: a: string
## Input

`````js
import a: string = a: string ;
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "import a: string = a: string ;",
    "filename": "",
    "statements": [
        {
            "kind": 110,
            "fromClause": {
                "kind": 131322,
                "text": "",
                "flags": 3,
                "symbol": null,
                "transformFlags": 0,
                "start": 8,
                "end": 8
            },
            "moduleSpecifier": null,
            "importClause": {
                "kind": 109,
                "defaultBinding": {
                    "kind": 131102,
                    "text": "a",
                    "rawText": "a",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 1025,
                    "start": 6,
                    "end": 8
                },
                "nameSpaceImport": null,
                "namedImports": null,
                "isTypeOnly": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 6,
                "end": 8
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 8
        },
        {
            "kind": 2097292,
            "label": {
                "kind": 65550,
                "left": {
                    "kind": 196712,
                    "text": "string",
                    "rawText": "string",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 9,
                    "end": 16
                },
                "operator": "=",
                "right": {
                    "kind": 196712,
                    "text": "a",
                    "rawText": "a",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 18,
                    "end": 20
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 9,
                "end": 20
            },
            "statement": {
                "kind": 2097233,
                "expression": {
                    "kind": 196712,
                    "text": "string",
                    "rawText": "string",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 21,
                    "end": 28
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 21,
                "end": 30
            },
            "isWebCompat": true,
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 9,
            "end": 30
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "'from' expected.",
            "start": 8,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 30
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

