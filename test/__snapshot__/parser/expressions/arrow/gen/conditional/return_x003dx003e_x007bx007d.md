# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: l
> :: test: conditional
> :: case: return => {}
## Input

`````js
return => {} , bar;
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
            "start": 9,
            "end": 12
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "text": "bar",
                "rawText": "bar",
                "flags": 768,
                "start": 14,
                "end": 18
            },
            "flags": 128,
            "start": 14,
            "end": 19
        }
    ],
    "isModule": false,
    "text": "return => {} , bar;",
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
            "end": 9
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 6,
            "end": 9
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 6,
            "end": 9
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 12,
            "end": 14
        }
    ],
    "start": 0,
    "end": 19
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: l
> :: test: conditional
> :: case: return => {}
## Input

`````js
return => {} , bar;
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: l
> :: test: conditional
> :: case: return => {}
## Input

`````js
return => {} , bar;
`````
```

