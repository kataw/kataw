# Kataw parser test case

## Input

`````js
({foo += bar})
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
                    "kind": 132,
                    "flags": 256,
                    "start": 0,
                    "end": 12
                },
                "flags": 256,
                "start": 0,
                "end": 12
            },
            "flags": 128,
            "start": 0,
            "end": 12
        }
    ],
    "isModule": false,
    "text": "({foo += bar})",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 14
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript
@{x2716}@ ',' expected - start: 5, end: 8
@{x2716}@ Unexpected token. - start: 5, end: 8
@{x2716}@ Expression exprected. A compound assignment cannot follow an object literal - start: 5, end: 8
@{x2716}@ Unexpected token. - start: 12, end: 13
@{x2716}@ Statement expected - start: 12, end: 13
@{x2716}@ Statement expected - start: 13, end: 14

```

