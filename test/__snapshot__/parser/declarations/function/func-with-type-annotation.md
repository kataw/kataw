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

### Hybrid CST

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
                "text": "a",
                "rawText": "a",
                "flags": 768,
                "start": 8,
                "end": 10
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [
                    {
                        "kind": 215,
                        "ellipsisToken": null,
                        "binding": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 768,
                            "start": 19,
                            "end": 20
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 134234347,
                                "flags": 512,
                                "start": 21,
                                "end": 28
                            },
                            "flags": 0,
                            "start": 20,
                            "end": 28
                        },
                        "initializer": null,
                        "flags": 256,
                        "start": 19,
                        "end": 28
                    }
                ],
                "trailingComma": false,
                "flags": 256,
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
                                "flags": 1,
                                "start": 39,
                                "end": 48
                            },
                            "expression": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 768,
                                "start": 48,
                                "end": 50
                            },
                            "flags": 128,
                            "start": 1,
                            "end": 39
                        }
                    ],
                    "multiline": true,
                    "flags": 256,
                    "start": 39,
                    "end": 51
                },
                "flags": 256,
                "start": 37,
                "end": 53
            },
            "typeParameters": {
                "kind": 146,
                "types": [
                    {
                        "kind": 134234347,
                        "flags": 512,
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
                    "flags": 512,
                    "start": 30,
                    "end": 37
                },
                "flags": 0,
                "start": 29,
                "end": 37
            },
            "flags": 128,
            "start": 0,
            "end": 53
        }
    ],
    "isModule": false,
    "text": "function a<string>(x: string): string {\n  return x;\n}",
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
✔ No errors
```

