# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-14
- From: kataw/test/__snapshot__/compiler/error-recovery/types/autogen.md
- Path: kataw/test/__snapshot__/compiler/error-recovery/types/gen/in_import_assign
> :: test: in import assign
> :: case: export class C {
## Input

`````js
import export class C { = export class C { ;
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "import export class C { = export class C { ;",
    "filename": "",
    "statements": [
        {
            "kind": 110,
            "fromClause": null,
            "moduleSpecifier": null,
            "importClause": null,
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 6
        },
        {
            "kind": 76,
            "declaration": {
                "kind": 48,
                "name": {
                    "kind": 131102,
                    "text": "C",
                    "rawText": "C",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 1025,
                    "start": 19,
                    "end": 21
                },
                "typeParameters": null,
                "classHeritage": null,
                "implementClauses": null,
                "members": {
                    "kind": 50,
                    "elements": [],
                    "flags": 1,
                    "symbol": null,
                    "transformFlags": 1,
                    "start": 23,
                    "end": 23
                },
                "decorators": null,
                "isAbstract": false,
                "flags": 1,
                "symbol": null,
                "transformFlags": 1,
                "start": 13,
                "end": 23
            },
            "namedExports": null,
            "exportFromClause": null,
            "fromClause": null,
            "isTypeOnly": false,
            "flags": 1,
            "symbol": null,
            "transformFlags": 0,
            "start": 6,
            "end": 23
        },
        {
            "kind": 76,
            "declaration": {
                "kind": 48,
                "name": {
                    "kind": 131102,
                    "text": "C",
                    "rawText": "C",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 1025,
                    "start": 38,
                    "end": 40
                },
                "typeParameters": null,
                "classHeritage": null,
                "implementClauses": null,
                "members": {
                    "kind": 50,
                    "elements": [
                        {
                            "kind": 4194502,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 42,
                            "end": 44
                        }
                    ],
                    "flags": 1,
                    "symbol": null,
                    "transformFlags": 1,
                    "start": 42,
                    "end": 44
                },
                "decorators": null,
                "isAbstract": false,
                "flags": 1,
                "symbol": null,
                "transformFlags": 1,
                "start": 32,
                "end": 44
            },
            "namedExports": null,
            "exportFromClause": null,
            "fromClause": null,
            "isTypeOnly": false,
            "flags": 1,
            "symbol": null,
            "transformFlags": 0,
            "start": 25,
            "end": 44
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "Unexpected token.",
            "start": 7,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'}' expected.",
            "start": 24,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'}' expected.",
            "start": 43,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 44
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

