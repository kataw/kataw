# Kataw parser test case

## Input

`````js
async function f(){  foo(await)  }
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
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 16,
                "end": 16
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
                                "kind": 131,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "foo",
                                    "rawText": "foo",
                                    "flags": 96,
                                    "start": 19,
                                    "end": 24
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [
                                        {
                                            "kind": 208,
                                            "awaitKeyword": {
                                                "kind": 82196,
                                                "flags": 64,
                                                "start": 25,
                                                "end": 30
                                            },
                                            "expression": {
                                                "kind": 16637,
                                                "text": "",
                                                "rawText": "",
                                                "flags": 64,
                                                "start": 30,
                                                "end": 30
                                            },
                                            "flags": 32,
                                            "start": 25,
                                            "end": 30
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 25,
                                    "end": 30
                                },
                                "flags": 268435488,
                                "start": 19,
                                "end": 31
                            },
                            "flags": 16,
                            "start": 19,
                            "end": 31
                        }
                    ],
                    "flags": 32,
                    "start": 19,
                    "end": 31
                },
                "flags": 32,
                "start": 18,
                "end": 34
            },
            "returnType": null,
            "flags": 144,
            "start": 0,
            "end": 34
        }
    ],
    "isModule": false,
    "source": "async function f(){  foo(await)  }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 34
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 30, end: 31

```

