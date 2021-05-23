# Kataw parser test case

## Input

`````js
async function f(){    (fail = class A extends await foo {}) => fail    }
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
                                "kind": 121,
                                "expression": {
                                    "kind": 132,
                                    "flags": 32,
                                    "start": 19,
                                    "end": 56
                                },
                                "flags": 32,
                                "start": 19,
                                "end": 56
                            },
                            "flags": 16,
                            "start": 19,
                            "end": 56
                        },
                        {
                            "kind": 124,
                            "block": {
                                "kind": 249,
                                "statements": [],
                                "flags": 16,
                                "start": 58,
                                "end": 58
                            },
                            "flags": 16,
                            "start": 56,
                            "end": 59
                        }
                    ],
                    "flags": 32,
                    "start": 19,
                    "end": 59
                },
                "flags": 32,
                "start": 18,
                "end": 59
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 144,
            "start": 0,
            "end": 59
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "fail",
                "rawText": "fail",
                "flags": 96,
                "start": 63,
                "end": 68
            },
            "flags": 16,
            "start": 63,
            "end": 68
        }
    ],
    "isModule": false,
    "source": "async function f(){    (fail = class A extends await foo {}) => fail    }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 73
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ 'await' cannot be used as an identifier here - start: 46, end: 52
✖ Missing an opening brace - '{ - start: 52, end: 56
✖ Expression expected - start: 56, end: 58
✖ The parser expected to find a '}' to match the '{' token here - start: 59, end: 60
✖ Declaration or statement expected - start: 60, end: 63
✖ Declaration or statement expected - start: 68, end: 73

```

