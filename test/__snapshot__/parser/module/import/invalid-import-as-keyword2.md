# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
import { s as static } from 'm.js'
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
            "typeKeyword": null,
            "typeofKeyword": null,
            "fromClause": {
                "kind": 256,
                "fromKeyword": {
                    "kind": 16500,
                    "flags": 64,
                    "start": 22,
                    "end": 27
                },
                "from": {
                    "kind": 201392131,
                    "text": "m.js",
                    "rawText": "'m.js'",
                    "flags": 4194400,
                    "start": 27,
                    "end": 34
                },
                "flags": 0,
                "start": 22,
                "end": 34
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
                                "typeKeyword": null,
                                "moduleExportName": null,
                                "name": {
                                    "kind": 134299649,
                                    "text": "s",
                                    "rawText": "s",
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
                                    "text": "static",
                                    "rawText": "static",
                                    "flags": 96,
                                    "start": 13,
                                    "end": 20
                                },
                                "flags": 16,
                                "start": 8,
                                "end": 20
                            }
                        ],
                        "flags": 0,
                        "start": 8,
                        "end": 20
                    },
                    "flags": 16,
                    "start": 6,
                    "end": 22
                },
                "flags": 16,
                "start": 0,
                "end": 22
            },
            "flags": 80,
            "start": 0,
            "end": 34
        }
    ],
    "isModule": true,
    "source": "import { s as static } from 'm.js'",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 34
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected. Reserved word in strict mode - start: 13, end: 20

```

