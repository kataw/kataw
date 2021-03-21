# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-17
- From: kataw/test/__snapshot__/compiler/error-recovery/types/autogen.md
- Path: kataw/test/__snapshot__/compiler/error-recovery/types/gen/in_import_assign
> :: test: in import assign
> :: case: IActionMessage>{
## Input

`````js
import IActionMessage>{ = IActionMessage>{ ;
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "import IActionMessage>{ = IActionMessage>{ ;",
    "filename": "",
    "statements": [
        {
            "kind": 110,
            "fromClause": {
                "kind": 65550,
                "left": {
                    "kind": 65563,
                    "left": {
                        "kind": 131322,
                        "text": "",
                        "flags": 3,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 21,
                        "end": 21
                    },
                    "operator": ">",
                    "right": {
                        "kind": 98984,
                        "propertyList": {
                            "kind": 65722,
                            "properties": [],
                            "trailingComma": false,
                            "multiline": false,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 23,
                            "end": 23
                        },
                        "flags": 1,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 22,
                        "end": 23
                    },
                    "flags": 1,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 21,
                    "end": 23
                },
                "operator": "=",
                "right": {
                    "kind": 65563,
                    "left": {
                        "kind": 196712,
                        "text": "IActionMessage",
                        "rawText": "IActionMessage",
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 25,
                        "end": 40
                    },
                    "operator": ">",
                    "right": {
                        "kind": 98984,
                        "propertyList": {
                            "kind": 65722,
                            "properties": [],
                            "trailingComma": false,
                            "multiline": false,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 42,
                            "end": 42
                        },
                        "flags": 1,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 41,
                        "end": 42
                    },
                    "flags": 1,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 25,
                    "end": 42
                },
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 21,
                "end": 42
            },
            "moduleSpecifier": null,
            "importClause": {
                "kind": 109,
                "defaultBinding": {
                    "kind": 131102,
                    "text": "IActionMessage",
                    "rawText": "IActionMessage",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 1025,
                    "start": 6,
                    "end": 21
                },
                "nameSpaceImport": null,
                "namedImports": null,
                "isTypeOnly": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 6,
                "end": 21
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 6,
            "end": 44
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "'from' expected.",
            "start": 21,
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

