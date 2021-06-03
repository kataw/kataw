# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-03
- From: kataw8/test\__snapshot__/parser/expressions/assignment/to_keyword/autogen.md
- Path: kataw8/test\__snapshot__\parser\expressions\assignment\to_keyword\gen\array_with_assign_to_paren-wrapped
> :: test: array with assign to paren-wrapped
> :: case: new
## Input

`````js
async x => (new) = 1
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
                    "flags": 64,
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
                    "kind": 125,
                    "left": {
                        "kind": 121,
                        "expression": {
                            "kind": 210,
                            "newKeyword": {
                                "kind": 138477661,
                                "flags": 96,
                                "start": 12,
                                "end": 15
                            },
                            "expression": {
                                "kind": 16637,
                                "text": "",
                                "flags": 64,
                                "start": 15,
                                "end": 15
                            },
                            "argumentList": null,
                            "flags": 32,
                            "start": 12,
                            "end": 15
                        },
                        "flags": 32,
                        "start": 10,
                        "end": 16
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 64,
                        "start": 16,
                        "end": 18
                    },
                    "right": {
                        "kind": 201392130,
                        "text": 1,
                        "rawText": "1",
                        "flags": 96,
                        "start": 18,
                        "end": 20
                    },
                    "flags": 32,
                    "start": 10,
                    "end": 20
                },
                "flags": 288,
                "start": 0,
                "end": 20
            },
            "flags": 16,
            "start": 0,
            "end": 20
        }
    ],
    "isModule": false,
    "source": "async x => (new) = 1",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 20
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 15, end: 16

```

