# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
import {x, z,} from "y"
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "import {x, z,} from \"y\"",
    "filename": "",
    "statements": [
        {
            "kind": 110,
            "fromClause": {
                "kind": 4261583,
                "text": "y",
                "rawText": "y",
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 19,
                "end": 23
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
                                "name": null,
                                "binding": {
                                    "kind": 4325406,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 8,
                                    "end": 9
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 8,
                                "end": 9
                            },
                            {
                                "kind": 113,
                                "moduleExportName": null,
                                "name": null,
                                "binding": {
                                    "kind": 4325406,
                                    "text": "z",
                                    "rawText": "z",
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 10,
                                    "end": 12
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 10,
                                "end": 12
                            }
                        ],
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 8,
                        "end": 13
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 6,
                    "end": 14
                },
                "isTypeOnly": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 6,
                "end": 14
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 6,
            "end": 23
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
    "end": 23
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

