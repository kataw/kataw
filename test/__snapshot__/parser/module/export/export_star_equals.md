# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
export *= from 'f';
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 257,
            "exportKeyword": {
                "kind": 4202582,
                "flags": 0,
                "start": 0,
                "end": 6
            },
            "declaration": null,
            "namedExports": null,
            "exportFromClause": null,
            "fromClause": null,
            "flags": 16,
            "start": 0,
            "end": 6
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "original": "from",
                "text": "from",
                "rawText": " from",
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
                "original": "'f'",
                "rawText": " 'f'",
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
    "source": "export *= from 'f';",
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
✖ Statement expected - start: 6, end: 9
✖ Expected a `;` - start: 14, end: 18

```

