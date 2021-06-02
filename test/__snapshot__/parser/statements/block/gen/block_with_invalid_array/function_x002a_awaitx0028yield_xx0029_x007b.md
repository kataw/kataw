# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-02
- From: d
- Path: y
> :: test: block with invalid array
> :: case: function * await(yield x) ; {
## Input

`````js
{ [catch] function * await(yield x) ; {
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 3,
                                "end": 3
                            },
                            "flags": 32,
                            "start": 1,
                            "end": 3
                        },
                        "flags": 16,
                        "start": 1,
                        "end": 3
                    },
                    {
                        "kind": 159,
                        "tryKeyword": null,
                        "block": {
                            "kind": 124,
                            "block": {
                                "kind": 249,
                                "statements": [],
                                "flags": 16,
                                "start": 3,
                                "end": 3
                            },
                            "flags": 16,
                            "start": 3,
                            "end": 3
                        },
                        "catchClause": {
                            "kind": 173,
                            "catchKeyword": {
                                "kind": 4202575,
                                "flags": 80,
                                "start": 3,
                                "end": 8
                            },
                            "catchParameter": null,
                            "block": {
                                "kind": 124,
                                "block": {
                                    "kind": 249,
                                    "statements": [],
                                    "flags": 16,
                                    "start": 8,
                                    "end": 8
                                },
                                "flags": 16,
                                "start": 8,
                                "end": 8
                            },
                            "flags": 16,
                            "start": 3,
                            "end": 8
                        },
                        "finallyKeyword": null,
                        "finallyBlock": null,
                        "flags": 16,
                        "start": 3,
                        "end": 8
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 8
            },
            "flags": 16,
            "start": 0,
            "end": 8
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "start": 9,
                "end": 18
            },
            "generatorToken": {
                "kind": 67143222,
                "flags": 64,
                "start": 18,
                "end": 20
            },
            "name": {
                "kind": 134299649,
                "text": "await",
                "rawText": "await",
                "flags": 96,
                "start": 20,
                "end": 26
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [
                    {
                        "kind": 134299649,
                        "text": "yield",
                        "rawText": "yield",
                        "flags": 96,
                        "start": 27,
                        "end": 32
                    },
                    {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 32,
                        "end": 34
                    }
                ],
                "trailingComma": false,
                "flags": 96,
                "start": 26,
                "end": 35
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "start": 35,
                    "end": 35
                },
                "flags": 32,
                "start": 35,
                "end": 35
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 272,
            "start": 9,
            "end": 35
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 35,
            "end": 37
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [],
                "flags": 16,
                "start": 39,
                "end": 39
            },
            "flags": 16,
            "start": 37,
            "end": 39
        }
    ],
    "isModule": false,
    "source": "{ [catch] function * await(yield x) ; {",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 39
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Did you forgot a ']' to match the `[` token? - start: 3, end: 8
✖ 'try' expected - start: 3, end: 8
✖ The parser expected to find a '}' to match the '{' token here - start: 8, end: 9
✖ `yield` expression cannot be used in function parameters - start: 27, end: 32
✖ ',' expected - start: 32, end: 34
✖ Missing an opening brace - '{ - start: 35, end: 37
✖ Expression expected - start: 35, end: 37
✖ The parser expected to find a '}' to match the '{' token here - start: 39, end: 39

```

