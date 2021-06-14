# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/miscellaneous/error-recovery/autogen.md
- Path: kataw/test/__snapshot__/parser/miscellaneous/error-recovery/gen/ax002f_case
> :: test: a/ case
> :: case: async function * f() { for await({a} = 1 of []){ } }
## Options

`````js
{}
`````
## Input

`````js
async function * f() { for await({a} = 1 of []){ } }
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
            "generatorToken": {
                "kind": 67143222,
                "flags": 64,
                "start": 14,
                "end": 16
            },
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "start": 16,
                "end": 18
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 32,
                "start": 18,
                "end": 20
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
                                "start": 22,
                                "end": 26
                            },
                            "awaitKeyword": {
                                "kind": 82196,
                                "flags": 64,
                                "start": 26,
                                "end": 32
                            },
                            "initializer": {
                                "kind": 125,
                                "left": {
                                    "kind": 220,
                                    "propertyList": {
                                        "kind": 218,
                                        "properties": [
                                            {
                                                "kind": 134299649,
                                                "text": "a",
                                                "rawText": "a",
                                                "flags": 96,
                                                "start": 34,
                                                "end": 35
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 16,
                                        "start": 34,
                                        "end": 35
                                    },
                                    "flags": 48,
                                    "start": 33,
                                    "end": 36
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "flags": 96,
                                    "start": 36,
                                    "end": 38
                                },
                                "right": {
                                    "kind": 201392130,
                                    "text": 1,
                                    "rawText": "1",
                                    "flags": 96,
                                    "start": 38,
                                    "end": 40
                                },
                                "flags": 32,
                                "start": 33,
                                "end": 40
                            },
                            "ofKeyword": {
                                "kind": 16793717,
                                "flags": 64,
                                "start": 40,
                                "end": 43
                            },
                            "expression": {
                                "kind": 119,
                                "elementList": {
                                    "kind": 270,
                                    "elements": [],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 45,
                                    "end": 45
                                },
                                "flags": 32,
                                "start": 43,
                                "end": 46
                            },
                            "statement": {
                                "kind": 124,
                                "block": {
                                    "kind": 249,
                                    "statements": [],
                                    "flags": 16,
                                    "start": 48,
                                    "end": 48
                                },
                                "flags": 16,
                                "start": 47,
                                "end": 50
                            },
                            "flags": 80,
                            "start": 22,
                            "end": 50
                        }
                    ],
                    "flags": 32,
                    "start": 22,
                    "end": 50
                },
                "flags": 32,
                "start": 20,
                "end": 52
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 400,
            "start": 0,
            "end": 52
        }
    ],
    "isModule": false,
    "source": "async function * f() { for await({a} = 1 of []){ } }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 52
}
```

### Printed

```javascript

async function * f() {
  for await ({ a } = 1 of [])
    {
    }
}
```

### Diagnostics

```javascript
✔ No errors
```

