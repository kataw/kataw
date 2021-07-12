# Kataw parser test case

## Input

`````js
function *g(){ (x = {[yield]: 1}) => z }
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
            "asteriskToken": {
                "kind": 67143222,
                "flags": 64,
                "start": 8,
                "end": 10
            },
            "name": {
                "kind": 134299649,
                "text": "g",
                "rawText": "g",
                "flags": 96,
                "start": 10,
                "end": 11
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 12,
                "end": 12
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
                                "kind": 271,
                                "asyncKeyword": null,
                                "typeParameters": null,
                                "arrowPatameterList": {
                                    "kind": 342,
                                    "parameters": [
                                        {
                                            "kind": 281,
                                            "ellipsisToken": null,
                                            "left": {
                                                "kind": 134299649,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 96,
                                                "start": 16,
                                                "end": 17
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "right": {
                                                "kind": 220,
                                                "propertyList": {
                                                    "kind": 218,
                                                    "properties": [
                                                        {
                                                            "kind": 219,
                                                            "asteriskToken": null,
                                                            "left": {
                                                                "kind": 194,
                                                                "expression": {
                                                                    "kind": 229,
                                                                    "yieldKeyword": {
                                                                        "kind": 8454253,
                                                                        "flags": 64,
                                                                        "start": 22,
                                                                        "end": 27
                                                                    },
                                                                    "delegate": false,
                                                                    "asteriskToken": null,
                                                                    "expression": null,
                                                                    "flags": 32,
                                                                    "start": 22,
                                                                    "end": 27
                                                                },
                                                                "flags": 32,
                                                                "start": 21,
                                                                "end": 28
                                                            },
                                                            "right": {
                                                                "kind": 201392130,
                                                                "text": 1,
                                                                "rawText": "1",
                                                                "flags": 96,
                                                                "start": 29,
                                                                "end": 31
                                                            },
                                                            "flags": 32,
                                                            "start": 21,
                                                            "end": 31
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "flags": 16,
                                                    "start": 21,
                                                    "end": 31
                                                },
                                                "flags": 48,
                                                "start": 19,
                                                "end": 32
                                            },
                                            "flags": 32,
                                            "start": 14,
                                            "end": 32
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 2,
                                    "start": 16,
                                    "end": 33
                                },
                                "returnType": null,
                                "arrowToken": {
                                    "kind": 10,
                                    "flags": 64,
                                    "start": 33,
                                    "end": 36
                                },
                                "contents": {
                                    "kind": 134299649,
                                    "text": "z",
                                    "rawText": "z",
                                    "flags": 96,
                                    "start": 36,
                                    "end": 38
                                },
                                "flags": 34,
                                "start": 14,
                                "end": 38
                            },
                            "flags": 16,
                            "start": 14,
                            "end": 38
                        }
                    ],
                    "flags": 32,
                    "start": 14,
                    "end": 38
                },
                "flags": 32,
                "start": 13,
                "end": 40
            },
            "returnType": null,
            "flags": 272,
            "start": 0,
            "end": 40
        }
    ],
    "isModule": false,
    "source": "function *g(){ (x = {[yield]: 1}) => z }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 40
}
```

### Printed

```javascript

  function* g() {
    (x = { [yield ]: 1 }) => z;
  }

```

### Diagnostics

```javascript
✔ No errors
```

