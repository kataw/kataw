# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
import {a: b} from "bar";
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "import {a: b} from \"bar\";",
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
                "start": 9,
                "end": 9
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
                                    "text": "a",
                                    "rawText": "a",
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
                            }
                        ],
                        "flags": 1,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 8,
                        "end": 9
                    },
                    "flags": 1,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 6,
                    "end": 9
                },
                "isTypeOnly": false,
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 6,
                "end": 9
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 6,
            "end": 9
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 196712,
                "text": "b",
                "rawText": "b",
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
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 196712,
                "text": "from",
                "rawText": "from",
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 13,
                "end": 18
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 13,
            "end": 18
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 4261583,
                "text": "bar",
                "rawText": "bar",
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 18,
                "end": 24
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 18,
            "end": 25
        }
    ],
    "isModule": true,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "',' expected.",
            "start": 9,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Declaration or statement expected",
            "start": 12,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 19,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 25
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

