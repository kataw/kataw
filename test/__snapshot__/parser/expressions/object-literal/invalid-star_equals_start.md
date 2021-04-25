# Kataw parser test case

## Input

`````js
({*=f(){}})
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
                    "end": 7
                },
                "flags": 256,
                "start": 0,
                "end": 7
            },
            "flags": 128,
            "start": 0,
            "end": 7
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [],
                "multiLine": false,
                "flags": 128,
                "start": 8,
                "end": 8
            },
            "flags": 128,
            "start": 7,
            "end": 9
        }
    ],
    "isModule": false,
    "text": "({*=f(){}})",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 11
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript
@{x2716}@ Unexpected token. - start: 2, end: 4
@{x2716}@ Expression exprected. A compound assignment cannot follow an object literal - start: 2, end: 4
@{x2716}@ Unexpected token. - start: 7, end: 8
@{x2716}@ Unexpected token. - start: 7, end: 8
@{x2716}@ Statement expected - start: 9, end: 10
@{x2716}@ Statement expected - start: 10, end: 11

```

