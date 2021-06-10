# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
import { a } from;
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
                    "start": 12,
                    "end": 17
                },
                "from": {
                    "kind": 16637,
                    "text": "",
                    "flags": 64,
                    "start": 17,
                    "end": 17
                },
                "flags": 0,
                "start": 12,
                "end": 17
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
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 96,
                                    "start": 8,
                                    "end": 10
                                },
                                "flags": 16,
                                "start": 8,
                                "end": 10
                            }
                        ],
                        "flags": 0,
                        "start": 8,
                        "end": 10
                    },
                    "flags": 16,
                    "start": 6,
                    "end": 12
                },
                "flags": 16,
                "start": 0,
                "end": 12
            },
            "flags": 80,
            "start": 0,
            "end": 18
        }
    ],
    "isModule": true,
    "source": "import { a } from;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 18
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 17, end: 18

```

