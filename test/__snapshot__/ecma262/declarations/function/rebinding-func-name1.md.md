# Kataw parser test case

## Input

`````js
function f(){ let f }
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
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "start": 8,
                "end": 10
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 11,
                "end": 11
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 162,
                            "lexicalKeyword": {
                                "kind": 41951307,
                                "flags": 80,
                                "start": 13,
                                "end": 17
                            },
                            "binding": {
                                "kind": 151,
                                "bindingList": [
                                    {
                                        "kind": 190,
                                        "binding": {
                                            "kind": 134299649,
                                            "text": "f",
                                            "rawText": "f",
                                            "flags": 96,
                                            "start": 17,
                                            "end": 19
                                        },
                                        "type": null,
                                        "initializer": null,
                                        "flags": 16,
                                        "start": 17,
                                        "end": 19
                                    }
                                ],
                                "flags": 16,
                                "start": 17,
                                "end": 19
                            },
                            "flags": 33554448,
                            "start": 13,
                            "end": 19
                        }
                    ],
                    "flags": 32,
                    "start": 13,
                    "end": 19
                },
                "flags": 32,
                "start": 12,
                "end": 21
            },
            "returnType": null,
            "flags": 16,
            "start": 0,
            "end": 21
        }
    ],
    "isModule": false,
    "source": "function f(){ let f }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 21
}
```

### Printed

```javascript

function f() {
  let f;
}
```

### Diagnostics

```javascript
✔ No errors
```

