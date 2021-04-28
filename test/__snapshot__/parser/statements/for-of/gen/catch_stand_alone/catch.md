# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: catch stand alone
> :: case: catch
## Input

`````js
catch catch
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
                    "multiLine": false,
                    "flags": 128,
                    "start": 5,
                    "end": 5
                },
                "flags": 128,
                "start": 5,
                "end": 5
            },
            "catchClause": {
                "kind": 173,
                "catchKeyword": {
                    "kind": 4202575,
                    "flags": 5,
                    "start": 0,
                    "end": 11
                },
                "catchParameter": null,
                "block": {
                    "kind": 249,
                    "block": {
                        "kind": 124,
                        "statements": [],
                        "multiLine": false,
                        "flags": 128,
                        "start": 11,
                        "end": 11
                    },
                    "flags": 128,
                    "start": 11,
                    "end": 11
                },
                "flags": 128,
                "start": 5,
                "end": 11
            },
            "finallyKeyword": null,
            "finallyBlock": null,
            "flags": 128,
            "start": 0,
            "end": 11
        }
    ],
    "isModule": false,
    "text": "catch catch",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 11
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

