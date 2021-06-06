# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw8/test\__snapshot__/parser/miscellaneous/error-recovery/autogen.md
- Path: kataw8/test\__snapshot__\parser\miscellaneous\error-recovery\gen\ax002f_case
> :: test: a/ case
> :: case: async function f() { for await ([a] = 1 of []) ; }
## Input

`````js
async function f() { for await ([a] = 1 of []) ; }
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": {
                "kind": 82031,
                "flags": 64,
                "start": 0,
                "end": 5
            },
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "start": 5,
                "end": 14
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "start": 14,
                "end": 16
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 32,
                "start": 16,
                "end": 18
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 167,
                            "forKeyword": {
                                "kind": 37757017,
                                "flags": 80,
                                "start": 20,
                                "end": 24
                            },
                            "awaitKeyword": {
                                "kind": 82196,
                                "flags": 64,
                                "start": 24,
                                "end": 30
                            },
                            "initializer": {
                                "kind": 125,
                                "left": {
                                    "kind": 119,
                                    "elementList": {
                                        "kind": 270,
                                        "elements": [
                                            {
                                                "kind": 134299649,
                                                "text": "a",
                                                "rawText": "a",
                                                "flags": 96,
                                                "start": 33,
                                                "end": 34
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "start": 33,
                                        "end": 34
                                    },
                                    "flags": 32,
                                    "start": 32,
                                    "end": 35
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "flags": 64,
                                    "start": 35,
                                    "end": 37
                                },
                                "right": {
                                    "kind": 201392130,
                                    "text": 1,
                                    "rawText": "1",
                                    "flags": 96,
                                    "start": 37,
                                    "end": 39
                                },
                                "flags": 32,
                                "start": 32,
                                "end": 39
                            },
                            "ofKeyword": {
                                "kind": 16793717,
                                "flags": 64,
                                "start": 39,
                                "end": 42
                            },
                            "expression": {
                                "kind": 119,
                                "elementList": {
                                    "kind": 270,
                                    "elements": [],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 44,
                                    "end": 44
                                },
                                "flags": 32,
                                "start": 42,
                                "end": 45
                            },
                            "statement": {
                                "kind": 168,
                                "flags": 16,
                                "start": 46,
                                "end": 48
                            },
                            "flags": 16,
                            "start": 20,
                            "end": 48
                        }
                    ],
                    "flags": 32,
                    "start": 20,
                    "end": 48
                },
                "flags": 32,
                "start": 18,
                "end": 50
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 144,
            "start": 0,
            "end": 50
        }
    ],
    "isModule": false,
    "source": "async function f() { for await ([a] = 1 of []) ; }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 50
}
```

### Printed

```javascript

async function f() {
  for await ([a] = 1 of []);
}
```

### Diagnostics

```javascript
✔ No errors
```

