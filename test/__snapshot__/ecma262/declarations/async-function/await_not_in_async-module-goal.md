# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
async function f(x) { return x; }

f(await 1);
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
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 17,
                        "end": 18
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "start": 17,
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
                                "start": 21,
                                "end": 28
                            },
                            "expression": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 28,
                                "end": 30
                            },
                            "flags": 80,
                            "start": 21,
                            "end": 31
                        }
                    ],
                    "flags": 32,
                    "start": 21,
                    "end": 31
                },
                "flags": 32,
                "start": 19,
                "end": 33
            },
            "returnType": null,
            "flags": 144,
            "start": 0,
            "end": 33
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "f",
                    "rawText": "f",
                    "flags": 97,
                    "start": 33,
                    "end": 36
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 208,
                            "awaitKeyword": {
                                "kind": 82196,
                                "flags": 64,
                                "start": 37,
                                "end": 42
                            },
                            "expression": {
                                "kind": 201392130,
                                "text": 1,
                                "rawText": "1",
                                "flags": 96,
                                "start": 42,
                                "end": 44
                            },
                            "flags": 32,
                            "start": 37,
                            "end": 44
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 37,
                    "end": 44
                },
                "flags": 268435488,
                "start": 33,
                "end": 45
            },
            "flags": 16,
            "start": 33,
            "end": 46
        }
    ],
    "isModule": true,
    "source": "async function f(x) { return x; }\n\nf(await 1);",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 46
}
```

### Printed

```javascript

async function f(x) {
  return x;
}
f(
  await 1
);
```

### Diagnostics

```javascript
✔ No errors
```

