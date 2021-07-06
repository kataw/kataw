# Kataw parser test case

## Input

`````js
async function f(){ foo: for await (x of y) continue foo; }
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
                            "kind": 163,
                            "label": {
                                "kind": 134299649,
                                "text": "foo",
                                "rawText": "foo",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 19,
                                "end": 23
                            },
                            "colonToken": {
                                "kind": 21,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 23,
                                "end": 24
                            },
                            "statement": {
                                "kind": 167,
                                "forKeyword": {
                                    "kind": 37757017,
                                    "flags": 80,
                                    "transformFlags": 0,
                                    "start": 24,
                                    "end": 28
                                },
                                "awaitKeyword": {
                                    "kind": 82196,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 28,
                                    "end": 34
                                },
                                "initializer": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 36,
                                    "end": 37
                                },
                                "ofKeyword": {
                                    "kind": 16793717,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 37,
                                    "end": 40
                                },
                                "expression": {
                                    "kind": 134299649,
                                    "text": "y",
                                    "rawText": "y",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 40,
                                    "end": 42
                                },
                                "statement": {
                                    "kind": 172,
                                    "continueKeyword": {
                                        "kind": 37757009,
                                        "flags": 80,
                                        "transformFlags": 0,
                                        "start": 43,
                                        "end": 52
                                    },
                                    "label": {
                                        "kind": 134299649,
                                        "text": "foo",
                                        "rawText": "foo",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 52,
                                        "end": 56
                                    },
                                    "flags": 16,
                                    "transformFlags": 0,
                                    "start": 43,
                                    "end": 57
                                },
                                "flags": 80,
                                "transformFlags": 0,
                                "start": 24,
                                "end": 57
                            },
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 19,
                            "end": 57
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 19,
                    "end": 57
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 18,
                "end": 59
            },
            "returnType": null,
            "flags": 144,
            "transformFlags": 0,
            "start": 0,
            "end": 59
        }
    ],
    "isModule": false,
    "source": "async function f(){ foo: for await (x of y) continue foo; }",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 59
}
```

### Printed

```javascript

async function f() {
  foo:  for await (x of y) continue  foo;
}
```

### Diagnostics

```javascript
✔ No errors
```

