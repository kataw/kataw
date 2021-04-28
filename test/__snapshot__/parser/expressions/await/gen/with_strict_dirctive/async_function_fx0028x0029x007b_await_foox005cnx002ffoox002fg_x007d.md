# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: async function f(){ await foo\n/foo/g }
## Input

`````js
'use strict'; async function f(){ await foo\n/foo/g }
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [
        {
            "kind": 201392131,
            "text": "use strict",
            "rawText": "use strict",
            "flags": 67109632,
            "start": 0,
            "end": 12
        }
    ],
    "statements": [
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": {
                "kind": 82031,
                "flags": 768,
                "start": 13,
                "end": 19
            },
            "functionKeyword": {
                "kind": 37822554,
                "flags": 768,
                "start": 19,
                "end": 28
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 768,
                "start": 28,
                "end": 30
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 256,
                "start": 30,
                "end": 32
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
                                "awaitToken": {
                                    "kind": 82032,
                                    "flags": 768,
                                    "start": 33,
                                    "end": 39
                                },
                                "expression": {
                                    "kind": 134299649,
                                    "text": "foo",
                                    "rawText": "foo",
                                    "flags": 768,
                                    "start": 39,
                                    "end": 43
                                },
                                "flags": 256,
                                "start": 33,
                                "end": 43
                            },
                            "flags": 128,
                            "start": 33,
                            "end": 43
                        }
                    ],
                    "multiline": false,
                    "flags": 256,
                    "start": 33,
                    "end": 43
                },
                "flags": 256,
                "start": 32,
                "end": 43
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 1152,
            "start": 13,
            "end": 43
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
                        "flags": 768,
                        "start": 44,
                        "end": 45
                    },
                    "operatorToken": {
                        "kind": 35640,
                        "flags": 768,
                        "start": 45,
                        "end": 46
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "foo",
                        "rawText": "foo",
                        "flags": 768,
                        "start": 46,
                        "end": 49
                    },
                    "flags": 256,
                    "start": 44,
                    "end": 49
                },
                "operatorToken": {
                    "kind": 35640,
                    "flags": 768,
                    "start": 49,
                    "end": 50
                },
                "right": {
                    "kind": 134299649,
                    "text": "g",
                    "rawText": "g",
                    "flags": 768,
                    "start": 50,
                    "end": 51
                },
                "flags": 256,
                "start": 44,
                "end": 51
            },
            "flags": 128,
            "start": 44,
            "end": 51
        }
    ],
    "isModule": false,
    "text": "'use strict'; async function f(){ await foo\\n/foo/g }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 53
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Invalid hexadecimal escape sequence - start: 39, end: 43
✖ Invalid hexadecimal escape sequence - start: 43, end: 43
✖ Statement expected - start: 43, end: 44
✖ Statement expected - start: 51, end: 53

```

