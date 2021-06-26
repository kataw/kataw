# Kataw parser test case

## Input

`````js
function *g() { (x = x + foo(a, yield y)) => x; }
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
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "start": 0,
                "end": 8
            },
            "asteriskToken": {
                "kind": 67143222,
                "flags": 64,
                "start": 8,
                "end": 10
            },
            "name": {
                "kind": 134299649,
                "text": "g",
                "rawText": "g",
                "flags": 96,
                "start": 10,
                "end": 11
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 11,
                "end": 11
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 271,
                                "asyncKeyword": null,
                                "typeParameters": null,
                                "arrowPatameterList": {
                                    "kind": 342,
                                    "parameters": [
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
                                                "kind": 198,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": "x",
                                                    "rawText": "x",
                                                    "flags": 96,
                                                    "start": 20,
                                                    "end": 22
                                                },
                                                "operatorToken": {
                                                    "kind": 99634,
                                                    "flags": 96,
                                                    "start": 22,
                                                    "end": 24
                                                },
                                                "right": {
                                                    "kind": 131,
                                                    "expression": {
                                                        "kind": 134299649,
                                                        "text": "foo",
                                                        "rawText": "foo",
                                                        "flags": 96,
                                                        "start": 24,
                                                        "end": 28
                                                    },
                                                    "argumentList": {
                                                        "kind": 256,
                                                        "elements": [
                                                            {
                                                                "kind": 134299649,
                                                                "text": "a",
                                                                "rawText": "a",
                                                                "flags": 96,
                                                                "start": 29,
                                                                "end": 30
                                                            },
                                                            {
                                                                "kind": 229,
                                                                "yieldKeyword": {
                                                                    "kind": 8454253,
                                                                    "flags": 64,
                                                                    "start": 31,
                                                                    "end": 37
                                                                },
                                                                "delegate": false,
                                                                "asteriskToken": null,
                                                                "expression": {
                                                                    "kind": 134299649,
                                                                    "text": "y",
                                                                    "rawText": "y",
                                                                    "flags": 96,
                                                                    "start": 37,
                                                                    "end": 39
                                                                },
                                                                "flags": 32,
                                                                "start": 31,
                                                                "end": 39
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "flags": 32,
                                                        "start": 29,
                                                        "end": 39
                                                    },
                                                    "flags": 268435488,
                                                    "start": 24,
                                                    "end": 40
                                                },
                                                "flags": 32,
                                                "start": 20,
                                                "end": 40
                                            },
                                            "flags": 32,
                                            "start": 15,
                                            "end": 40
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 2,
                                    "start": 17,
                                    "end": 41
                                },
                                "returnType": null,
                                "arrowToken": {
                                    "kind": 10,
                                    "flags": 64,
                                    "start": 41,
                                    "end": 44
                                },
                                "contents": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 44,
                                    "end": 46
                                },
                                "flags": 34,
                                "start": 15,
                                "end": 46
                            },
                            "flags": 16,
                            "start": 15,
                            "end": 47
                        }
                    ],
                    "flags": 32,
                    "start": 15,
                    "end": 47
                },
                "flags": 32,
                "start": 13,
                "end": 49
            },
            "returnType": null,
            "flags": 272,
            "start": 0,
            "end": 49
        }
    ],
    "isModule": false,
    "source": "function *g() { (x = x + foo(a, yield y)) => x; }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 49
}
```

### Printed

```javascript

function * g() {
  () =>  x;
}
```

### Diagnostics

```javascript
✔ No errors
```

