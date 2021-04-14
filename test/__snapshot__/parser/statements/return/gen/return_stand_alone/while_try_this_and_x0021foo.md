# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: return stand alone
> :: case: while try this and !foo
## Input

`````js
return while try this and !foo
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 161,
            "returnKeyword": {
                "kind": 37757022,
                "flags": 768,
                "start": 0,
                "end": 6
            },
            "expression": {
                "kind": 16637,
                "text": "",
                "autofix": 0,
                "flags": 12,
                "start": 6,
                "end": 6
            },
            "flags": 128,
            "start": 0,
            "end": 0
        },
        {
            "kind": 154,
            "whileKeyword": {
                "kind": 37757028,
                "flags": 768,
                "start": 6,
                "end": 12
            },
            "expression": {
                "kind": 16637,
                "text": "",
                "autofix": 0,
                "flags": 12,
                "start": 12,
                "end": 12
            },
            "statement": {
                "kind": 159,
                "tryKeyword": {
                    "kind": 37757027,
                    "flags": 768,
                    "start": 12,
                    "end": 16
                },
                "block": {
                    "kind": 249,
                    "block": {
                        "kind": 124,
                        "statements": [],
                        "multiLine": false,
                        "flags": 128,
                        "start": 16,
                        "end": 16
                    },
                    "flags": 128,
                    "start": 16,
                    "end": 16
                },
                "catchClause": null,
                "finallyKeyword": null,
                "finallyBlock": {
                    "kind": 249,
                    "block": {
                        "kind": 124,
                        "statements": [],
                        "multiLine": false,
                        "flags": 128,
                        "start": 21,
                        "end": 21
                    },
                    "flags": 128,
                    "start": 21,
                    "end": 21
                },
                "flags": 128,
                "start": 12,
                "end": 21
            },
            "flags": 128,
            "start": 6,
            "end": 21
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "text": "and",
                "rawText": "and",
                "flags": 768,
                "start": 21,
                "end": 25
            },
            "flags": 128,
            "start": 21,
            "end": 25
        },
        {
            "kind": 120,
            "expression": {
                "kind": 126,
                "operandToken": {
                    "kind": 65584,
                    "flags": 768,
                    "start": 25,
                    "end": 27
                },
                "expression": {
                    "kind": 81921,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 768,
                    "start": 27,
                    "end": 30
                },
                "flags": 256,
                "start": 25,
                "end": 30
            },
            "flags": 128,
            "start": 25,
            "end": 30
        }
    ],
    "isModule": false,
    "text": "return while try this and !foo",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 33,
            "error": "A return statement can only be used within a function_body",
            "start": 0,
            "end": 6
        },
        {
            "kind": 2,
            "source": 2,
            "code": 3,
            "error": "Identifier expected",
            "start": 6,
            "end": 12
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 6,
            "end": 12
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 12,
            "end": 16
        },
        {
            "kind": 2,
            "source": 2,
            "code": 3,
            "error": "Identifier expected",
            "start": 12,
            "end": 16
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 12,
            "end": 16
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 16,
            "end": 21
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 16,
            "end": 21
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 21,
            "end": 25
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 25,
            "end": 27
        }
    ],
    "start": 0,
    "end": 30
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: return stand alone
> :: case: while try this and !foo
## Input

`````js
return while try this and !foo
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: return stand alone
> :: case: while try this and !foo
## Input

`````js
return while try this and !foo
`````
```

