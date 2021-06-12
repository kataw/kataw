# Kataw parser test case

## Input

`````js
function* f(){ yield
/foo }
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
            "generatorToken": {
                "kind": 67143222,
                "flags": 64,
                "start": 8,
                "end": 9
            },
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "start": 9,
                "end": 11
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 32,
                "start": 11,
                "end": 13
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
                                "kind": 229,
                                "yieldKeyword": {
                                    "kind": 8454253,
                                    "flags": 64,
                                    "start": 14,
                                    "end": 20
                                },
                                "delegate": false,
                                "asteriskToken": null,
                                "expression": {
                                    "kind": 221,
                                    "text": "/foo }",
                                    "flags": 96,
                                    "start": 20,
                                    "end": 27
                                },
                                "flags": 32,
                                "start": 14,
                                "end": 27
                            },
                            "flags": 16,
                            "start": 14,
                            "end": 27
                        }
                    ],
                    "flags": 32,
                    "start": 14,
                    "end": 27
                },
                "flags": 32,
                "start": 13,
                "end": 27
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 272,
            "start": 0,
            "end": 27
        }
    ],
    "isModule": false,
    "source": "function* f(){ yield\n/foo }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 27
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Unterminated regular expression - start: 20, end: 27
✖ The parser expected to find a '}' to match the '{' token here - start: 21, end: 27

```

