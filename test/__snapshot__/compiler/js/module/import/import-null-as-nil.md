# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
import { null as nil } from "bar"
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "import { null as nil } from \"bar\"",
    "filename": "",
    "statements": [
        {
            "kind": 110,
            "fromClause": {
                "kind": 4261583,
                "text": "bar",
                "rawText": "bar",
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 27,
                "end": 33
            },
            "moduleSpecifier": null,
            "importClause": {
                "kind": 109,
                "defaultBinding": null,
                "nameSpaceImport": null,
                "namedImports": {
                    "kind": 153,
                    "importsList": {
                        "kind": 115,
                        "specifiers": [
                            {
                                "kind": 113,
                                "moduleExportName": null,
                                "name": {
                                    "kind": 196711,
                                    "text": "null",
                                    "rawText": "null",
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 8,
                                    "end": 13
                                },
                                "binding": {
                                    "kind": 131102,
                                    "text": "nil",
                                    "rawText": "nil",
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 1025,
                                    "start": 16,
                                    "end": 20
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 8,
                                "end": 20
                            }
                        ],
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 8,
                        "end": 20
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 6,
                    "end": 22
                },
                "isTypeOnly": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 6,
                "end": 22
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 6,
            "end": 33
        }
    ],
    "isModule": true,
    "printable": true,
    "diagnostics": [],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 33
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

