# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
import {a, b} fromx "c"
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
            "fromClause": {
                "kind": 256,
                "fromKeyword": null,
                "from": {
                    "kind": 134299649,
                    "text": "fromx",
                    "rawText": "fromx",
                    "flags": 96,
                    "start": 13,
                    "end": 19
                },
                "flags": 0,
                "start": 13,
                "end": 19
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
                                "moduleExportName": null,
                                "name": null,
                                "asKeyword": null,
                                "binding": {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 96,
                                    "start": 8,
                                    "end": 9
                                },
                                "flags": 16,
                                "start": 8,
                                "end": 9
                            },
                            {
                                "kind": 264,
                                "moduleExportName": null,
                                "name": null,
                                "asKeyword": null,
                                "binding": {
                                    "kind": 134299649,
                                    "text": "b",
                                    "rawText": "b",
                                    "flags": 96,
                                    "start": 10,
                                    "end": 12
                                },
                                "flags": 16,
                                "start": 10,
                                "end": 12
                            }
                        ],
                        "flags": 0,
                        "start": 8,
                        "end": 12
                    },
                    "flags": 16,
                    "start": 6,
                    "end": 13
                },
                "flags": 16,
                "start": 0,
                "end": 13
            },
            "flags": 16,
            "start": 0,
            "end": 19
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "c",
                "rawText": "\"c\"",
                "flags": 96,
                "start": 19,
                "end": 23
            },
            "flags": 16,
            "start": 19,
            "end": 23
        }
    ],
    "isModule": true,
    "source": "import {a, b} fromx \"c\"",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 23
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expected a `;` - start: 19, end: 23

```

