# Auto-generated test cases ( Kataw )
- Regenerated: 2021-05-30
- From: kataw7/test\__snapshot__/parser/statements/block/autogen.md
- Path: kataw7/test\__snapshot__\parser\statements\block\gen\x007b_triple
> :: test: { triple
> :: case: function x(async x, await y) {
## Input

`````js
{ { { function x(async x, await y) {
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
                        "kind": 124,
                        "block": {
                            "kind": 249,
                            "statements": [
                                {
                                    "kind": 124,
                                    "block": {
                                        "kind": 249,
                                        "statements": [
                                            {
                                                "kind": 176,
                                                "declareKeyword": null,
                                                "asyncKeyword": null,
                                                "functionKeyword": {
                                                    "kind": 37822554,
                                                    "flags": 64,
                                                    "start": 5,
                                                    "end": 14
                                                },
                                                "generatorToken": null,
                                                "name": {
                                                    "kind": 134299649,
                                                    "text": "x",
                                                    "rawText": "x",
                                                    "flags": 96,
                                                    "start": 14,
                                                    "end": 16
                                                },
                                                "formalParameters": {
                                                    "kind": 214,
                                                    "formalParameterList": [
                                                        {
                                                            "kind": 134299649,
                                                            "text": "async",
                                                            "rawText": "async",
                                                            "flags": 96,
                                                            "start": 17,
                                                            "end": 22
                                                        },
                                                        {
                                                            "kind": 134299649,
                                                            "text": "x",
                                                            "rawText": "x",
                                                            "flags": 96,
                                                            "start": 22,
                                                            "end": 24
                                                        },
                                                        {
                                                            "kind": 134299649,
                                                            "text": "await",
                                                            "rawText": "await",
                                                            "flags": 96,
                                                            "start": 25,
                                                            "end": 31
                                                        },
                                                        {
                                                            "kind": 134299649,
                                                            "text": "y",
                                                            "rawText": "y",
                                                            "flags": 96,
                                                            "start": 31,
                                                            "end": 33
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "flags": 96,
                                                    "start": 16,
                                                    "end": 34
                                                },
                                                "contents": {
                                                    "kind": 216,
                                                    "functionStatementList": {
                                                        "kind": 217,
                                                        "directives": [],
                                                        "statements": [],
                                                        "flags": 32,
                                                        "start": 36,
                                                        "end": 36
                                                    },
                                                    "flags": 32,
                                                    "start": 34,
                                                    "end": 36
                                                },
                                                "typeParameters": null,
                                                "returnType": null,
                                                "flags": 16,
                                                "start": 5,
                                                "end": 36
                                            }
                                        ],
                                        "flags": 16,
                                        "start": 5,
                                        "end": 36
                                    },
                                    "flags": 16,
                                    "start": 3,
                                    "end": 36
                                }
                            ],
                            "flags": 16,
                            "start": 3,
                            "end": 36
                        },
                        "flags": 16,
                        "start": 1,
                        "end": 36
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 36
            },
            "flags": 16,
            "start": 0,
            "end": 36
        }
    ],
    "isModule": false,
    "source": "{ { { function x(async x, await y) {",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 36
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ ',' expected - start: 22, end: 24
✖ ',' expected - start: 31, end: 33
✖ The parser expected to find a '}' to match the '{' token here - start: 36, end: 36

```

