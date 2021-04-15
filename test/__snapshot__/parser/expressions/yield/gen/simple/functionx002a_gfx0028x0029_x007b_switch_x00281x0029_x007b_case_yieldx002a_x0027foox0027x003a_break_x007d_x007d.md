# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: simple
> :: case: function* gf() { switch (1) { case yield* 'foo': break; } }
## Input

`````js
function* gf() { switch (1) { case yield* 'foo': break; } }
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 176,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37814362,
                "flags": 768,
                "start": 0,
                "end": 8
            },
            "generatorToken": {
                "kind": 67143222,
                "flags": 768,
                "start": 8,
                "end": 9
            },
            "name": {
                "kind": 134299649,
                "text": "gf",
                "rawText": "gf",
                "flags": 768,
                "start": 9,
                "end": 12
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 256,
                "start": 12,
                "end": 14
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 160,
                            "switchKeyword": {
                                "kind": 37757024,
                                "flags": 768,
                                "start": 16,
                                "end": 23
                            },
                            "expression": {
                                "kind": 134299649,
                                "text": 1,
                                "rawText": "1",
                                "flags": 768,
                                "start": 25,
                                "end": 26
                            },
                            "caseBlock": {
                                "kind": 152,
                                "clauses": [
                                    {
                                        "kind": 175,
                                        "caseKeyword": {
                                            "kind": 4194382,
                                            "flags": 768,
                                            "start": 29,
                                            "end": 34
                                        },
                                        "expression": {
                                            "kind": 229,
                                            "yieldKeyword": {
                                                "kind": 8454253,
                                                "flags": 768,
                                                "start": 34,
                                                "end": 40
                                            },
                                            "delegate": true,
                                            "asteriskToken": {
                                                "kind": 67143222,
                                                "flags": 768,
                                                "start": 40,
                                                "end": 41
                                            },
                                            "expression": {
                                                "kind": 201392131,
                                                "text": "foo",
                                                "rawText": "foo",
                                                "flags": 67109632,
                                                "start": 41,
                                                "end": 47
                                            },
                                            "flags": 256,
                                            "start": 34,
                                            "end": 47
                                        },
                                        "statements": [
                                            {
                                                "kind": 150,
                                                "breakKeyword": {
                                                    "kind": 37757005,
                                                    "flags": 768,
                                                    "start": 48,
                                                    "end": 54
                                                },
                                                "label": null,
                                                "flags": 128,
                                                "start": 48,
                                                "end": 55
                                            }
                                        ],
                                        "flags": 128,
                                        "start": 29,
                                        "end": 55
                                    }
                                ],
                                "flags": 128,
                                "start": 27,
                                "end": 57
                            },
                            "flags": 128,
                            "start": 16,
                            "end": 57
                        }
                    ],
                    "multiline": false,
                    "flags": 256,
                    "start": 16,
                    "end": 57
                },
                "flags": 256,
                "start": 14,
                "end": 59
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 2304,
            "start": 0,
            "end": 59
        }
    ],
    "isModule": false,
    "text": "function* gf() { switch (1) { case yield* 'foo': break; } }",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 59
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

