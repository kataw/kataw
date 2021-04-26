# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: d
> :: test: assignment paren wrapped
> :: case: \u0065xport
## Input

`````js
(\u0065xport = x);
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 16637,
                    "text": "",
                    "autofix": 0,
                    "flags": 12,
                    "start": 1,
                    "end": 1
                },
                "flags": 256,
                "start": 0,
                "end": 1
            },
            "flags": 128,
            "start": 0,
            "end": 1
        },
        {
            "kind": 257,
            "exportKeyword": {
                "kind": 4202582,
                "flags": 768,
                "start": 1,
                "end": 12
            },
            "declaration": null,
            "namedExports": null,
            "exportFromClause": null,
            "fromClause": null,
            "autofix": 0,
            "flags": 128,
            "start": 1,
            "end": 12
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 768,
                "start": 14,
                "end": 16
            },
            "flags": 128,
            "start": 14,
            "end": 16
        },
        {
            "kind": 168,
            "flags": 128,
            "start": 17,
            "end": 18
        }
    ],
    "isModule": false,
    "text": "(\\u0065xport = x);",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 18
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript
@{x2716}@ Expression expected - start: 1, end: 12
@{x2716}@ The `export` keyword can only be used with the module goal - start: 1, end: 12
@{x2716}@ Unexpected token. - start: 12, end: 14
@{x2716}@ Statement expected - start: 12, end: 14
@{x2716}@ Statement expected - start: 16, end: 17

```

