# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
import *= from 'f';
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
            "fromClause": null,
            "moduleSpecifier": null,
            "importClause": null,
            "flags": 128,
            "start": 6,
            "end": 6
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "from",
                "rawText": "from",
                "flags": 768,
                "start": 9,
                "end": 14
            },
            "flags": 128,
            "start": 9,
            "end": 14
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "f",
                "rawText": "f",
                "flags": 67109632,
                "start": 14,
                "end": 18
            },
            "flags": 128,
            "start": 14,
            "end": 19
        }
    ],
    "isModule": true,
    "text": "import *= from 'f';",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 19
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript
@{x2716}@ Unexpected token. - start: 6, end: 9
@{x2716}@ Unexpected token. - start: 6, end: 9
@{x2716}@ Statement expected - start: 6, end: 9
@{x2716}@ Unexpected token. - start: 14, end: 18

```

