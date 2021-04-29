# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: t
> :: test: case default
> :: case: catch try {
## Input

`````js
case catch try { default
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 159,
            "tryKeyword": null,
            "block": {
                "kind": 249,
                "block": {
                    "kind": 124,
                    "statements": [],
                    "flags": 16,
                    "start": 10,
                    "end": 10
                },
                "flags": 16,
                "start": 10,
                "end": 10
            },
            "catchClause": null,
            "finallyKeyword": null,
            "finallyBlock": {
                "kind": 249,
                "block": {
                    "kind": 124,
                    "statements": [],
                    "flags": 16,
                    "start": 16,
                    "end": 16
                },
                "flags": 16,
                "start": 14,
                "end": 16
            },
            "flags": 16,
            "start": 4,
            "end": 16
        }
    ],
    "isModule": false,
    "source": "case catch try { default",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 24
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Statement expected - start: 0, end: 4
✖ 'try' expected - start: 4, end: 10
✖ Statement expected - start: 16, end: 24

```

