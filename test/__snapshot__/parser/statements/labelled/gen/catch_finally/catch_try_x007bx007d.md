# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: y
> :: test: catch finally
> :: case: catch try {}
## Input

`````js
catch catch try {} finally
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
                    "flags": 768,
                    "start": 5,
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
        },
        {
            "kind": 159,
            "tryKeyword": {
                "kind": 37757027,
                "flags": 768,
                "start": 11,
                "end": 15
            },
            "block": {
                "kind": 249,
                "block": {
                    "kind": 124,
                    "statements": [],
                    "multiLine": false,
                    "flags": 128,
                    "start": 17,
                    "end": 17
                },
                "flags": 128,
                "start": 15,
                "end": 18
            },
            "catchClause": null,
            "finallyKeyword": {
                "kind": 37757016,
                "flags": 768,
                "start": 18,
                "end": 26
            },
            "finallyBlock": {
                "kind": 249,
                "block": {
                    "kind": 124,
                    "statements": [],
                    "multiLine": false,
                    "flags": 128,
                    "start": 26,
                    "end": 26
                },
                "flags": 128,
                "start": 26,
                "end": 26
            },
            "flags": 128,
            "start": 11,
            "end": 26
        }
    ],
    "isModule": false,
    "text": "catch catch try {} finally",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 0,
            "end": 5
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 5,
            "end": 11
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 11,
            "end": 15
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 26,
            "end": 26
        }
    ],
    "start": 0,
    "end": 26
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: y
> :: test: catch finally
> :: case: catch try {}
## Input

`````js
catch catch try {} finally
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: y
> :: test: catch finally
> :: case: catch try {}
## Input

`````js
catch catch try {} finally
`````
```

