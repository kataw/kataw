# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/declarations/let/sub-tree/autogen.md
- Path: kataw/test/__snapshot__/parser/declarations/let/sub-tree/gen/expr_arrow
> :: test: expr arrow
> :: case: let [x] = y
## Options

`````js
{}
`````
## Input

`````js
() => let [x] = y
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
                "asyncKeyword": null,
                "typeParameters": null,
                "parameters": [],
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 2,
                    "end": 5
                },
                "contents": {
                    "kind": 125,
                    "left": {
                        "kind": 130,
                        "member": {
                            "kind": 134299649,
                            "text": "let",
                            "rawText": "let",
                            "flags": 96,
                            "start": 5,
                            "end": 9
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 11,
                            "end": 12
                        },
                        "flags": 536870944,
                        "start": 5,
                        "end": 13
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "start": 13,
                        "end": 15
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "y",
                        "rawText": "y",
                        "flags": 96,
                        "start": 15,
                        "end": 17
                    },
                    "flags": 32,
                    "start": 5,
                    "end": 17
                },
                "flags": 32,
                "start": 0,
                "end": 17
            },
            "flags": 16,
            "start": 0,
            "end": 17
        }
    ],
    "isModule": false,
    "source": "() => let [x] = y",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 17
}
```

### Printed

```javascript

() =>  let[x] = y;
```

### Diagnostics

```javascript
✔ No errors
```

