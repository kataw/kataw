# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-17
- From: kataw/test/__snapshot__/compiler/error-recovery/types/autogen.md
- Path: kataw/test/__snapshot__/compiler/error-recovery/types/gen/in_import_assign
> :: test: in import assign
> :: case: never break?=
## Input

`````js
import never break?= = never break?= ;
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "import never break?= = never break?= ;",
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
                "start": 12,
                "end": 12
            },
            "moduleSpecifier": null,
            "importClause": {
                "kind": 109,
                "defaultBinding": {
                    "kind": 131102,
                    "text": "never",
                    "rawText": "never",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 1025,
                    "start": 6,
                    "end": 12
                },
                "nameSpaceImport": null,
                "namedImports": null,
                "isTypeOnly": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 6,
                "end": 12
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 6,
            "end": 12
        },
        {
            "kind": 2097193,
            "label": {
                "kind": 131322,
                "text": "",
                "flags": 3,
                "symbol": null,
                "transformFlags": 0,
                "start": 18,
                "end": 18
            },
            "flags": 1,
            "symbol": null,
            "transformFlags": 0,
            "start": 12,
            "end": 18
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 196712,
                "text": "never",
                "rawText": "never",
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 22,
                "end": 28
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 22,
            "end": 28
        },
        {
            "kind": 2097193,
            "label": {
                "kind": 131322,
                "text": "",
                "flags": 3,
                "symbol": null,
                "transformFlags": 0,
                "start": 34,
                "end": 34
            },
            "flags": 1,
            "symbol": null,
            "transformFlags": 0,
            "start": 28,
            "end": 34
        },
        {
            "kind": 6291526,
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 36,
            "end": 38
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "'from' expected.",
            "start": 13,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected",
            "start": 18,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Declaration or statement expected",
            "start": 19,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Declaration or statement expected",
            "start": 21,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 29,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected",
            "start": 34,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Declaration or statement expected",
            "start": 35,
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

