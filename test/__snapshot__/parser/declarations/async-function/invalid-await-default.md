# Kataw parser test case

## Input

`````js
async function wrap() {
  (a = await b) => a
};
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
                "text": "wrap",
                "rawText": "wrap",
                "flags": 96,
                "start": 14,
                "end": 19
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 32,
                "start": 19,
                "end": 21
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
                                "arrowToken": {
                                    "kind": 10,
                                    "flags": 64,
                                    "start": 39,
                                    "end": 42
                                },
                                "typeParameters": null,
                                "parameters": [
                                    {
                                        "kind": 281,
                                        "ellipsisToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 96,
                                            "start": 27,
                                            "end": 28
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "right": {
                                            "kind": 208,
                                            "awaitKeyword": {
                                                "kind": 82196,
                                                "flags": 64,
                                                "start": 30,
                                                "end": 36
                                            },
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "b",
                                                "rawText": "b",
                                                "flags": 96,
                                                "start": 36,
                                                "end": 38
                                            },
                                            "flags": 32,
                                            "start": 30,
                                            "end": 38
                                        },
                                        "flags": 32,
                                        "start": 23,
                                        "end": 38
                                    }
                                ],
                                "asyncKeyword": null,
                                "returnType": null,
                                "contents": {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 96,
                                    "start": 42,
                                    "end": 44
                                },
                                "flags": 34,
                                "start": 23,
                                "end": 44
                            },
                            "flags": 16,
                            "start": 23,
                            "end": 44
                        }
                    ],
                    "flags": 33,
                    "start": 23,
                    "end": 44
                },
                "flags": 32,
                "start": 21,
                "end": 46
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 144,
            "start": 0,
            "end": 46
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 46,
            "end": 47
        }
    ],
    "isModule": false,
    "source": "async function wrap() {\n  (a = await b) => a\n};",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 47
}
```

### Printed

```javascript

async function wrap() {
  (a = await b) =>  a;
}

```

### Diagnostics

```javascript
✔ No errors
```

