# Auto-generated test cases ( Kataw )
- Regenerated: 2021-05-28
- From: d
- Path: e
> :: test: simple
> :: case: async function f(){ await foo\n/foo/g }
## Input

`````js
async function f(){ await foo\n/foo/g }
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
                            "kind": 120,
                            "expression": {
                                "kind": 208,
                                "awaitKeyword": {
                                    "kind": 90224,
                                    "flags": 0,
                                    "start": 19,
                                    "end": 25
                                },
                                "expression": {
                                    "kind": 134299649,
                                    "text": "foo",
                                    "rawText": "foo",
                                    "flags": 96,
                                    "start": 25,
                                    "end": 29
                                },
                                "flags": 32,
                                "start": 19,
                                "end": 29
                            },
                            "flags": 16,
                            "start": 19,
                            "end": 29
                        }
                    ],
                    "flags": 32,
                    "start": 19,
                    "end": 29
                },
                "flags": 32,
                "start": 18,
                "end": 29
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 144,
            "start": 0,
            "end": 29
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 198,
                    "left": {
                        "kind": 134299649,
                        "text": "n",
                        "rawText": "n",
                        "flags": 96,
                        "start": 30,
                        "end": 31
                    },
                    "operatorToken": {
                        "kind": 35640,
                        "flags": 64,
                        "start": 31,
                        "end": 32
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "foo",
                        "rawText": "foo",
                        "flags": 96,
                        "start": 32,
                        "end": 35
                    },
                    "flags": 32,
                    "start": 30,
                    "end": 35
                },
                "operatorToken": {
                    "kind": 35640,
                    "flags": 64,
                    "start": 35,
                    "end": 36
                },
                "right": {
                    "kind": 134299649,
                    "text": "g",
                    "rawText": "g",
                    "flags": 96,
                    "start": 36,
                    "end": 37
                },
                "flags": 32,
                "start": 30,
                "end": 37
            },
            "flags": 16,
            "start": 30,
            "end": 37
        }
    ],
    "isModule": false,
    "source": "async function f(){ await foo\\n/foo/g }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 39
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Invalid hexadecimal escape sequence - start: 25, end: 29
✖ Invalid hexadecimal escape sequence - start: 29, end: 29
✖ Expected a `;` - start: 29, end: 30
✖ Declaration or statement expected - start: 37, end: 39

```

