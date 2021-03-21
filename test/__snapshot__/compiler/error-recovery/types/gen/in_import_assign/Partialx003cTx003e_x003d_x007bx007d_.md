# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-17
- From: kataw/test/__snapshot__/compiler/error-recovery/types/autogen.md
- Path: kataw/test/__snapshot__/compiler/error-recovery/types/gen/in_import_assign
> :: test: in import assign
> :: case:  Partial<T> = {};
## Input

`````js
import  Partial<T> = {}; =  Partial<T> = {}; ;
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "import  Partial<T> = {}; =  Partial<T> = {}; ;",
    "filename": "",
    "statements": [
        {
            "kind": 110,
            "fromClause": {
                "kind": 65550,
                "left": {
                    "kind": 134291684,
                    "type": {
                        "kind": 134226156,
                        "typeName": {
                            "kind": 196711,
                            "text": "T",
                            "rawText": "T",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 16,
                            "end": 17
                        },
                        "typeArguments": null,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 2097152,
                        "start": 16,
                        "end": 18
                    },
                    "expression": {
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
                    "transformFlags": 2097152,
                    "start": 15,
                    "end": 18
                },
                "operator": "=",
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
                        "start": 22,
                        "end": 22
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 20,
                    "end": 23
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 15,
                "end": 23
            },
            "moduleSpecifier": null,
            "importClause": {
                "kind": 109,
                "defaultBinding": {
                    "kind": 131102,
                    "text": "Partial",
                    "rawText": "Partial",
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
            "start": 6,
            "end": 24
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 65550,
                "left": {
                    "kind": 65563,
                    "left": {
                        "kind": 65563,
                        "left": {
                            "kind": 196712,
                            "text": "Partial",
                            "rawText": "Partial",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 26,
                            "end": 35
                        },
                        "operator": "<",
                        "right": {
                            "kind": 196712,
                            "text": "T",
                            "rawText": "T",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 36,
                            "end": 37
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 26,
                        "end": 37
                    },
                    "operator": ">",
                    "right": {
                        "kind": 131322,
                        "text": "",
                        "flags": 3,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 38,
                        "end": 38
                    },
                    "flags": 1,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 26,
                    "end": 38
                },
                "operator": "=",
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
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 40,
                    "end": 43
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 26,
                "end": 43
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 26,
            "end": 44
        },
        {
            "kind": 6291526,
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 44,
            "end": 46
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected",
            "start": 39,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 46
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

