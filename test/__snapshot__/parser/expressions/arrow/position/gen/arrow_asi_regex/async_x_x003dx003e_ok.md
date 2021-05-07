# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: x
> :: test: arrow asi regex
> :: case: async x => ok
## Input

`````js
async x => ok
/x/
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
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 0,
                    "start": 7,
                    "end": 10
                },
                "typeParameters": null,
                "parameters": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 5,
                    "end": 7
                },
                "asyncKeyword": {
                    "kind": 82031,
                    "flags": 64,
                    "start": 0,
                    "end": 5
                },
                "returnType": null,
                "contents": {
                    "kind": 198,
                    "left": {
                        "kind": 198,
                        "left": {
                            "kind": 134299649,
                            "text": "ok",
                            "rawText": "ok",
                            "flags": 96,
                            "start": 10,
                            "end": 13
                        },
                        "operatorToken": {
                            "kind": 35640,
                            "flags": 65,
                            "start": 13,
                            "end": 15
                        },
                        "right": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 15,
                            "end": 16
                        },
                        "flags": 32,
                        "start": 10,
                        "end": 16
                    },
                    "operatorToken": {
                        "kind": 35640,
                        "flags": 64,
                        "start": 16,
                        "end": 17
                    },
                    "right": {
                        "kind": 16637,
                        "text": "",
                        "flags": 68,
                        "start": 17,
                        "end": 17
                    },
                    "flags": 32,
                    "start": 10,
                    "end": 17
                },
                "flags": 288,
                "start": 0,
                "end": 17
            },
            "flags": 16,
            "start": 0,
            "end": 17
        }
    ],
    "isModule": false,
    "source": "async x => ok\n/x/",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 17
}
```

### Printed

```javascript

async x =>  ok / x / ;
```

### Diagnostics

```javascript
✖ Expression expected - start: 17, end: 17

```

