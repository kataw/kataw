# Kataw parser test case

## Input

`````js
async function f(){
  function *f(){
    for await (yield x in y of z);
  }
}
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
                "flags": 0,
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
                            "kind": 176,
                            "declareKeyword": null,
                            "asyncKeyword": null,
                            "functionKeyword": {
                                "kind": 37822554,
                                "flags": 1,
                                "start": 19,
                                "end": 30
                            },
                            "generatorToken": {
                                "kind": 67143222,
                                "flags": 64,
                                "start": 30,
                                "end": 32
                            },
                            "name": {
                                "kind": 134299649,
                                "text": "f",
                                "rawText": "f",
                                "flags": 96,
                                "start": 32,
                                "end": 33
                            },
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 33,
                                "end": 35
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [
                                        {
                                            "kind": 166,
                                            "forKeyword": {
                                                "kind": 37757017,
                                                "flags": 1,
                                                "start": 36,
                                                "end": 44
                                            },
                                            "initializer": {
                                                "kind": 229,
                                                "yieldKeyword": {
                                                    "kind": 8454253,
                                                    "flags": 0,
                                                    "start": 52,
                                                    "end": 57
                                                },
                                                "delegate": false,
                                                "asteriskToken": null,
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "x",
                                                    "rawText": "x",
                                                    "flags": 96,
                                                    "start": 57,
                                                    "end": 59
                                                },
                                                "flags": 32,
                                                "start": 52,
                                                "end": 59
                                            },
                                            "inKeyword": {
                                                "kind": 21006388,
                                                "flags": 64,
                                                "start": 59,
                                                "end": 62
                                            },
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "y",
                                                "rawText": "y",
                                                "flags": 96,
                                                "start": 62,
                                                "end": 64
                                            },
                                            "statement": {
                                                "kind": 120,
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "of",
                                                    "rawText": "of",
                                                    "flags": 96,
                                                    "start": 64,
                                                    "end": 67
                                                },
                                                "flags": 16,
                                                "start": 64,
                                                "end": 67
                                            },
                                            "flags": 16,
                                            "start": 36,
                                            "end": 67
                                        },
                                        {
                                            "kind": 120,
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "z",
                                                "rawText": "z",
                                                "flags": 96,
                                                "start": 67,
                                                "end": 69
                                            },
                                            "flags": 16,
                                            "start": 67,
                                            "end": 69
                                        }
                                    ],
                                    "flags": 33,
                                    "start": 36,
                                    "end": 69
                                },
                                "flags": 32,
                                "start": 35,
                                "end": 69
                            },
                            "typeParameters": null,
                            "returnType": null,
                            "flags": 272,
                            "start": 19,
                            "end": 69
                        }
                    ],
                    "flags": 33,
                    "start": 19,
                    "end": 69
                },
                "flags": 32,
                "start": 18,
                "end": 69
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 144,
            "start": 0,
            "end": 69
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 70,
            "end": 71
        }
    ],
    "isModule": false,
    "source": "async function f(){\n  function *f(){\n    for await (yield x in y of z);\n  }\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 77
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ A 'for-await-of' statement is only allowed within an async function or async generator. - start: 50, end: 52
✖ Cannot use the 'yield' keyword on the left-hand side of a 'for...in' statement in a generator context - start: 52, end: 59
✖ The left-hand side of a 'for...in' statement must be a variable or a property access. - start: 62, end: 64
✖ Expected a ')' to match the '(' token here - start: 64, end: 67
✖ Expected a `;` - start: 67, end: 69
✖ Expected a `;` - start: 69, end: 70
✖ Declaration or statement expected - start: 71, end: 75
✖ Declaration or statement expected - start: 75, end: 77

```

