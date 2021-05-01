# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: c
> :: test: inside an async func
> :: case: \u0064efault
## Input

`````js
async () => {  \u0064efault = x  }
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 271,
            "arrowToken": {
                "kind": 10,
                "flags": 0,
                "start": 8,
                "end": 11
            },
            "typeParameters": null,
            "parameters": [],
            "asyncToken": {
                "kind": 82031,
                "flags": 64,
                "start": 0,
                "end": 5
            },
            "returnType": null,
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 16416,
                    "start": 13,
                    "end": 13
                },
                "flags": 32,
                "start": 11,
                "end": 13
            },
            "flags": 288,
            "start": 0,
            "end": 13
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "original": "x",
                "text": "x",
                "rawText": " x",
                "flags": 96,
                "start": 29,
                "end": 31
            },
            "flags": 16,
            "start": 29,
            "end": 31
        }
    ],
    "isModule": false,
    "source": "async () => {  \\u0064efault = x  }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 34
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Statement expected - start: 13, end: 27
✖ Statement expected - start: 27, end: 29
✖ Statement expected - start: 31, end: 34

```

