# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-03
- From: kataw8/test\__snapshot__/parser/expressions/assignment/to_keyword/autogen.md
- Path: kataw8/test\__snapshot__\parser\expressions\assignment\to_keyword\gen\array_with_assign_to_paren-wrapped
> :: test: array with assign to paren-wrapped
> :: case: super
## Input

`````js
async x => (super) = 1
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
                            "kind": 129,
                            "member": {
                                "kind": 225,
                                "superKeyword": {
                                    "kind": 4259935,
                                    "flags": 96,
                                    "start": 12,
                                    "end": 17
                                },
                                "flags": 96,
                                "start": 12,
                                "end": 17
                            },
                            "expression": {
                                "kind": 16637,
                                "text": "",
                                "flags": 64,
                                "start": 17,
                                "end": 17
                            },
                            "flags": 536870944,
                            "start": 12,
                            "end": 17
                        },
                        "flags": 32,
                        "start": 10,
                        "end": 18
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 64,
                        "start": 18,
                        "end": 20
                    },
                    "right": {
                        "kind": 201392130,
                        "text": 1,
                        "rawText": "1",
                        "flags": 96,
                        "start": 20,
                        "end": 22
                    },
                    "flags": 32,
                    "start": 10,
                    "end": 22
                },
                "flags": 288,
                "start": 0,
                "end": 22
            },
            "flags": 16,
            "start": 0,
            "end": 22
        }
    ],
    "isModule": false,
    "source": "async x => (super) = 1",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 22
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ 'super' must be followed by an argument list or member access. - start: 12, end: 18
✖ Dot property must be an identifier - start: 17, end: 18

```

