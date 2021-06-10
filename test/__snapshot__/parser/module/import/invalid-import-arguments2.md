# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
import { arguments } from 'm.js';
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
                    "start": 20,
                    "end": 25
                },
                "from": {
                    "kind": 201392131,
                    "text": "m.js",
                    "rawText": "'m.js'",
                    "flags": 4194400,
                    "start": 25,
                    "end": 32
                },
                "flags": 0,
                "start": 20,
                "end": 32
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
                                "name": null,
                                "asKeyword": null,
                                "binding": {
                                    "kind": 134299649,
                                    "text": "arguments",
                                    "rawText": "arguments",
                                    "flags": 96,
                                    "start": 8,
                                    "end": 18
                                },
                                "flags": 16,
                                "start": 8,
                                "end": 18
                            }
                        ],
                        "flags": 0,
                        "start": 8,
                        "end": 18
                    },
                    "flags": 16,
                    "start": 6,
                    "end": 20
                },
                "flags": 16,
                "start": 0,
                "end": 20
            },
            "flags": 80,
            "start": 0,
            "end": 33
        }
    ],
    "isModule": true,
    "source": "import { arguments } from 'm.js';",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 33
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ 'eval' and 'arguments' cannot be used as an identifier here - start: 8, end: 20

```

