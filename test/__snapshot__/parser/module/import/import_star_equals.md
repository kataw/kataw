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
            "fromClause": null,
            "moduleSpecifier": null,
            "importClause": null,
            "flags": 16,
            "start": 6,
            "end": 6
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "from",
                "rawText": "from",
                "flags": 96,
                "start": 9,
                "end": 14
            },
            "flags": 16,
            "start": 9,
            "end": 14
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "f",
                "rawText": "'f'",
                "flags": 4194400,
                "start": 14,
                "end": 18
            },
            "flags": 16,
            "start": 14,
            "end": 19
        }
    ],
    "isModule": true,
    "source": "import *= from 'f';",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 19
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Unexpected token. - start: 6, end: 9
✖ Expected a `;` - start: 6, end: 9
✖ Expected a `;` - start: 14, end: 18

```

