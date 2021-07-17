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
                "transformFlags": 0,
                "start": 0,
                "end": 5
            },
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "transformFlags": 0,
                "start": 5,
                "end": 14
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "transformFlags": 0,
                "start": 14,
                "end": 16
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 17,
                "end": 17
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
                                "flags": 65,
                                "transformFlags": 0,
                                "start": 19,
                                "end": 30
                            },
                            "asteriskToken": {
                                "kind": 67143222,
                                "flags": 64,
                                "transformFlags": 32,
                                "start": 30,
                                "end": 32
                            },
                            "name": {
                                "kind": 134299649,
                                "text": "f",
                                "rawText": "f",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 32,
                                "end": 33
                            },
                            "typeParameters": null,
                            "formalParameterList": {
                                "kind": 214,
                                "formalParameters": [],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 34,
                                "end": 34
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
                                                "flags": 81,
                                                "transformFlags": 0,
                                                "start": 36,
                                                "end": 44
                                            },
                                            "initializer": {
                                                "kind": 229,
                                                "yieldKeyword": {
                                                    "kind": 8454253,
                                                    "flags": 64,
                                                    "transformFlags": 0,
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
                                                    "transformFlags": 0,
                                                    "start": 57,
                                                    "end": 59
                                                },
                                                "flags": 32,
                                                "transformFlags": 4096,
                                                "start": 52,
                                                "end": 59
                                            },
                                            "inKeyword": {
                                                "kind": 21006388,
                                                "flags": 64,
                                                "transformFlags": 0,
                                                "start": 59,
                                                "end": 62
                                            },
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "y",
                                                "rawText": "y",
                                                "flags": 96,
                                                "transformFlags": 0,
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
                                                    "transformFlags": 0,
                                                    "start": 64,
                                                    "end": 67
                                                },
                                                "flags": 16,
                                                "transformFlags": 4096,
                                                "start": 64,
                                                "end": 67
                                            },
                                            "flags": 81,
                                            "transformFlags": 0,
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
                                                "transformFlags": 0,
                                                "start": 67,
                                                "end": 69
                                            },
                                            "flags": 16,
                                            "transformFlags": 4096,
                                            "start": 67,
                                            "end": 69
                                        }
                                    ],
                                    "flags": 33,
                                    "transformFlags": 0,
                                    "start": 36,
                                    "end": 69
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 35,
                                "end": 69
                            },
                            "returnType": null,
                            "flags": 272,
                            "transformFlags": 0,
                            "start": 19,
                            "end": 69
                        }
                    ],
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 19,
                    "end": 69
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 18,
                "end": 69
            },
            "returnType": null,
            "flags": 144,
            "transformFlags": 0,
            "start": 0,
            "end": 69
        },
        {
            "kind": 168,
            "flags": 16,
            "transformFlags": 0,
            "start": 70,
            "end": 71
        }
    ],
    "isModule": false,
    "source": "async function f(){\n  function *f(){\n    for await (yield x in y of z);\n  }\n}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
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
✖ Expected a ')' to match the '(' token here - start: 65, end: 67
✖ '; ' expected - start: 67, end: 69
✖ '; ' expected - start: 69, end: 70
✖ Declaration or statement expected - start: 71, end: 75
✖ Declaration or statement expected - start: 75, end: 77

```

