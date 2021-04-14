# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: x
> :: test: arrow asi regex
> :: case: x => ok
## Input

`````js
x => ok
/x/
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
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 768,
                    "start": 1,
                    "end": 4
                },
                "typeParameters": null,
                "parameters": {
                    "kind": 81921,
                    "text": "x",
                    "rawText": "x",
                    "flags": 768,
                    "start": 0,
                    "end": 1
                },
                "asyncToken": null,
                "returnType": null,
                "contents": {
                    "kind": 198,
                    "left": {
                        "kind": 198,
                        "left": {
                            "kind": 81921,
                            "text": "ok",
                            "rawText": "ok",
                            "flags": 768,
                            "start": 4,
                            "end": 7
                        },
                        "operatorToken": {
                            "kind": 35640,
                            "flags": 768,
                            "start": 7,
                            "end": 9
                        },
                        "right": {
                            "kind": 81921,
                            "text": "x",
                            "rawText": "x",
                            "flags": 768,
                            "start": 9,
                            "end": 10
                        },
                        "flags": 256,
                        "start": 4,
                        "end": 10
                    },
                    "operatorToken": {
                        "kind": 35640,
                        "flags": 768,
                        "start": 10,
                        "end": 11
                    },
                    "right": {
                        "kind": 16637,
                        "text": "",
                        "autofix": 0,
                        "flags": 12,
                        "start": 11,
                        "end": 11
                    },
                    "flags": 256,
                    "start": 4,
                    "end": 11
                },
                "flags": 256,
                "start": 0,
                "end": 11
            },
            "flags": 128,
            "start": 0,
            "end": 11
        }
    ],
    "isModule": false,
    "text": "x => ok\n/x/",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 3,
            "error": "Identifier expected",
            "start": 11,
            "end": 11
        }
    ],
    "start": 0,
    "end": 11
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: x
> :: test: arrow asi regex
> :: case: x => ok
## Input

`````js
x => ok
/x/
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: x
> :: test: arrow asi regex
> :: case: x => ok
## Input

`````js
x => ok
/x/
`````
```

