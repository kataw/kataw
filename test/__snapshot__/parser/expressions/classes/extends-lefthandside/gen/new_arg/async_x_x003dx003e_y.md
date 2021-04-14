# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: g
> :: test: new arg
> :: case: async
>          x => y
## Input

`````js
new async
x => y
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
                    "text": "async",
                    "rawText": "async",
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
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 768,
                    "start": 11,
                    "end": 14
                },
                "typeParameters": null,
                "parameters": {
                    "kind": 81921,
                    "text": "x",
                    "rawText": "x",
                    "flags": 768,
                    "start": 9,
                    "end": 11
                },
                "asyncToken": null,
                "returnType": null,
                "contents": {
                    "kind": 81921,
                    "text": "y",
                    "rawText": "y",
                    "flags": 768,
                    "start": 14,
                    "end": 16
                },
                "flags": 256,
                "start": 9,
                "end": 16
            },
            "flags": 128,
            "start": 9,
            "end": 16
        }
    ],
    "isModule": false,
    "text": "new async\nx => y",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 16
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: g
> :: test: new arg
> :: case: async
>          x => y
## Input

`````js
new async
x => y
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: g
> :: test: new arg
> :: case: async
>          x => y
## Input

`````js
new async
x => y
`````
```

