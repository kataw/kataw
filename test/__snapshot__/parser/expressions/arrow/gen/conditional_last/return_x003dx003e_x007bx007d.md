# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: t
> :: test: conditional_last
> :: case: return => {}
## Input

`````js
bar, return => {};
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 132,
                "expressions": [
                    {
                        "kind": 134299649,
                        "text": "bar",
                        "rawText": "bar",
                        "flags": 96,
                        "start": 0,
                        "end": 3
                    },
                    {
                        "kind": 16637,
                        "text": "",
                        "flags": 68,
                        "start": 4,
                        "end": 4
                    }
                ],
                "flags": 32,
                "start": 0,
                "end": 4
            },
            "flags": 16,
            "start": 0,
            "end": 4
        },
        {
            "kind": 161,
            "returnKeyword": {
                "kind": 37757022,
                "flags": 0,
                "start": 4,
                "end": 11
            },
            "expression": {
                "kind": 16637,
                "text": "",
                "flags": 68,
                "start": 11,
                "end": 11
            },
            "flags": 16,
            "start": 0,
            "end": 4
        },
        {
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
            "end": 17
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 17,
            "end": 18
        }
    ],
    "isModule": false,
    "source": "bar, return => {};",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 18
}
```

### Printed

```javascript

bar, ;
return ;
{
}

```

### Diagnostics

```javascript
✖ Expression expected - start: 4, end: 11
✖ A return statement can only be used within a function_body - start: 4, end: 11
✖ Expression expected - start: 11, end: 14

```

