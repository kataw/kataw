# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
import { for } from "iteration"
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
                "flags": 0,
                "start": 0,
                "end": 6
            },
            "fromClause": {
                "kind": 256,
                "fromKeyword": {
                    "kind": 16500,
                    "flags": 0,
                    "start": 14,
                    "end": 19
                },
                "from": {
                    "kind": 201392131,
                    "text": "iteration",
                    "rawText": "\"iteration\"",
                    "flags": 96,
                    "start": 19,
                    "end": 31
                },
                "flags": 0,
                "start": 14,
                "end": 31
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
                                    "text": "for",
                                    "rawText": "for",
                                    "flags": 96,
                                    "start": 8,
                                    "end": 12
                                },
                                "flags": 16,
                                "start": 8,
                                "end": 12
                            }
                        ],
                        "flags": 0,
                        "start": 8,
                        "end": 12
                    },
                    "flags": 16,
                    "start": 6,
                    "end": 14
                },
                "flags": 16,
                "start": 6,
                "end": 14
            },
            "flags": 16,
            "start": 6,
            "end": 31
        }
    ],
    "isModule": true,
    "source": "import { for } from \"iteration\"",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 31
}
```

### Printed

```javascript

  for }  ;
```

### Diagnostics

```javascript
✔ No errors
```

