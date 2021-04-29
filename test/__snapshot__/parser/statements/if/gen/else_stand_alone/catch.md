# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: else stand alone
> :: case: catch
## Input

`````js
else catch
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
                    "start": 10,
                    "end": 10
                },
                "flags": 16,
                "start": 10,
                "end": 10
            },
            "flags": 16,
            "start": 4,
            "end": 10
        }
    ],
    "isModule": false,
    "source": "else catch",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 10
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

```

