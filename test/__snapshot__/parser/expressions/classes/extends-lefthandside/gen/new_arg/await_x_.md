# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: g
> :: test: new arg
> :: case: await
>          x;
## Input

`````js
new await
x;
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
                "kind": 210,
                "newKeyword": {
                    "kind": 4259933,
                    "flags": 768,
                    "start": 0,
                    "end": 3
                },
                "expression": {
                    "kind": 81921,
                    "text": "await",
                    "rawText": "await",
                    "flags": 768,
                    "start": 3,
                    "end": 9
                },
                "argumentList": null,
                "flags": 256,
                "start": 0,
                "end": 9
            },
            "flags": 128,
            "start": 0,
            "end": 9
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "text": "x",
                "rawText": "x",
                "flags": 768,
                "start": 9,
                "end": 11
            },
            "flags": 128,
            "start": 9,
            "end": 12
        }
    ],
    "isModule": false,
    "text": "new await\nx;",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 12
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: g
> :: test: new arg
> :: case: await
>          x;
## Input

`````js
new await
x;
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: g
> :: test: new arg
> :: case: await
>          x;
## Input

`````js
new await
x;
`````
```

