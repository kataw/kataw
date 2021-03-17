# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-17
- From: kataw/test/__snapshot__/compiler/error-recovery/types/autogen.md
- Path: kataw/test/__snapshot__/compiler/error-recovery/types/gen/in_import_assign
> :: test: in import assign
> :: case: abstract class AbstractRule {
## Input

`````js
import abstract class AbstractRule { = abstract class AbstractRule { ;
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "import abstract class AbstractRule { = abstract class AbstractRule { ;",
    "filename": "",
    "statements": [
        {
            "kind": 110,
            "fromClause": {
                "kind": 65550,
                "left": {
                    "kind": 66099,
                    "name": {
                        "kind": 131102,
                        "text": "AbstractRule",
                        "rawText": "AbstractRule",
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 1025,
                        "start": 21,
                        "end": 34
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
                        "start": 36,
                        "end": 36
                    },
                    "decorators": null,
                    "flags": 1,
                    "symbol": null,
                    "transformFlags": 1,
                    "start": 15,
                    "end": 36
                },
                "operator": "=",
                "right": {
                    "kind": 196712,
                    "text": "abstract",
                    "rawText": "abstract",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 38,
                    "end": 47
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 15,
                "end": 47
            },
            "moduleSpecifier": null,
            "importClause": {
                "kind": 109,
                "defaultBinding": {
                    "kind": 131102,
                    "text": "abstract",
                    "rawText": "abstract",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 1025,
                    "start": 6,
                    "end": 15
                },
                "nameSpaceImport": null,
                "namedImports": null,
                "isTypeOnly": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 6,
                "end": 15
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 47
        },
        {
            "kind": 48,
            "name": {
                "kind": 131102,
                "text": "AbstractRule",
                "rawText": "AbstractRule",
                "flags": 0,
                "symbol": null,
                "transformFlags": 1025,
                "start": 53,
                "end": 66
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
                        "start": 68,
                        "end": 70
                    }
                ],
                "flags": 1,
                "symbol": null,
                "transformFlags": 1,
                "start": 68,
                "end": 70
            },
            "decorators": null,
            "isAbstract": false,
            "flags": 1,
            "symbol": null,
            "transformFlags": 1,
            "start": 47,
            "end": 70
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "'from' expected.",
            "start": 16,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'}' expected.",
            "start": 37,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 48,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'}' expected.",
            "start": 69,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 70
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

