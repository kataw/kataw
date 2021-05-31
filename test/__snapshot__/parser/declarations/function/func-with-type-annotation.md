# Kataw parser test case

## Input

`````js
function a<string>(x: string): string {
  return x;
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
                "text": "a",
                "rawText": "a",
                "flags": 96,
                "start": 8,
                "end": 10
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [
                    {
                        "kind": 281,
                        "ellipsisToken": null,
                        "left": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 19,
                            "end": 20
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 134234347,
                                "flags": 64,
                                "start": 21,
                                "end": 28
                            },
                            "flags": 0,
                            "start": 20,
                            "end": 28
                        },
                        "right": null,
                        "flags": 32,
                        "start": 19,
                        "end": 28
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "start": 18,
                "end": 29
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 161,
                            "returnKeyword": {
                                "kind": 37757022,
                                "flags": 81,
                                "start": 39,
                                "end": 48
                            },
                            "expression": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 48,
                                "end": 50
                            },
                            "flags": 16,
                            "start": 1,
                            "end": 39
                        }
                    ],
                    "flags": 33,
                    "start": 39,
                    "end": 51
                },
                "flags": 32,
                "start": 37,
                "end": 53
            },
            "typeParameters": {
                "kind": 265,
                "typeParameters": [
                    {
                        "kind": 146,
                        "name": {
                            "kind": 134299649,
                            "text": "string",
                            "rawText": "string",
                            "flags": 96,
                            "start": 11,
                            "end": 17
                        },
                        "type": null,
                        "defaultType": null,
                        "flags": 0,
                        "start": 11,
                        "end": 17
                    }
                ],
                "flags": 0,
                "start": 10,
                "end": 18
            },
            "returnType": {
                "kind": 139,
                "type": {
                    "kind": 134234347,
                    "flags": 64,
                    "start": 30,
                    "end": 37
                },
                "flags": 0,
                "start": 0,
                "end": 37
            },
            "flags": 16,
            "start": 0,
            "end": 53
        }
    ],
    "isModule": false,
    "source": "function a<string>(x: string): string {\n  return x;\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 53
}
```

### Printed

```javascript

function a(x) {
  return  x;
}
```

### Diagnostics

```javascript
✔ No errors
```

