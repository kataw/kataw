# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
import * as foo from "foo";
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
                "flags": 0,
                "start": 0,
                "end": 6
            },
            "fromClause": {
                "kind": 134299649,
                "text": "foo",
                "rawText": "foo",
                "flags": 96,
                "start": 11,
                "end": 15
            },
            "moduleSpecifier": null,
            "importClause": {
                "kind": 262,
                "defaultBinding": null,
                "nameSpaceImport": {
                    "kind": 134299649,
                    "text": "as",
                    "rawText": "as",
                    "flags": 96,
                    "start": 8,
                    "end": 11
                },
                "namedImports": null,
                "flags": 16,
                "start": 6,
                "end": 11
            },
            "flags": 16,
            "start": 6,
            "end": 15
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "from",
                "rawText": "from",
                "flags": 96,
                "start": 15,
                "end": 20
            },
            "flags": 16,
            "start": 15,
            "end": 20
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "foo",
                "rawText": "foo",
                "flags": 96,
                "start": 20,
                "end": 26
            },
            "flags": 16,
            "start": 20,
            "end": 27
        }
    ],
    "isModule": true,
    "text": "import * as foo from \"foo\";",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 27
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✔ No errors
```

