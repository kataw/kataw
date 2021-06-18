# Kataw parser test case

## Input

`````js
function foo(value: AOrString) {
  invariant(value instanceof B);
}
`````

## Options

### Parser Options

`````js
{ allowTypes : true }
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
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "foo",
                "rawText": "foo",
                "flags": 96,
                "start": 8,
                "end": 12
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [
                    {
                        "kind": 281,
                        "ellipsisToken": null,
                        "left": {
                            "kind": 134299649,
                            "text": "value",
                            "rawText": "value",
                            "flags": 96,
                            "start": 13,
                            "end": 18
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 144,
                                "name": {
                                    "kind": 134299649,
                                    "text": "AOrString",
                                    "rawText": "AOrString",
                                    "flags": 96,
                                    "start": 19,
                                    "end": 29
                                },
                                "typeParameters": null,
                                "flags": 2097152,
                                "start": 19,
                                "end": 29
                            },
                            "flags": 2097152,
                            "start": 19,
                            "end": 29
                        },
                        "right": null,
                        "flags": 32,
                        "start": 13,
                        "end": 29
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "start": 12,
                "end": 30
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
                                    "text": "invariant",
                                    "rawText": "invariant",
                                    "flags": 96,
                                    "start": 32,
                                    "end": 44
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [
                                        {
                                            "kind": 198,
                                            "left": {
                                                "kind": 134299649,
                                                "text": "value",
                                                "rawText": "value",
                                                "flags": 96,
                                                "start": 45,
                                                "end": 50
                                            },
                                            "operatorToken": {
                                                "kind": 4229173,
                                                "flags": 96,
                                                "start": 50,
                                                "end": 61
                                            },
                                            "right": {
                                                "kind": 134299649,
                                                "text": "B",
                                                "rawText": "B",
                                                "flags": 96,
                                                "start": 61,
                                                "end": 63
                                            },
                                            "flags": 32,
                                            "start": 45,
                                            "end": 63
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 45,
                                    "end": 63
                                },
                                "flags": 268435488,
                                "start": 32,
                                "end": 64
                            },
                            "flags": 16,
                            "start": 32,
                            "end": 65
                        }
                    ],
                    "flags": 33,
                    "start": 32,
                    "end": 65
                },
                "flags": 32,
                "start": 30,
                "end": 67
            },
            "returnType": null,
            "flags": 16,
            "start": 0,
            "end": 67
        }
    ],
    "isModule": false,
    "source": "function foo(value: AOrString) {\n  invariant(value instanceof B);\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 67
}
```

### Printed

```javascript

function foo() {
  invariant(value inctanceof B);
}
```

### Diagnostics

```javascript
✔ No errors
```

