# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw/test/__snapshot__/parser/expressions/await/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/await/gen/simple
> :: test: simple
> :: case: async function f() { return {await = 0} = {}; }
## Input

`````js
async function f() { return {await = 0} = {}; }
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
                            "kind": 161,
                            "returnKeyword": {
                                "kind": 37757022,
                                "flags": 80,
                                "start": 20,
                                "end": 27
                            },
                            "expression": {
                                "kind": 125,
                                "left": {
                                    "kind": 220,
                                    "propertyList": {
                                        "kind": 218,
                                        "properties": [
                                            {
                                                "kind": 205,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": "await",
                                                    "rawText": "await",
                                                    "flags": 96,
                                                    "start": 29,
                                                    "end": 34
                                                },
                                                "right": {
                                                    "kind": 201392130,
                                                    "text": 0,
                                                    "rawText": "0",
                                                    "flags": 96,
                                                    "start": 36,
                                                    "end": 38
                                                },
                                                "flags": 32,
                                                "start": 29,
                                                "end": 38
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 16,
                                        "start": 29,
                                        "end": 38
                                    },
                                    "flags": 48,
                                    "start": 27,
                                    "end": 39
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "flags": 64,
                                    "start": 39,
                                    "end": 41
                                },
                                "right": {
                                    "kind": 220,
                                    "propertyList": {
                                        "kind": 218,
                                        "properties": [],
                                        "trailingComma": false,
                                        "flags": 16,
                                        "start": 43,
                                        "end": 43
                                    },
                                    "flags": 48,
                                    "start": 41,
                                    "end": 44
                                },
                                "flags": 32,
                                "start": 27,
                                "end": 44
                            },
                            "flags": 16,
                            "start": 0,
                            "end": 20
                        }
                    ],
                    "flags": 32,
                    "start": 20,
                    "end": 45
                },
                "flags": 32,
                "start": 18,
                "end": 47
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 144,
            "start": 0,
            "end": 47
        }
    ],
    "isModule": false,
    "source": "async function f() { return {await = 0} = {}; }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 47
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected. Reserved word in strict mode - start: 34, end: 36

```

