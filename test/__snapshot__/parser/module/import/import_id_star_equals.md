# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
import a, *= from 'f';
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
                "kind": 125,
                "left": {
                    "kind": 16637,
                    "text": "",
                    "flags": 12,
                    "start": 9,
                    "end": 9
                },
                "operatorToken": {
                    "kind": 4132,
                    "flags": 768,
                    "start": 9,
                    "end": 12
                },
                "right": {
                    "kind": 134299649,
                    "text": "from",
                    "rawText": "from",
                    "flags": 768,
                    "start": 12,
                    "end": 17
                },
                "flags": 256,
                "start": 9,
                "end": 17
            },
            "moduleSpecifier": null,
            "importClause": {
                "kind": 262,
                "defaultBinding": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 768,
                    "start": 6,
                    "end": 8
                },
                "nameSpaceImport": null,
                "namedImports": null,
                "flags": 128,
                "start": 6,
                "end": 9
            },
            "flags": 128,
            "start": 6,
            "end": 17
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "f",
                "rawText": "f",
                "flags": 67109632,
                "start": 17,
                "end": 21
            },
            "flags": 128,
            "start": 17,
            "end": 22
        }
    ],
    "isModule": true,
    "text": "import a, *= from 'f';",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 22
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Unexpected token. - start: 9, end: 12
✖ Expression expected - start: 9, end: 12

```

