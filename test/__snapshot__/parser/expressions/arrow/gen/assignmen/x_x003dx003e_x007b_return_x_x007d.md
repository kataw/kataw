# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-01
- From: kataw8/test\__snapshot__/parser/expressions/arrow/autogen.md
- Path: kataw8/test\__snapshot__\parser\expressions\arrow\gen\assignmen
> :: test: assignmen
> :: case: x => { return x; }
## Input

`````js
x = x => { return x; } ;
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
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 0,
                    "end": 1
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 64,
                    "start": 1,
                    "end": 3
                },
                "right": {
                    "kind": 271,
                    "arrowToken": {
                        "kind": 10,
                        "flags": 64,
                        "start": 5,
                        "end": 8
                    },
                    "typeParameters": null,
                    "parameters": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 3,
                        "end": 5
                    },
                    "asyncKeyword": null,
                    "returnType": null,
                    "contents": {
                        "kind": 216,
                        "functionStatementList": {
                            "kind": 217,
                            "directives": [],
                            "statements": [
                                {
                                    "kind": 161,
                                    "returnKeyword": {
                                        "kind": 37757022,
                                        "flags": 80,
                                        "start": 10,
                                        "end": 17
                                    },
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "start": 17,
                                        "end": 19
                                    },
                                    "flags": 16,
                                    "start": 0,
                                    "end": 10
                                }
                            ],
                            "flags": 32,
                            "start": 10,
                            "end": 20
                        },
                        "flags": 32,
                        "start": 8,
                        "end": 22
                    },
                    "flags": 32,
                    "start": 3,
                    "end": 22
                },
                "flags": 32,
                "start": 0,
                "end": 22
            },
            "flags": 16,
            "start": 0,
            "end": 24
        }
    ],
    "isModule": false,
    "source": "x = x => { return x; } ;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 24
}
```

### Printed

```javascript

x = x =>  {
  return  x;
};
```

### Diagnostics

```javascript
✔ No errors
```

