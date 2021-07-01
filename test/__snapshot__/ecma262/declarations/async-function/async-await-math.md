# Kataw parser test case

## Input

`````js
async function foo(a, b) { await a + await b };
`````

## Options

### Parser Options

`````js
{ allowTypes : true }
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
                "text": "foo",
                "rawText": "foo",
                "flags": 96,
                "start": 14,
                "end": 18
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [
                    {
                        "kind": 134299649,
                        "text": "a",
                        "rawText": "a",
                        "flags": 96,
                        "start": 19,
                        "end": 20
                    },
                    {
                        "kind": 134299649,
                        "text": "b",
                        "rawText": "b",
                        "flags": 96,
                        "start": 21,
                        "end": 23
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "start": 19,
                "end": 23
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
                                "kind": 198,
                                "left": {
                                    "kind": 208,
                                    "awaitKeyword": {
                                        "kind": 82196,
                                        "flags": 64,
                                        "start": 26,
                                        "end": 32
                                    },
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 96,
                                        "start": 32,
                                        "end": 34
                                    },
                                    "flags": 32,
                                    "start": 26,
                                    "end": 34
                                },
                                "operatorToken": {
                                    "kind": 99634,
                                    "flags": 96,
                                    "start": 34,
                                    "end": 36
                                },
                                "right": {
                                    "kind": 208,
                                    "awaitKeyword": {
                                        "kind": 82196,
                                        "flags": 64,
                                        "start": 36,
                                        "end": 42
                                    },
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "b",
                                        "rawText": "b",
                                        "flags": 96,
                                        "start": 42,
                                        "end": 44
                                    },
                                    "flags": 32,
                                    "start": 36,
                                    "end": 44
                                },
                                "flags": 32,
                                "start": 26,
                                "end": 44
                            },
                            "flags": 16,
                            "start": 26,
                            "end": 44
                        }
                    ],
                    "flags": 32,
                    "start": 26,
                    "end": 44
                },
                "flags": 32,
                "start": 24,
                "end": 46
            },
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
    "source": "async function foo(a, b) { await a + await b };",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 47
}
```

### Printed

```javascript

async function foo(a, b) {
  await a + await b;
}
;

```

### Diagnostics

```javascript
✔ No errors
```

