# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
import { a as arguments } from 'm.js';
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 263,
            "importKeyword": {
                "kind": 37814364,
                "flags": 80,
                "start": 0,
                "end": 6
            },
            "isType": false,
            "fromClause": {
                "kind": 256,
                "fromKeyword": {
                    "kind": 16500,
                    "flags": 80,
                    "start": 25,
                    "end": 30
                },
                "from": {
                    "kind": 201392131,
                    "text": "m.js",
                    "rawText": "'m.js'",
                    "flags": 4194400,
                    "start": 30,
                    "end": 37
                },
                "flags": 0,
                "start": 25,
                "end": 37
            },
            "moduleSpecifier": null,
            "importClause": {
                "kind": 262,
                "defaultBinding": null,
                "nameSpaceImport": null,
                "namedImports": {
                    "kind": 267,
                    "importsList": {
                        "kind": 265,
                        "specifiers": [
                            {
                                "kind": 264,
                                "isType": false,
                                "moduleExportName": null,
                                "name": {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 96,
                                    "start": 8,
                                    "end": 10
                                },
                                "asKeyword": {
                                    "kind": 16494,
                                    "flags": 80,
                                    "start": 10,
                                    "end": 13
                                },
                                "binding": {
                                    "kind": 134299649,
                                    "text": "arguments",
                                    "rawText": "arguments",
                                    "flags": 96,
                                    "start": 13,
                                    "end": 23
                                },
                                "flags": 16,
                                "start": 8,
                                "end": 23
                            }
                        ],
                        "flags": 0,
                        "start": 8,
                        "end": 23
                    },
                    "flags": 16,
                    "start": 6,
                    "end": 25
                },
                "flags": 16,
                "start": 0,
                "end": 25
            },
            "flags": 16,
            "start": 0,
            "end": 38
        }
    ],
    "isModule": true,
    "source": "import { a as arguments } from 'm.js';",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 38
}
```

### Printed

```javascript

import { a asarguments }  ;
```

### Diagnostics

```javascript
✔ No errors
```

