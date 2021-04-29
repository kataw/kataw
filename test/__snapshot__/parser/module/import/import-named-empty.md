# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
import {} from "foo";
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
                "kind": 201392131,
                "text": "foo",
                "rawText": "foo",
                "flags": 96,
                "start": 14,
                "end": 20
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
                        "specifiers": [],
                        "flags": 0,
                        "start": 8,
                        "end": 8
                    },
                    "flags": 16,
                    "start": 6,
                    "end": 9
                },
                "flags": 16,
                "start": 6,
                "end": 9
            },
            "flags": 16,
            "start": 6,
            "end": 21
        }
    ],
    "isModule": true,
    "source": "import {} from \"foo\";",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 21
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

