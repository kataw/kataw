# Kataw parser test case

## Input

`````js
function get() {}
  function* getData() {
    return yield get();
}
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
                "text": "get",
                "rawText": "get",
                "flags": 96,
                "start": 8,
                "end": 12
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 12,
                "end": 14
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "start": 16,
                    "end": 16
                },
                "flags": 32,
                "start": 14,
                "end": 17
            },
            "returnType": null,
            "flags": 16,
            "start": 0,
            "end": 17
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "start": 17,
                "end": 28
            },
            "asteriskToken": {
                "kind": 67143222,
                "flags": 64,
                "start": 28,
                "end": 29
            },
            "name": {
                "kind": 134299649,
                "text": "getData",
                "rawText": "getData",
                "flags": 96,
                "start": 29,
                "end": 37
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 37,
                "end": 39
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
                                "start": 41,
                                "end": 52
                            },
                            "expression": {
                                "kind": 229,
                                "yieldKeyword": {
                                    "kind": 8454253,
                                    "flags": 64,
                                    "start": 52,
                                    "end": 58
                                },
                                "delegate": false,
                                "asteriskToken": null,
                                "expression": {
                                    "kind": 131,
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "get",
                                        "rawText": "get",
                                        "flags": 96,
                                        "start": 58,
                                        "end": 62
                                    },
                                    "argumentList": {
                                        "kind": 256,
                                        "elements": [],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "start": 63,
                                        "end": 63
                                    },
                                    "flags": 268435488,
                                    "start": 58,
                                    "end": 64
                                },
                                "flags": 32,
                                "start": 52,
                                "end": 64
                            },
                            "flags": 81,
                            "start": 41,
                            "end": 65
                        }
                    ],
                    "flags": 33,
                    "start": 41,
                    "end": 65
                },
                "flags": 32,
                "start": 39,
                "end": 67
            },
            "returnType": null,
            "flags": 272,
            "start": 17,
            "end": 67
        }
    ],
    "isModule": false,
    "source": "function get() {}\n  function* getData() {\n    return yield get();\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 67
}
```

### Printed

```javascript

 function get() {
}, function* getData() {
return yield ;
} 
```

### Diagnostics

```javascript
✔ No errors
```

