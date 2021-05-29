# Auto-generated test cases ( Kataw )
- Regenerated: 2021-05-28
- From: d
- Path: i
> :: test: rhs mul asi
> :: case: async => ok
## Input

`````js
x
* async => ok
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
                "kind": 198,
                "left": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 0,
                    "end": 1
                },
                "operatorToken": {
                    "kind": 67143222,
                    "flags": 65,
                    "start": 1,
                    "end": 3
                },
                "right": {
                    "kind": 271,
                    "arrowToken": {
                        "kind": 10,
                        "flags": 64,
                        "start": 9,
                        "end": 12
                    },
                    "typeParameters": null,
                    "parameters": {
                        "kind": 134299649,
                        "text": "async",
                        "rawText": "async",
                        "flags": 96,
                        "start": 3,
                        "end": 9
                    },
                    "asyncKeyword": {
                        "kind": 82031,
                        "flags": 64,
                        "start": 3,
                        "end": 9
                    },
                    "returnType": null,
                    "contents": {
                        "kind": 134299649,
                        "text": "ok",
                        "rawText": "ok",
                        "flags": 96,
                        "start": 12,
                        "end": 15
                    },
                    "flags": 32,
                    "start": 3,
                    "end": 15
                },
                "flags": 32,
                "start": 0,
                "end": 15
            },
            "flags": 16,
            "start": 0,
            "end": 15
        }
    ],
    "isModule": false,
    "source": "x\n* async => ok",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 15
}
```

### Printed

```javascript

x * async async =>  ok;
```

### Diagnostics

```javascript
✔ No errors
```

