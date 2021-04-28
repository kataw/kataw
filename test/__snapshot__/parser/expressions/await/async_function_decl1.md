# Kataw parser test case

## Input

`````js
async function f(foo = await){}
`````

## Output

### Hybrid CST

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
                "flags": 0,
                "start": 512,
                "end": 5
            },
            "functionKeyword": {
                "kind": 37822554,
                "flags": 5,
                "start": 0,
                "end": 14
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 768,
                "start": 14,
                "end": 16
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [
                    {
                        "kind": 215,
                        "ellipsisToken": null,
                        "binding": {
                            "kind": 134299649,
                            "text": "foo",
                            "rawText": "foo",
                            "flags": 768,
                            "start": 17,
                            "end": 20
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 208,
                            "awaitToken": {
                                "kind": 82032,
                                "flags": 22,
                                "start": 0,
                                "end": 28
                            },
                            "expression": {
                                "kind": 16637,
                                "text": "",
                                "flags": 12,
                                "start": 28,
                                "end": 28
                            },
                            "flags": 256,
                            "start": 22,
                            "end": 28
                        },
                        "flags": 258,
                        "start": 17,
                        "end": 28
                    }
                ],
                "trailingComma": false,
                "flags": 258,
                "start": 16,
                "end": 29
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "multiline": false,
                    "flags": 256,
                    "start": 30,
                    "end": 30
                },
                "flags": 256,
                "start": 29,
                "end": 31
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 1152,
            "start": 0,
            "end": 31
        }
    ],
    "isModule": false,
    "text": "async function f(foo = await){}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 31
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Expression expected - start: 28, end: 29

```

