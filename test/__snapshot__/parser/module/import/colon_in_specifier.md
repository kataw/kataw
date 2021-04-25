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
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 263,
            "importKeyword": {
                "kind": 37814364,
                "flags": 768,
                "start": 0,
                "end": 6
            },
            "fromClause": {
                "kind": 16637,
                "text": "",
                "autofix": 0,
                "flags": 12,
                "start": 9,
                "end": 9
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
                                "binding": {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 512,
                                    "start": 8,
                                    "end": 9
                                },
                                "flags": 128,
                                "autofix": 0,
                                "start": 8,
                                "end": 9
                            }
                        ],
                        "autofix": 0,
                        "flags": 0,
                        "start": 8,
                        "end": 9
                    },
                    "autofix": 0,
                    "flags": 128,
                    "start": 6,
                    "end": 9
                },
                "autofix": 0,
                "flags": 128,
                "start": 6,
                "end": 9
            },
            "flags": 128,
            "start": 6,
            "end": 9
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "b",
                "rawText": "b",
                "flags": 768,
                "start": 10,
                "end": 12
            },
            "flags": 128,
            "start": 10,
            "end": 12
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "from",
                "rawText": "from",
                "flags": 768,
                "start": 13,
                "end": 18
            },
            "flags": 128,
            "start": 13,
            "end": 18
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "bar",
                "rawText": "bar",
                "flags": 768,
                "start": 18,
                "end": 24
            },
            "flags": 128,
            "start": 18,
            "end": 25
        }
    ],
    "isModule": true,
    "text": "import {a: b} from \"bar\";",
    "fileName": "__root__",
    "flags": 0,
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
@{x2716}@ Unexpected token. - start: 9, end: 10
@{x2716}@ Unexpected token. - start: 9, end: 10
@{x2716}@ Unexpected token. - start: 9, end: 10
@{x2716}@ Expression expected - start: 9, end: 10
@{x2716}@ Unexpected token. - start: 9, end: 10
@{x2716}@ Statement expected - start: 9, end: 10
@{x2716}@ Statement expected - start: 12, end: 13
@{x2716}@ Unexpected token. - start: 18, end: 24

```

