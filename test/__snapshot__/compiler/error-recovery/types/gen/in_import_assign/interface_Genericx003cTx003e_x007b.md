# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-15
- From: kataw15/test\__snapshot__/compiler/error-recovery/types/autogen.md
- Path: kataw15/test\__snapshot__\compiler\error-recovery\types\gen\in_import_assign
> :: test: in import assign
> :: case: interface Generic<T> {
## Input

`````js
import interface Generic<T> { = interface Generic<T> { ;
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "import interface Generic<T> { = interface Generic<T> { ;",
    "filename": "",
    "statements": [
        {
            "kind": 110,
            "fromClause": {
                "kind": 65550,
                "left": {
                    "kind": 65563,
                    "left": {
                        "kind": 65563,
                        "left": {
                            "kind": 196712,
                            "text": "Generic",
                            "rawText": "Generic",
                            "flags": 1,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 16,
                            "end": 24
                        },
                        "operator": "<",
                        "right": {
                            "kind": 196712,
                            "text": "T",
                            "rawText": "T",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 25,
                            "end": 26
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 16,
                        "end": 26
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
                            "start": 29,
                            "end": 29
                        },
                        "flags": 1,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 27,
                        "end": 29
                    },
                    "flags": 1,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 16,
                    "end": 29
                },
                "operator": "=",
                "right": {
                    "kind": 196712,
                    "text": "interface",
                    "rawText": "interface",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 31,
                    "end": 41
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 16,
                "end": 41
            },
            "moduleSpecifier": null,
            "importClause": {
                "kind": 109,
                "defaultBinding": {
                    "kind": 131102,
                    "text": "interface",
                    "rawText": "interface",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 1025,
                    "start": 6,
                    "end": 16
                },
                "nameSpaceImport": null,
                "namedImports": null,
                "isTypeOnly": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 6,
                "end": 16
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 41
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 65563,
                "left": {
                    "kind": 65563,
                    "left": {
                        "kind": 196712,
                        "text": "Generic",
                        "rawText": "Generic",
                        "flags": 1,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 41,
                        "end": 49
                    },
                    "operator": "<",
                    "right": {
                        "kind": 196712,
                        "text": "T",
                        "rawText": "T",
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 50,
                        "end": 51
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 41,
                    "end": 51
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
                        "start": 54,
                        "end": 54
                    },
                    "flags": 1,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 52,
                    "end": 54
                },
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 41,
                "end": 54
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 41,
            "end": 56
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "'}' expected.",
            "start": 55,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 56
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

