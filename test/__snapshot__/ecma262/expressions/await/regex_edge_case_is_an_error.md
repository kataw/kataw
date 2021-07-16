# Kataw parser test case

## Input

`````js
async function f(){ await foo
/foo/ }
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
                            "kind": 120,
                            "expression": {
                                "kind": 198,
                                "left": {
                                    "kind": 198,
                                    "left": {
                                        "kind": 208,
                                        "awaitKeyword": {
                                            "kind": 82196,
                                            "flags": 64,
                                            "transformFlags": 0,
                                            "start": 19,
                                            "end": 25
                                        },
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "foo",
                                            "rawText": "foo",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 25,
                                            "end": 29
                                        },
                                        "flags": 32,
                                        "transformFlags": 4096,
                                        "start": 19,
                                        "end": 29
                                    },
                                    "operatorToken": {
                                        "kind": 35640,
                                        "flags": 97,
                                        "transformFlags": 0,
                                        "start": 29,
                                        "end": 31
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "foo",
                                        "rawText": "foo",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 31,
                                        "end": 34
                                    },
                                    "flags": 33,
                                    "transformFlags": 5120,
                                    "start": 19,
                                    "end": 34
                                },
                                "operatorToken": {
                                    "kind": 35640,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 34,
                                    "end": 35
                                },
                                "right": {
                                    "kind": 16637,
                                    "text": "",
                                    "rawText": "",
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 35,
                                    "end": 35
                                },
                                "flags": 33,
                                "transformFlags": 5120,
                                "start": 19,
                                "end": 35
                            },
                            "flags": 16,
                            "transformFlags": 4096,
                            "start": 19,
                            "end": 35
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 19,
                    "end": 35
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 18,
                "end": 37
            },
            "returnType": null,
            "flags": 144,
            "transformFlags": 0,
            "start": 0,
            "end": 37
        }
    ],
    "isModule": false,
    "source": "async function f(){ await foo\n/foo/ }",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 37
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 35, end: 37

```

