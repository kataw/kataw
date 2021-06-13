# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-11
- From: kataw/test/__snapshot__/parser/expressions/assignment/to_keyword/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/assignment/to_keyword/gen/assign_to_paren-wrapped_keyword_in_param_default
> :: test: assign to paren-wrapped keyword in param default
> :: case: super
## Options

`````js
{}
`````
## Input

`````js
async (x = (super) = f) => {}
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 271,
            "arrowToken": {
                "kind": 10,
                "flags": 64,
                "start": 23,
                "end": 26
            },
            "typeParameters": null,
            "parameters": [
                {
                    "kind": 281,
                    "ellipsisToken": null,
                    "left": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 7,
                        "end": 8
                    },
                    "optionalToken": null,
                    "type": null,
                    "right": {
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
                            "flags": 96,
                            "start": 18,
                            "end": 20
                        },
                        "right": {
                            "kind": 134299649,
                            "text": "f",
                            "rawText": "f",
                            "flags": 96,
                            "start": 20,
                            "end": 22
                        },
                        "flags": 32,
                        "start": 10,
                        "end": 22
                    },
                    "flags": 32,
                    "start": 7,
                    "end": 22
                }
            ],
            "asyncKeyword": {
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
                    "flags": 32,
                    "start": 28,
                    "end": 28
                },
                "flags": 32,
                "start": 26,
                "end": 29
            },
            "flags": 290,
            "start": 0,
            "end": 29
        }
    ],
    "isModule": false,
    "source": "async (x = (super) = f) => {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 29
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

