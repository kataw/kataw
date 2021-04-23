# Kataw parser test case

## Input

`````js
async function f(){ async(await x); }
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
                "flags": 768,
                "start": 0,
                "end": 5
            },
            "functionKeyword": {
                "kind": 37822554,
                "flags": 768,
                "start": 5,
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
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 256,
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
                            "kind": 131,
                            "expression": {
                                "kind": 134299649,
                                "text": "async",
                                "rawText": "async",
                                "flags": 768,
                                "start": 19,
                                "end": 25
                            },
                            "argumentList": {
                                "kind": 256,
                                "elements": [
                                    {
                                        "kind": 208,
                                        "awaitToken": {
                                            "kind": 82032,
                                            "flags": 768,
                                            "start": 26,
                                            "end": 31
                                        },
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 768,
                                            "start": 31,
                                            "end": 33
                                        },
                                        "flags": 256,
                                        "start": 26,
                                        "end": 33
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 256,
                                "start": 19,
                                "end": 19
                            },
                            "flags": 256,
                            "start": 19,
                            "end": 34
                        },
                        {
                            "kind": 168,
                            "flags": 128,
                            "start": 34,
                            "end": 35
                        }
                    ],
                    "multiline": false,
                    "flags": 256,
                    "start": 19,
                    "end": 35
                },
                "flags": 256,
                "start": 18,
                "end": 37
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 1152,
            "start": 0,
            "end": 37
        }
    ],
    "isModule": false,
    "text": "async function f(){ async(await x); }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 37
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

