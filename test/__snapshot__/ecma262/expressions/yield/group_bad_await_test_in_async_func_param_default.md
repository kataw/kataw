# Kataw parser test case

## Input

`````js
async function f(x=(await)=y){}
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
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "start": 14,
                "end": 16
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [
                    {
                        "kind": 281,
                        "ellipsisToken": null,
                        "left": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 17,
                            "end": 18
                        },
                        "optionalToken": null,
                        "type": null,
                        "right": {
                            "kind": 125,
                            "left": {
                                "kind": 121,
                                "expression": {
                                    "kind": 208,
                                    "awaitKeyword": {
                                        "kind": 82196,
                                        "flags": 64,
                                        "start": 20,
                                        "end": 25
                                    },
                                    "expression": {
                                        "kind": 16637,
                                        "text": "",
                                        "rawText": "",
                                        "flags": 64,
                                        "start": 25,
                                        "end": 25
                                    },
                                    "flags": 32,
                                    "start": 20,
                                    "end": 25
                                },
                                "flags": 32,
                                "start": 19,
                                "end": 26
                            },
                            "operatorToken": {
                                "kind": 4125,
                                "flags": 96,
                                "start": 26,
                                "end": 27
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "y",
                                "rawText": "y",
                                "flags": 96,
                                "start": 27,
                                "end": 28
                            },
                            "flags": 32,
                            "start": 19,
                            "end": 28
                        },
                        "flags": 34,
                        "start": 17,
                        "end": 28
                    }
                ],
                "trailingComma": false,
                "flags": 34,
                "start": 17,
                "end": 28
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "start": 30,
                    "end": 30
                },
                "flags": 32,
                "start": 29,
                "end": 31
            },
            "returnType": null,
            "flags": 144,
            "start": 0,
            "end": 31
        }
    ],
    "isModule": false,
    "source": "async function f(x=(await)=y){}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 31
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ `await` expression cannot be used in function parameters - start: 20, end: 25
✖ Identifier expected - start: 25, end: 26
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 26, end: 27

```

