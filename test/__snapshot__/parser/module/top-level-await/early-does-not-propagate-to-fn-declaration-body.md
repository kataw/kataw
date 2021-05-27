# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
function fn() { await 0; }
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
                "text": "fn",
                "rawText": "fn",
                "flags": 96,
                "start": 8,
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
                                "kind": 208,
                                "awaitKeyword": {
                                    "kind": 90224,
                                    "flags": 0,
                                    "start": 15,
                                    "end": 21
                                },
                                "expression": {
                                    "kind": 201392130,
                                    "text": 0,
                                    "rawText": "0",
                                    "flags": 96,
                                    "start": 21,
                                    "end": 23
                                },
                                "flags": 32,
                                "start": 15,
                                "end": 23
                            },
                            "flags": 16,
                            "start": 15,
                            "end": 24
                        }
                    ],
                    "flags": 32,
                    "start": 15,
                    "end": 24
                },
                "flags": 32,
                "start": 13,
                "end": 26
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 16,
            "start": 0,
            "end": 26
        }
    ],
    "isModule": true,
    "source": "function fn() { await 0; }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 26
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ 'await' is only allowed within async functions and at the top levels of modules - start: 15, end: 21

```

