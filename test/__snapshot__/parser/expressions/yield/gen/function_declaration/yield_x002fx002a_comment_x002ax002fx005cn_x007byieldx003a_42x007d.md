# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: function declaration
> :: case: yield /* comment */\n {yield: 42}
## Input

`````js
function not_gen() { yield /* comment */\n {yield: 42} }}
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
                "flags": 0,
                "start": 0,
                "end": 8
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "not_gen",
                "rawText": "not_gen",
                "flags": 96,
                "start": 8,
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
                                "kind": 134299649,
                                "text": "yield",
                                "rawText": "yield",
                                "flags": 96,
                                "start": 20,
                                "end": 26
                            },
                            "flags": 16,
                            "start": 20,
                            "end": 26
                        }
                    ],
                    "flags": 32,
                    "start": 20,
                    "end": 26
                },
                "flags": 32,
                "start": 18,
                "end": 26
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 16,
            "start": 0,
            "end": 26
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "n",
                "rawText": "n",
                "flags": 96,
                "start": 41,
                "end": 42
            },
            "flags": 16,
            "start": 41,
            "end": 42
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [
                    {
                        "kind": 163,
                        "label": {
                            "kind": 134299649,
                            "text": "yield",
                            "rawText": "yield",
                            "flags": 96,
                            "start": 44,
                            "end": 49
                        },
                        "labels": [
                            {
                                "kind": 256,
                                "label": "yield",
                                "iterationStatement": false,
                                "flags": 16,
                                "start": 44,
                                "end": 49
                            }
                        ],
                        "colonToken": {
                            "kind": 21,
                            "flags": 0,
                            "start": 49,
                            "end": 50
                        },
                        "statement": {
                            "kind": 120,
                            "expression": {
                                "kind": 201392130,
                                "text": 42,
                                "rawText": "42",
                                "flags": 96,
                                "start": 50,
                                "end": 53
                            },
                            "flags": 16,
                            "start": 50,
                            "end": 53
                        },
                        "flags": 16,
                        "start": 44,
                        "end": 53
                    }
                ],
                "flags": 16,
                "start": 44,
                "end": 53
            },
            "flags": 16,
            "start": 42,
            "end": 54
        }
    ],
    "isModule": false,
    "source": "function not_gen() { yield /* comment */\\n {yield: 42} }}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 57
}
```

### Printed

```javascript

 /* comment */
n;
{
  yield: 42;
}
```

### Diagnostics

```javascript
✖ Invalid hexadecimal escape sequence - start: 26, end: 40
✖ Expected a `;` - start: 26, end: 41
✖ Expected a `;` - start: 42, end: 44
✖ Declaration or statement expected - start: 54, end: 56
✖ Declaration or statement expected - start: 56, end: 57

```

